import { Box, Flex, Text, Spacer } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

type Notification = {
  notiReserveId: number;
  title: string;
  message: string;
  status: string; // Keep sendOn as string for now
  reserveId: number;
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
  const [tableNumberMap, setTableNumberMap] = useState<Record<string, any>>({});
  const [advertisementData, setAdvertisementData] = useState<any[]>([]);
  const [businessId,setBusinessId] = useState();

  



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

console.log(reservation)

  useEffect(() => {
    fetchData();
  }, []); // Run once when the component mounts
  
  reservation.map(res => console.log(res.status));
  const reservationIds = useMemo(() => {
    return reservation.map((res) => res.reservationId);
  }, [reservation]);
  console.log(reservationIds)

  const notiData = async () => {
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      const reservationResponse = await axios.get(`${backendUrl}/feature8/notifications/reservation`);
      const notiReserveData = reservationResponse.data;
  
      console.log('All Notifications:', notiReserveData);
      console.log('Reservation IDs:', reservationIds);
  
      // Filter notifications based on matching reserveId and reservationIds
      const filteredNotifications = notiReserveData.filter((notification: { reserveId: any; }) =>
        reservationIds.includes(notification.reserveId)
      );
  
      console.log('Filtered Notifications:', filteredNotifications);
  
      setNotificationData(filteredNotifications);
    } catch (error) {
      console.error('Error fetching reservation data:', error);
    }
  };

  useEffect(() => {
    notiData();
    
  }, [reservationIds]); // Run once when the component mounts
  
  const reserveIdMap = useMemo(() => {
    const map: Record<number, Notification> = {};
  
    notificationData
      .filter((notification) => notification.status === "Check_out")
      .forEach((notification) => {
        const reserveId = notification.reserveId;
  
        if (reserveId !== undefined) {
          map[reserveId as number] = notification as Notification;
        }
      });
  
    return map;
  }, [notificationData]);
  
  
  

  useEffect(() => {
    // Access the memoized reserveIdMap when needed
    console.log('ReserveId Map:', reserveIdMap);

    // ... do something with reserveIdMap
  }, [reserveIdMap]);

  useEffect(() => {
    const fetchTableNumbers = async () => {
      try {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
  
        // Extracting reserveIds from reserveIdMap
        const reserveIds = Object.keys(reserveIdMap) as string[];
  
        // Use Promise.all to make parallel requests for table numbers
        const tableNumberResponses = await Promise.all(
          reserveIds.map(async (reserveId) => {
            const tableNumberResponse = await axios.get(`${backendUrl}/feature8/reservation/${venueId}/${reserveId}`);
            return { reserveId, tableNumberData: tableNumberResponse.data };
          })
        );
  
        // Construct a mapping of reserveId to tableNumberData
        tableNumberResponses.forEach(({ reserveId, tableNumberData }) => {
          setTableNumberMap((prevTableNumberMap) => ({
            ...prevTableNumberMap,
            [reserveId as string]: tableNumberData,
          }));
        });
  
        // Now you can use tableNumberMap in your component
        console.log("Table Number Map:", tableNumberMap);
      } catch (error) {
        console.error('Error fetching table number data:', error);
      }
    };
  
    // Fetch table numbers when reserveIdMap changes
    fetchTableNumbers();
  }, [reserveIdMap, venueId]);


  console.log(tableNumberMap)
  console.log(notificationData)
  const pendingReservations = notificationData.filter(res => res.status === 'Pending');
  const checkOutReservations = notificationData.filter(res => res.status === 'Check_out');

  const fetchAdvertisementData = async () => {
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      const advertisementResponse = await axios.get(`${backendUrl}/feature8/notifications/advertisementbizId`);
      const advertisementData = advertisementResponse.data; // Assuming the data is in the 'data' property
      setAdvertisementData(advertisementData);
    } catch (error) {
      console.error('Error fetching advertisement data:', error);
    }
  };

  useEffect(() => {
    fetchAdvertisementData();
  }, []);
  //http://localhost:8080/feature8/notifications/advertisementbizId/1
  const fetchBusinessId = async () => {
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      const FetchbusinessId = await axios.get(`${backendUrl}/feature8/notifications/advertisementbizId/${venueId}`);
      const businessId = FetchbusinessId.data; // Assuming the data is in the 'data' property
      setBusinessId(businessId);
    } catch (error) {
      console.error('Error fetching advertisement data:', error);
    }
  };

  useEffect(() => {
    fetchBusinessId();
  }, []);



  
  console.log(advertisementData);
  console.log(businessId)
  

  return (
    <div>
      {pendingReservations.map((pendingRes, index) => (
        <Link key={index} to={`/Notification/NewReservation/${venueId}/${pendingRes.reserveId}`}>
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
        
        {/* Check out */}
        {checkOutReservations.map((pendingRes, index) => {
  // Assuming you have a valid tableNumberMap
  const tableNumberData = tableNumberMap[pendingRes.reserveId];

  // Check if tableNumberData is available
  const tableNumber = tableNumberData ? tableNumberData.tableNo : 'N/A';

        return (
          <Link key={index} to={`/Notification/Checkout/${venueId}/${pendingRes.reserveId}`}>
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
                <Text fontSize="sm">Table no.{tableNumber}</Text>
              </Box>
              <Spacer />
              <Box>
                <Text fontSize="md" textAlign={"right"} paddingRight={3}>
                  12 hr ago
                </Text>
              </Box>
            </Flex>
          </Link>
        );
      })}
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
        {/* <Link to="/Notification/Promotion">
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
        </Link> */}
      
    </div>
  );
};
