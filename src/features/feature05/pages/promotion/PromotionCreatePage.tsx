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
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Axios } from "../../../../AxiosInstance";
import { useCustomToast } from "../../../../components/useCustomToast";

interface PromotionProps {
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  image_url: string;
  menuId: number;
  venueId: number;
  branchId: number;
  discount_price: number;
}
export const PromotionCreatePage = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [promotion, setPromotion] = useState<PromotionProps>({
    name: "",
    description: "",
    image_url: "",
    start_date: "",
    end_date: "",
    menuId: 0,
    venueId: 0,
    branchId: 0,
    discount_price: 0,
  });
  const [branches, setBranches] = useState<
    { branch_name: string; branchId: number }[]
  >([]);
  const [menus, setMenus] = useState<{ name: string; menuId: number }[]>([]);
  const toast = useCustomToast();

  const handleCloseImage = () => {
    setImagePreview(null);
  };
  useEffect(() => {
    // try {
    Axios.get("/feature5/Showbranch")
      .then((res) => {
        setBranches(res.data);
      })
      .catch((err) => {
        toast.error("Error fetching branches");
        throw err;
      });
    Axios.get("/feature5/ShowMenu")
      .then((res) => {
        setMenus(res.data);
      })
      .catch((err) => {
        toast.error("Error fetching menus");
        throw err;
      });
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

    if (name === "start_date") {
      setPromotion((prevPromotion) => ({
        ...prevPromotion,
        [name]: e.target.value,
      }));
    }
    if (name === "end_date") {
      setPromotion((prevPromotion) => ({
        ...prevPromotion,
        [name]: e.target.value,
      }));
    }

    if (name === "discount_price") {
      setPromotion((prevPromotion) => ({
        ...prevPromotion,
        [name]: parseFloat(value),
      }));
    }

    if (name === "menuId") {
      setPromotion((prevPromotion) => ({
        ...prevPromotion,
        [name]: parseInt(value),
      }));
    }
    if (name === "branchId") {
      setPromotion((prevPromotion) => ({
        ...prevPromotion,
        [name]: parseInt(value),
      }));
    } else {
      setPromotion((prevPromotion) => ({
        ...prevPromotion,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const previewURL = URL.createObjectURL(e.target.files[0]);
      setImagePreview(previewURL);
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (
      promotion.name == "" ||
      promotion.description == "" ||
      promotion.start_date == "" ||
      promotion.end_date == "" ||
      promotion.discount_price == 0 ||
      promotion.branchId == 0 ||
      promotion.menuId == 0 ||
      image == null
    ) {
      toast.warning("Please fill all the fields");
      onClose();
      return;
    }
    try {
      // Ensure this ID is valid
      // console.log(promotion);
      // console.log(`Sending request to /Promotion`);
      const formData = new FormData();
      formData.append("name", promotion.name);
      formData.append("description", promotion.description);
      formData.append("start_date", promotion.start_date);
      formData.append("end_date", promotion.end_date);
      formData.append("discount_price", promotion.discount_price.toString());
      formData.append("brandId", promotion.branchId.toString());
      formData.append("menuId", promotion.menuId.toString());
      if (image) {
        formData.append("file", image);
      }
      const response = await Axios.post(
        `feature5/Promotion`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      
      );
      console.log(response.data); // Log the response data
      navigate("/business/promotion/status");
    } catch (err) {
      console.error("Error submitting promotion:", err);
    }
  };
  console.log(promotion);

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
          value={promotion.name}
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
          value={promotion.description}
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
          name="branchId"
          onChange={handleChange}
          bgColor={"#5F0DBB"}
          borderColor={"#5F0DBB"}
          placeholder=""
        >
          {branches.map((branch, index) => (
            <option value={branch.branchId} key={index}>
              {branch.branch_name}
            </option>
          ))}
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
            value={promotion.start_date}
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
            value={promotion.end_date}
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
          {menus.map((menu, index) => (
            <option key={index} value={menu.menuId}>
              {menu.name}
            </option>
          ))}
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
          type="number"
          value={promotion.discount_price}
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
              // src={`${import.meta.env.VITE_BACKEND_URL}${imagePreview}`}
              src={imagePreview}
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
        paddingBottom={3}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button
          backgroundColor="#A533C8"
          variant="solid"
          width="40%"
          color="white"
          onClick={() => {
            if (promotion.start_date == null || promotion.end_date == null) {
              alert("Please fill the date");
              return;
            }
            onOpen();
          }}
        >
          Submit
        </Button>
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
