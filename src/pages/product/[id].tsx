import { stripe } from "@/lib/stripe"
import { ImageContainer, ProductContainer, ProductsDetailsContainer } from "@/styles/pages/product"
import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import Stripe from "stripe"

interface ProductProps {
    product: {
        id: string;
        name: string;
        price: string;
        image: string;
        description: string;
        default_price: string;
    }
}



export default function Product({product}: ProductProps){
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

    const {isFallback} = useRouter()

    async function handleCheckout(){
        try {
            setIsCreatingCheckoutSession(true)
            const response = await axios.post("/api/checkout", {
                priceID: product.default_price
            })
            const {url} = response.data

            window.location.href = url
        } catch (error) {
            setIsCreatingCheckoutSession(false)
            alert("falha no checkout")
        }
    }

    if(isFallback){
        return <p>Carregando...</p>
    }

    return (
        <>
            <Head>
                {product.name} | Ignite Shop
            </Head>
            <ProductContainer>
                <ImageContainer>
                    <Image 
                        src={product.image}
                        alt={product.name}
                        width={520}
                        height={520}
                    />
                </ImageContainer>
                <ProductsDetailsContainer>
                    <h1>{product.name}</h1>
                    <span>{product.price}</span>
                    <p>
                        {product.description}
                    </p>
                    <button disabled={isCreatingCheckoutSession} onClick={handleCheckout}>Comprar agora</button>
                </ProductsDetailsContainer>
            </ProductContainer>
        </>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: [
            {
                params: {
                    id: 'prod_NV7HNc2yqtvfHc'
                }
            }
        ],
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<any, { id: string}> = async ({params}) => {
    const paramsId = params?.id!

    const product = await stripe.products.retrieve(paramsId, {
        expand: ['default_price']
    })

    const price = product.default_price as Stripe.Price

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                price: new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                    }).format(price.unit_amount as number / 100),
                image: product.images[0],
                description: product.description,
                default_price: price.id
            }
        },
        revalidate: 60 * 60 * 1 // 1 hours
    }
}