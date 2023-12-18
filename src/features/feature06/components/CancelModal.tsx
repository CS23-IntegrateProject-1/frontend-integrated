import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { FC } from "react";
import { Axios } from "../../../AxiosInstance";
import { useNavigate } from "react-router-dom";

interface ICancelModal {
  reservationIdInt?: number;
  isOpen: boolean;
  onClose: () => void;
}

export const CancelModal: FC<ICancelModal> = ({
  reservationIdInt,
  isOpen,
  onClose,
}) => {
  // const { isOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const cancelActivate = async () => {
    try {
      const response = await Axios.post(`feature6/cancel/${reservationIdInt}`, {
        reservationId: reservationIdInt,
      });
      console.log(response);
      console.log("cancel reservation success");
      navigate("/my-reservation")
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent backgroundColor={"#D9D9D9"} borderRadius={"20px"}>
        <ModalHeader
          color={"black"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          fontWeight={700}
          fontSize={24}
        >
          Cancel
        </ModalHeader>
        <ModalCloseButton color={"black"} />
        <ModalBody color={"black"}>
          <span>Are you sure you want to cancel this reservation?</span>
        </ModalBody>

        <ModalFooter style={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="submit"
            colorScheme="none"
            backgroundColor="white"
            color="#191919"
            onClick={() => {
              cancelActivate();
            }}
            marginRight={"100px"}
            width={"100px"}
            height={"40px"}
          >
            Yes
          </Button>
          <Button
            type="submit"
            colorScheme="none"
            backgroundColor="#5F0DBB"
            onClick={() => navigate("/my-reservation")}
            width={"100px"}
            height={"40px"}
          >
            No
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
