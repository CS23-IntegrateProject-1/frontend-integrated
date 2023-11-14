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
  useColorModeValue,
  Text,
  ChakraProvider,
} from "@chakra-ui/react";
import React, { useState, FC } from "react";

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
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let inputCardNumber = event.target.value;

    // Remove non-digit characters
    inputCardNumber = inputCardNumber.replace(/\D/g, "");

    // Limit to 16 digits
    inputCardNumber = inputCardNumber.slice(0, 16);

    // Separate every 4 digits
    inputCardNumber = inputCardNumber.replace(/(\d{4})/g, "$1 ");

    setCardNumber(inputCardNumber.trim());


    validateCardDetails(inputCardNumber.trim(), expiryDate, cvc);

    // Perform simple card number validation
    const isValidCard = /^\d{16}$/.test(inputCardNumber.replace(/\s/g, ""));
    setIsValid(isValidCard);
  };

  const handleCvcChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputCvc = event.target.value;

    // Remove non-digit characters
    inputCvc = inputCvc.replace(/\D/g, "");

    // Limit to 3 digits
    inputCvc = inputCvc.slice(0, 3);

    setCvc(inputCvc);

    validateCardDetails(cardNumber, expiryDate, inputCvc);
  };

  const validateCardDetails = (number: string, date: string, cvc: string) => {
    // Perform simple card details validation
    const isValidCard = /^\d{16}$/.test(number.replace(/\s/g, ""));
    const isValidExpiryDate = /^(0[1-9]|1[0-2])\/\d{2}$/.test(date);
    const isValidCvc = /^\d{3}$/.test(cvc);

    setIsValid(isValidCard && isValidExpiryDate && isValidCvc);
  };

  const handleExpiryDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let inputExpiryDate = event.target.value;

    // Remove non-digit characters
    inputExpiryDate = inputExpiryDate.replace(/\D/g, "");

    // Limit to 4 characters
    inputExpiryDate = inputExpiryDate.slice(0, 4);

    // Separate MM/YY format
    if (inputExpiryDate.length >= 2) {
      inputExpiryDate = `${inputExpiryDate.slice(0, 2)}/${inputExpiryDate.slice(
        2
      )}`;
    }

    setExpiryDate(inputExpiryDate);

    // Perform simple expiry date validation
    const isValidExpiryDate = /^(0[1-9]|1[0-2])\/\d{2}$/.test(inputExpiryDate);
    setIsValid(isValidExpiryDate);
  };
    const handleSubmit = () => {
      if (isValid) {
        console.log("card is valid");
      } else {
        console.log("card is not valid");
      }
    };

    const buttonColor = useColorModeValue("blue.500", "blue.200");
  return (
    <ChakraProvider>
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
          height={"100%"}
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
            alignItems="center"
            padding={2}
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

        <Divider marginTop={20} />

        <AbsoluteCenter textColor={"white"} px="4">Card details</AbsoluteCenter>

        <FormControl isRequired mb={4} marginTop={10} width={"70%"}>
          <Input
            type="text"
            placeholder="**** **** **** ****"
            color="white"
            borderRadius="md"
            borderColor="white"
            value={cardNumber}
            onChange={handleCardNumberChange}
          />
          <Text color={isValid ? "green.500" : "red.500"} fontSize="sm">
            {isValid ? "Card is valid" : "Card is not valid"}
          </Text>
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

        <Flex>
          <FormControl flex="1" marginRight={2}>
            <Input
              type="text"
              placeholder="MM/YY"
              color="white"
              borderRadius="md"
              size={"md"}
              value={expiryDate}
              onChange={handleExpiryDateChange}
            />
            <Text color={isValid ? "green.500" : "red.500"} fontSize="sm">
              {isValid
                ? "Card and expiry date are valid"
                : "Card or expiry date is not valid"}
            </Text>
          </FormControl>

          <FormControl flex="1" marginLeft={2}>
            <Input
              type="text"
              placeholder="123"
              color="white"
              borderRadius="md"
              borderColor="white"
              size={"md"}
              value={cvc}
              onChange={handleCvcChange}
            />
          </FormControl>
        </Flex>

        <Button
          width="70%"
          height="40px"
          backgroundColor={buttonColor}
          bg={!bgColor ? "brand.200" : bgColor}
          color={!textColor ? "white" : textColor}
          borderColor={!borderColor ? "" : borderColor}
          _hover={{ bg: !bgHover ? "brand.300" : bgHover }}
          textColor="#DEBEF6"
          marginTop={10}
          onClick={handleSubmit}
          disabled={!isValid}
        >
          Apply
        </Button>
      </Box>
    </ChakraProvider>
  );
};
