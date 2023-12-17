// PayButton.tsx
import React, { useState } from 'react';

interface PayButtonProps {
  cartItems: any[]; // Update the type based on your actual data structure
}

const PayButton: React.FC<PayButtonProps> = ({ cartItems }) => {
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);

  const handlePayNow = async () => {
    try {
      const response = await fetch('http://localhost:8080/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cartItems }),
      });

      if (response.ok) {
        const data = await response.json();
        setCheckoutUrl(data.url);
      } else {
        console.error('Failed to initiate checkout');
      }
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  return (
    <div>
      <button onClick={handlePayNow}>Pay Now</button>
      {checkoutUrl && <p>Redirecting to payment page...</p>}
      {checkoutUrl && <iframe title="Stripe Checkout" src={checkoutUrl} width="600" height="800" />}
    </div>
  );
};

export default PayButton;
