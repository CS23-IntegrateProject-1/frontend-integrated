import { Box,Radio, InputRightElement, Text, InputGroup, Stack } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction } from "react";
interface PaymentCardProps {
    cardType: string;
    cardId: string;
    cardNo: string;
    setType: React.Dispatch<React.SetStateAction<string>>;
}
export const AddCard : FC<PaymentCardProps> = (props) => {
    return(
        <Box>
        {/* radio group */}
        <InputGroup mb={3} pt={2} pb={3} size="md" border={"1px solid"}
            borderColor={"brand.100"}
            borderRadius={"7"}>
          {/* visa img */}
          {/* visa info */}
          <Stack pt={1} ml={10} direction={'row'}>
            <Box>
                {props.cardType === "visa" ? 
                <img src="https://img.icons8.com/color/48/000000/visa.png"/> : 
                <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png"/>}
            </Box>
            <Stack pl={15} direction={"column"} fontSize={{ base: "TextStyle.body2", sm: "TextStyle.body3" }}>
              <Text>{props.cardType}</Text>
              <Text mt={-3}>{props.cardNo ? props.cardNo : ". . . . 1345"}</Text>
            </Stack>
          </Stack>
          <InputRightElement width="4.5rem">
            <Radio onChange={() => props.setType(props.cardType)} mt={8} borderColor={"brand.200"}  size='lg' colorScheme="brand.200" value={props.cardType} id={props.cardId}></Radio>
          </InputRightElement>
        </InputGroup>
        </Box>
    );
};

