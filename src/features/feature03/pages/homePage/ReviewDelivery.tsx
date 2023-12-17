import { useNavigate } from "react-router-dom";
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
import { StarReviewD } from "./F3_RVPCs/StarReviewD";

import { Axios } from "../../../../AxiosInstance";
import { useParams } from "react-router-dom";


export const ReviewDelivery = () => {
  const [input, setInput] = useState("");
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const { branchId } = useParams();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

    useEffect(() => {
      console.log(rating);
    },[rating])

  const isError = input === "";

  const handleSubmit = async () => {
    try {
      await Axios.post(`/feature3/ReviewDelivery/${branchId}`, {
        rating,
        review: input,
        branchId: branchId,
      });
      console.log("Review posted successfully!");
      navigate(`/Reviews/${branchId}`, { replace: true})
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
      <StarReviewD setAvgRating={setRating} />
      <FormControl isInvalid={isError} mt="5" mb="5">
        <FormLabel>Comment</FormLabel>
        <Input
          isInvalid={isError}
          borderColor="white"
          focusBorderColor="brand.300"
          errorBorderColor="red.300"
          type="text"
          value={input}
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText></FormHelperText>
        ) : (
          <FormErrorMessage borderColor="red" textColor="red">*Required</FormErrorMessage>
        )}
      </FormControl>
      <Button
        variant="solid"
        textColor="white"
        bgColor="brand.300"
        _hover={{ bgColor: "brand.100", textColor: "black" }}
        w="200px"
        onClick={handleSubmit}
        isDisabled={input === "" || rating === 0}
        
      >
        Confirm
      </Button>
    </Flex>
  );
};
