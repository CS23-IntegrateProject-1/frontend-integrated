import { Box, Card, CardBody, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import IVoucherCardProp from "../../../../interfaces/Voucher/IVoucherCardProp";

export const VoucherCard: React.FC<IVoucherCardProp & { isApprove: string }> = ({ voucher_name, voucherId, isApprove }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(isApprove);
    if (isApprove === "In_progress") {
      navigate(`/admin/voucher/${voucherId}`);
    } else{
      navigate(`/admin/voucher/view/${voucherId}`);
    } 
  };

  return (
    <Card
      width="90%"
      minWidth="250px"
      maxWidth="400px"
      display="flex"
      flexDirection={"column"}
      border={"1px solid"}
      borderColor={"brand.100"}
      bg={"rgba(0, 0, 0, 0)"}
      color={"white"}
      onClick={handleClick}
      mb={"10px"}
    >
      <CardBody>
        <Box>
          <Text pt="2" fontSize="md">
            ID: {voucherId}
            <br/>
            Name: {voucher_name}
          </Text>
        </Box>
      </CardBody>
    </Card>
  );
};
