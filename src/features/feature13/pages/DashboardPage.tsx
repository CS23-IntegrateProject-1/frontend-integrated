import { Box, Icon, Text, Card } from "@chakra-ui/react";
import { MdQrCodeScanner } from "react-icons/md";
import { MdFastfood } from "react-icons/md";
import { MdChair } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCountPerDay } from "../../../api/Reservation/getCountPerDay";
import { MdRestaurantMenu } from "react-icons/md";

interface IData {
response:{
  sumRevenue?: number;
  ReservationCount?: number;
  CustomerCount?: number;
}}

export const DashboardPage = () => {
  const navigate = useNavigate();
  const confirmCheckin = () => {
    const path = "/business/qrcodeconfirm";
    navigate(path);
  };
  const menu = () => {
    const path = `/business/venue/menubusiness`;
    navigate(path);
  };
  const orderList = () => {
    const path = `/business/venue/orderstat`;
    navigate(path);
  };
  const tableList = () => {
    const path = "/business/tablelist";
    navigate(path);
  };
  const [data, setData] = useState<IData>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response: IData = await getCountPerDay();
    setData(response);
  };
  return (
    <Box justifyContent={"center"} alignItems={"center"} display={"flex"}>
    <Box display={"flex"} flexDirection={"column"} position={"relative"}>
      <Text
        fontSize={"20px"}
        fontWeight={"700"}
        fontStyle={"normal"}
        lineHeight={"normal"}
        ml={'18px'}
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
            {data?.response.sumRevenue}
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
            {data?.response.CustomerCount}
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
            {data?.response.ReservationCount}
          </Text>
        </Box>
      </Box>

      {/* Qrcode confirm link */}

      <Card
        w={"147px"}
        h={"209px"}
        flexShrink={0}
        borderRadius={"6px"}
        opacity={0.75}
        background={"#DEBEF6"}
        ml={"17px"}
        mt={"19px"}
        onClick={confirmCheckin}
      >
        <Box paddingLeft={"19px"} mt={"24px"}>
          <MdQrCodeScanner size={109} color={"white"} />
        </Box>
        <Box mt={"5px"} textAlign={"center"}>
          <Text fontWeight={700} fontSize={"16px"} textColor={"white"}>
            Confirm
          </Text>
          <Text
            fontWeight={700}
            fontSize={"16px"}
            textColor={"white"}
            lineHeight="1"
          >
            checkin
          </Text>
        </Box>
      </Card>

      {/* Menu card */}
      <Card
        w={"147px"}
        h={"100px"}
        flexShrink={0}
        borderRadius={"6px"}
        background="rgba(95, 13, 187, 0.40)"
        ml={"188px"}
        mt={"-209px"}
        onClick={menu}
      >
        <Icon boxSize={"75px"} mt={"23px"} ml={"20px"} color={"white"}>
          <MdFastfood />
        </Icon>
        <Box mt={"-60px"} ml={"58px"} textAlign={"center"}>
          <Text fontWeight={700} fontSize={"16px"} textColor={"white"}>
            Menu
          </Text>
        </Box>
      </Card>

      {/* Table List card */}

      <Card
        w={"147px"}
        h={"90px"}
        flexShrink={0}
        borderRadius={"6px"}
        background="rgba(95, 13, 187, 0.40)"
        ml={"188px"}
        mt={"20px"}
        onClick={tableList}
      >
        <Icon boxSize={"75px"} mt={"20px"} ml={"20px"} color={"white"}>
          <MdChair />
        </Icon>
        <Box mt={"-74px"} ml={"58px"} textAlign={"center"}>
          <Text fontWeight={700} fontSize={"16px"} textColor={"white"}>
            Table
          </Text>
          <Text
            fontWeight={700}
            fontSize={"16px"}
            textColor={"white"}
            lineHeight="1"
          >
            List
          </Text>
        </Box>
      </Card>
      <Card
        w={"147px"}
        h={"90px"}
        flexShrink={0}
        borderRadius={"6px"}
        background="rgba(95, 13, 187, 0.40)"
        ml={"188px"}
        mt={"20px"}
        onClick={orderList}
      >
        <Icon boxSize={"75px"} mt={"20px"} ml={"20px"} color={"white"}>
          <MdRestaurantMenu />
        </Icon>
        <Box mt={"-74px"} ml={"58px"} textAlign={"center"}>
          <Text fontWeight={700} fontSize={"16px"} textColor={"white"}>
            Order
          </Text>
          <Text
            fontWeight={700}
            fontSize={"16px"}
            textColor={"white"}
            lineHeight="1"
          >
            List
          </Text>
        </Box>
      </Card>
    </Box>
    </Box>
  );
};
