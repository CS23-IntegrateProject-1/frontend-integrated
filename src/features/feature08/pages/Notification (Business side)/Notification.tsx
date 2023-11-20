import { Box, Flex, Text, Spacer } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Notification = {
  notificationId: string;
  title: string;
  message: string;
  sendOn: string; // Keep sendOn as string for now
  transactionId: string;
};

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

  useEffect(() => {
    axios
      .get(`http://localhost:8080/feature8/notifications`)
      .then((response) => {
        // console.log("API Response:", response.data);
        setNotificationData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);




  // localhost:8080/feature8/users/4
  //  
// const fetchData = async () => {
//   try {
//     const response = await axios.get('http://localhost:8080/feature8/user');
//     const userData = response.data; // Extract userData from response

//     // Check if userData exists before calling setUserData
//     if (userData) {
//       console.log("API Response:", userData);
//       setUserData(userData); // Call setUserData with valid userData
//     } else {
//       console.error("No user data received from API");
//     }
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//   }
// };

// fetchData();

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
useEffect(() => {
   fetchData();
}, []);

useEffect(() => {
  console.log(userId)
}, [userData]);

  
  
  

  


  return (
//     <div>
//       {notificationData.map((notification) => (
//         <Link key={notification.notificationId} to="">
//           <Flex
//             bg={"blackAlpha.300"}
//             h={"75px"}
//             align={"center"}
//             borderRadius={"10px"}
//             transition={"background-color 0.3s ease-in-out"}
//             _hover={{ bg: "blackAlpha.400" }}
//             _active={{ bg: "blackAlpha.200" }}
//             marginBottom={"10px"}
//           >
//             <Box ml="3">
//               <Text fontWeight="bold">{notification.title}</Text>
//               <Text fontSize="sm">{notification.message}</Text>
//             </Box>
//             <Spacer />
//             <Box>
//               <Text fontSize="md" textAlign={"right"} paddingRight={3}>{formatDate(notification.sendOn)}</Text>          
//             </Box>
//           </Flex>
//         </Link>
//       ))}
//     </div>
//   );
// };
<div>
      
        <Link to="/Notification/NewReservation">
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
              <Text fontSize="md" textAlign={"right"} paddingRight={3}>12hr ago</Text>          
            </Box>
            
          </Flex>
        </Link>
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
