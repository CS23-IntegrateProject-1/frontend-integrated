import {Box, Flex, Text} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Notification = () => {
    return (
        <Link to="">
      <Flex
        bg={"blackAlpha.300" }
        h={"75px"}
        align={"center"}
        borderRadius={"10px"}
        transition={"background-color 0.3s ease-in-out"}
        _hover={{ bg: "blackAlpha.400" }}
        _active={{ bg: "blackAlpha.200" }}
        marginBottom={"10px"}
      >
        <Link to={"/Notification/NewReservation"}>
          <Box ml='3'>
            <Text fontWeight='bold'>
              New Reservation 
            </Text>
            <Text fontSize='sm'>
              Report to business
            </Text>
            <Text fontSize='md'> 12 hr ago</Text>
          </Box>
        </Link>
      </Flex>
      <Flex
        bg={"blackAlpha.300" }
        h={"75px"}
        align={"center"}
        borderRadius={"10px"}
        transition={"background-color 0.3s ease-in-out"}
        _hover={{ bg: "blackAlpha.400" }}
        _active={{ bg: "blackAlpha.200" }}
        marginBottom={"10px"}
      >
        <Link to={"/Notification/OrderUpdate"}>
          <Box ml='3'>
            <Text fontWeight='bold'>
              Order update
            </Text>
            <Text fontSize='sm'>
              Table no. 7
            </Text>
            <Text fontSize='md'> 12 hr ago</Text>
          </Box>
        </Link>
      </Flex>
      <Flex
        bg={"blackAlpha.300" }
        h={"75px"}
        align={"center"}
        borderRadius={"10px"}
        transition={"background-color 0.3s ease-in-out"}
        _hover={{ bg: "blackAlpha.400" }}
        _active={{ bg: "blackAlpha.200" }}
        marginBottom={"10px"}
      >
        <Link to={"/Notification/Checkout"}>
          <Box ml='3'>
            <Text fontWeight='bold'>
              Checkout
            </Text>
            <Text fontSize='sm'>
              Table no. 9
            </Text>
            <Text fontSize='md'> 12 hr ago</Text>
          </Box>
        </Link>
      </Flex>
      <Flex
        bg={"blackAlpha.300" }
        h={"75px"}
        align={"center"}
        borderRadius={"10px"}
        transition={"background-color 0.3s ease-in-out"}
        _hover={{ bg: "blackAlpha.400" }}
        _active={{ bg: "blackAlpha.200" }}
        marginBottom={"10px"}
      >
        <Link to={"/Notification/Update"}>
          <Box ml='3'>
            <Text fontWeight='bold'>
              Update
            </Text>
            <Text fontSize='sm'>
              Report to business
            </Text>
            <Text fontSize='md'> 12 hr ago</Text>
          </Box>
        </Link>
      </Flex>
      <Flex
        bg={"blackAlpha.300" }
        h={"75px"}
        align={"center"}
        borderRadius={"10px"}
        transition={"background-color 0.3s ease-in-out"}
        _hover={{ bg: "blackAlpha.400" }}
        _active={{ bg: "blackAlpha.200" }}
        marginBottom={"10px"}
      >
        <Link to={"/Notification/Advertisement"}>
          <Box ml='3'>
            <Text fontWeight='bold'>
              Advertisement approved
            </Text>
            <Text fontSize='sm'>
              Report to business
            </Text>
            <Text fontSize='md'> 12 hr ago</Text>
          </Box>
        </Link>
      </Flex>
    </Link>
    )
}