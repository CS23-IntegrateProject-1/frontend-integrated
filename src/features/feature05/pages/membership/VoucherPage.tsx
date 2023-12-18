import { Box, Text, Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import IVoucherDetail from "../../../../interfaces/Voucher/IVoucherDetail";
import { useEffect, useState } from "react";
import { GetVoucherDetail } from "../../../../api/Voucher/GetVoucherDetail";
import { useNavigate, useParams } from "react-router-dom";

export const VoucherPage = () => {
  const [data, setData] = useState<IVoucherDetail>();
  const navigate = useNavigate();
  const { voucherId } = useParams();

  useEffect(() => {
    fetchDatas();
  }, []);

  if (voucherId == undefined) {
    console.error("Voucher id is undefined");
    return;
  }

  const fetchDatas = async () => {
    try {
      const result = await GetVoucherDetail(voucherId);
      setData(result?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box display="flex" maxW={"400px"} w={"100%"}>
          <Image
            w={"100%"}
            src={`${import.meta.env.VITE_BACKEND_URL}${data?.voucher_image}`}
          />
        </Box>
        <Box
          height="102px"
          backgroundColor="#5F0DBB"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          w={"100%"}
          maxW={"400px"}
        >
          <Box pos={"relative"}>
            <Text fontSize="24px" marginLeft="20px" fontWeight="bold">
              {data?.voucher_name}
            </Text>
            <Text fontSize="16px" marginLeft="20px">
              Use {data?.point_use} points
            </Text>
            <Box
              w="46px"
              h="46px"
              bg="#200944"
              borderLeftRadius={"50px"}
              pos={"absolute"}
              right={-5}
              top={2}
            ></Box>
          </Box>
        </Box>

        <Box display="flex" marginTop="20px" w={"100%"} maxW={"400px"}>
          <Text>{data?.description}</Text>
        </Box>

        <Box
          display="flex"
          w={"100%"}
          maxW={"400px"}
          justifyContent={"flex-end"}
          my={"1em"}
        >
          {data?.User_voucher[0].isUsed ? (
            <></>
          ) : (
            <Button
              backgroundColor="#5F0DBB"
              color="white"
              onClick={() => {
                navigate(`/redeem`);
              }}
            >
              Use Now
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
};
