const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    handlePostRequest(req, res);
  } else {
    handleInvalidMethod(res);
  }
}

async function handlePostRequest(req, res) {
  try {
    const session = await createCheckoutSession(req);
    res.redirect(303, session.url);
  } catch (err) {
    res.status(err.statusCode || 500).json({ error: err.message });
  }
}

function handleInvalidMethod(res) {
  res.setHeader('Allow', 'POST');
  res.status(405).end('Method Not Allowed');
}

async function createCheckoutSession(req) {
  return await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Premium Membership',
            description: 'Access to all premium features for 1 year',
          },
          unit_amount: 240000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    billing_address_collection: 'required',
    customer_email: req.body.email,
    customer_creation: 'always',
    success_url: `${req.headers.origin}/profile/?success=true`,
    cancel_url: `${req.headers.origin}/profile/?canceled=true`,
  });
}