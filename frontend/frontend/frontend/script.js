document.getElementById("claimButton").addEventListener("click", async () => {
    const messageElement = document.getElementById("message");
    messageElement.textContent = "Processing...";

    try {
        const response = await fetch("http://localhost:5000/api/coupons/claim", { method: "POST" });
        const data = await response.json();

        if (response.ok) {
            messageElement.textContent = `Success! Your coupon code: ${data.coupon}`;
            messageElement.style.color = "green";
        } else {
            messageElement.textContent = data.message;
            messageElement.style.color = "red";
        }
    } catch (error) {
        messageElement.textContent = "Error connecting to the server.";
    }
});
