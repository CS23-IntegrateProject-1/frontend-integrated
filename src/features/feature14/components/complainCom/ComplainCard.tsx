import { Box, Button, Card, CardBody, Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import IReportApprove  from "../../../../interfaces/ComplainTicket/IReportApprove"
import { useNavigate } from "react-router-dom";
import { ApproveCom } from "../../../../api/ComplainTicket/GetComplainFix";

export const ComplainCard: React.FC<IReportApprove & { status: string }> = ({ ComplainTicketId, topic, complaint }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const handleClickConfirm = () => {
    ApproveCom(ComplainTicketId);
    navigate("/admin/ticket");
    location.reload();
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
        <Box
          width="50%"
          minWidth="250px"
          maxWidth="400px"
          display="flex"
          flexDirection={"row"}
          paddingBottom={3}
          justifyContent={"space-evenly"}
        >
          <Button
            backgroundColor="#A533C8"
            variant="solid"
            width="40%"
            color="white"
            onClick={onOpen}
          >
            Fixed
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bgColor={"#DEBEF6"} color={"#200944"}>
              <ModalHeader mt={3}>The request has been fixed</ModalHeader>
              <ModalCloseButton />
              <ModalFooter>
                <Button
                  bgColor={"white"}
                  color={"#200944"}
                  mr={5}
                  width="30%"
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button
                  bgColor={"#A533C8"}
                  mr={3}
                  onClick={handleClickConfirm}
                  color={"white"}
                  width="30%"
                >
                  Confirm
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </CardBody>
    </Card>
  );
};
