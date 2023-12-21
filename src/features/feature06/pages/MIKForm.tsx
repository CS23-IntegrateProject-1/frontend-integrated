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
}

interface IPhotoData {
  date_added: string;
  venueId: number;
  image_url: string;
}

export const MIKForm = () => {
  const [data, setData] = useState<IData>();
  data;
  const [isLoaded, setIsLoaded] = useState(false);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const seats = searchParams.get("count");
  const [phonenumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const toast = useCustomToast();

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const response: IData = await getVenueById(2, branchIdInt);
    setIsLoaded(true);
    setData(response);
  };

  const navigate = useNavigate();

  const { branchId } = useParams<{
    venueId: string;
    branchId: string;
  }>();
  const branchIdInt = parseInt(branchId || "0");
  const venueIdInt = parseInt("2");

  const handleCreate = async () => {
    try {
      const seatsInt = parseInt(seats || "0");
      const currentDate = new Date();
      const selectedDateTime = new Date(`${date}T${time}`);
      if (selectedDateTime < currentDate) {
        toast.warning("Please select a future date and time");
        return;
      }
      if (
        date == "" ||
        time == "" ||
        fname == "" ||
        lname == "" ||
        email == "" ||
        phonenumber == ""
      ) {
        toast.warning("Please fill in all information");
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast.warning("Please enter a valid email address");
        return;
      }

      const response = await Axios.post(`/api/mik/reserve`, {
        date: date,
        time: `${time}:00`,
        guest_amount: seatsInt,
        fname: fname,
        lname: lname,
        phone: phonenumber,
        email: email,
        venueId: venueIdInt,
        branchId: branchIdInt,
      });
      console.log("create reservation successfully");
      console.log(response);
      navigate("/my-reservation");
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
          name={data?.name}
          location={data?.Location.address}
          star={data?.score}
          image_url={data?.Venue_photo}
        />
        <Box
          width="393px"
          height="700px"
          flexShrink={0}
          borderRadius="20px 20px 0px 0px"
          background="var(--Dark-background, #200944)"
          boxShadow="0px -4px 30px 0px #B921B2"
        >
          <Box
            width="369px"
            height="440px"
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
              Firstname :
            </Text>
            <Box mt={"5px"}>
              <Input
                required
                placeholder="your firstname"
                htmlSize={4}
                backgroundColor={"white"}
                textColor={"black"}
                borderStyle={"black"}
                ml={"34px"}
                width="163px"
                height={"25px"}
                onChange={(e) => {
                  setFname(e.target.value);
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
              marginTop="4px"
            >
              Lastname :
            </Text>
            <Box mt={"5px"}>
              <Input
                required
                placeholder="your lastname"
                htmlSize={4}
                backgroundColor={"white"}
                textColor={"black"}
                borderStyle={"black"}
                ml={"34px"}
                width="163px"
                height={"25px"}
                onChange={(e) => {
                  setLname(e.target.value);
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
                placeholder="phone no."
                htmlSize={4}
                backgroundColor={"white"}
                textColor={"black"}
                borderStyle={"black"}
                ml={"34px"}
                width="163px"
                height={"25px"}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
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
              E-mail :
            </Text>
            <Box mt={"5px"}>
              <Input
                type="email"
                required
                placeholder="enter E-mail"
                htmlSize={4}
                backgroundColor={"white"}
                textColor={"black"}
                borderStyle={"black"}
                ml={"34px"}
                width="163px"
                height={"25px"}
                onChange={(e) => {
                  setEmail(e.target.value);
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
            200 Baht
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

  return isLoaded ? render() : <div>Loading . . .</div>;
};
