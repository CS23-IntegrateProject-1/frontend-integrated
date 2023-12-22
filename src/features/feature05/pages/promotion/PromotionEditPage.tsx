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
import { GetPromotionById } from "../../../../api/Promotion/GetPromotionById";
import { useParams } from "react-router-dom";
import {
  initialStatePromotionProp,
  PromotionProps,
} from "../../../../interfaces/Promotion/IPromotionEditPageProp.interface";
import { useCustomToast } from "../../../../components/useCustomToast";
import { Axios } from "../../../../AxiosInstance";
import { FullPageLoader } from "../../../../components/Loader/FullPageLoader";

export const PromotionEditPage = () => {
  const navigate = useNavigate();
  const { isOpen, onClose } = useDisclosure();
  const id = Number(useParams<{ promotionId: string }>().promotionId);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [imageDefault, setImageDefault] = useState<string>("");
  const [branches, setBranches] = useState<
    { branch_name: string; branchId: number }[]
  >([]);
  const { promotionId } = useParams();
  const [menus, setMenus] = useState<{ name: string; menuId: number }[]>([]);
  const toast = useCustomToast();
  const deleteModal = useDisclosure();
  const [promotionData, setPromotionData] = useState<PromotionProps>(
    initialStatePromotionProp
  );
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    console.log(`Changing ${name} to ${value}`);
    setPromotionData((prevPromotion) => ({
      ...prevPromotion,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImage(file);
      const previewURL = URL.createObjectURL(e.target.files[0]);
      setImagePreview(previewURL);
      // setPromotionData((prevPromotion) => ({
      //   ...prevPromotion,
      //   image_url: file,
      // }));
    }
  };

  const handleClickDelete = async () => {
    try {
      await Axios.delete(`/feature5/Deletetpromotion/${id}`);
      navigate("/business/promotion/status");
    } catch (e) {
      console.error(e);
    }
  };

  const handleClickUpdate = async () => {
    // console.log(promotionData)
    try {
      const formData = new FormData();
      formData.append("name", promotionData.name);
      formData.append("description", promotionData.description);
      formData.append("start_date", promotionData.start_date);
      formData.append("end_date", promotionData.end_date);
      formData.append("promotionId", promotionId || "");
      formData.append("menuId", promotionData.menuId.toString());
      formData.append("branchId", promotionData.branchId.toString());
      formData.append(
        "discount_price",
        promotionData.discount_price.toString()
      );
      // console.log(formData.getAll)
      if (image) {
        formData.append("file", image);
      }
      await Axios.post(`/feature5/UpdatePromotionEditbyId`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/business/promotion/status");
    } catch (e) {
      //console.error(e);
      console.log(e);
      
    }
  };

  // const handleSubmit = async () => {
  //   try {

  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  const fetchPromotionData = async () => {
    try {
      const data = await GetPromotionById(id);
      console.log(data);
      setPromotionData((prevPromotion) => ({
        ...prevPromotion,
        name: data.name,
        description: data.description,
        start_date: data.start_date,
        end_date: data.end_date,
        discount_price: data.discount_price,
        menuId: data.menuId,
        branchId: data.branchId,
      }));
      // setImage(data.image_url || "");
      setImageDefault(data.image_url);
      setBranches(data.branch_name && data.brandId);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchBranch = async () => {
    try {
      Axios.get("/feature5/Showbranch")
        .then((res) => {
          setBranches(res.data);
        })
        .catch((err) => {
          toast.error("Error fetching branches");
          throw err;
        });
    } catch (e) {
      console.log(e);
    }
  };

  const fetchMenu = async () => {
    try {
      Axios.get("/feature5/ShowMenu")
        .then((res) => {
          setMenus(res.data);
        })
        .catch((err) => {
          toast.error("Error fetching branches");
          throw err;
        });
    } catch (e) {
      console.error();
    }
  };

  const handleCloseImage = () => {
    setImagePreview(null);
  };

  useEffect(() => {
    fetchPromotionData();
    fetchBranch();
    fetchMenu();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  if (isLoading) {
    return <FullPageLoader />;
  }

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
          value={promotionData.name}
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
          value={promotionData.description}
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
          name="branchInput"
          value={promotionData.branchId}
          onChange={handleChange}
          bgColor={"#5F0DBB"}
          borderColor={"#5F0DBB"}
        >
          {branches?.map((branch) => (
            <option key={branch.branchId} value={branch.branchId}>
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
            value={promotionData.start_date.toString().split("T")[0]}
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
            value={promotionData.end_date.toString().split("T")[0]}
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
          value={promotionData.menuId}
        >
          {menus?.map((menu) => (
            <option key={menu.menuId} value={menu.menuId}>
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
          value={promotionData.discount_price}
          onChange={handleChange}
          variant="discount_price"
          style={{ width: "auto" }}
          color={"white"}
          bgColor={"#5F0DBB"}
          borderColor={"#5F0DBB"}
          type="float"
        />

        <Image
          mt={"1em"}
          src={import.meta.env.VITE_BACKEND_URL + imageDefault || ""}
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
                // onClick={handleSubmit}
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
// function useQuery(arg0: { queryKey: string[]; queryFn: () => any; onSuccess: (data: VoucherType) => void; }) {
//   throw new Error("Function not implemented.");
// }
