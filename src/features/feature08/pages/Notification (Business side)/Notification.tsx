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
  useEffect(() => {
    axios
      .get('http://localhost:8080/feature8/user')
      .then((response) => {
        // console.log("API Response:", response.data);
        setUserData(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  


  return (
    <div>
      {notificationData.map((notification) => (
        <Link key={notification.notificationId} to="">
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
              <Text fontWeight="bold">{notification.title}</Text>
              <Text fontSize="sm">{notification.message}</Text>
            </Box>
            <Spacer />
            <Box>
              <Text fontSize="md" textAlign={"right"} paddingRight={3}>{formatDate(notification.sendOn)}</Text>          
            </Box>
          </Flex>
        </Link>
      ))}
    </div>
  );
};
