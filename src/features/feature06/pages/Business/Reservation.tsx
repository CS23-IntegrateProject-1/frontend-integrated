import { BusinessReservationCard } from "../../components/BusinessReservationCard";
import { Box, Button, Checkbox, useDisclosure, Input } from "@chakra-ui/react";
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
import { Link } from "react-router-dom";
// import { center } from "../../../feature04/components/Maps/setting";

interface ReservationCard {
  venueId: number;
  guest_amount: number;
  reserved_time: string;
  status: string;
  user: {
    username: string;
    hashed_password: string;
    fname: string;
    lname: string;
    email: string;
    profile_picture: null;
    addId: null;
    phone: string;
    tierId: number;
    userId: number;
    prompt_pay: null;
  };
  entry_time: string;
  isReview: boolean;
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
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await getAllReservationOfVenue();
    setData(response);
  };

  const handleDateChange = (newDate: string) => {
    setSelectedDate(newDate);
  };

  const handleDoneClick = async () => {
    await fetchData(); // Fetch new data
    onClose(); // Close the modal
  };

  const renderCards = () => {
    return data.map((reservation, index: number) => {
      const shouldRender =
        (filterOptions.offline && reservation.user.userId === 0) ||
        (filterOptions.online && reservation.user.userId !== 0);

      // Check if the reservation matches the selected date
      const isMatchingDate =
        selectedDate === null ||
        reservation.reserved_time.includes(selectedDate);

      return shouldRender && isMatchingDate ? (
        <Box key={index} marginBottom={"20px"}>
          <BusinessReservationCard
            name={reservation.user.fname + " " + reservation.user.lname}
            type={reservation.user.userId === 0 ? "offline" : "online"}
            status={reservation.status}
            date={reservation.reserved_time}
          />
        </Box>
      ) : null;
    });
  };
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Box
        display={"flex"}
        flexDirection={"row"}
        width={"319px"}
        justifyContent={"space-between"} // Aligns buttons at both ends
      >
        <Link to={"/business/WalkInPeople"}>
          <Button
            display={"flex"}
            height={"40px"}
            width={"200px"}
            background={"#A533C8"}
            color={"#F6F6F6"}
            fontWeight={"600"}
            _hover={{ background: "#A533C8" }}
            onClick={() => {
              <Link to={"business/WalkInDetail"} />;
            }}
          >
            Walk-in customer
          </Button>
        </Link>
        <Button
          background={"none"}
          color={"F6F6F6"}
          textDecoration={"underline"}
          fontWeight={"400"}
          _hover={{ background: "none" }}
          onClick={() => {
            onOpen();
            setSelectedDate(null);
          }}
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
          <ModalContent backgroundColor={"#D9D9D9"}
          borderRadius={'20px'}>
            <ModalHeader
              color={"black"}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              fontWeight={700}
              fontSize={24}
            >
              Filter By
            </ModalHeader>
            <ModalCloseButton color={'black'}/>
            <ModalBody color={"black"}>
              <Input
              placeholder="Select Date"
              size="md"
              type="date"
              backgroundColor={"white"}
              textColor={"black"}
              width="163px"
              height={"25px"}
              onChange={(e) => handleDateChange(e.target.value)}
            />
              
              <br />
              <Checkbox
                textColor={"#5F0DBB"}
                colorScheme="purple"
                mt={'10px'}
                fontWeight={700}
                defaultChecked={filterOptions.offline}
                onChange={() =>
                  setFilterOptions((prev) => ({
                    ...prev,
                    offline: !prev.offline,
                  }))
                }
              >
                Offline Reservation
              </Checkbox>
              <br />
              <Checkbox
                textColor={"#5F0DBB"}
                colorScheme="purple"
                mt={'10px'}
                fontWeight={700}
                defaultChecked={filterOptions.online}
                onChange={() =>
                  setFilterOptions((prev) => ({
                    ...prev,
                    online: !prev.online,
                  }))
                }
              >
                Online Reservation
              </Checkbox>
            </ModalBody>

            <ModalFooter style={{ display: "flex", justifyContent: "center" }}>
              <Button
                type="submit"
                colorScheme="none"
                backgroundColor="#5F0DBB"
                onClick={() => {
                  onClose();
                  handleDoneClick();
                }}
              >
                Done
              </Button>
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
