/* eslint-disable react-hooks/exhaustive-deps */
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
import { Radio, RadioGroup } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Axios } from "../../../../AxiosInstance";

interface AdvertisementProps {
  name: string;
  description: string;
  startingDate: Date | null;
  endingDate: Date | null;
  images: string;
  targetCustomer: string;
  targetGroup: string;
  advertisementPlan: number;
}
export const AdvertisementIDEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const deleteModal = useDisclosure();
  const submitModal = useDisclosure();
  const [file, setFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [advertise, setAdvertise] = useState<AdvertisementProps>({
    name: "",
    description: "",
    images: "",
    startingDate: null,
    endingDate: null,
    targetCustomer: "",
    targetGroup: "",
    advertisementPlan: 0,
  });

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
    fetchPlaceHolder();
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, []);

  const fetchPlaceHolder = async () => {
    try {
      const { data } = await Axios.get(`/feature5/AdBSN/${id}`);
      setAdvertise((prevAdvertise) => ({
        ...prevAdvertise,
        name: data.name,
        description: data.description,
        images: data.image_url,
        startingDate: data.start_date,
        endingDate: data.end_date,
        targetCustomer: data.costumer_type,
        targetGroup: data.target_group,
        advertisementPlan: parseInt(data.cost),
      }));
    } catch (e) {
      console.error(e);
    }
  };

  const deleteAdvertisement = async () => {
    try {
      const result = await Axios.delete(`/feature5/DeleteAdBSN/${id}`);
      console.log(result.data);
    } catch (error) {
      console.error("Error deleting advertisement:", error);
    }
  };

  const handleClickSubmit = async () => {
    try {
      await deleteAdvertisement();
      navigate("/business/advertisement/status");
    } catch (error) {
      console.error(error);
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
          Name
        </FormLabel>
        <Input
          variant="name"
          value={advertise.name}
          style={{ width: "auto" }}
          color={"white"}
          bgColor={"#5F0DBB"}
          borderColor={"#5F0DBB"}
          type="text"
          onChange={(e) => setAdvertise({ ...advertise, name: e.target.value })}
        />
      </FormControl>
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
          value={advertise.description}
          style={{ width: "auto" }}
          color={"white"}
          bgColor={"#5F0DBB"}
          borderColor={"#5F0DBB"}
          type="text"
          onChange={(e) =>
            setAdvertise({ ...advertise, description: e.target.value })
          }
        />
      </FormControl>
      <FormControl
        isRequired
        paddingBottom={3}
        width={"50%"}
        minWidth={"250px"}
        maxWidth={"400px"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
      >
        <Box mr={"20px"} flex={"1"}>
          <FormLabel style={TextStyle.h2} color={"white"}>
            {" "}
            Starting Date
          </FormLabel>
          <Input
            size={"xs"}
            type="date"
            color="white"
            bgColor={"#5F0DBB"}
            borderRadius={5}
            borderColor={"#5F0DBB"}
            value={(advertise.startingDate + "").substring(0, 10)}
            onChange={(e) =>
              setAdvertise({
                ...advertise,
                startingDate: new Date(e.target.value),
              })
            }
          />
        </Box>

        <Box flex={"1"}>
          <FormLabel style={TextStyle.h2} color={"white"}>
            {" "}
            Ending Date
          </FormLabel>
          <Input
            id="fileInput"
            size={"xs"}
            type="date"
            color="white"
            bgColor={"#5F0DBB"}
            borderRadius={5}
            borderColor={"#5F0DBB"}
            value={(advertise.endingDate + "").substring(0, 10)}
            onChange={(e) =>
              setAdvertise({
                ...advertise,
                endingDate: new Date(e.target.value),
              })
            }
          />
        </Box>
      </FormControl>
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
            <Image src={imagePreview} alt={"image"} width={"100%"}></Image>
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
            Image
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
              />
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
          Target customer
        </FormLabel>
        <Select
          bgColor={"#5F0DBB"}
          borderColor={"#5F0DBB"}
          value={advertise.targetCustomer}
          onChange={(e) =>
            setAdvertise({ ...advertise, targetCustomer: e.target.value })
          }
        >
          <option value="All">All</option>
          <option value="Member">Member</option>
        </Select>
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
        <FormLabel style={TextStyle.h2} color={"white"} paddingBottom={1}>
          {" "}
          Target group
        </FormLabel>
        <Select
          bgColor={"#5F0DBB"}
          borderColor={"#5F0DBB"}
          placeholder=" "
          onChange={(e) =>
            setAdvertise({ ...advertise, targetGroup: e.target.value })
          }
          value={
            advertise.targetGroup === "Young adult"
              ? "Young_adult"
              : advertise.targetGroup
          }
        >
          <option value="Teen">Teen</option>
          <option value="Young_adult">Young Adult</option>
          <option value="Adult">Adult</option>
          <option value="Elder">Elder</option>
        </Select>
      </FormControl>

      {/* Advertisement plan */}
      <FormControl
        isRequired
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
        paddingBottom={6}
      >
        <FormLabel style={TextStyle.h2} color={"white"}>
          {" "}
          Advertisement plan
        </FormLabel>
        <RadioGroup
          value={advertise.advertisementPlan.toString()}
          onChange={(value) =>
            setAdvertise({ ...advertise, advertisementPlan: parseInt(value) })
          }
        >
          <Stack spacing={1} direction="column">
            <Radio value="100">100 Baht/Week</Radio>
            <Radio value="300">300 Baht/Month</Radio>
            <Radio value="3600">3600 Baht/Year</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>

      {/* Delete */}
      <Box
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"row"}
        paddingBottom={3}
        justifyContent={"center"}
        alignItems={"center"}
      >
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
            <ModalHeader mt={3}>Delete advertisement</ModalHeader>
            <ModalCloseButton />
            <ModalFooter>
              <Button
                bgColor={"white"}
                color={"#200944"}
                mr={5}
                width="30%"
                onClick={deleteModal.onClose}
              >
                Cancel
              </Button>
              <Button
                bgColor={"#A533C8"}
                mr={3}
                onClick={handleClickSubmit}
                color={"white"}
                width="30%"
              >
                Delete
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Button
          h={"40px"}
          backgroundColor="#A533C8"
          variant="solid"
          width="50%"
          color="white"
          onClick={submitModal.onOpen}
        >
          Submit
        </Button>
        <Modal isOpen={submitModal.isOpen} onClose={submitModal.onClose}>
          <ModalOverlay />
          <ModalContent bgColor={"#DEBEF6"} color={"#200944"}>
            <ModalHeader mt={3}>Submit advertisement</ModalHeader>
            <ModalCloseButton />
            <ModalFooter>
              <Button
                bgColor={"white"}
                color={"#200944"}
                mr={5}
                width="30%"
                onClick={submitModal.onClose}
              >
                Cancel
              </Button>
              <Button
                bgColor={"#A533C8"}
                mr={3}
                onClick={handleClickSubmit}
                color={"white"}
                width="30%"
              >
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};
