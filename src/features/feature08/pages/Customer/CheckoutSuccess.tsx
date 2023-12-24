import React from 'react';
import { useParams , useNavigate} from "react-router-dom";
import { useEffect } from 'react';
import { Axios } from "../../../../AxiosInstance";

const CheckoutSuccess: React.FC = () => {
  const { reservationId } = useParams();
  const { sessionId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await Axios.post(`/feature8/complete-paymentC/${sessionId}/${reservationId}`);
        navigate("/");
      } catch (error) {
        console.error('Error in Checkout component:', error);
    
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
  }, [sessionId, reservationId, navigate]);
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

export default CheckoutSuccess;

