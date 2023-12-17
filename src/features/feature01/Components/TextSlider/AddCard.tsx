import {
  Box,
  Radio,
  InputRightElement,
  Text,
  InputGroup,
  Stack,
} from "@chakra-ui/react";
import { FC } from "react";
interface PaymentCardProps {
  cardType: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  bank: string;
  card_no: string;
  country: string;
  creditCardId: number;
  cvc: number;
  exp: string;
  name: string;
  userId: number;
}
export const AddCard: FC<PaymentCardProps> = (props) => {
    function maskCardNumber(cardNumber: string): string {
        const regex = /\d{4}$/; // Regular expression to match the last four digits
        const maskedCardNumber = cardNumber.replace(regex, (match) => '****' + match);
        return maskedCardNumber;
      }
      const cardNumber = props.card_no;
      const maskedCardNumber = maskCardNumber(cardNumber);
      console.log(maskedCardNumber); // Output: ****3456
            
  return (
    <Box>
      {/* radio group */}
      <InputGroup
        mb={3}
        pt={2}
        pb={3}
        size="md"
        border={"1px solid"}
        borderColor={"brand.100"}
        borderRadius={"7"}
      >
        {/* visa img */}
        {/* visa info */}
        <Stack pt={1} ml={10} direction={"row"}>
          <Box>
            {props.cardType === "visa" ? (
              <img src="https://img.icons8.com/color/48/000000/visa.png" />
            ) : (
              <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" />
            )}
          </Box>
          <Stack
            pl={15}
            direction={"column"}
            fontSize={{ base: "TextStyle.body2", sm: "TextStyle.body3" }}
          >
            <Text>{props.cardType}</Text>
            <Text mt={-3}>{maskedCardNumber}</Text>
          </Stack>
        </Stack>
        <InputRightElement width="4.5rem">
          <Radio
          onChange={() => props.setType(props.creditCardId.toString())}
            mt={8}
            borderColor={"brand.200"}
            size="lg"
            colorScheme="brand.200"
            value={props.creditCardId.toString()}
            id={props.creditCardId.toString()}
          ></Radio>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};
