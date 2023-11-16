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
} from "@chakra-ui/react";

import { useState } from "react";

import index from "../../../theme/foundations/index";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import colors from "../../../theme/foundations/colors";
import textStyles from "../../../theme/foundations/textStyles";

interface RecommendLocationCard {
  image: string;
  name: string;
  description: string;
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

const PinIcon: React.FC = () => {
  return (
    <svg
      width="19"
      height="17"
      viewBox="0 0 19 17"
      fill={colors.brand[100]}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 0C2.68286 0 0 2.504 0 5.6C0 9.8 6 16 6 16C6 16 12 9.8 12 5.6C12 2.504 9.31714 0 6 0ZM6 7.6C5.43168 7.6 4.88663 7.38929 4.48477 7.01421C4.08291 6.63914 3.85714 6.13043 3.85714 5.6C3.85714 5.06957 4.08291 4.56086 4.48477 4.18579C4.88663 3.81071 5.43168 3.6 6 3.6C6.56832 3.6 7.11337 3.81071 7.51523 4.18579C7.91709 4.56086 8.14286 5.06957 8.14286 5.6C8.14286 6.13043 7.91709 6.63914 7.51523 7.01421C7.11337 7.38929 6.56832 7.6 6 7.6Z"
        fill="#DEBEF6"
      />
    </svg>
  );
};

const StarIcon: React.FC = () => {
  return (
    <svg
      width="17"
      height="18"
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 13.2516L12.517 16L11.451 10.82L15 7.33474L10.3265 6.88526L8.5 2L6.6735 6.88526L2 7.33474L5.549 10.82L4.483 16L8.5 13.2516Z"
        fill="#DEBEF6"
        stroke="#DEBEF6"
      />
    </svg>
  );
};

const RecommendLocation = (props: RecommendLocationCard) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [liked, setLiked] = useState(false);

  // const descriptionToShow = showFullDescription
  //   ? props.description
  //   : `${props.description.slice(0, 50)}...`;

  const descriptionToShow = showFullDescription
    ? props.description
    : typeof props.description === "string"
    ? `${props.description.slice(0, 50)}...`
    : ""; // Handle the case where props.description is not a string

  const handleLikeClick = () => {
    setLiked(!liked);
    if (liked) {
      alert("Remove From Your Favourite location");
    } else if (!liked) {
      alert("Add to Your Favourite location");
    }
  };
  return (
    <Box gap="20px" display={"flex"} flexDirection={"row"} m={2} width={"auto"}>
      <Card backgroundColor={colors.brand[200]} pl={2} pr={2}>
        <CardBody>
          <Center>
            {/* <IconButton
              isRound
              variant="unstyled"
              aria-label="Done"
              position="absolute"
              right={10}
              top={7}
              zIndex={1}
              color={colors.brand[200]}
              backgroundColor={colors.grey[100]}
              onClick={handleLikeClick}
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <HeartIcon isLiked={liked} />
              </Box>
            </IconButton> */}
            <Image
              src={props.image}
              minWidth={320}
              maxHeight={136.25}
              objectFit="cover"
              borderRadius="5px"
            />
          </Center>
          <Stack mt="6" spacing="3">
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <Heading
                fontSize={textStyles.h3.fontSize}
                fontWeight={textStyles.h3.fontWeight}
                color={colors.white}
              >
                {props.name}
              </Heading>
              <Box
                display={"flex"}
                flexDir={"row"}
                justifyContent={"space-between"}
              >
                <Box
                  display={"flex"}
                  flexDir={"row"}
                  justifyContent={"space-between"}
                >
                  <PinIcon />
                  <Text
                    fontSize={textStyles.h3.fontSize}
                    fontWeight={textStyles.h3.fontWeight}
                    color={colors.white}
                  >
                    10.3 km
                  </Text>
                </Box>

                <Box display={"flex"} flexDir={"row"}>
                  <StarIcon />
                  <Text
                    fontSize={textStyles.h3.fontSize}
                    fontWeight={textStyles.h3.fontWeight}
                    color={colors.white}
                  >
                    5.0
                  </Text>
                </Box>
              </Box>
            </Box>
            <Text
              fontSize={textStyles.body3.fontSize}
              fontWeight={textStyles.body3.fontWeight}
              color={colors.grey[200]}
            >
              {descriptionToShow}
            </Text>
          </Stack>
        </CardBody>
        <Stack>
          <CardFooter>
            <ButtonGroup
              fontSize={textStyles.h5.fontSize}
              fontWeight={textStyles.h5.fontWeight}
            >
              <Button
                variant="outline"
                color={colors.brand[100]}
                border="1px solid #DEBEF6"
                width={130}
                height={10}
                onClick={onOpen}
              >
                {showFullDescription ? "Show Less" : "More Info"}
              </Button>
              <Modal
                closeOnOverlayClick={false}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <Box display="flex" justifyContent="center">
                    <ModalHeader
                      fontSize={textStyles.h1.fontSize}
                      fontWeight={textStyles.h1.fontWeight}
                      color={colors.grey[400]}
                    >
                      Location
                    </ModalHeader>
                  </Box>
                  <ModalCloseButton
                    backgroundColor="none"
                    color={colors.grey[400]}
                    mt={2}
                  />
                  <ModalHeader
                    fontSize={textStyles.h1.fontSize}
                    fontWeight={textStyles.h1.fontWeight}
                    color={colors.brand[400]}
                  >
                    {props.name}
                  </ModalHeader>
                  <ModalBody
                    fontSize={textStyles.body2.fontSize}
                    fontWeight={textStyles.body2.fontWeight}
                    color={colors.grey[400]}
                  >
                    {props.description}
                  </ModalBody>
                </ModalContent>
              </Modal>
              <Spacer />
              <Button
                variant="unstyled"
                color={colors.white}
                width={130}
                height={10}
                border="1px solid #DEBEF6"
                backgroundColor="#DEBEF6"
              >
                Reserve Now
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Stack>
      </Card>
    </Box>
  );
};
export default RecommendLocation;
