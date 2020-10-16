One last check regarding the stripe integration before we can start coding,
is that we need to go at the root of `e-commerce-starter`
project and add two variables on `.env` file:

```
PUBLISHABLE_KEY = pk_test_1234
SECRET_KEY = sk_test_1234
```

The publishable and the secret key can be found in the Stripe dashboard,
make sure to sign up for a Stripe account if you didn't already,
and navigate to the <ExternalLink href="http://dashboard.stripe.com">dashboard.stripe.com</ExternalLink> - make
sure that you are `Viewing test data`, if not, toggle it `on`.
Click on `Developers` and on the `API keys` as shown in the image below.

On the right, you will find the data for your publishable and secret keys.

| Tip: Don't reveal your keys, if you do so by accident, go on the right and click on `Roll key...`

![Stripe Dashboard](/assets/e-commerce-tutorial-nextjs-stripe/stripe-dashboard.png)

Now, copy the keys to the `.env` file, and run the `e-commerce-starter` project by running the `npm run dev`, and the project will be served in the `localhost:3000`

![Checkout page](/assets/e-commerce-tutorial-nextjs-stripe/checkout-page.png)

When clicking on the cart, and proceed to do the payment, this is the view we will get in `/checkout` page.
Here we have the checkout view, to proceed with the payment 🚀

Let's go and add the `Pay` functionality!

---

Install the packages below:

```jsx
npm install stripe @stripe/stripe-js @stripe/react-stripe-js axios --save
```

Now, head back to the code editor and open the `component/Layout.js`
file and add these changes:

```jsx
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(`${process.env.PUBLISHABLE_KEY}`);
```

Now, we have a stripe promise which resolves to stripe.js,
we have to find a way to inject that stripe.js object into the
rest of our Next.js components.

To do that, we will use the `Elements` provider from `react-stripe-js`
library, and wrap the `{props.children}` of each of our pages in the `Elements` provider:

```jsx
<Elements stripe={stripePromise}>{props.children}</Elements>
```

Lets do a quick check if it's everything working/compiling on `[localhost:3000](http://localhost:3000)`!

One thing is still missing, and that is the Card Input, lets add it right now 🙂

Navigate to the `components/CheckoutForm.js` file and import the Card Element like so:

```jsx
import { CardElement } from "@stripe/react-stripe-js";
```

Now, add the `CardElement` to the `CardElementContainer`

```jsx
<CardElementContainer>
  <CardElement />
</CardElementContainer>
```

You should see now a Card input!
Lets go and change the styles of the Card input by adding
the `options` prop to the `CardElement` and passing there the
`cardElementOpts` variable that was pre-build with the `e-commerce-starter`.

Whoa! 🚀 Now that we have the Card input set-up, one thing is
missing and that is the payment, we are not able to accept payments yet.

Head over to `components/CheckoutForm.js` to continue adding the payment functionality.

**The steps we will do are:**

1. Create a payment intent on the server
   1. One call to the stripe node library, to get the `client_secret` of that payment intent
2. Create a payment method
   1. To create a payment method, we will need a reference of stripe.js object which has the function to create the `payment method`
   2. When we create the `payment method` we will need a reference to the `CardElement` that we defined earlier.
3. Confirm the card payment

   1. We will combine the `payment method` id, and use the `client_secret` that we'll get in the first step.

1) Create a payment intent on the server

Now, we will use `axios` to make a `post` request to our backend.

```jsx
const { data: clientSecret } = await axios.post("/payment_intents", {
  amount: totalPrice * 100,
});

console.log("clientSecret:", clientSecret);
```

The `totalPrice` we are getting is from the `total` context,
that holds the total price of all the products that are on the `Cart`.
Whenever the price changes, it will end up into the `total` context and
triple down into our component `CheckoutForm.js`

Now, lets check what is happening on the server side,
navigate to `pages/api/payment_intents.js`, and see what's happening.
Check out the code snipped below:

`gist:AlbionaHoti/40a44f90354b16380515360ffd1c5b1b`

As you can see, for the `/payment_intents` endpoint, we have a simple handler.
We extract the `amount` from the request body,
we make a request to `stripe.paymentIntents.create`
sending the `amount` and the `currency`, and we return back the payment intents client secret.

Now, go back to Chrome and see what happens when we have the credit card number in the input 🚀
Note: Stripe provides test credit cards: for a default U.S. card `4242 4242 4242 4242`

In the console tab of developer tools, if there are no errors,
you'll see the `clientSecret` logged.

We will be using the `clientSecret` to confirm the card payment after we create the payment method!

2. Create a payment method

We'll use the `stripe` method: `stripe.createPaymentMethod` and providing the card type, the card which is the
`CardElement` from the `react-stripe-js` library, and the `billing_details` from our form.

```jsx
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// Add the reference to the elements object, using the useElements() hook
// and the reference to the stripe object, using the useStripe() hook

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async e => {
    //...
    const cardElement = elements.getElement(CardElement);

    // create the payment method:
    const paymentMethodReq = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: billingDetails,
    });

    console.log("paymentMethodReq: ", paymentMethodReq);
    //...
  };
};
```

Now lets head over to chrome and test 🙂

![Payment method Request](/assets/e-commerce-tutorial-nextjs-stripe/payment_method_req.png)

This is what we'll get from the `paymentMethodReq`,
it resolved to a `paymentMethod` object which has a
`paymentMethod` id which we'll going to use to confirm
the card payment 🎉

3. Confirm the card payment

Now, we'll confirm the card payment by using the `confirmCardPayment`
stripe method in which we will provide the `paymentMethod.id` we got earlier.
Add the following snippet on `CheckoutForm.js` file:

```jsx
const confirmCardPayment = await stripe.confirmCardPayment(clientSecret, {
  payment_method: paymentMethodReq.paymentMethod.id,
});

console.log("confirmCardPayment: ", confirmCardPayment);
```

Now, go ahead at `[localhost:3000](http://localhost:3000)` and add
some products to the cart, and hit `pay` , check on the console
log to find the below result:

![Confirm Payment Method](/assets/e-commerce-tutorial-nextjs-stripe/payment_intent.png)

We got the `paymentIntent` id, and the `status` which is `succeeded`.

So far, we successfully created a functional payments integration with Stripe 🎉

![https://media.giphy.com/media/TdfyKrN7HGTIY/giphy.gif](https://media.giphy.com/media/TdfyKrN7HGTIY/giphy.gif)

Check out the below snippet, to get the full code for the `CheckoutForm.js` file:

`gist:/AlbionaHoti/1c3a724ce96a1e63177a2e8cbbc490e2`

# Conclusion
