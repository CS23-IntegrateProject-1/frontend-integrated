import { Box, Heading, Text, Button, Card } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ReservationCards } from "../components/ReservationCards";
import { Axios } from "../../../AxiosInstance";

export const MyReservation = () => {
  // const [PendShown, setPendShown] = useState(false);
  // const [CheckShown, setCheckShown] = useState(false);
  // const [ComShown, setComShown] = useState(false);
  // const [CanShown, setCanShown] = useState(false);
  const [status, setStatus] = useState("");
  const [data, setData] = useState<
    Array<{
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
    }>
  >([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    Axios.get("/feature6/MyReservation")
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
        // console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const filterDataByStatus = () => {
    switch (status) {
      case "Pending":
        return data.filter((item) => item.status === "Pending");
      case "Check_in":
        return data.filter((item) => item.status === "Check_in");
      case "Check_out":
        return data.filter((item) => item.status === "Check_out");
      case "Cancelled":
        return data.filter((item) => item.status === "Cancelled");
      default:
        return data;
    }
  };

  const renderCards = () => {
    const filteredData = filterDataByStatus();

    return filteredData.map((data, index: number) => {
      return (
        <Box key={index} marginBottom={"20px"}>
          <ReservationCards
            src={data.venue.Venue_photo}
            text={data.venue.description}
            name={data.status}
            star={data.venue.score}
            startPrice={
              data.venue.Menu.length > 0
                ? data.venue.Menu[0].price ?? undefined
                : undefined
            }
          />
        </Box>
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
          }}
          _hover={{}}
          onClick={() => setStatus("Check_out")}
        >
          <Text color={"white"} fontSize="16px" fontWeight={"normal"}>
            Check_out
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
          }}
          _hover={{}}
          onClick={() => setStatus("Cancelled")}
        >
          <Text color={"white"} fontSize="16px" fontWeight={"normal"}>
            Cancelled
          </Text>
        </Button>
      </Box>
      <Box className="ReservationList" marginTop={"10px"}>
        {renderCards()}
      </Box>
    </Box>
  );
};
