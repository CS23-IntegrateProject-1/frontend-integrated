import { NavLink } from "react-router-dom";
import {
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Box,
  Text,

} from "@chakra-ui/react";
import { useState } from "react";
import { StarReviewD } from "./F3_RVPCs/StarReviewD";

interface VenueData {
  id: number;
  venueId: number;
  name: string;
  description: string;
  category: string;
  capacity: string;
  location: string;
  score: string;
  website_url: string;
}

export const ReviewDelivery = () => {
  const [input, setInput] = useState("");
  const [inputFQ, setInputFQ] = useState("");
  const [inputDT, setInputDT] = useState("");
  const [inputOA, setInputOA] = useState("");
  const [inputCS, setInputCS] = useState("");
  const [inputRR, setInputRR] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const isError = input === "";

  // const {
  //   isLoading: venueLoading,
  //   isError: venueError,
  //   data: venueData,
  // } = useQuery<VenueData[]>({
  //   queryKey: ["getVen"],
  //   queryFn: async () => {
  //     const { data } = await Axios.get("/feature3/ven");
  //     return data;
  //   },
  // });

  // if (venueLoading) {
  //   return (
  //     <span>
  //       <FullPageLoader />
  //     </span>
  //   );
  // }

  // if (venueError) {
  //   return <span>An error occurred: </span>;
  // }

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
      <StarReviewD />
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
          <FormHelperText></FormHelperText>
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
