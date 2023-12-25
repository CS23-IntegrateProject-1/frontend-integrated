import { Box, Card, CardBody, Text } from "@chakra-ui/react";
import React from "react";
import IVoucherApprove from "../../../../interfaces/Voucher/IVoucherApprove";

export const VoucherDetailCard: React.FC<IVoucherApprove & { isApprove: string }> = ({ voucher_name, voucherId, description }) => {
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
      mb={"10px"}
    >
      <CardBody>
        <Box>
          <Text pt="2" fontSize="md">
            ID: {voucherId}
            <br/>
            Name: {voucher_name}
            <br/>
            Description: {description}
          </Text>
        </Box>
      </CardBody>
    </Card>
  );
};