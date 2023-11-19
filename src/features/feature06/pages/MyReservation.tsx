import { Box, Heading, Text, Button, Card } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ReservationCards } from "../components/ReservationCards";  
import { getMyReservation } from "../../../api/Reservation/getMyReservation";

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
    Venue_photo: string;
    Menu: [
      {
        price: number;
      }
    ];
  };
}

export const MyReservation = () => {
  const [status, setStatus] = useState("");
  const [data, setData] = useState<IData[]>([]);
  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = async () => {
    const response: IData[] = await getMyReservation(1, status);
    setData(response);
  };

  // const filterDataByStatus = () => {
  //   switch (status) {
  //     case "Pending":
  //       return data.filter((item) => item.status === "Pending");
  //     case "Check_in":
  //       return data.filter((item) => item.status === "Check_in");
  //     case "Check_out":
  //       return data.filter((item) => item.status === "Check_out");
  //     case "Cancelled":
  //       return data.filter((item) => item.status === "Cancelled");
  //     default:
  //       return data;
  //   }
  // };

  const renderCards = () => {
    // const filteredData = filterDataByStatus();
    // return filteredData.map((data, index: number) => {
    return data.map((data, index: number) => {
      return (
        (status === "" || data.status === status) && (
          <Box key={index} marginBottom={"20px"}>
            <ReservationCards
              src={data.venue.Venue_photo}
              text={data.venue.description}
              name={data.venue.name}
              star={data.venue.score}
              startPrice={
                data.venue.Menu.length > 0
                  ? data.venue.Menu[0].price ?? undefined
                  : undefined
              }
            />
          </Box>
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
        // overflowY={"hidden"}
        whiteSpace={"nowrap"}
        display={"flex"}
        height={"50px"}
        flexDirection={"row"}
        justifyContent={"flex-start"}
        position={"relative"}
      >
        <Button
          className="Pending"
          variant="outline"
          background={"none"}
          minWidth={"110px"}
          height={"30px"}
          display={"fixed"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"15px"}
          marginRight={"20px"}
          _focus={{
            background: "#A533C8",
            borderColor: "none",
            transitionDuration: "1s",
            border: "none",
          }}
          _hover={{}}
          onClick={() => setStatus("Pending")}
        >
          <Text color={"white"} fontSize="16px" fontWeight={"normal"}>
            Pending
          </Text>
        </Button>
        <Button
          className="Checkin"
          variant="outline"
          background={"none"}
          minWidth={"110px"}
          height={"30px"}
          display={"fixed"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"15px"}
          marginRight={"20px"}
          _focus={{
            background: "#A533C8",
            borderColor: "none",
            transitionDuration: "1s",
            border: "none",
          }}
          _hover={{}}
          onClick={() => setStatus("Check_in")}
        >
          <Text color={"white"} fontSize="16px" fontWeight={"normal"}>
            Checkin
          </Text>
        </Button>
        <Button
          className="Check_out"
          variant="outline"
          background={"none"}
          minWidth={"110px"}
          height={"30px"}
          display={"fixed"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"15px"}
          marginRight={"20px"}
          _focus={{
            background: "#A533C8",
            borderColor: "none",
            transitionDuration: "1s",
            border: "none",
          }}
          _hover={{}}
          onClick={() => setStatus("Check_out")}
        >
          <Text color={"white"} fontSize="16px" fontWeight={"normal"}>
            Completed
          </Text>
        </Button>
        <Button
          className="Cancelled"
          variant="outline"
          background={"none"}
          minWidth={"110px"}
          height={"30px"}
          display={"fixed"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"15px"}
          _focus={{
            background: "#A533C8",
            borderColor: "none",
            transitionDuration: "1s",
            border: "none",
          }}
          _hover={{}}
          onClick={() => setStatus("Cancel")}
        >
          <Text color={"white"} fontSize="16px" fontWeight={"normal"}>
            Canceled
          </Text>
        </Button>
      </Box>
      <Box className="ReservationList" marginTop={"10px"}>
        {renderCards()}
      </Box>
    </Box>
  );
};
