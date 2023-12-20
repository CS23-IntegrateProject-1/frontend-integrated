import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Icon,
  Select,
  Stack,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
// import { Axios } from "../../../../AxiosInstance";

// interface AdvertisementProps {
//   name: string;
//   description: string;
//   startingDate: Date | null;
//   endingDate: Date | null;
//   images: string;
//   targetCustomer: string;
//   targetGroup: string;
//   advertisementPlan: number;
// }
export const CreateNewRedeemPage = () => {
  const navigate = useNavigate();
  //  const { isOpen, onOpen, onClose } = useDisclosure()
  // const deleteModal = useDisclosure();
  // const submitModal = useDisclosure();
  const handleClickSubmit = () => {
    navigate("/business/redeem/status");
  };

  const [file, setFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  // const [advertise, setAdvertise] = useState<AdvertisementProps>({
  // 	name: "",
  // 	description: "",
  // 	images: "",
  // 	startingDate: null,
  // 	endingDate: null,
  // 	targetCustomer: "",
  // 	targetGroup: "",
  // 	advertisementPlan: 0,
  // });
  console.log(file);
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      const previewURL = URL.createObjectURL(e.target.files[0]);
      setImagePreview(previewURL);
    }
  };
  const handleCloseImage = () => {
    setImagePreview(null);
  };
  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  //   const handleSubmit = async () => {
  //     try {
  //       await Axios.post;
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
    >
      {/* Title */}
      <FormControl
        isRequired
        paddingBottom={3}
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
      >
        <FormLabel style={TextStyle.h2} color={"white"}>
          {" "}
          Titile
        </FormLabel>
        <Input
          variant="name"
          style={{ width: "auto" }}
          color={"white"}
          bgColor={"#5F0DBB"}
          borderColor={"#5F0DBB"}
          type="text"
        />
      </FormControl>

      {/* Description * */}
      <FormControl
        isRequired
        paddingBottom={3}
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
      >
        <FormLabel style={TextStyle.h2} color={"white"}>
          {" "}
          Description
        </FormLabel>
        <Input
          variant="name"
          style={{ width: "auto" }}
          color={"white"}
          bgColor={"#5F0DBB"}
          borderColor={"#5F0DBB"}
          type="text"
        />
      </FormControl>

      {/* Points * */}
      <FormControl
        isRequired
        paddingBottom={3}
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
      >
        <FormLabel style={TextStyle.h2} color={"white"}>
          {" "}
          Points
        </FormLabel>
        <Input
          variant="name"
          style={{ width: "auto" }}
          color={"white"}
          bgColor={"#5F0DBB"}
          borderColor={"#5F0DBB"}
          type="text"
        />
      </FormControl>

      {/* Voucher */}
      <FormControl
        isRequired
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
        paddingBottom={3}
      >
        <FormLabel style={TextStyle.h2} color={"white"} paddingBottom={1}>
          {" "}
          Voucher
        </FormLabel>
        <Select bgColor={"#5F0DBB"} borderColor={"#5F0DBB"} placeholder=" ">
          <option value="option1">10%</option>
          <option value="option2">50%</option>
          <option value="option2">100 bath</option>
          <option value="option2">Free drink</option>
        </Select>
      </FormControl>

      {/* Tier */}
      <FormControl
        isRequired
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
        paddingBottom={3}
      >
        <FormLabel style={TextStyle.h2} color={"white"} paddingBottom={1}>
          {" "}
          Member tier
        </FormLabel>
        <Select bgColor={"#5F0DBB"} borderColor={"#5F0DBB"} placeholder=" ">
          <option value="regular">Regular</option>
          <option value="silver">Silver</option>
          <option value="gold">Gold</option>
          <option value="platinum">Platinum</option>
        </Select>
      </FormControl>

      {/* Image */}
      {imagePreview ? (
        <FormControl
          isRequired
          width="50%"
          minWidth="250px"
          maxWidth="400px"
          display="flex"
          flexDirection={"column"}
          paddingBottom={3}
        >
          <FormLabel style={TextStyle.h2} color={"white"}>
            Image
          </FormLabel>

          <Box
            position={"relative"}
            overflow={"hidden"}
            width={"100%"}
            minWidth={"250px"}
            maxWidth={"400px"}
            height={"auto"}
            alignSelf={"center"}
          >
            <IconButton
              aria-label="close"
              minWidth={"15px"}
              height={"15px"}
              position={"absolute"}
              top={0}
              right={0}
              as={AiOutlineClose}
              onClick={handleCloseImage}
            ></IconButton>
            <Image
              src={`${import.meta.env.VITE_BACKEND_URL}${imagePreview}` || ""}
              alt={"image"}
              width={"100%"}
            ></Image>
          </Box>
        </FormControl>
      ) : (
        <FormControl
          isRequired
          width="50%"
          minWidth="250px"
          maxWidth="400px"
          display="flex"
          flexDirection={"column"}
          paddingBottom={3}
        >
          <FormLabel style={TextStyle.h2} color={"white"} paddingBottom={1}>
            {" "}
            Upload Image
          </FormLabel>
          <Stack spacing={2} direction="column">
            {}
            <Center
              width={"auto"}
              height={"100"}
              bg={"#5F0DBB"}
              borderRadius={5}
              cursor={"pointer"}
            >
              <Input
                onChange={handleFileChange}
                type="file"
                opacity={0}
                height={"100%"}
                w={"100%"}
                pos={"absolute"}
              ></Input>
              <Icon
                as={BiImageAdd}
                color={"#FFFFFF"}
                width={"auto"}
                height={"8"}
              ></Icon>
            </Center>
          </Stack>
        </FormControl>
      )}
      <Box
      // display="flex"
      // flexDirection="row"
      // justifyContent="flex-end" // Align to the bottom
      //minHeight="100vh" // Ensure the container takes at least the full height of the viewport
      >
        <Box
          width="100%"
          minWidth="250px"
          maxWidth="400px"
          display="flex"
          flexDirection={"row"}
          //paddingBottom={3}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button
            h={"40px"}
            backgroundColor="#A533C8"
            variant="solid"
            width="100%"
            color="white"
            onClick={handleClickSubmit}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
