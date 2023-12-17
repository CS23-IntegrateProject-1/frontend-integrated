import React from 'react';

const CheckoutSuccess: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Checkout Success</h1>
      <p style={styles.paragraph}>Your checkout has been a success.</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50vh',
  },
  heading: {
    fontSize: '2em', 
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '1.5em',
  },
};

export default CheckoutSuccess;

