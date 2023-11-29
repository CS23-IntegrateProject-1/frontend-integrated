import { NavLink } from "react-router-dom";
import {
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { StarReviewR } from "./F3_RVPCs/StarReviewR";
import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../../../AxiosInstance";
import { FullPageLoader } from "../../../../components/Loader/FullPageLoader";


export const ReviewReservation = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const isError = input === "";

  return (
    <Flex
      w="100%"
      pb="30px"
      direction="column"
      justify="center"
      align="center"
      pl={{ base: "0", lg: "300" }}
      pr={{ base: "0", lg: "300" }}
    >
      <StarReviewR />
      <FormControl isInvalid={isError} mt="5" mb="5">
        <FormLabel>Comment</FormLabel>
        <Input
          isInvalid={isError}
          borderColor="white"
          focusBorderColor="brand.300"
          errorBorderColor="red"
          type="email"
          value={input}
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText>Tell us what you think</FormHelperText>
        ) : (
          <FormErrorMessage textColor="red">*Required</FormErrorMessage>
        )}
      </FormControl>
      <Button
        variant="solid"
        textColor="white"
        bgColor="brand.300"
        _hover={{ bgColor: "brand.100", textColor: "black" }}
        w="200px"
        mt={{ base: "80", lg: "40" }}
      >
        Confirm
      </Button>
    </Flex>
  );
};

