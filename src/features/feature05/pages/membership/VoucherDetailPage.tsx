import { Box, Text, Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import IVoucherDetail from "../../../../interfaces/Voucher/IVoucherDetail";
import { useEffect, useState } from "react";
import { GetVoucherDetail } from "../../../../api/Voucher/GetVoucherDetail";
import { useNavigate, useParams } from "react-router-dom";
import { GetCheckVouchernotCollected } from "../../../../api/Membership/GetCheckVouchernotCollected";
import { GetCollectVoucher } from "../../../../api/Membership/GetCollectVoucher";

export const VoucherDetailPage = () => {
  const [data, setData] = useState<IVoucherDetail>();
  const navigate = useNavigate();
  const { voucherId } = useParams();
  const [voucherCollected, setVoucherCollected] = useState(false);

  useEffect(() => {
    fetchDatas();
    fetchVoucherStatus();
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

  const fetchVoucherStatus = async () => {
    try {
      const result = await GetCheckVouchernotCollected(voucherId)
      setVoucherCollected(result.data.hasVoucher);
      console.log(result.data.hasVoucher)
    } catch (error) {
      console.error('Error fetching voucher status:', error);
    }
  };

  const redeemVoucher = async () => {
    try {
      if (!voucherCollected) {
        await GetCollectVoucher(voucherId); // Call the API function to collect the voucher
        setVoucherCollected(true); // Update the state to reflect that the voucher is now collected
        console.log("Voucher collected successfully");
        navigate("/my-rewards");
      } else {
        navigate("/my-rewards"); // Redirect to the voucher page if it's already collected
      }
    } catch (error) {
      console.error("Error redeeming/collecting voucher:", error);
    }
  };
  
  

  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box display="flex" maxW={"400px"} w={"100%"}>
          <Image
            w={"100%"}
            src={`${import.meta.env.VITE_BACKEND_URL}${data?.voucher_image}` || ""}
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
        <Button
            backgroundColor="#5F0DBB"
            color="white"
            onClick={() => redeemVoucher()}
          >
            {voucherCollected ? "Use Now" : "Redeem"}
          </Button>
      </Box>
      </Box>
    </>
  );
};
