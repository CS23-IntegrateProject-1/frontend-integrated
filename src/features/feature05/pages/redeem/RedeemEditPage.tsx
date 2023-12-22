import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  useDisclosure,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { Input } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Axios } from "../../../../AxiosInstance";
import { useQuery } from "@tanstack/react-query";
import { fetchRedeem } from "../../../../api/Redeem/GetRedeembyRedeemId";

export const RedeemEditPage = () => {
  const navigate = useNavigate();
  const { redeemId } = useParams();
  const deleteModal = useDisclosure();


  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [memberTier, setMemberTier] = useState<string>("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const RedeemData = useQuery({
    queryKey: ["redeem"],
    queryFn: () => fetchRedeem(redeemId ?? ""),
    onSuccess: (data) => {
      // Set default values once the data is successfully fetched
      setTitle(data.title);
      console.log(title);
      setDescription(data.description);
      console.log(description);
      setMemberTier(data.memberTier.toString());
      console.log(memberTier);
      setImagePreview(data.image_url);
    },
  });
  console.log(RedeemData.data);

  const deleteRedeem = async () => {
    try {
      const result = await Axios.delete(`/feature5/DeleteRedeem/${redeemId}`);
      console.log(result.data);
      navigate("/business/redeem/status");
    } catch (error) {
      console.error("Error deleting advertisement:", error);
    }
  };
  
  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const getMemberTierText = () => {
    if (memberTier == "1") {
      return 'Regular';
    } else if (memberTier == "2") {
      return 'Silver';
    } else if (memberTier == "3") {
      return 'Gold';
    }else if (memberTier == "4") {
      return 'Platinum';

    }
  };


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
          value={title}
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
          value={description}
        />
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
        <Input
          bgColor={"#5F0DBB"}
          borderColor={"#5F0DBB"}
          placeholder=" "
          value={getMemberTierText()}
        >
        </Input>
      </FormControl>

      {/* Image */}
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
       
          <Image
            src={`${import.meta.env.VITE_BACKEND_URL}${imagePreview}` || ""}
            alt={"image"}
            width={"100%"}
          ></Image>
        </Box>
      </FormControl>
      <Button
          h={"40px"}
          colorScheme="gray"
          variant="solid"
          width="50%"
          color="#A533C8"
          onClick={deleteModal.onOpen}
          marginRight={3}
        >
          Delete
        </Button>
        <Modal isOpen={deleteModal.isOpen} onClose={deleteModal.onClose}>
          <ModalOverlay />
          <ModalContent bgColor={"#DEBEF6"} color={"#200944"}>
            <ModalHeader mt={3}>Delete redeem</ModalHeader>
            <ModalCloseButton />
            <ModalFooter>
              
              <Button
                bgColor={"#A533C8"}
                mr={3}
                onClick={deleteRedeem}
                color={"white"}
                width="30%"
              >
                Delete
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </Box>
  );
};
