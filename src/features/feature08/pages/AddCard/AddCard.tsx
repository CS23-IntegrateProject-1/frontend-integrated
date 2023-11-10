import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Button,
  Heading,
  Image,
  Flex,
  FormControl,
  Input,
  Divider,
  AbsoluteCenter,
} from "@chakra-ui/react";
import { FC } from "react";

interface ButtonProps {
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  bgHover?: string;
}

export const AddCard: FC<ButtonProps> = ({
  bgColor,
  textColor,
  borderColor,
  bgHover,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      margin={5}
      padding={10}
      position={"relative"}
    >
      <Card
        width="70%"
        backgroundColor="#5F0DBB"
        color="#C5C4C7"
        rounded="lg"
        padding={6}
      >
        <CardHeader
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box flex="1">
            <Heading size="sm" textTransform="uppercase"></Heading>
          </Box>
          <Box paddingRight="10px">
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "100px" }}
              maxH={{ base: "100%", sm: "100px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
              alt="Visa"
            />
          </Box>
        </CardHeader>

        <CardBody>
          <Box>
            <Heading size="lg" textTransform="uppercase" color="white">
              P.CHAMCHOY
            </Heading>
          </Box>
        </CardBody>

        <CardFooter
          display="flex"
          justifyContent="space-between"
          alignItems="flex-end"
          padding={4}
        >
          <Box>
            <Heading size="md" color="white">
              5282 3456 7890 1289
            </Heading>
          </Box>
          <Box>
            <Heading size="md" color="white">
              09/25
            </Heading>
          </Box>
        </CardFooter>
      </Card>

      <Divider marginTop={10} />

      <AbsoluteCenter px='4'>
        Card details
      </AbsoluteCenter>

      <FormControl mb={4} marginTop={5} width={"70%"}>
        <Input
          type="text"
          placeholder="**** **** **** ****"
          color="white"
          borderRadius="md"
          borderColor="white"
        />
      </FormControl>

      <FormControl mb={4} marginTop={5} width={"70%"}>
        <Input
          type="text"
          placeholder="John Doe"
          color="white"
          borderRadius="md"
          borderColor="white"
        />
      </FormControl>

      <Flex justify="space-between" mb={4} marginTop={5}>
        <FormControl flex="1" marginRight={2} width="45%">
          <Input
            type="text"
            placeholder="MM/YY"
            color="white"
            borderRadius="md"
            size={"md"}
          />
        </FormControl>

        <FormControl flex="1" marginLeft={2} width="45%">
          <Input
            type="text"
            placeholder="123"
            color="white"
            borderRadius="md"
            borderColor="white"
            size={"md"}
          />
        </FormControl>
      </Flex>

      <Button
        width="70%"
        height="40px"
        bg={!bgColor ? "brand.200" : bgColor}
        color={!textColor ? "white" : textColor}
        borderColor={!borderColor ? "" : borderColor}
        _hover={{ bg: !bgHover ? "brand.300" : bgHover }}
        textColor="#DEBEF6"
        marginTop={10}
      >
        Apply
      </Button>
    </Box>
  );
};
