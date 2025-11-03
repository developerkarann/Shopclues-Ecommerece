const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const handlePayment = async ({totalAmount}) => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }

    // Create order on backend
    const orderResponse = await fetch(`${import.meta.env.VITE_SERVER}/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 10000 }), // amount in rupees
    });

    const data = await orderResponse.json();

    if (!data.success) return alert("Failed to create order");

    const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: data.order.amount,
        currency: "INR",
        name: "Your Store Name",
        description: "Test Transaction",
        order_id: data.order.id,
        handler: async function (response) {
            const verifyResponse = await fetch(`${import.meta.env.VITE_SERVER}/verify-payment`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(response),
            });
            const verifyData = await verifyResponse.json();

            if (verifyData.success) {
                alert("Payment Successful!");
                // Update order status in DB
            } else {
                alert("Payment verification failed");
            }
        },
        prefill: {
            name: "Jaana",
            email: "jaana@example.com",
            contact: "9999999999",
        },
        theme: {
            color: "#3399cc",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
};

export default handlePayment