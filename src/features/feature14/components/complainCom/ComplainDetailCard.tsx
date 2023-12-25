import { Box, Card, CardBody, Text } from "@chakra-ui/react";
import React from "react";
import IReportApprove from "../../../../interfaces/ComplainTicket/IReportApprove"

export const ComplainDetailCard: React.FC<IReportApprove & { status: string }> = ({ topic, complaint, ComplainTicketId }) => {
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
            ID: {ComplainTicketId}
            <br/>
            Topic: {topic}
            <br/>
            Detail: {complaint}
          </Text>
        </Box>
      </CardBody>
    </Card>
  );
};
