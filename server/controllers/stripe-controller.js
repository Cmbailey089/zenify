//require("dotenv").config()
//const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

module.exports = {
    async createCheckoutSession(req, res){
        try{
            /*
            req.body structure:

            {
                items{
                    name: String,
                    priceInCents: Int,
                    count: Int 
                }
            }
            */
            const session = await stripe.checkout.sessions.create({
                payment_method_types:['card'],
                mode: 'payment',
                line_items: req.body.items.map(item=>{
                    return{
                        price_data:{
                            currency:"usd",
                            product_data:{
                                name: item.name
                            },
                            unit_amount: item.priceInCents
                        },
                        quantity: item.count
                    }
                }),
                success_url: `${process.env.SERVER_URL}`,
                cancel_url: `${process.env.SERVER_URL}`
            })
            res.status(201).json(session)
        }catch(err){
            console.log(err)
            res.status(500).json(err)
        }
    }
}