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
import { useEffect, useState } from "react";
import { StarReviewR } from "./F3_RVPCs/StarReviewR";

import { Axios } from "../../../../AxiosInstance";
import { useParams } from "react-router-dom";


export const ReviewReservation = () => {
  const [input, setInput] = useState("");
  const [rating, setRating] = useState(0);

  const { branchId } = useParams();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

    useEffect(() => {
      console.log(rating);
    },[rating])

  const isError = input === "";

  const handleSubmit = async () => {
    try {
      await Axios.post(`/feature3/ReviewReservation/${branchId}`, {
        rating,
        review: input,
        branchId: 1,
      });
      console.log("Review posted successfully!");

    } catch (error) {
      console.error("Error posting review:", error);
    }
  };

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
      <StarReviewR setAvgRating={setRating}/>
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
      <NavLink to={`/Reviews/${branchId}`}>
      <Button
        variant="solid"
        textColor="white"
        bgColor="brand.300"
        _hover={{ bgColor: "brand.100", textColor: "black" }}
        w="200px"
        onClick={handleSubmit}
        isDisabled={input === "" || rating < 1}
      >
        Confirm
      </Button>
      </NavLink>
    </Flex>
  );
};

