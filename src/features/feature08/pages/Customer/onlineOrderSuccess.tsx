import React from 'react';

const OnlineOrderSuccess: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>OnlineOrder Success</h1>
      <p style={styles.paragraph}>Your OnlineOrder has been paid.</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
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

export default OnlineOrderSuccess;

