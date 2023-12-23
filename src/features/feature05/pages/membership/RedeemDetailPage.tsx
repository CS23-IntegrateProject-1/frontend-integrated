import { Box, Text, Button } from "@chakra-ui/react";
import { Image, Circle } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IRedeemDetail from "../../../../interfaces/Redeem/IRedeemDetail";
import { GetRedeemDetail } from "../../../../api/Voucher/GetRedeemDetail";

export const RedeemDetailPage = () => {
     
  const [data, setData] = useState<IRedeemDetail>();
  const { redeemId } = useParams();

  useEffect(() => {
    fetchDatas();
  });

  if (redeemId == undefined) {
    console.error("Voucher id is undefined");
    return;
  }

  const fetchDatas = async () => {
    try {
      // Call the function to get the data
      const result = await GetRedeemDetail(redeemId);
      setData(result?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        {/* image */}
        <Box
          display="flex"
          // maxH="273px"
          maxW={"400px"}
          w={"100%"}
        >
          <Image
            w={"100%"}
            src={`${import.meta.env.VITE_BACKEND_URL}${data?.image_url}` || ""}
          />
        </Box>

        {/* coupon */}

        <Box
          // width="400px"
          height="102px"
          backgroundColor="#5F0DBB"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          w={"100%"}
          maxW={"400px"}
        >
          <Text fontSize="24px" marginLeft="20px" fontWeight="bold">
            {data?.title}
          </Text>
          {/* <Text fontSize="16px" marginLeft="20px">
            Use {data?.point_use} points
          </Text> */}
          <Circle
            size="56px"
            bg="#200944"
            position="absolute"
            right="-8"
          ></Circle>
        </Box>

        {/* description */}
        <Box
          // width="354px"
          // height="101px"
          display="flex"
          // justifyContent="center"
          marginTop="20px"
          w={"100%"}
          maxW={"400px"}
        >
          <Text>{data?.description}</Text>
        </Box>

        {/* redeem */}
        <Box
          display="flex"
          w={"100%"}
          maxW={"400px"}
          justifyContent={"flex-end"}
          my={"1em"}
        >
          <Button backgroundColor="#5F0DBB" color="white">
            Redeem
          </Button>
        </Box>
      </Box>
    </>
  );
};
