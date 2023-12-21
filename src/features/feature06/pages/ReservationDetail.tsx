/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Icon, Text, Button, Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { RDetailCard } from "../components/RDetailCard";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { CalendarIcon } from "@chakra-ui/icons";
import { TimeIcon } from "@chakra-ui/icons";
import { MdOutlineEventSeat } from "react-icons/md";
import { getVenueById } from "../../../api/Reservation/getVenueById";
import { Axios } from "../../../AxiosInstance";
import { useCustomToast } from "../../../components/useCustomToast";

interface IData {
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
  Location: {
    locationId: number;
    name: string;
    latitude: string;
    longtitude: string;
    address: string;
  };
  Deposit: [
    {
      deposit_amount: string;
      depositId: number;
      venueId: number;
    }
  ];
}

interface IPhotoData {
  date_added: string;
  venueId: number;
  image_url: string;
  venuePhotoId: number;
}

export const ReservationDetail = () => {
  const [data, setData] = useState<IData>();
  data;
  const [isLoaded, setIsLoaded] = useState(false);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const seats = searchParams.get("count");
  const [name, setName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const toast = useCustomToast();

  useEffect(() => {
    fetchData();
    setIsLoaded(true);
  }, []);

  const fetchData = async () => {
    const response: IData = await getVenueById(venueIdInt,branchIdInt);
    console.log(response);
    setData(response);
  };

  const navigate = useNavigate();

  const { venueId, branchId } = useParams<{
    venueId: string;
    branchId: string;
  }>();
  const venueIdInt = parseInt(venueId || "0");
  const branchIdInt = parseInt(branchId || "0");

  const handleCreate = async () => {
    try {
      const seatsInt = parseInt(seats || "0");
      const currentDate = new Date();
      const selectedDateTime = new Date(`${date}T${time}`);
      if (selectedDateTime < currentDate) {
        toast.warning("Please select a future date and time");
        return;
      }
      if (date == "" || time == "" || name == "" || phonenumber == "") {
        toast.warning("Please fill in all information");
      }
      const response = await Axios.post(`/feature6/createReservation`, {
        venueId: venueIdInt,
        guest_amount: seatsInt,
        reserve_date: date,
        time: time,
        branchId: branchIdInt,
        name: name,
        phone_num: phonenumber,
      });
      console.log("create reservation successfully");
      console.log(response);
      console.log(response.data.newReservation.userId);
      console.log(response.data.newReservation.venueId);
      console.log(response);

      const originalPath = `/reservation-detail/venue/paymentD/${response.data.newReservation.reservationId}}`;
      const newPath = originalPath.replace("/reservation-detail", "");
      navigate(newPath);
    } catch (err: any) {
      toast.error(err.response.data.error);
      console.log(err);
      throw err;
    }
  };

  const render = () => {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center" // Center the content horizontally
        justifyContent="center"
      >
        <RDetailCard
          // src={data?.venue.Venue_photo.image_url}
          name={data?.name}
          location={data?.Location.address}
          star={data?.score}
          image_url={data?.Venue_photo}
        />

        {/* This will push the reservation detail to the bottom */}
        <Box
          width="393px"
          height="480px"
          flexShrink={0}
          borderRadius="20px 20px 0px 0px"
          background="var(--Dark-background, #200944)"
          boxShadow="0px -4px 30px 0px #B921B2"
        >
          {/* Your Reservation Detail content goes here */}
          <Box
            width="369px"
            height="310px"
            flexShrink={0}
            borderRadius="20px"
            background="#DEBEF6"
            marginTop="16px"
            marginLeft="12px" // Adjust margin top as needed
          >
            <Text
              color="#000"
              fontFamily="Roboto"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="normal"
              marginLeft={15}
              padding={19}
            >
              Reservation information
            </Text>
            <Text
              color="#000"
              fontFamily="Roboto"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="normal"
              marginLeft={34}
              marginTop="4px"
            >
              Name :
            </Text>
            <Box mt={"5px"}>
              <Input
                required
                placeholder="enter your name"
                htmlSize={4}
                backgroundColor={"white"}
                textColor={"black"}
                borderStyle={"black"}
                ml={"34px"}
                width="163px"
                height={"25px"}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Box>
            <Text
              color="#000"
              fontFamily="Roboto"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="normal"
              marginLeft={34}
              marginTop={11}
            >
              Phone Number :
            </Text>
            <Box mt={"5px"}>
              <Input
                required
                type="number"
                placeholder="enter phone no."
                htmlSize={4}
                backgroundColor={"white"}
                textColor={"black"}
                borderStyle={"black"}
                ml={"34px"}
                width="163px"
                height={"25px"}
                onKeyDown={(e) => {
                  const allowedKeys = [8, 37, 39, 46]; // Backspace, Left Arrow, Right Arrow, Delete
                  if (!allowedKeys.includes(e.keyCode)) {
                    const isNumeric = /^[0-9]*$/;
                    if (!isNumeric.test(e.key)) {
                      e.preventDefault();
                    }
                  }
                }}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  if (inputValue.length <= 10) {
                    setPhoneNumber(inputValue);
                  }
                }}
              />
            </Box>
            <CalendarIcon
              w={"20px"}
              h={"20px"}
              color={"black"}
              ml={"40px"}
              mt={"20px"}
            />
            <Text
              color="#000"
              fontFamily="Roboto"
              fontSize="12px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="normal"
              marginLeft="71px"
              marginTop="-17px"
            >
              Date :
            </Text>
            <Box marginLeft="120px" marginTop="-20px">
              <Input
                required
                placeholder="Select Date"
                size="md"
                type="date"
                backgroundColor={"white"}
                textColor={"black"}
                width="163px"
                height={"25px"}
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </Box>
            <TimeIcon
              w={"20px"}
              h={"20px"}
              color={"black"}
              ml={"40px"}
              mt={"20px"}
            />
            <Text
              color="#000"
              fontFamily="Roboto"
              fontSize="12px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="normal"
              marginLeft="71px"
              marginTop="-17px"
            >
              Time :
            </Text>
            <Box marginLeft="120px" marginTop="-20px">
              <Input
                required
                placeholder="Select Time"
                size="md"
                type="time"
                backgroundColor={"white"}
                textColor={"black"}
                width="163px"
                height={"25px"}
                value={time}
                onChange={(e) => {
                  setTime(e.target.value);
                }}
              />
            </Box>
            <Icon ml={"38px"} mt={"15px"} width="35px" height="35px">
              <MdOutlineEventSeat style={{ color: "black" }} />
            </Icon>
            <Text
              color="#000"
              fontFamily="Roboto"
              fontSize="12px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="normal"
              marginLeft="71px"
              marginTop="-30px"
            >
              Seats :
            </Text>
            <Text
              color="#000"
              fontFamily="Roboto"
              fontSize="12px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="normal"
              marginLeft="120px"
              marginTop="-14px"
            >
              {seats}
            </Text>
            {/* Additional content goes here */}
          </Box>
          <Box
            width="360px"
            height="1px"
            background="#DEBEF6"
            marginTop="18px"
            marginLeft="18px"
          ></Box>
          <Text
            color="#F6F6F6"
            fontFamily="Roboto"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="normal"
            marginLeft="26px"
            marginTop="22.01"
          >
            Reservation fee
          </Text>
          <Text
            //   as='big'
            color="#F6F6F6"
            fontFamily="Roboto"
            fontSize="20px"
            fontStyle="normal"
            fontWeight="700"
            // lineHeight="normal"
            marginLeft="288px"
            marginTop="-24px"
          >
            {data?.Deposit[0].deposit_amount} Baht
          </Text>
          <Box
            width="360px"
            height="1px"
            background="#DEBEF6"
            marginTop="18px"
            marginLeft="18px"
          ></Box>
          <Button
            borderRadius="10px"
            width="128px"
            height="36px"
            backgroundColor="#A533C8"
            textColor="white"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="600"
            lineHeight="24px"
            marginTop="15px"
            marginLeft="133px"
            onClick={handleCreate}
          >
            Confirm
          </Button>
        </Box>
      </Box>
    );
  };

  return isLoaded ? render() : <div>Loading...</div>;
};
