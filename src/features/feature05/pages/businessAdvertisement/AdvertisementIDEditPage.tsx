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
import { GetBusinessAdsById } from "../../../../api/Advertisement/GetBusinessAdsById";
import { useCustomToast } from "../../../../components/useCustomToast";

interface AdvertisementProps {
  name: string;
  description: string;
  start_date: string;
  end_date:string;
  image_url: File| null;
  targetCustomer: string;
  targetGroup: string;
  advertisementPlan: number;
}
export const AdvertisementIDEditPage = () => {
  const { onClose } = useDisclosure();
  const id = Number(useParams<{ id: string }>().id);
  const navigate = useNavigate();
  const deleteModal = useDisclosure();
  const submitModal = useDisclosure();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageDefault, setImageDefault] = useState<string | null>(null);
  const [advertise, setAdvertise] = useState<AdvertisementProps>({
    name: "",
    description: "",
    image_url: null,
    start_date: "",
    end_date: "",
    targetCustomer: "",
    targetGroup: "",
    advertisementPlan: 0,
  });

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
      const { data } = await GetBusinessAdsById(id);
      // const formatDate = (dateString: string): string => {
      //   const date = new Date(dateString);
      //   return date.toISOString().split('T')[0]; // Format to YYYY-MM-DD
      // };
      setAdvertise((prevAdvertise) => ({
        ...prevAdvertise,
        name: data.name,
        description: data.description,
        start_date: data.start_date,
        end_date: data.end_date,
        targetCustomer: data.costumer_type,
        targetGroup: data.target_group,
        advertisementPlan: parseInt(data.cost),
      }));
      setImageDefault(data.image_url || "");
    } catch (e) {

      console.log(e)
    }
  }


  useEffect(() => {
    // try {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

 
  const deleteAdvertisement = async () => {
    try {
      const result = await Axios.delete(`/feature5/DeleteAdBSN/${id}`);
      console.log(result.data);
    } catch (error) {
      console.error("Error deleting advertisement:", error);
    }
  };

  const handleClickDelete = async () => {
    try {
      await deleteAdvertisement();
      navigate("/business/advertisement/status");
    } catch (error) {
      console.error(error);
    }
  };
  // const handleClickSubmit = async () => {
  //   try {
  //     await Axios.post("/")
  //     navigate("/business/advertisement/status");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };




  const handleClickSubmit = async () => {
    // const toast = useCustomToast();
    // if (
    //   advertise.name == "" ||
    //   advertise.description  == "" ||
    //   advertise.start_date == "" ||
    //   advertise.end_date == "" ||
    //   advertise.targetCustomer == "" ||
    //   advertise.targetGroup == "" ||
    //   advertise.advertisementPlan == 0 
    // ) {
    //   toast.warning("Please fill all the fields");
    //   onClose();
    //   return;
    // }
    try {
      const formData = new FormData();
      formData.append("voucher_name", advertise.name);
      formData.append("description", advertise.description);
      formData.append("start_date", advertise.start_date);
      formData.append("end_date", advertise.end_date);
      formData.append("venueId", advertise.targetCustomer);
      formData.append("targetCustomer",advertise.targetCustomer);
      formData.append("targetGroup",advertise.targetGroup);
      formData.append("advertisementPlan",advertise.advertisementPlan.toString());
      if (advertise.image_url) {
        formData.append("file", advertise.image_url);
      }
      formData.append("advertisementId", id.toString());

      const response = await Axios.post(
        `feature5/UpdateAdvertisementEditId`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      navigate("/business/advertisement/status");
    } catch (error) {
      console.log(error);
    }
  };


  // const handleStartDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    
  //   console.log(event.target.value);
  //   setAdvertise({
  //     ...advertise,
  //     start_date: event.target.value,
  //   });
  // };
  // const handleEndDateChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setAdvertise({
  //     ...advertise,
  //     end_date: event.target.value,
  //   });
  // };
  const handleStartDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(event.target.value); // Convert input value to a Date object
    const formattedDate = selectedDate.toISOString().split('T')[0]; // Format to 'YYYY-MM-DD'
  
    // Update state with the formatted datetime string
    setAdvertise({
      ...advertise,
      start_date: `${formattedDate} 00:00:00.000`, // Assuming the time is set as 00:00:00
    });
    console.log(setAdvertise)
  };
  const handleEndDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(event.target.value); // Convert input value to a Date object
    const formattedDate = selectedDate.toISOString().split('T')[0]; // Format to 'YYYY-MM-DD'
  
    // Update state with the formatted datetime string
    setAdvertise({
      ...advertise,
      end_date: `${formattedDate} 00:00:00.000`, // Assuming the time is set as 00:00:00
    });
    console.log(setAdvertise)
  };

  // const handleChange = (
  //   e: React.ChangeEvent<
  //     HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  //   >
  // ) => {
  //   const { name, value } = e.target;
  //   setAdvertise((prevAdvertise) => ({
  //     ...prevAdvertise,
  //     [name]: value,
  //   }));
  // };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    console.log(`Changing ${name} to ${value}`);
    setAdvertise((prevAdvertise) => ({
      ...prevAdvertise,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      // setIsChange(true);

      const previewURL = URL.createObjectURL(e.target.files[0]);
      setImagePreview(previewURL);
      setAdvertise((prevAdvertise) => ({
        ...prevAdvertise,
        image_url: file,
      }));
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
          name="name" 
          value={advertise.name}
          onChange={handleChange}
          style={{ width: "auto" }}
          color={"white"}
          bgColor={"#5F0DBB"}
          borderColor={"#5F0DBB"}
          type="text"
          // onChange={(e) => setAdvertise({ ...advertise, name: e.target.value })}
          
          
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
          name="description" 
          value={advertise.description}
          style={{ width: "auto" }}
          color={"white"}
          bgColor={"#5F0DBB"}
          onChange={handleChange}
          borderColor={"#5F0DBB"}
          type="text"
          // onChange={(e) =>
          //   setAdvertise({ ...advertise, description: e.target.value })
          // }
          
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
            value={(advertise.start_date + "").substring(0, 10)}
            onChange={handleStartDateChange}
            // onChange={(e) =>
            //   setAdvertise({
            //     ...advertise,
            //     startingDate: new Date(e.target.value),
            //   })
            // }
            
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
            value={(advertise.end_date + "").substring(0, 10)}
            // onChange={(e) =>
            //   setAdvertise({
            //     ...advertise,
            //     endingDate: new Date(e.target.value),
            //   })
            // }
            onChange={handleEndDateChange}
          />
        </Box>
      </FormControl>
      <Image
          src={import.meta.env.VITE_BACKEND_URL + imageDefault}
          alt="image"
        />
      {imagePreview ? (
          <FormControl
            width="50%"
            minWidth="250px"
            maxWidth="400px"
            display="flex"
            flexDirection={"column"}
            paddingBottom={3}
          >
            <FormLabel style={TextStyle.h2}>Upload image</FormLabel>

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
              
              {/* {imagePreview && (
              <Image src={imagePreview} alt="Preview" width="100%" />
              )}
              {!imagePreview && imageDefault && (
                <Image src={import.meta.env.VITE_BACKEND_URL alt="Default" width="100%" />
              )}

              <Image src={imagePreview} alt="image" width="100%" /> */}
              
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
            <FormLabel
              marginTop={"10px"}
              style={TextStyle.h2}
              color={"white"}
              paddingBottom={1}
            >
              {" "}
              Upload image
            </FormLabel>
            <Stack spacing={2} direction="column">
              {}
              <Center
                width={"auto"}
                height={"150px"}
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
          name = "targetCustomer"
          value={advertise.targetCustomer}
          // onChange={(e) =>
          //   setAdvertise({ ...advertise, targetCustomer: e.target.value })
          // }
          onChange = {handleChange}
          
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
          onChange = {handleChange}
          // value={
          //   advertise.targetGroup === "Young adult"
          //     ? "Young_adult"
          name = "targetGroup"
          //     : advertise.targetGroup
          // }
          value={advertise.targetGroup}
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
          name ="advertisementPlan"
          onChange = {handleChange}
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
                onClick={handleClickDelete}
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

