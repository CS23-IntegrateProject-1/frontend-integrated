import { FC, useEffect } from "react";
import { Axios } from "../../../AxiosInstance";
import { useNavigate } from "react-router-dom";

const ReservationFail: FC = () => {
  const navigate = useNavigate();
  const cancleReservation = async () => {
    try {
      const response = await Axios.get("/feature10/deleteReservation");
      console.log(response);
      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    cancleReservation();
  });
  return <></>;
};

export default ReservationFail;
