import React from 'react';

const SeatCancel: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Seat Cancel</h1>
      <p style={styles.paragraph}>Your seat has been cancelled.</p>
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

export default SeatCancel;

