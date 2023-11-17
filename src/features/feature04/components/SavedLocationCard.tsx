import {
  Box,
  Text,
  Image,
  Flex,
  Card,
  CardBody,
  Stack,
  Heading,
  Center,
  ButtonGroup,
  Button,
  Spacer,
  CardFooter,
  IconButton,
  useDisclosure,
  Divider,
  Input
} from "@chakra-ui/react";

import { useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import colors from "../../../theme/foundations/colors";
import textStyles from "../../../theme/foundations/textStyles";

interface SavedCardProps {
  address: string;
  city: string;
}

const HeartIcon: React.FC<{ isLiked: boolean }> = ({ isLiked }) => {
  return (
    <svg
      width="19"
      height="17"
      viewBox="0 0 19 17"
      fill={isLiked ? "red" : "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.49978 16.1111L8.25117 14.9961C3.81645 11.0514 0.888672 8.44981 0.888672 5.25689C0.888672 2.65526 2.97256 0.611115 5.62478 0.611115C7.12312 0.611115 8.56117 1.29531 9.49978 2.37651C10.4384 1.29531 11.8764 0.611115 13.3748 0.611115C16.027 0.611115 18.1109 2.65526 18.1109 5.25689C18.1109 8.44981 15.1831 11.0514 10.7484 15.0046L9.49978 16.1111Z"
        stroke={isLiked ? "red" : "#A533C8"}
      />
    </svg>
  );
};
const PinIcon: React.FC<{ fillColor: string }> = (props) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 19 17"
      fill={colors.brand[100]}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 0C2.68286 0 0 2.504 0 5.6C0 9.8 6 16 6 16C6 16 12 9.8 12 5.6C12 2.504 9.31714 0 6 0ZM6 7.6C5.43168 7.6 4.88663 7.38929 4.48477 7.01421C4.08291 6.63914 3.85714 6.13043 3.85714 5.6C3.85714 5.06957 4.08291 4.56086 4.48477 4.18579C4.88663 3.81071 5.43168 3.6 6 3.6C6.56832 3.6 7.11337 3.81071 7.51523 4.18579C7.91709 4.56086 8.14286 5.06957 8.14286 5.6C8.14286 6.13043 7.91709 6.63914 7.51523 7.01421C7.11337 7.38929 6.56832 7.6 6 7.6Z"
        fill={props.fillColor}
      />
    </svg>
  );
};
const EditIcon: React.FC = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.3025 7.8925L13.1075 8.6975L5.18 16.625H4.375V15.82L12.3025 7.8925ZM15.4525 2.625C15.2337 2.625 15.0062 2.7125 14.84 2.87875L13.2388 4.48L16.52 7.76125L18.1212 6.16C18.2024 6.07905 18.2667 5.9829 18.3106 5.87705C18.3545 5.77119 18.3771 5.65772 18.3771 5.54313C18.3771 5.42853 18.3545 5.31506 18.3106 5.2092C18.2667 5.10335 18.2024 5.0072 18.1212 4.92625L16.0738 2.87875C15.8988 2.70375 15.68 2.625 15.4525 2.625ZM12.3025 5.41625L2.625 15.0938V18.375H5.90625L15.5837 8.6975L12.3025 5.41625Z"
        fill="#5F0DBB"
      />
    </svg>
  );
};
const DelIcon: React.FC = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.50065 17.4167C5.50065 18.425 6.32565 19.25 7.33398 19.25H14.6673C15.6756 19.25 16.5006 18.425 16.5006 17.4167V6.41667H5.50065V17.4167ZM7.33398 8.25H14.6673V17.4167H7.33398V8.25ZM14.209 3.66667L13.2923 2.75H8.70898L7.79232 3.66667H4.58398V5.5H17.4173V3.66667H14.209Z"
        fill="#5F0DBB"
      />
    </svg>
  );
};
const SavedLocationCard = (props: SavedCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showFullAddress, setShowFullAddress] = useState(false);
  const AddressToShow = showFullAddress
    ? props.address
    : `${props.address.slice(0, 10)}...`;
  return (
    <Box margin={2}>
      <Box
        display={"flex"}
        flexDirection={"row"}
        backgroundColor={colors.grey[100]}
        maxWidth={"348px"}
        maxHeight={"100px"}
        p={3}
        borderRadius={20}
        gap={5}
      >
        <Flex alignItems={"center"}>
          <PinIcon fillColor={colors.brand[300]} />
        </Flex>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignContent={"center"}
          color={colors.black}
        >
          <Box
            fontSize={textStyles.h3.fontSize}
            fontWeight={textStyles.h3.fontWeight}
          >
            {AddressToShow}
          </Box>
          <Box
            fontSize={textStyles.h4.fontSize}
            fontWeight={textStyles.h4.fontWeight}
          >
            {props.city}
          </Box>
          <Spacer />
        </Box>
        <Flex alignItems={"center"}>
          <IconButton
            icon={<EditIcon />}
            aria-label="Call Segun"
            variant={"unstyled"}
            size={"sm"}
            onClick={onOpen}
          />
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bg={colors.brand[400]}>
              <ModalHeader>Edit Your address</ModalHeader>
              <ModalCloseButton pt={5} />
              <Divider borderColor={colors.brand[200]} />
              <ModalBody>
                <Flex flexDir={"row"}>
                  <PinIcon fillColor={colors.brand[100]} />
                  Lorem ipsum dolor sit amet.
                </Flex>
                <br />
                <Text
                  color={colors.white}
                  fontSize={textStyles.h3.fontSize}
                  fontWeight={textStyles.h3.fontWeight}
                >
                  Address Information
                </Text>
                <Stack spacing={3} mt={2}>
                  <Input variant="outline" placeholder="Address" />
                  <Input variant="outline" placeholder="Province" />
                  <Input variant="outline" placeholder="District" />
                  <Input variant="outline" placeholder="Subdistrict" />
                  <Input variant="outline" placeholder="Postcode" />
                </Stack>
              </ModalBody>
              <Divider borderColor={colors.brand[200]} />
              <Flex justifyContent={"center"} m={5}>
              <Button
                variant={"unstyled"}
                backgroundColor={colors.brand[200]}
                color={colors.white}
                p={2}
                pl={10}
                pr={10}
                height={"50px"}
                width={"300px"}
            
              >
                Save and Continue
              </Button>
            </Flex>
            </ModalContent>
          </Modal>
          <IconButton
            icon={<DelIcon />}
            aria-label="Call Segun"
            variant={"unstyled"}
            size={"sm"}
          />
          
        </Flex>
      </Box>
    </Box>
  );
};
export default SavedLocationCard;
