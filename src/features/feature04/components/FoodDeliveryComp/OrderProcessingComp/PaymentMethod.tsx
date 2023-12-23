import { Box, Text, Flex, IconButton, useDisclosure, RadioGroup, Radio, Button } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from '@chakra-ui/react'
import index from "../../../../../theme/foundations/index";
import { useState } from "react";

export const PaymentMethod = ({ onPaymentMethodSelect }: { onPaymentMethodSelect: (value: string) => void }) => {
  const PaymentIcon: React.FC = () => {
    return (
      <svg
        width="24"
        height="23"
        viewBox="0 0 24 23"
        fill="#A533C8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.204 0.0672533C18.5356 -0.0156915 18.8817 -0.0219995 19.2161 0.0488083C19.5505 0.119616 19.8644 0.265678 20.1339 0.475907C20.4034 0.686135 20.6214 0.955003 20.7715 1.2621C20.9216 1.5692 20.9997 1.90645 21 2.24825V4.07825H21.75C22.3467 4.07825 22.919 4.31531 23.341 4.73726C23.7629 5.15922 24 5.73152 24 6.32825V19.8283C24 20.425 23.7629 20.9973 23.341 21.4192C22.919 21.8412 22.3467 22.0783 21.75 22.0783H2.25C1.65326 22.0783 1.08097 21.8412 0.65901 21.4192C0.237053 20.9973 1.47137e-07 20.425 1.47137e-07 19.8283V6.32825C-0.000209191 5.74903 0.222964 5.19205 0.623066 4.77322C1.02317 4.3544 1.56938 4.10601 2.148 4.07975L18.204 0.0672533ZM8.343 4.07825H19.5V2.24825C19.4997 2.13446 19.4736 2.02221 19.4235 1.92002C19.3735 1.81782 19.3008 1.72836 19.2111 1.65841C19.1213 1.58845 19.0168 1.53984 18.9055 1.51625C18.7941 1.49266 18.6789 1.49471 18.5685 1.52225L8.343 4.07825ZM2.25 5.57825C2.05109 5.57825 1.86032 5.65727 1.71967 5.79792C1.57902 5.93858 1.5 6.12934 1.5 6.32825V19.8283C1.5 20.0272 1.57902 20.2179 1.71967 20.3586C1.86032 20.4992 2.05109 20.5783 2.25 20.5783H21.75C21.9489 20.5783 22.1397 20.4992 22.2803 20.3586C22.421 20.2179 22.5 20.0272 22.5 19.8283V6.32825C22.5 6.12934 22.421 5.93858 22.2803 5.79792C22.1397 5.65727 21.9489 5.57825 21.75 5.57825H2.25Z"
          fill="#A533C8"
        />
      </svg>
    );
  };
  const EditIcon: React.FC = () => {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill={index.colors.brand[200]}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 18.0024H3.75L14.81 6.94244L11.06 3.19244L0 14.2524V18.0024ZM2 15.0824L11.06 6.02244L11.98 6.94244L2.92 16.0024H2V15.0824ZM15.37 0.292444C15.2775 0.19974 15.1676 0.126193 15.0466 0.0760114C14.9257 0.02583 14.796 0 14.665 0C14.534 0 14.4043 0.02583 14.2834 0.0760114C14.1624 0.126193 14.0525 0.19974 13.96 0.292444L12.13 2.12244L15.88 5.87244L17.71 4.04244C17.8027 3.94993 17.8762 3.84004 17.9264 3.71907C17.9766 3.59809 18.0024 3.46841 18.0024 3.33744C18.0024 3.20648 17.9766 3.07679 17.9264 2.95582C17.8762 2.83485 17.8027 2.72496 17.71 2.63244L15.37 0.292444Z"
          fill="#A533C8"
        />
      </svg>
    );
  };

  // const HideCardNumber = `• • • •${String(props.cardNo).slice(11, 15)}`;

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedCardType, setSelectedCardType] = useState<string>("");
  const handlePaymentApply = (value: string) => {
    setSelectedCardType(value);
    // Call the callback function with the selected payment method
    onPaymentMethodSelect(value);
  }
  return (
    <Box>
      <Flex display={"flex"} justifyContent={"center"}>
        <Box
          borderRadius={10}
          backgroundColor={index.colors.grey[100]}
          width={600}
          minWidth={300}
          height={"auto"}
          p={5}
        >
          <Flex flexDirection={"column"} gap={2}>
            <Flex flexDirection={"row"} justifyContent={"space-between"}>
              <Box display={"flex"} flexDirection={"row"} gap={2}>
                <PaymentIcon />
                <Text color={index.colors.black}>Payment method</Text>
              </Box>
              <IconButton aria-label="editIcon" onClick={onOpen} variant={"unstyle"}>
              <EditIcon />
              </IconButton>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent color={"black"}>
                  <ModalHeader>Payment Methods</ModalHeader>
                  <ModalBody gap={5}>
                    <RadioGroup>
                      <Flex flexDirection={"column"} gap={5} >
                      <Radio value="1" onChange={() => handlePaymentApply("Visa")}>
                        <Flex flexDirection={"column"}>
                          <Text>Visa</Text>
                          {/* <Text>{HideCardNumber}</Text> */}
                        </Flex>
                        </Radio>

                        <Radio value="3" onChange={() => handlePaymentApply("Cash")}>
                        <Flex flexDirection={"column"}>
                         <Text>Cash</Text>
                        </Flex>
                        </Radio>
                        </Flex>
                    </RadioGroup>
                    <Flex flexDirection={"row"} justifyContent={"center"}>
                    <Button variant={"unstyle"} backgroundColor={index.colors.brand[200]} color={"white"} mt={5} onClick={onClose}>
                      Confirm
                    </Button>
                    </Flex>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Flex>
            <Flex flexDirection={"row"} gap={2} color={index.colors.black}>
              <Flex flexDirection={"column"}>
                <Text>
                  {/* Card Type */}
                  {selectedCardType}
                </Text>

                {/* <Text> */}
                  {/* Card No, passes from payment feature */}
                  {/* {HideCardNumber}
                </Text> */}
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
