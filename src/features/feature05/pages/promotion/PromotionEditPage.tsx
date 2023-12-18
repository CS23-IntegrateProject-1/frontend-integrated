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
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Axios } from "../../../../AxiosInstance";
import { GetPromotionById } from "../../../../api/Promotion/GetPromotionById";
import { useParams } from "react-router-dom";

interface PromotionProps {
  name: string;
  description: string;
  start_date: Date | null;
  end_date: Date | null;
  image_url: string;
  menuId: number;
  venueId: number;
  discount_price: number;
}
export const PromotionEditPage = () => {
  const navigate = useNavigate();
  const { isOpen, onClose } = useDisclosure();

  const deleteModal = useDisclosure();
  //     const submitModal = useDisclosure();
  const handleClickDelete = () => {};

  const handleClickUpdate = () => {
    navigate("/business/promotion/status");
  };

  const [file, setFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [promotion, setPromotion] = useState<PromotionProps>({
    name: "",
    description: "",
    image_url: "",
    start_date: new Date(),
    end_date: new Date(),
    menuId: 3,
    venueId: 3,
    discount_price: 10,
  });
  console.log(file);
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

  //gpt
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    // const formattedValue = name.includes("date")
    // 	? new Date(value).toISOString().replace("T", " ").replace("Z", "")
    // 	: value;

    // if (
    // 	name === "start_date" &&
    // 	!isNaN(new Date(formattedValue).getTime())
    // ) {
    // 	setFormattedStartDate(formattedValue);
    // }

    // if (name === "end_date" && !isNaN(new Date(formattedValue).getTime())) {
    // 	setFormattedEndDate(formattedValue);
    // }

    if (name === "start_date" || name === "end_date") {
      const dateValue = new Date(value);
      setPromotion((prevPromotion) => ({
        ...prevPromotion,
        [name]: dateValue.toISOString(),
      }));
    } else {
      setPromotion((prevPromotion) => ({
        ...prevPromotion,
        [name]: value,
      }));
    }

    if (name === "discount_price") {
      setPromotion((prevPromotion) => ({
        ...prevPromotion,
        [name]: parseFloat(value),
      }));
    }

    if (name === "venueId") {
      setPromotion((prevPromotion) => ({
        ...prevPromotion,
        [name]: parseInt(value),
      }));
    }

    if (name === "menuId") {
      setPromotion((prevPromotion) => ({
        ...prevPromotion,
        [name]: parseInt(value),
      }));
    }
  };

  // 	setPromotion((prevPromotion) => ({
  // 		...prevPromotion,
  // 		[name]: value,
  // 	}));
  // };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      const previewURL = URL.createObjectURL(e.target.files[0]);
      setImagePreview(previewURL);
    }
  };

  const handleSubmit = async () => {
    console.log(promotion);

    try {
      // Ensure this ID is valid
      console.log(promotion);
      console.log(`Sending request to /Promotion`);
      const response = await Axios.post(`feature5/Promotion`, {
        ...promotion,
        //advertisementPlan: Number(advertise.cost),
        Tags: [],
        // start_date: promotion.start_date,
        // end_date: formattedEndDate,
      });
      console.log(response.data); // Log the response data
      navigate("/business/promotion/status");
    } catch (err) {
      console.error("Error submitting promotion:", err);
    }
  };
  console.log(promotion);
  const { promotionId } = useParams();
  useEffect(() => {
    const fetchPromotionData = async () => {
      try {
        if (promotionId) {
          const idAsNumber = Number(promotionId);
          if (!isNaN(idAsNumber)) {
            const response = await GetPromotionById(idAsNumber);

            if (response && response.data) {
              // Ensure response and response.data are defined
              const { data } = response;

              // Update state with the fetched data
              setPromotion((prevPromotion) => ({
                ...prevPromotion,
                ...data,
                start_date: data.start_date.substring(0, 10), // Extract only the date part
                end_date: data.end_date.substring(0, 10),
              }));

              // You may need to format dates or perform other actions based on your data structure
            } else {
              console.error("Invalid response or missing data:", response);
            }
          } else {
            console.error("Invalid promotionId:", promotionId);
          }
        }
      } catch (error) {
        console.error("Error fetching promotion data:", error);
      }
    };

    fetchPromotionData();
  }, [promotionId]);
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
    >
      {/* Name * */}
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
          name="name"
          onChange={handleChange}
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
          name="description"
          onChange={handleChange}
          variant="name"
          style={{ width: "auto" }}
          color={"white"}
          bgColor={"#5F0DBB"}
          borderColor={"#5F0DBB"}
          type="text"
        />
      </FormControl>

      {/* Branch */}
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
          Branch
        </FormLabel>
        <Select
          name="venueId"
          onChange={handleChange}
          bgColor={"#5F0DBB"}
          borderColor={"#5F0DBB"}
          placeholder=""
        >
          <option value="1">PrachaUthit</option>
          <option value="2">Bang pakok</option>
          <option value="3">Tha kham</option>
          <option value="4">Bang bon</option>
          <option value="5">Bang khae</option>
        </Select>
      </FormControl>

      {/* Starting Date * & Ending Date * */}
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
            name="start_date"
            onChange={handleChange}
            size={"xs"}
            type="date"
            color="white"
            bgColor={"#5F0DBB"}
            borderRadius={5}
            borderColor={"#5F0DBB"}
            isRequired
          />
        </Box>

        <Box flex={"1"}>
          <FormLabel style={TextStyle.h2} color={"white"}>
            {" "}
            Ending Date
          </FormLabel>
          <Input
            name="end_date"
            onChange={handleChange}
            id="fileInput"
            size={"xs"}
            type="date"
            color="white"
            bgColor={"#5F0DBB"}
            borderRadius={5}
            borderColor={"#5F0DBB"}
          />
        </Box>
      </FormControl>

      {/* Select menu */}
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
          Select menu
        </FormLabel>
        <Select
          name="menuId"
          onChange={handleChange}
          bgColor={"#5F0DBB"}
          borderColor={"#5F0DBB"}
          placeholder=""
        >
          <option value="3">3</option>
          <option value="3">3</option>
        </Select>
      </FormControl>

      {/* Discount value * */}
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
          Discount value
        </FormLabel>
        <Input
          name="discount_price"
          onChange={handleChange}
          variant="discount_price"
          style={{ width: "auto" }}
          color={"white"}
          bgColor={"#5F0DBB"}
          borderColor={"#5F0DBB"}
          type="float"
        />
      </FormControl>

      {/* Image */}

      {imagePreview ? (
        <FormControl
          // isRequired
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
              src={`${import.meta.env.VITE_BACKEND_URL}${imagePreview}`}
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

      {/* Submit */}
      <Box
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"row"}
        paddingTop={3}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-end" // Align to the bottom
          //minHeight="50vh" // Ensure the container takes at least the full height of the viewport
        >
          <Box
            width="50%"
            minWidth="250px"
            maxWidth="400px"
            display="flex"
            flexDirection={"row"}
            paddingBottom={3}
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
                <ModalHeader mt={3}>Delete redeem</ModalHeader>
                <ModalBody mt={-3}>
                  Are you sure? You want to delete redeem?
                </ModalBody>
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
              onClick={handleClickUpdate}
            >
              Update
            </Button>
          </Box>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose}>
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
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                bgColor={"#A533C8"}
                mr={3}
                onClick={handleSubmit}
                color={"white"}
                width="30%"
              >
                Confirm
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};
