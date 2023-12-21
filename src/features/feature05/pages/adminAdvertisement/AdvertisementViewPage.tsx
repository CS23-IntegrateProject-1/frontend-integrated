3;
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Icon,
  IconButton,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { Input } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

import { ChangeEvent, useEffect, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { GetBusinessAdsById } from "../../../../api/Advertisement/GetBusinessAdsById";
import IAd_business from "../../../../interfaces/Advertisement/IAd_business.interface";
import { ApproveAds } from "../../../../api/Advertisement/AdminApproveAdvertisement";
import { RejectAds } from "../../../../api/Advertisement/AdminRejectAdvertisement";

export const AdvertisementViewPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState<IAd_business>();
  const id = Number(useParams<{ id: string }>().id);
  const fetchDatas = async () => {
    const result = await GetBusinessAdsById(id);
    setData(result?.data);
  };
  useEffect(() => {
    fetchDatas();
  }, []);
  const navigate = useNavigate();
  const handleClickReject = () => {
    RejectAds(id);
    navigate(`/admin/advertisement/${id}/reject`);
    location.reload();
  };
  const handleClickConfirm = () => {
    ApproveAds(id);
    navigate("/admin/advertisement");
    location.reload();
  };
  console.log(data);
  // const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setFile(e.target.files[0]);
  //     const previewURL = URL.createObjectURL(e.target.files[0]);
  //     setImagePreview(previewURL);
  //   }
  // };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
    >
      {/* Name * */}
      <Box
        paddingBottom={3}
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
      >
        <Text style={TextStyle.h2} color={"white"}>
          {" "}
          Name *
        </Text>
        <Box bgColor={"white"} padding={"5px"} borderRadius={"5px"}>
          <Text color={"#000000"} paddingLeft={"5px"}>
            {data?.name}
          </Text>
        </Box>
      </Box>

      {/* Description * */}
      <Box
        paddingBottom={3}
        width={"50%"}
        minWidth={"250px"}
        maxWidth={"400px"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Text style={TextStyle.h2} color={"white"}>
          {" "}
          Description *
        </Text>
        <Box bgColor={"white"} padding={"5px"} borderRadius={"5px"}>
          <Text color={"#000000"} paddingLeft={"5px"}>
            {data?.description}
          </Text>
        </Box>
      </Box>

      {/* Starting Date * & Ending Date * */}
      <Box
        paddingBottom={3}
        width={"50%"}
        minWidth={"250px"}
        maxWidth={"400px"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
      >
        <Box mr={"20px"} flex={"1"}>
          <Text style={TextStyle.h2} color={"white"}>
            {" "}
            Starting Date *
          </Text>
          {/* <Input size={"xs"} type="date" color="black" bg={"white"}></Input> */}
          <Box bgColor={"white"} padding={"5px"} borderRadius={"5px"}>
            <Text color={"#000000"} paddingLeft={"5px"}>
              {data?.start_date.substring(0, 10)}
            </Text>
          </Box>
        </Box>
        <Box flex={"1"}>
          <Text style={TextStyle.h2} color={"white"}>
            {" "}
            Ending Date *
          </Text>
          {/* <Input size={"xs"} type="date" color="black" bg={"white"}></Input> */}
          <Box bgColor={"white"} padding={"5px"} borderRadius={"5px"}>
            <Text color={"#000000"} paddingLeft={"5px"}>
              {data?.end_date.substring(0, 10)}
            </Text>
          </Box>
        </Box>
      </Box>

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
        <FormLabel style={TextStyle.h2} color={"white"} paddingBottom={1}>
          {" "}
          Images
        </FormLabel>
        <Image
          src={import.meta.env.VITE_BACKEND_URL + data?.image_url}
          alt="image"
        />
      </FormControl>
      {/* Target customer */}
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
          {" "}
          Target customer
        </FormLabel>
        <Box bgColor={"white"} padding={"5px"} borderRadius={"5px"}>
          <Text color={"#000000"} paddingLeft={"5px"}>
            {data?.customer_type}
          </Text>
        </Box>
      </FormControl>

      {/* Target group */}
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
          {" "}
          Target group
        </FormLabel>
        <Box bgColor={"white"} padding={"5px"} borderRadius={"5px"}>
          <Text color={"#000000"} paddingLeft={"5px"}>
            {data?.target_group}
          </Text>
        </Box>
      </FormControl>

      <Box
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
        paddingBottom={5}
      >
        <Text style={TextStyle.h2} color={"white"}>
          {" "}
          Advertisement plan
        </Text>
        <Box bgColor={"white"} padding={"5px"} borderRadius={"5px"}>
          <Text color={"#000000"} paddingLeft={"5px"}>
            {data?.cost}
          </Text>
        </Box>
      </Box>

    </Box>
  );
};
