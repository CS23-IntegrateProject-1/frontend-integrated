import {
  Box,
  Text,
  Flex,
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { CartDetailNavbar } from "../../components/FoodDeliveryComp/CartDetail/CartDetailNavbar";
import { DeliveryTime } from "../../components/FoodDeliveryComp/CartDetail/DeliveryTime";
// import { YourOrderComp } from "../../components/FoodDeliveryComp/OrderProcessingComp/YourOrderComp"
// import { OrderSummary } from "../../components/FoodDeliveryComp/OrderProcessingComp/OrderSummary";
import { FoodStatus } from "../../components/FoodDeliveryComp/OrderProcessingComp/FoodStatus";
import index from "../../../../theme/foundations/index";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Axios } from "../../../../AxiosInstance";
// interface Order {
//     amount: number;
//     restaurant: string;
//     size: string;
//     price: number;
//   }
// interface Order {
//   amount: number;
//   restaurant: string;
//   size: string;
//   price: number;
// }
// const orders: Order[] = [
//   {
//     amount: 1,
//     restaurant: "MK Roasted Duck",
//     size: "Large",
//     price: 20,
//   },
// ];

export const YourOrder = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const { venueId, branchId } = useParams();
  const navToOngoing = () => {
    navigate("/map/food-delivery/ongoing");
  };

  const [venue, setVenue] = useState<string>(""); // Define total state
  const [branchName, setBranchName] = useState<string>(""); // Define total state

  useEffect(() => {
    const fetchBranchName = async () => {
      try {
        const response = await Axios.get("/feature4/branch/1/4");
        // console.log("hello from cart detail" + response.data.venue);
        setBranchName(response.data.branch.branch_name);
        setVenue(response.data.venue.name);
      } catch (error) {
        // console.log("Error fetching branch name: ", error);
      }
    }
    fetchBranchName();
  }, []);
  return (
    <Box>
      <FoodStatus venueId={venueId} branchId={branchId}/>
      <CartDetailNavbar
        RestaurantName={venue}
        BranchName={branchName}
      />

      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Box
          p={5}
          mt={5}
          mb={5}
          minWidth={100}
          height={"auto"}
          width={500}
          gap={5}
          display={"flex"}
          flexDirection={"column"}
        >
          <DeliveryTime />
          <Box>
            {/* <OrderSummary orders={orders} /> */}
          </Box>
          <Flex flexDirection={"row"} justifyContent={"space-between"} mb={2}>
            <Button
              width={200}
              variant={"unstyle"}
              backgroundColor={"#C83333"}
              color={index.colors.white}
              onClick={onOpen}
            >
              Cancel
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent bg={index.colors.brand[100]}>
                <ModalHeader textAlign={"center"} color={"black"}>
                  Cancel
                </ModalHeader>
                <ModalBody>
                  <Flex
                    flexDirection={"column"}
                    justifyContent={"center"}
                    gap={5}
                  >
                    <Text textAlign={"center"} color={"black"}>
                      Are your sure you want to cancel?
                    </Text>
                    <Flex flexDirection={"row"} justifyContent={"space-around"}>
                      <Button
                        backgroundColor={index.colors.white}
                        color={index.colors.black}
                        variant={"untsyle"}
                        onClick={onClose}
                      >
                        Continue your order
                      </Button>
                      <Button
                        backgroundColor={index.colors.brand[200]}
                        color={index.colors.white}
                        variant={"untsyle"}
                      >
                        Cancel your order
                      </Button>
                    </Flex>
                  </Flex>
                </ModalBody>
              </ModalContent>
            </Modal>
            <Button
              width={200}
              variant={"unstyle"}
              backgroundColor={index.colors.brand[200]}
              color={index.colors.white}
              onClick={navToOngoing}
            >
              Done
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
