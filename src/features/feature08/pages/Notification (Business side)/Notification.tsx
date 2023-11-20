import { Box, Flex, Text, Spacer } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

type Notification = {
  notificationId: string;
  title: string;
  message: string;
  sendOn: string; // Keep sendOn as string for now
  transactionId: string;
};

type Reservation = {
  venueId:           number
  guest_amount:      number
  reserved_time:     Date            
  status:            string
  userId :           number
  entry_time:        Date
  isReview   :       Boolean             
  reservationId :    number                 
  depositId      :   number
  isPaidDeposit  :   string
  Check_in_log?   :   string
  Notes?          :   string
  Orders?         :   string
}

const formatDate = (dateString: string) => {
  if (!dateString) {
    return "Invalid Date";
  }

  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
};

export const Notification = () => {
  const [notificationData, setNotificationData] = useState<Notification[]>([]);
  const [userData,setUserData] = useState('');
  const [userId, setUserId] = useState('');
  const [reservation,setReservation] =useState<Reservation[]>([]);
  const { venueId } = useParams()




const fetchData = async () => {
  try {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    // Use the fetch function instead of axios
    const response = await fetch(backendUrl+'/feature8/user', {
      credentials: 'include'
    });
    // Check if the request was successful (status code in the range 200-299)
    if (response.ok) {
      const userData = await response.json(); // Extract userData from response
      // Check if userData exists before calling setUserData
      if (userData) {
        console.log("API Response:", userData);
        setUserData(userData); // Call setUserData with valid userData
        setUserId(userData.userId)
      } else {
        console.error("No user data received from API");
      }
    } else {
      // Handle non-successful response (status code outside the range 200-299)
      console.error("Error fetching user data. Status:", response.status);
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};
const fetchReservationData = async () => {
  try {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const reservationResponse = await axios.get(`${backendUrl}/feature8/reservation/${venueId}`);
    const reservationData = reservationResponse.data; // Assuming the data is in the 'data' property
    setReservation(reservationData);
  } catch (error) {
    console.error('Error fetching reservation data:', error);
  }
};

useEffect(() => {
  fetchReservationData();
}, []);

  useEffect(() => {
    fetchData();
  }, []); // Run once when the component mounts
  
  reservation.map(res => console.log(res.status));

  const pendingReservations = reservation.filter(res => res.status === 'Pending');

  return (
    <div>
      {pendingReservations.map((pendingRes, index) => (
        <Link key={index} to={`/Notification/NewReservation/${pendingRes.venueId}/${pendingRes.reservationId}`}>
          <Flex
            bg={"blackAlpha.300"}
            h={"75px"}
            align={"center"}
            borderRadius={"10px"}
            transition={"background-color 0.3s ease-in-out"}
            _hover={{ bg: "blackAlpha.400" }}
            _active={{ bg: "blackAlpha.200" }}
            marginBottom={"10px"}
          >
            <Box ml="3">
              <Text fontWeight="bold">New reservation</Text>
              <Text fontSize="sm">Report to business</Text>
            </Box>
            <Spacer />
            <Box>
              <Text fontSize="md" textAlign={"right"} paddingRight={3}>
                12 hr ago
              </Text>
            </Box>
          </Flex>
        </Link>
      ))}
        <Link to="/Notification/OrderUpdate">
          <Flex
            bg={"blackAlpha.300"}
            h={"75px"}
            align={"center"}
            borderRadius={"10px"}
            transition={"background-color 0.3s ease-in-out"}
            _hover={{ bg: "blackAlpha.400" }}
            _active={{ bg: "blackAlpha.200" }}
            marginBottom={"10px"}
          >
            <Box ml="3">
              <Text fontWeight="bold">Order update</Text>
              <Text fontSize="sm">Table no.7</Text>
            </Box>
            <Spacer />
            <Box>
              <Text fontSize="md" textAlign={"right"} paddingRight={3}>12hr ago</Text>          
            </Box>
            
          </Flex>
        </Link>
        <Link to="/Notification/Checkout">
          <Flex
            bg={"blackAlpha.300"}
            h={"75px"}
            align={"center"}
            borderRadius={"10px"}
            transition={"background-color 0.3s ease-in-out"}
            _hover={{ bg: "blackAlpha.400" }}
            _active={{ bg: "blackAlpha.200" }}
            marginBottom={"10px"}
          >
            <Box ml="3">
              <Text fontWeight="bold">Check out</Text>
              <Text fontSize="sm">Table no. 7</Text>
            </Box>
            <Spacer />
            <Box>
              <Text fontSize="md" textAlign={"right"} paddingRight={3}>12hr ago</Text>          
            </Box>
            
          </Flex>
        </Link>
        <Link to="/Notification/Update">
          <Flex
            bg={"blackAlpha.300"}
            h={"75px"}
            align={"center"}
            borderRadius={"10px"}
            transition={"background-color 0.3s ease-in-out"}
            _hover={{ bg: "blackAlpha.400" }}
            _active={{ bg: "blackAlpha.200" }}
            marginBottom={"10px"}
          >
            <Box ml="3">
              <Text fontWeight="bold">Update</Text>
              <Text fontSize="sm">Report to business</Text>
            </Box>
            <Spacer />
            <Box>
              <Text fontSize="md" textAlign={"right"} paddingRight={3}>12hr ago</Text>          
            </Box>
            
          </Flex>
        </Link>
        <Link to="/Notification/Advertisement">
          <Flex
            bg={"blackAlpha.300"}
            h={"75px"}
            align={"center"}
            borderRadius={"10px"}
            transition={"background-color 0.3s ease-in-out"}
            _hover={{ bg: "blackAlpha.400" }}
            _active={{ bg: "blackAlpha.200" }}
            marginBottom={"10px"}
          >
            <Box ml="3">
              <Text fontWeight="bold">Advertisement approved</Text>
              <Text fontSize="sm">Report to business</Text>
            </Box>
            <Spacer />
            <Box>
              <Text fontSize="md" textAlign={"right"} paddingRight={3}>12hr ago</Text>          
            </Box>

          </Flex>
        </Link>
        <Link to="/Notification/Promotion">
          <Flex
            bg={"blackAlpha.300"}
            h={"75px"}
            align={"center"}
            borderRadius={"10px"}
            transition={"background-color 0.3s ease-in-out"}
            _hover={{ bg: "blackAlpha.400" }}
            _active={{ bg: "blackAlpha.200" }}
            marginBottom={"10px"}
          >
            <Box ml="3">
              <Text fontWeight="bold">Promotion approved</Text>
              <Text fontSize="sm">Report to business</Text>
            </Box>
            <Spacer />
            <Box>
              <Text fontSize="md" textAlign={"right"} paddingRight={3}>12hr ago</Text>          
            </Box>

          </Flex>
        </Link>
      
    </div>
  );
};
