import React, { useEffect } from 'react';
import { Axios } from '../../../../AxiosInstance';
import { useParams, useNavigate } from 'react-router-dom';

const OnlineOrderSuccess: React.FC = () => {
  const { onlineOrderId } = useParams();
  const { sessionId } = useParams();
  const navigate = useNavigate();


// /complete-payment-delivery/:sessionId/:onlineOrderId

useEffect(() => {
  const fetchData = async () => {
    try {
      const paymentResponse = await Axios.post(`/feature8/complete-payment-delivery/${sessionId}/${onlineOrderId}`);
      console.log(paymentResponse.data);
  
      navigate('/map/food-delivery/completed');
    } catch (error) {
      console.error('Error in payment component:', error);
  
      if ((error as any).response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Response data:', (error as any).response.data);
        console.error('Status code:', (error as any).response.status);
        console.error('Headers:', (error as any).response.headers);
      } else if ((error as any).request) {
        // The request was made but no response was received
        console.error('No response received. Request details:', (error as any).request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up the request:', (error as any).message);
      }
    }
  };
  

  fetchData();
}, [navigate, onlineOrderId, sessionId]);




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


