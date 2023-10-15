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
} from "@chakra-ui/react";
import colors from "../../../theme/foundations/colors";
import textStyles from "../../../theme/foundations/textStyles";
import { StarIcon } from "@chakra-ui/icons";

interface CardProps {
  image: string;
  name: string;
  description: string;
}
const HeartIcon: React.FC = () => {
  return (
    <svg
      width="19"
      height="17"
      viewBox="0 0 19 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.49978 16.1111L8.25117 14.9961C3.81645 11.0514 0.888672 8.44981 0.888672 5.25689C0.888672 2.65526 2.97256 0.611115 5.62478 0.611115C7.12312 0.611115 8.56117 1.29531 9.49978 2.37651C10.4384 1.29531 11.8764 0.611115 13.3748 0.611115C16.027 0.611115 18.1109 2.65526 18.1109 5.25689C18.1109 8.44981 15.1831 11.0514 10.7484 15.0046L9.49978 16.1111Z"
        stroke="#A533C8"
      />
    </svg>
  );
};
const Cards = (props: CardProps) => {
  return (
    <Box>
      {/* <Box
        height="280px"
        width="350px"
        backgroundColor={colors.brand[200]}
        borderRadius={"10px"}
      >

        <Flex direction="column" alignItems="center">
          <Image src={props.image} minWidth={320} maxHeight={136.25} objectFit={"cover"} m={5} borderRadius="5px"/>
        </Flex>
        <Flex direction="column" alignItems={"flex-start"} ml={4}>
        <Text fontSize={textStyles.h3.fontSize} fontWeight={textStyles.h3.fontWeight}>{props.name}</Text>
        <Text fontSize={textStyles.body3.fontSize} fontWeight={textStyles.body3.fontWeight} color={colors.grey[200]}>{props.description}</Text>
        </Flex>

        <Box display="flex" flexDirection="row">
            <Button></Button>
        </Box>
      </Box> */}
      <Card maxW="sm" backgroundColor={colors.brand[200]} pl={4} pr={4}>
        <CardBody>
          {/* <Image src={props.image} minWidth={320} maxHeight={136.25} objectFit={"cover"} borderRadius="5px"/> */}
          <Center>
            <IconButton
              isRound
              variant="unstyled"
              aria-label="Done"
              position="absolute"
              right={10}
              top={7}
              zIndex={1}
              color={colors.brand[200]}
              backgroundColor={colors.grey[100]}
            >
              <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
              <HeartIcon/>
              </Box>
            </IconButton>
            <Image
              src={props.image}
              minWidth={320}
              maxHeight={136.25}
              objectFit="cover"
              borderRadius="5px"
            />
          </Center>
          <Stack mt="6" spacing="3">
            <Heading
              fontSize={textStyles.h3.fontSize}
              fontWeight={textStyles.h3.fontWeight}
              color={colors.white}
            >
              {props.name}
            </Heading>
            <Text
              fontSize={textStyles.body3.fontSize}
              fontWeight={textStyles.body3.fontWeight}
              color={colors.grey[200]}
            >
              {props.description}
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
                variant={"outline"}
                color={colors.brand[100]}
                border="1px solid #DEBEF6"
                width={130}
                height={10}
              >
                More Info
              </Button>
              <Spacer />
              <Button
                variant={"unstyled"}
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

export default Cards;
