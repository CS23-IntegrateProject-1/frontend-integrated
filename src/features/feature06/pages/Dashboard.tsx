import { Box, Icon, Text, } from "@chakra-ui/react";
import { MdQrCodeScanner } from "react-icons/md";
import { MdFastfood } from "react-icons/md";
import { MdChair } from "react-icons/md";


export const Dashboard = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} position={"relative"}>
      <Text
        fontSize={"20px"}
        fontWeight={"700"}
        fontStyle={"normal"}
        lineHeight={"normal"}
      >
        Mix restaurant per day
      </Text>
      <Box display={"flex"} flexDirection={"row"}>
        <Box
          ml={"17px"}
          width={"95px"}
          height={"95px"}
          borderRadius={"6px"}
          border={"1px solid var(--Dark-accent, #DEBEF6)"}
          background={"rgba(217, 217, 217, 0.0)"}
          marginTop={"19px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Text fontSize={"14px"} fontWeight={"700"} marginTop={"12px"}>
            Revenue
          </Text>
          <Text fontSize={"20px"} fontWeight={"700"} mt={"5px"}>
            22,400
          </Text>
        </Box>
        <Box
          ml={"17px"}
          width={"95px"}
          height={"95px"}
          borderRadius={"6px"}
          border={"1px solid var(--Dark-accent, #DEBEF6)"}
          background={"rgba(217, 217, 217, 0.0)"}
          marginTop={"19px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Text fontSize={"14px"} fontWeight={"700"} marginTop={"12px"}>
            Customers
          </Text>
          <Text fontSize={"36px"} fontWeight={"700"} mt={"-5px"}>
            20
          </Text>
        </Box>
        <Box
          ml={"17px"}
          width={"95px"}
          height={"95px"}
          borderRadius={"6px"}
          border={"1px solid var(--Dark-accent, #DEBEF6)"}
          background={"rgba(217, 217, 217, 0.0)"}
          marginTop={"19px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Text fontSize={"14px"} fontWeight={"700"} marginTop={"12px"}>
            Reservation
          </Text>
          <Text fontSize={"36px"} fontWeight={"700"} mt={"-5px"}>
            9
          </Text>
        </Box>
      </Box>
      <Box
        w={"147px"}
        h={"209px"}
        flexShrink={0}
        borderRadius={"6px"}
        opacity={0.75}
        background={"#DEBEF6"}
        ml={"17px"}
        mt={"19px"}
      >
        <Icon boxSize={"175px"} mt={"16px"} ml={"15px"}>
          <MdQrCodeScanner />
        </Icon>
        <Box mt={"-55px"} textAlign={"center"}>
          <Text fontWeight={700} fontSize={"16px"}>
            Confirm
          </Text>
          <Text fontWeight={700} fontSize={"16px"} lineHeight="1">
            checkin
          </Text>
        </Box>
      </Box>
      <Box
        w={"147px"}
        h={"100px"}
        flexShrink={0}
        borderRadius={"6px"}
        background="rgba(95, 13, 187, 0.40)"
        ml={"188px"}
        mt={"-209px"}
      >
        <Icon boxSize={"75px"} mt={"23px"} ml={"20px"}>
          <MdFastfood />
        </Icon>
        <Box mt={"-60px"} ml={"58px"} textAlign={"center"}>
          <Text fontWeight={700} fontSize={"16px"}>
            Menu
          </Text>
        </Box>
      </Box>
      <Box
        w={"147px"}
        h={"90px"}
        flexShrink={0}
        borderRadius={"6px"}
        background="rgba(95, 13, 187, 0.40)"
        ml={"188px"}
        mt={"20px"}
      >
        <Icon boxSize={"75px"} mt={"20px"} ml={"20px"}>
        <MdChair />
        </Icon>
        <Box mt={"-74px"} ml={"58px"} textAlign={"center"}>
          <Text fontWeight={700} fontSize={"16px"}>
            Table
          </Text>
          <Text fontWeight={700} fontSize={"16px"} lineHeight="1">
            List
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
