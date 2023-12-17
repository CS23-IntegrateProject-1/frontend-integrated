import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ReservationCards } from "../components/ReservationCards";
import { getMyReservation } from "../../../api/Reservation/getMyReservation";
import { ButtonMyReservation } from "../components/ButtonMyReservation";
import { Link } from "react-router-dom";

interface IData {
  venueId: number;
  guest_amount: number;
  reserved_time: string;
  status: string;
  userId: number;
  entry_time: string;
  isReview: boolean;
  reservationId: number;
  depositId: number;
  isPaidDeposit: string;
  venue: {
    name: string;
    description: string;
    category: string;
    capacity: number;
    chatRoomId: number;
    locationId: number;
    score: string;
    venueId: number;
    website_url: string;
    Venue_photo: IPhotoData[] | undefined;
    Menu: [
      {
        price: number;
      }
    ];
  };
}

interface IPhotoData{
      venuePhotoId: number,
      venueId: number,
      image_url: string,
      date_added: string
}

export const MyReservation = () => {
  const [status, setStatus] = useState("");
  const [data, setData] = useState<IData[]>([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response: IData[] = await getMyReservation();
    setData(response);
  };

  const renderCards = () => {
    return data.map((data:IData, index: number) => {
      return (
        (status === "" || data.status === status) && (
          <Link
            to={`/getreservation-detail/${data.venueId}/${data.reservationId}`}
          >
            <Box key={index} marginBottom={"20px"}>
              <ReservationCards
                src={data.venue.Venue_photo?.[0]?.image_url}
                text={data.venue.description}
                name={data.venue.name}
                star={data.venue.score}
                startPrice={
                  data.venue.Menu.length > 0
                    ? data.venue.Menu[0].price ?? undefined
                    : undefined
                }
                reservationId={data.reservationId}
                venueId={data.venueId}
              />
            </Box>
          </Link>
        )
      );
    });
  };
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
        {renderCards()}
      </Box>
    </Box>
  );
};
