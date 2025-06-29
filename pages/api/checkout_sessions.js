// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       // Create Checkout Sessions from body params.
//       const session = await stripe.checkout.sessions.create({
//         line_items: [
//             {
//               price_data: {
//                 currency: 'inr',
//                 product_data: {
//                   name: 'Your Product Name',
//                 },
//                 unit_amount: 240000, // Amount in cents, for $12.00
//               },
//               quantity: 1,
//             },
//           ],
          
//         mode: 'payment',
//         success_url: `${req.headers.origin}/profile/?success=true`,
//         cancel_url: `${req.headers.origin}/profile/?canceled=true`,
//       });
//       res.redirect(303, session.url);
//     } catch (err) {
//       res.status(err.statusCode || 500).json(err.message);
//     }
//   } else {
//     res.setHeader('Allow', 'POST');
//     res.status(405).end('Method Not Allowed');
//   }
// }

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: 'usd', // For exports, non-INR
              product_data: {
                name: 'Premium Membership',
                description: 'Access to all premium features for 1 year',
              },
              unit_amount: 240000, // $2400 USD = 2400 * 100
            },
            quantity: 1,
          },
        ],
        mode: 'payment',

        // ✅ Mandatory for export compliance
        billing_address_collection: 'required',

        // Optional, but helpful for digital goods
        customer_email: req.body.email,

        // ✅ Collect name & address explicitly
        customer_creation: 'always',

        success_url: `${req.headers.origin}/profile/?success=true`,
        cancel_url: `${req.headers.origin}/profile/?canceled=true`,
      });

      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json({ error: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
