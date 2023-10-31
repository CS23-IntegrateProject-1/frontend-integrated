import {
  Box,
  Button,
  Select,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { TextStyle } from "../../../theme/TextStyle";
import { Input } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export const AdvertisementCriteria = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
    >
      {/* Criteria * */}
      <Box
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
      >
          <Text style={TextStyle.h1} color={"white"} paddingBottom={3}>
            {" "}
            Advertisement criteria
          </Text>  

          {/* 1 */}
        <Box paddingBottom={3} display="flex" flexDirection={"column"}>
          <Text style={TextStyle.h2} color={"white"}>
            {" "}
            Truthful and Transparent Advertising:
          </Text>
          <Text style={TextStyle.h4} color={"white"}>
            {" "}
            Ensure that all advertising content, whether on your website, social
            media, flyers, or other platforms, accurately represents your
            products, services, and promotions. Avoid false or exaggerated
            claims.
          </Text>
        </Box>

         {/* 2 */}
         <Box paddingBottom={3} display="flex" flexDirection={"column"}>
          <Text style={TextStyle.h2} color={"white"}>
            {" "}
            Intellectual Property Rights:
          </Text>
          <Text style={TextStyle.h4} color={"white"}>
            {" "}
            Respect intellectual property rights when creating and using marketing materials. Do not use copyrighted images, logos, or slogans without proper authorization.
          </Text>
        </Box>

         {/* 3 */}
         <Box paddingBottom={3} display="flex" flexDirection={"column"}>
          <Text style={TextStyle.h2} color={"white"}>
            {" "}
            Privacy and Data Protection:
          </Text>
          <Text style={TextStyle.h4} color={"white"}>
            {" "}
            Safeguard customer data and ensure compliance with data protection laws, such as the General Data Protection Regulation (GDPR) in the European Union or equivalent regulations in your region.
          </Text>
        </Box>

         {/* 4 */}
         <Box paddingBottom={3} display="flex" flexDirection={"column"}>
          <Text style={TextStyle.h2} color={"white"}>
            {" "}
            Avoid Discriminatory Content:
          </Text>
          <Text style={TextStyle.h4} color={"white"}>
            {" "}
            Refrain from using discriminatory language or imagery in advertising materials. Promote diversity and inclusivity in your marketing campaigns.
          </Text>
        </Box>

         {/* 5 */}
         <Box paddingBottom={3} display="flex" flexDirection={"column"}>
          <Text style={TextStyle.h2} color={"white"}>
            {" "}
            Environmental Claims:
          </Text>
          <Text style={TextStyle.h4} color={"white"}>
            {" "}
            If you make environmental claims (e.g., "eco-friendly," "sustainable"), ensure they are accurate and substantiated. Avoid greenwashing, which involves exaggerating or making false claims about environmental practices.
          </Text>
        </Box>

         {/* 6 */}
         <Box paddingBottom={3} display="flex" flexDirection={"column"}>
          <Text style={TextStyle.h2} color={"white"}>
            {" "}
            Truthful and Transparent Advertising:
          </Text>
          <Text style={TextStyle.h4} color={"white"}>
            {" "}
            Ensure that all advertising content, whether on your website, social
            media, flyers, or other platforms, accurately represents your
            products, services, and promotions. Avoid false or exaggerated
            claims.
          </Text>
        </Box>

         {/* 7 */}
         <Box paddingBottom={3} display="flex" flexDirection={"column"}>
          <Text style={TextStyle.h2} color={"white"}>
            {" "}
            Truthful and Transparent Advertising:
          </Text>
          <Text style={TextStyle.h4} color={"white"}>
            {" "}
            Ensure that all advertising content, whether on your website, social
            media, flyers, or other platforms, accurately represents your
            products, services, and promotions. Avoid false or exaggerated
            claims.
          </Text>
        </Box>

         {/* 8 */}
         <Box paddingBottom={3} display="flex" flexDirection={"column"}>
          <Text style={TextStyle.h2} color={"white"}>
            {" "}
            Truthful and Transparent Advertising:
          </Text>
          <Text style={TextStyle.h4} color={"white"}>
            {" "}
            Ensure that all advertising content, whether on your website, social
            media, flyers, or other platforms, accurately represents your
            products, services, and promotions. Avoid false or exaggerated
            claims.
          </Text>
        </Box>

         {/* 9 */}
         <Box paddingBottom={3} display="flex" flexDirection={"column"}>
          <Text style={TextStyle.h2} color={"white"}>
            {" "}
            Truthful and Transparent Advertising:
          </Text>
          <Text style={TextStyle.h4} color={"white"}>
            {" "}
            Ensure that all advertising content, whether on your website, social
            media, flyers, or other platforms, accurately represents your
            products, services, and promotions. Avoid false or exaggerated
            claims.
          </Text>
        </Box>

         {/* 10 */}
         <Box paddingBottom={3} display="flex" flexDirection={"column"}>
          <Text style={TextStyle.h2} color={"white"}>
            {" "}
            Truthful and Transparent Advertising:
          </Text>
          <Text style={TextStyle.h4} color={"white"}>
            {" "}
            Ensure that all advertising content, whether on your website, social
            media, flyers, or other platforms, accurately represents your
            products, services, and promotions. Avoid false or exaggerated
            claims.
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
          Create
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bgColor={"#DEBEF6"} color={"#200944"}>
            <ModalHeader mt={3}>The request has been approved</ModalHeader>
            <ModalCloseButton />
            <ModalFooter>
              <Button bgColor={"white"} color={"#200944"} mr={5} width="30%">
                Print
              </Button>
              <Button
                bgColor={"#A533C8"}
                mr={3}
                onClick={onClose}
                color={"white"}
                width="30%"
              >
                Send Mail
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
      </Box>
    </Box>
  );
};
