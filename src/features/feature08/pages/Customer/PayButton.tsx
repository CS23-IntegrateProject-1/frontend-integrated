// PayButton.tsx
import React, { useState } from 'react';

interface PayButtonProps {
  cartItems: unknown[]; // Update the type based on your actual data structure
}

export const PayButton: React.FC<PayButtonProps> = ({ cartItems }) => {
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
      
        if (!response.ok) {
          console.error('Failed to initiate checkout:', response.statusText);
        } else {
          const data = await response.json();
          setCheckoutUrl(data.url);
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
