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
  useDisclosure
} from "@chakra-ui/react";
import index from "../../../../../theme/foundations/index";
// import { useNavigate } from "react-router-dom";
export const YourOrderComp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const navigate=useNavigate();
  // const navigateCancelOrder=()=>{
  //   navigate('/map/food-delivery/your-order')
  // }
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Flex flexDirection={"column"}>
        <Box
          minWidth={100}
          height={"auto"}
          width={500}
          borderRadius={10}
          border={"solid 1.5px"}
          borderColor={index.colors.brand[100]}
          p={5}
          mt={5}
          mb={5}
        >
          <Box
            display={"flex"}
            flexDir={"column"}
            justifyContent={"space-around"}
          >
            <Flex flexDir={"row"} justifyContent={"space-between"}>
              <img
                src="https://www.mkrestaurant.com/public/uploads/mk_menu/images/33e10dd680609fd2de8cc182fd51f644.jpg"
                width="20%"
                height="20%"
                style={{ borderRadius: "10px" }}
                alt="Menu Item"
              />
              <Flex flexDir={"column"}>
                <Text>MK Roasted Duck</Text>
                <Text>small</Text>
              </Flex>
              <Flex flexDir={"column"} justifyContent={"space-around"}>
                <Text>x 2</Text>
              </Flex>
            </Flex>
          </Box>
          <br />
          <Flex flexDirection={"row"} justifyContent={"space-between"}>
            <Text>Subtotal</Text>
            <Text>$40</Text>
          </Flex>
          <Flex flexDirection={"row"} justifyContent={"space-between"}>
            <Text>Delivery Fee</Text>
            <Text>Free</Text>
          </Flex>
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
          <Modal isOpen={isOpen} onClose={onClose} >
            <ModalOverlay />
            <ModalContent bg={index.colors.brand[100]}>
              <ModalHeader textAlign={"center"} color={"black"}>
                Cancel
              </ModalHeader>
              <ModalBody>
                <Flex flexDirection={"column"} justifyContent={"center"} gap={5}>
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
          >
            Done
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
