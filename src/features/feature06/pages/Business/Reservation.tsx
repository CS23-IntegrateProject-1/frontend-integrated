import { BusinessReservationCard } from "../../components/BusinessReservationCard";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import { getAllReservationOfVenue } from "../../../../api/Reservation/getAllreservationofVenue";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

interface ReservationCard {
  venueId: number;
  guest_amount: number;
  reserved_time: string;
  status: string;
  userId: string;
  entry_time: string;
  isReview: Boolean;
  reservationId: number;
  isPaidDeposit: string;
  depositId: number;
  branchId: number;
}

export const Reservation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState<ReservationCard[]>([]);
  const [filterOptions, setFilterOptions] = useState({
    offline: true,
    online: true,
  });
  
  useEffect(() => {
    fetchData();
  }, [filterOptions]);

  const fetchData = async () => {
    const response = await getAllReservationOfVenue();
    setData(response);
  };

  const renderCards = () => {
    return data.map((reservation, index: number) => {
      const shouldRender =
        (filterOptions.offline && reservation.status === "Check_out") ||
        (filterOptions.online && reservation.status === "Check_in");

      return shouldRender ? (
        <Box key={index} marginBottom={"20px"}>
            <BusinessReservationCard
              name={reservation.userId}
              // type={reservation.type}
              status={reservation.status}
              date={reservation.reserved_time}
            />
        </Box>
      ) : null;
    });
  };
  // console.log(data);
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Box
        display={"flex"}
        flexDirection={"row"}
        width={"319px"}
        justifyContent={"space-between"} // Aligns buttons at both ends
      >
        <Button
          display={"flex"}
          height={"40px"}
          width={"200px"}
          background={"#A533C8"}
          color={"#F6F6F6"}
          fontWeight={"600"}
          _hover={{ background: "#A533C8" }}
          onClick={() => {<Link to={"business/WalkInDetail"} />;}}
        >
          Walk-in customer
        </Button>
        <Button
          background={"none"}
          color={"F6F6F6"}
          textDecoration={"underline"}
          fontWeight={"400"}
          _hover={{ background: "none" }}
          onClick={onOpen}
        >
          Filter
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="19"
            viewBox="0 0 22 19"
            fill="none"
          >
            <path
              d="M3.89714 4.35828C3.9888 4.45838 9.1588 10.0024 9.1588 10.0024V14.6301C9.1588 15.0536 9.5713 15.4001 10.0846 15.4001H11.9271C12.4313 15.4001 12.853 15.0536 12.853 14.6301V9.99468C12.853 9.99468 17.8855 4.58928 18.1238 4.34288C18.3621 4.09648 18.3346 3.85008 18.3346 3.85008C18.3346 3.42658 17.9221 3.08008 17.4088 3.08008H4.5938C4.03464 3.08008 3.66797 3.44968 3.66797 3.85008C3.66797 4.00408 3.72297 4.18888 3.89714 4.35828Z"
              fill="#F6F6F6"
            />
          </svg>
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color={"black"}>Filter By</ModalHeader>
            <ModalCloseButton />
            <ModalBody color={"black"}>
              kjhkjhkjhkjhkjhjk
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        marginTop={"32px"}
      >
        {renderCards()}
      </Box>
    </Box>
  );
};

