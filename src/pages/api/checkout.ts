import { stripe } from "@/lib/stripe";
import { GetServerSideProps, NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const {priceID} = req.body;
    const success_url = `${process.env.NEXT_URL}/success/?session_id={CHECKOUT_SESSION_ID}`;
    const cancel_url = `${process.env.NEXT_URL}/`;

    if(req.method !== "POST"){
        return res.status(405).json({
            error: "Method not allowed"
        })
    }

    if(!priceID){
        return res.status(400).json({
            error: "Missing priceID"
        })
    }

    const session = await stripe.checkout.sessions.create({
        success_url: success_url,
        cancel_url: cancel_url,
        mode: "subscription",
        line_items: [{
            price: priceID,
            quantity: 1
        }]
    })


    return res.status(201).json({
        url: session.url
    })
}
