// import React from "react";
import { Box, Text, HStack, VStack, Flex, Center } from "@chakra-ui/react";
import textStyles from "../../../theme/foundations/textStyles";
import { ButtonComponent } from "../../../components/buttons/ButtonComponent";
import { Axios } from "../../../AxiosInstance";
import { useQuery } from "@tanstack/react-query";
import { formatDate1, formatTime1 } from "../../../functions/formatDatetime";
import { FullPageLoader } from "../../../components/Loader/FullPageLoader";
import { ChevronRightIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { useNavigate, useLocation } from "react-router-dom";
// import { is } from "date-fns/locale";
import { useEffect, useState } from "react";

interface orderDetailsProps {
  setName: string;
  menuName: string;
  menuPrice: number;
  setPrice: number;
  quantity: number;
}

export const ReceiptPage = () => {
  const location = useLocation();
  const couponName = new URLSearchParams(location.search).get("coupon");
  const navigate = useNavigate();
  const isCouponSelected = !!couponName;
  const [couponAmount, setCouponAmount] = useState(null);
  const [ newTotal, setNewTotal] = useState(0);
  // console.log(isCouponSelected);
  useEffect(() => {
  if(isCouponSelected && location.state){
    const data = location.state?.data;
    console.log("Data from vouchercRD:", data);
    setCouponAmount(data?.discountEarned);
    console.log("Coupon amount:", couponAmount);
  }
}, [isCouponSelected,location.state, couponAmount]);



  const handleApplyCouponClick = () => {
    navigate("/venue/voucher");
  };

  const handleRemoveVoucherClick = async () => {
    await Axios.post("/feature7/removeVoucher");
    const total = receipt?.totalAmount - receipt?.promotionAmount;
    setNewTotal(total);
    navigate("/venue/receipt");
  };

  const handlePay = async () => {
    await Axios.post("/feature7/proceedPayment", {newTotal: newTotal});
    navigate("/venue/payment");
  };
  //Delete mock after integration
  // const mockReceiptData = {
  //   orderId: "12345",
  //   orderDate: "2023-01-01T12:34:56Z",
  //   orderDetails: [
  //     { menuName: "Item 1", menuPrice: 10, quantity: 2 },
  //     { menuName: "Item 2", menuPrice: 15, quantity: 1 },
  //   ],
  //   itemCount: 3,
  //   totalCount: 3,
  //   promotionAmount: 334,
  //   couponAmount: 500,
  //   totalAmount: 25,
  //   couponApplied: true,
  //   promotionApplied: true,
  // };

  // const {
  //   data: receipt,
  //   isLoading,
  //   isError,
  //   error,
  // } = useQuery(["orderReceipt"], async () => {
  //   return mockReceiptData;
  // });
  const {
    data: receipt,
    isLoading,
    isError,
    error,

  } = useQuery(["orderReceipt"], async () => {
    const response = await Axios.get("/feature7/getReceipt");
    console.log("Receipt data:", response.data);
    return response.data;
  });

  useEffect(() => {
    const total = receipt?.totalAmount - receipt?.promotionAmount - (couponAmount || 0);
    setNewTotal(total);
  }, [receipt, couponAmount]);

  if (isLoading) {
    return <FullPageLoader />;
  }
  if (isError) {
    return <div>An error occurred: {(error as Error).message}</div>;
  }


  return (
    <Center>
      <Box width="80%">
        {/* {receipt && () } */}
        <Text {...textStyles.h2}>Order #{receipt?.orderId}</Text>
        {/* <Text>{receipt.orderDate? receipt.orderDate :"hello"}</Text> */}
        <Text {...textStyles.h3}>
          {/* Dr ly ll comment htr dl nw. pyn open lyk own hee hee */}
          {formatDate1(receipt?.orderDate)} {formatTime1(receipt?.orderDate)}
        </Text>
        <Box borderTop="1px dotted" mt={2} mb={2} />
        <HStack display="flex" justifyContent="space-between">
          <Text flex="3">QTY</Text>
          <Text flex="3">ITEM</Text>
          <Text flex="2">PRICE</Text>
          <Text flex="2" align="end">
            AMT
          </Text>
        </HStack>
        <Box borderTop="1px dotted" mt={2} mb={2} />
        <VStack spacing={2} align="start">
          {receipt?.orderDetails?.map(
            (order: orderDetailsProps, index: number) => (
              <Box key={index} width="100%">
                <HStack display="flex" justifyContent="space-between">
                  <Text flex="3">
                    {(index + 1).toString().padStart(2, "0")}
                  </Text>
                  <Text flex="3">{order.menuName || order.setName}</Text>
                  <Text flex="2">{order.menuPrice || order.setPrice}</Text>
                  <Text flex="2" align="end">
                    {order.quantity}
                  </Text>
                </HStack>
              </Box>
            )
          )}
        </VStack>
        <Box borderTop="1px dotted" mt={2} mb={2} />

        <HStack display="flex" justifyContent="space-between">
          <VStack align="start" spacing={0}>
            <Text {...textStyles.h3}>ITEM COUNT :</Text>
            <Text {...textStyles.h3}>TOTAL COUNT :</Text>
            <Text {...textStyles.h3}>PROMOTION :</Text>
            {/* {receipt?.couponApplied && ( */}
              <>
                {isCouponSelected && <Text {...textStyles.h3}>COUPON :</Text>}
              </>
            {/* )} */}
            <Text {...textStyles.h3}>TOTAL AMOUNT :</Text>
          </VStack>
          <VStack align="end" spacing={0}>
            <Text {...textStyles.h3}>{receipt?.itemCount}</Text>
            <Text {...textStyles.h3}>{receipt?.totalCount}</Text>
            <Text {...textStyles.h3} color={receipt?.promotionAmount === 0? "white" : "red.500"}>
              {receipt?.promotionAmount !== 0 && "-"}{"\u00A0"}
              {receipt?.promotionAmount}
            </Text>
            {/* {receipt?.couponApplied && ( */}
              <>
                {isCouponSelected && (
                  <Text {...textStyles.h3} color={"red.500"}>
                    -{"\u00A0"}
                    {couponAmount}  
                  </Text>
                )}
              </>
            {/* )} */}
            <Text {...textStyles.h3}>{newTotal}</Text>
          </VStack>
        </HStack>
        <Box borderTop="1px dotted" mt={2} mb={2} />
        <HStack display="flex" justifyContent="space-between">
          <VStack align="start" spacing={0}>
            <Text {...textStyles.h2}>Coupon</Text>
          </VStack>
          <VStack
            align="end"
            spacing={0}
            onClick={
              couponName ? handleRemoveVoucherClick : handleApplyCouponClick
            }
            style={{ cursor: "pointer" }}
          >
            {couponName ? (
              <HStack>
                <Text {...textStyles.h3} color={"white"}>
                  {couponName}
                </Text>
                <SmallCloseIcon boxSize={4} />
              </HStack>
            ) : (
              <Text {...textStyles.h3} color={"grey.300"}>
                Apply Coupon <ChevronRightIcon boxSize={4} />
              </Text>
            )}
          </VStack>
        </HStack>
        <Box borderTop="1px dotted" mt={2} mb={2} />
        <Center>
          <Flex align="center" justify="center">
            <Box
              position="fixed"
              bottom="4"
              width="109px"
              height="29px"
              textAlign="center"
              borderRadius="5px"
            >
              <ButtonComponent 
                text="Pay"
                onClick={handlePay} />
            </Box>
          </Flex>
        </Center>
      </Box>
    </Center>
  );
};
