import { stripe } from "@/lib/stripe";
import { ImageContainer, SuccessContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

interface SuccessProps {
    custumerName: string;
    product: {
        name: string;
        imageURL: string;
    }
}

export default function Success({custumerName, product}: SuccessProps) {
    return (
        <>
            <Head>
                Compra efetuada | Ignite Shop
                <meta name="robots" content="noindex" />
            </Head>
            <SuccessContainer>
                <h1>
                    Compra efetuada com sucesso!
                </h1>
                    <ImageContainer>

                        <Image 
                            src={product.imageURL}
                            alt={product.name}
                            width={120}
                            height={120}
                        />
                    </ImageContainer>

                <p>
                    Uhuul, <strong>{custumerName}</strong> sua camisa <strong>{product.name}</strong> 
                    já está a caminho!
                </p>
                <Link href="/">
                    Voltar para a home
                </Link>
            </SuccessContainer>
        </>
    )
}



export const getServerSideProps: GetServerSideProps = async ({query}) => {
    const session_id = query.session_id as string;

    if(!session_id){
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }

    const session = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ["line_items", "line_items.data.price.product"]
    });

    const custumerName = session?.customer_details?.name;
    const product = session?.line_items?.data[0]?.price?.product as Stripe.Product;


    return {
        props: {
            custumerName,
            product: {
                name: product.name,
                imageURL: product.images[0],
            }
        }
    }
}