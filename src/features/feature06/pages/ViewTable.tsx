import { Box, Text, Button } from "@chakra-ui/react";

export const ViewTable = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        width={"354px"}
        h={"430px"}
        borderRadius={"20px"}
        background={"rgba(95, 13, 187, 0.40)"}
      >
        <Text
          fontSize={"20px"}
          fontWeight={"700"}
          textAlign={"center"}
          mt={"18px"}
        >
          Table 1
        </Text>
        <Box
          w={"320px"}
          h={"168px"}
          borderRadius={"15px"}
          background={"#9747FF"}
          ml={"17px"}
          mt={"15px"}
        ></Box>
        <Text
          fontSize={"14px"}
          fontWeight={"700"}
          textAlign={"center"}
          mt={"9px"}
          textColor={"#c00"}
        >
          Booked
        </Text>
        <Text fontSize={"16px"} fontWeight={"600"} ml={"26px"} mt={"15px"}>
          Table type
        </Text>
        <Text fontSize={"16px"} fontWeight={"400"} ml={"139px"} mt={"-24px"}>
          Simply Table
        </Text>
        <Text fontSize={"16px"} fontWeight={"600"} ml={"26px"} mt={"20px"}>
          Capacity
        </Text>
        <Text fontSize={"16px"} fontWeight={"400"} ml={"139px"} mt={"-24px"}>
          8 people
        </Text>
        <Text fontSize={"16px"} fontWeight={"600"} ml={"26px"} mt={"20px"}>
          Information
        </Text>
        <Text fontSize={"16px"} fontWeight={"400"} ml={"139px"} mt={"-24px"}>
          Place in the middle of the restaurant.
        </Text>
      </Box>
      <Box mt="200px">
        <Button
          borderRadius="10px"
          width="138px"
          height="40px"
          backgroundColor="white"
          textColor="#A533C8"
          fontSize="16px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="24px"
          mr={"17px"}
        >
          Delete
        </Button>
        <Button
          borderRadius="10px"
          width="138px"
          height="40px"
          backgroundColor="#A533C8"
          textColor="white"
          fontSize="16px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="24px"
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
};
