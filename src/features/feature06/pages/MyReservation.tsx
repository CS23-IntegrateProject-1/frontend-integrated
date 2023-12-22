import { Box } from "@chakra-ui/react";
import { useState, useEffect, FC } from "react";
import { ReservationCards } from "../components/ReservationCards";
import { getMyReservation } from "../../../api/Reservation/getMyReservation";
import { ButtonMyReservation } from "../components/ButtonMyReservation";
import { Link } from "react-router-dom";
import {
  IData,
  initialStateData,
} from "../../../interfaces/reservation/MyReservation.interface";

export const MyReservation = () => {
  const [status, setStatus] = useState("Pending");
  const [datas, setDatas] = useState<IData[]>(initialStateData);

  useEffect(() => {
    fetchData();
  }, [status]);

  const fetchData = async () => {
    const response = await getMyReservation();
    setDatas(response);
  };

  const RenderCards: FC = () => {
    return datas.map((data: IData, index: number) => {
      return (
        (status === "" || data.status === status) && (
          <Link
            key={index}
            to={`/getreservation-detail/${data.venueId}/${data.reservationId}`}
          >
            <Box marginBottom={"20px"}>
              <ReservationCards
                src={data.Venue.Venue_photo[0]?.image_url ||  ""}
                text={data.Venue.description}
                name={data.Venue.name}
                star={data.Venue.score}
                status={data.status}
                startPrice={
                  data.Venue.Menu.length > 0
                    ? data.Venue.Menu[0].price ?? undefined
                    : undefined
                }
                isReview={data.isReview}
                reservationId={data.reservationId}
                venueId={data.venueId}
                isPaidDeposit={data.isPaidDeposit}
                branchId={data.branchId}
              />
            </Box>
          </Link>
        )
      );
    });
  };
  // console.log("DATA: ", data);
  console.log("RENDER PAGES ----------------------------");
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      position={"relative"}
    >
      <Box
        className="ButtonBar"
        maxWidth={"90%"}
        overflowX={"auto"}
        whiteSpace={"nowrap"}
        display={"flex"}
        height={"50px"}
        flexDirection={"row"}
        justifyContent={"flex-start"}
        position={"relative"}
      >
        <ButtonMyReservation
          onClick={() => setStatus("Pending")}
          text="Pending"
        ></ButtonMyReservation>
        <ButtonMyReservation
          onClick={() => setStatus("Check_in")}
          text="Check-in"
        ></ButtonMyReservation>
        <ButtonMyReservation
          onClick={() => setStatus("Check_out")}
          text="Completed"
        ></ButtonMyReservation>
        <ButtonMyReservation
          onClick={() => setStatus("Cancel")}
          text="Canceled"
        ></ButtonMyReservation>
      </Box>
      <Box className="ReservationList" marginTop={"10px"}>
        <RenderCards />
      </Box>
    </Box>
  );
};
