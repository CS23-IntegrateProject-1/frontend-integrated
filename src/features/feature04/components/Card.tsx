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
  ButtonGroup,Button
} from "@chakra-ui/react";
import colors from "../../../theme/foundations/colors";
import textStyles from "../../../theme/foundations/textStyles";

interface CardProps {
  image: string;
  name: string;
  description: string;
}

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
      <Card maxW="md" backgroundColor={colors.brand[200]}>
        <CardBody>
          {/* <Image src={props.image} minWidth={320} maxHeight={136.25} objectFit={"cover"} borderRadius="5px"/> */}
          <Center>
            <Image
              src={props.image}
              minWidth={320}
              maxHeight={136.25}
              objectFit="cover"
              borderRadius="5px"
            />
          </Center>
          <Stack mt="6" spacing="3" ml={4}>
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
            <Stack>
            <ButtonGroup fontSize={textStyles.h5.fontSize}>
                <Button variant={"outline"}>More Info</Button>
                <Button>Reserve Now</Button>
            </ButtonGroup>
          </Stack>
          </Stack>
          
        </CardBody>
      </Card>
    </Box>
  );
};

export default Cards;
