import { Box, Icon, Text, Button, Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { RDetailCard } from "../../components/RDetailCard";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { MdOutlineEventSeat } from "react-icons/md";
import { Axios } from "../../../../AxiosInstance";
import { getVenueById } from "../../../../api/Reservation/getVenueById";
import { useCustomToast } from "../../../../components/useCustomToast";

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
  Venue_photo: {
    venueId: number;
    image_url: string;
    date_added: Date;
  };
}

export const WalkInDetail = () => {
  const [data, setData] = useState<IData>();
  const [isLoaded, setIsLoaded] = useState(false);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const seats = searchParams.get("count");
  const seatsInt = parseInt(seats || "0");

  const { venueId } = useParams<{ venueId: string }>();
  const venueIdInt = parseInt(venueId || "0");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response: IData = await getVenueById(venueIdInt, 1); //ไม่ควรเป็น param
    setData(response);
    setIsLoaded(true);
  };
  const [name, setName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const toast = useCustomToast();

  const navigate = useNavigate();

  const handleCreate = async () => {
    try {
      if (name == "" || phonenumber == "") {
        toast.warning("Please fill in all information");
      }
      const response = await Axios.post(`/feature6/createOfflineReservation`, {
        venueId: venueIdInt,
        guest_amount: seatsInt,
        name: name,
        phonenumber: phonenumber,
        branchId: 1,
      });
      console.log(response);
      console.log("create reservation successfully");
      navigate("/business/reservation");
    } catch (err: any) {
      toast.error(err.response.data.error);
      console.log(err);
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
          star={data?.score}
          location={"แก้ด่วน"}
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
            height="240px"
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
              fontSize="12px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="normal"
              marginLeft={34}
              marginTop="10px"
            >
              {/* {data?.reservations[0].user.fname} */}
            </Text>
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
                placeholder="enter phone no."
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

            <Icon ml={"38px"} mt={"20px"} width="35px" height="35px">
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

          <Button
            onClick={handleCreate}
            borderRadius="10px"
            width="128px"
            height="36px"
            backgroundColor="#A533C8"
            textColor="white"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="600"
            lineHeight="24px"
            marginTop="150px"
            marginLeft="133px"
          >
            Confirm
          </Button>
        </Box>
      </Box>
    );
  };

  return isLoaded ? render() : <div>Loading...</div>;
};
