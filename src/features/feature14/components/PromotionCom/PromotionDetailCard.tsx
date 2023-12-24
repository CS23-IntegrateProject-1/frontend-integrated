import { Box, Card, CardBody, Text } from "@chakra-ui/react";
import React from "react";
import IPromotionApprove from "../../../../interfaces/Promotion/IPromotionApprove";

export const PromotionDetailCard: React.FC<IPromotionApprove & { isApprove: string }> = ({ name, promotionId, description }) => {
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
            ID: {promotionId}
            <br/>
            Name: {name}
            <br/>
            Description: {description}
          </Text>
        </Box>
      </CardBody>
    </Card>
  );
};
