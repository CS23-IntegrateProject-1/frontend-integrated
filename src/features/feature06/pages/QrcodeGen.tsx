import { FC, useEffect, useState } from 'react';
import { Axios } from '../../../AxiosInstance';
import { useParams } from 'react-router-dom';

const QrcodeGen:FC = () => {
    const reservationId = parseInt(useParams<{reservationId:string}>().reservationId || "");
    const [qr,setQr] = useState<string>("");
    const fetchQrImg = async () => {
        try {
          const response = await Axios.get(`/feature6/qrcode/${reservationId}`, {
            responseType: 'blob',
          });
      
          const blob = new Blob([response.data], { type: 'image/png' });
          const qrUrl = URL.createObjectURL(blob);
          
          setQr(qrUrl);
        } catch (error) {
          console.error('Error fetching QR code:', error);
        }
      };
      
    
    useEffect(()=>{
        fetchQrImg();
    },[])

    if (!qr) {
        return <div>Loading...</div>;
    }
    return <img src={qr} />;
}

export default QrcodeGen;