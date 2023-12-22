/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Icon, Text, Button, Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { RDetailCard } from "../../components/RDetailCard";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { MdOutlineEventSeat } from "react-icons/md";
import { Axios } from "../../../../AxiosInstance";
import { getVenueById } from "../../../../api/Reservation/getVenueById";
import { useCustomToast } from "../../../../components/useCustomToast";

interface IPhotoData {
  date_added: string;
  venueId: number;
  image_url: string;
}

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

export const WalkInDetail = () => {
  const [data, setData] = useState<IData>();
  const [isLoaded, setIsLoaded] = useState(false);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const seats = searchParams.get("count");
  const seatsInt = parseInt(seats || "0");

  const { venueId, branchId } = useParams<{
    venueId: string;
    branchId: string;
  }>();
  const venueIdInt = parseInt(venueId || "0");
  const branchIdInt = parseInt(branchId || "0");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response: IData = await getVenueById(venueIdInt, branchIdInt); //ไม่ควรเป็น param + ไม่ได้ใส่ branchId
    console.log("response: ", response);
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
      } else if (phonenumber.length > 10) {
        toast.warning("Please enter a valid phone number");
        return;
      } 
      const response = await Axios.post(`/feature6/createOfflineReservation`, {
        guest_amount: seatsInt,
        branchId: branchIdInt,
        phone_num: phonenumber,
        name: name
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
          location={data?.Location.address}
          image_url={data?.Venue_photo}
        />
        <Box
          width="393px"
          height="480px"
          flexShrink={0}
          borderRadius="20px 20px 0px 0px"
          background="var(--Dark-background, #200944)"
          boxShadow="0px -4px 30px 0px #B921B2"
        >
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
