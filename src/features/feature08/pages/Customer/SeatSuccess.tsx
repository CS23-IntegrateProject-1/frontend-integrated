import React, { useEffect } from 'react';
import updateStatusToSuccess from '../../../../api/movie/updateStatusToSuccess';
import { useNavigate } from 'react-router-dom';

const SeatSuccess: React.FC = () => {

  const navigate = useNavigate();
  const updateStatus = async () => {
    try {
      const response = await updateStatusToSuccess();
      console.log(response);
      navigate('/ticketHistory');
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    updateStatus();
  });

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Seat Success</h1>
      <p style={styles.paragraph}>Your seat has been a success.</p>
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

export default SeatSuccess;

