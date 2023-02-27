// domain/.netlify/functions/create-payment-intent

// get .env file and stripe secret key
require("dotenv").config();
const stripe = require("stripe")(
  process.env.REACT_APP_STRIPE_SECRET_KEY as string
);

exports.handler = async function (event, context) {
  if (event.body) {
    const { shipping, totalAmount } = JSON.parse(event.body);

    // calculate the total amount for the order
    const calculateOrderAmount = (): number => {
      return shipping + totalAmount;
    };

    // try/catch send the total amount to stripe
    // return status code 200 and a stringified client secret
    // catch status code 500 and a stringified error message
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: "usd",
      });

      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: error.message }),
      };
    }
  }
  return {
    statusCode: 200,
    body: "Create Payment Intent",
  };
};
