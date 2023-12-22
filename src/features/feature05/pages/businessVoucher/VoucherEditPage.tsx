import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { useNavigate, useParams } from "react-router-dom";

import { VoucherType } from "../../components/businessVoucherCom/VoucherType";
import { useState, ChangeEvent, useEffect } from "react";
import { GetEachVoucher } from "../../../../api/Voucher/GetEachVoucher";
import { Axios } from "../../../../AxiosInstance";
import { useQuery } from "@tanstack/react-query";
import { useCustomToast } from "../../../../components/useCustomToast";
import { BiImageAdd } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

interface VoucherType {
  voucher_name: string;
  start_date: string;
  end_date: string;
  description: string;
  point_use: null;
  venueId: number;
  isApprove: string;
  voucher_image: string;
  voucherType: string;
  Discount_voucher: DiscountVoucherType;
  Food_voucher: GiftVoucherType;
}
interface DiscountVoucherType {
  fix_discount: number;
  percent_discount: number;
  minimum_spend: number;
  limitation: number;
}
interface GiftVoucherType {
  giftName: string;
  minimum: number;
}

interface VoucherEditPageProps {
  voucher_name: string;
  start_date: string;
  end_date: string;
  description: string;
  point_use: null;
  venueId: number;
  isApprove: string;
  voucher_image: File | null;
  // voucherType: string;
}

export const VoucherEditPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const id = Number(useParams<{ voucherId: string }>().voucherId);
  // const [isChange, setIsChange] = useState<boolean>(false);
  const voucherData = useQuery({
    queryKey: ["voucher"],
    queryFn: () => GetEachVoucher(id),
    onSuccess: (data: VoucherType) => {
      // Set default values once the data is successfully fetched
      setVoucher((prevVoucher) => ({
        ...prevVoucher,
        voucher_name: data.voucher_name,
        description: data.description,
        start_date: data.start_date,
        end_date: data.end_date,
        venueId: data.venueId,
        isApprove: data.isApprove,
        // voucher_image: data.voucher_image,
        voucherType: data.voucherType,
        Discount_voucher: {
          fix_discount: data.Discount_voucher.fix_discount,
          percent_discount: data.Discount_voucher.percent_discount,
          minimum_spend: data.Discount_voucher.minimum_spend,
          limitation: data.Discount_voucher.limitation,
        },
      }));
      setImageDefault(data.voucher_image);
    },
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageDefault, setImageDefault] = useState<string | null>(null);
  useEffect(() => {
    // try {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const [voucher, setVoucher] = useState<VoucherEditPageProps>({
    voucher_name: "",
    description: "",
    start_date: "",
    end_date: "",
    point_use: null,
    venueId: 0,
    isApprove: "",
    voucher_image: null,
  });
  const toast = useCustomToast();

  if (voucherData.status === "loading") {
    return <span>Loading...</span>;
  }
  const handleCloseImage = () => {
    // setIsChange(true);
    setImagePreview(null);
  };

  if (voucherData.error instanceof Error) {
    return <div>An error occurred: {voucherData.error.message}</div>;
  }
  const handleClickSubmit = async () => {
    if (
      voucher.voucher_name == "" ||
      voucher.description == "" ||
      voucher.start_date == "" ||
      voucher.end_date == "" ||
      voucher.venueId == 0 ||
      voucher.isApprove == ""
      // voucher.voucherType == "" ||
    ) {
      toast.warning("Please fill all the fields");
      onClose();
      return;
    }
    try {
      const formData = new FormData();
      formData.append("voucher_name", voucher.voucher_name);
      formData.append("description", voucher.description);
      formData.append("start_date", voucher.start_date);
      formData.append("end_date", voucher.end_date);
      formData.append("venueId", voucher.venueId.toString());
      if (voucher.isApprove) {
        formData.append("isApprove", voucher.isApprove);
      }
      if (voucherData.data?.voucherType === "Discount") {
        formData.append(
          "fix_discount",
          voucherData?.data.Discount_voucher?.fix_discount?.toString() ?? ""
        );
        formData.append(
          "percent_discount",
          voucherData?.data.Discount_voucher?.percent_discount?.toString() ?? ""
        );
        formData.append(
          "minimum_spend",
          voucherData?.data.Discount_voucher?.minimum_spend?.toString() ?? ""
        );
        formData.append(
          "limitation",
          voucherData?.data.Discount_voucher?.limitation?.toString() ?? ""
        );
      } else {
        formData.append(
          "minimum",
          voucherData?.data?.Food_voucher?.minimum?.toString() ?? "1"
        );
      }

      if (voucher.voucher_image) {
        formData.append("file", voucher.voucher_image);
      }
      formData.append("voucherId", id.toString());

      const response = await Axios.post(
        `feature5/UpdateVoucherEditbyId`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data); // Log the response data}
      navigate("/business/voucher/status");
    } catch (err) {
      console.error("Error submitting promotion:", err);
    }
  };

  const deleteVoucher = async () => {
    try {
      const result = await Axios.delete(`/feature5/DeleteVoucher/${id}`);
      console.log(result.data);
    } catch (error) {
      console.error("Error deleting advertisement:", error);
    }
  };

  const handleClickDelete = async () => {
    try {
      await deleteVoucher();
      // Optionally, perform any additional actions after successful deletion
      navigate("/business/voucher/status"); // Redirect to a different page, for instance
    } catch (error) {
      console.error(error);
      // Handle errors, if any, during the deletion process
    }
  };
  const handleStartDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(event.target.value); // Convert input value to a Date object
    const formattedDate = selectedDate.toISOString().split('T')[0]; // Format to 'YYYY-MM-DD'
  
    // Update state with the formatted datetime string
    setVoucher({
      ...voucher,
      start_date: `${formattedDate} 00:00:00.000`, // Assuming the time is set as 00:00:00
    });
    console.log(setVoucher)
  };
  const handleEndDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(event.target.value); // Convert input value to a Date object
    const formattedDate = selectedDate.toISOString().split('T')[0]; // Format to 'YYYY-MM-DD'
  
    // Update state with the formatted datetime string
    setVoucher({
      ...voucher,
      end_date: `${formattedDate} 00:00:00.000`, // Assuming the time is set as 00:00:00
    });
    console.log(setVoucher)
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setVoucher((prevVoucher) => ({
      ...prevVoucher,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      // setIsChange(true);

      const previewURL = URL.createObjectURL(e.target.files[0]);
      setImagePreview(previewURL);
      setVoucher((prevVoucher) => ({
        ...prevVoucher,
        voucher_image: file,
      }));
    }
  };

  return (
    <Container>
      <form>
        <FormControl isRequired mb={"12px"}>
          <FormLabel style={TextStyle.h2}>Vocher name</FormLabel>
          <Input
            name="voucher_name"
            value={voucher.voucher_name}
            onChange={handleChange}
            bg={"#390b74"}
            border={"none"}
            isRequired
          />
        </FormControl>
        <FormControl isRequired mb={"12px"}>
          <FormLabel style={TextStyle.h2}>Vocher description</FormLabel>
          <Input
            name="description"
            value={voucher.description}
            onChange={handleChange}
            bg={"#390b74"}
            border={"none"}
            isRequired
          />
        </FormControl>

        <Stack direction={"row"} mb={"10px"}>
          <FormControl isRequired overflow={"hidden"}>
            <FormLabel style={TextStyle.h2}>Start Date</FormLabel>
            <Input
              name="startDate"
              onChange={handleStartDateChange}
              type={"date"}
              bg={"#390b74"}
              border={"none"}
              value={(voucher.start_date + "").substring(0, 10)}
            />
          </FormControl>
          <FormControl isRequired overflow={"hidden"}>
            <FormLabel style={TextStyle.h2}>End Date *</FormLabel>
            <Input
              name="endDate"
              onChange={handleEndDateChange}
              type={"date"}
              bg={"#390b74"}
              border={"none"}
              value={(voucher.end_date + "").substring(0, 10)}
            />
          </FormControl>
        </Stack>
        <Text marginBottom={"5px"}>Voucher image</Text>
        <Image
          src={import.meta.env.VITE_BACKEND_URL + imageDefault}
          alt="image"
          width="100%"
        />
        {imagePreview ? (
          <FormControl
            width="100%"
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
              justifyContent={"center"}
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
              <Image src={imagePreview} alt="image" width="100%" />
            </Box>
          </FormControl>
        ) : (
          <FormControl
            isRequired
            width="100%"
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

        {voucherData.data?.voucherType === "Discount" ? (
          <Box>
            <Heading style={TextStyle.h2} marginBottom={"5px"}>
              Fix discount{" "}
            </Heading>
            <Text
              padding={"10px"}
              bg={"#390b74"}
              borderRadius={"10px"}
              marginBottom={"10px"}
            >
              {voucherData.data?.Discount_voucher.fix_discount}
            </Text>

            <Heading style={TextStyle.h2} marginBottom={"5px"}>
              Limitation{" "}
            </Heading>
            <Text
              padding={"10px"}
              bg={"#390b74"}
              borderRadius={"10px"}
              marginBottom={"10px"}
            >
              {voucherData.data?.Discount_voucher.limitation}
            </Text>

            <Heading style={TextStyle.h2} marginBottom={"5px"}>
              Minimum Spend{" "}
            </Heading>
            <Text
              padding={"10px"}
              bg={"#390b74"}
              borderRadius={"10px"}
              marginBottom={"10px"}
            >
              {voucherData.data?.Discount_voucher.minimum_spend}
            </Text>

            <Heading style={TextStyle.h2} marginBottom={"5px"}>
              Percent Discount{" "}
            </Heading>
            <Text
              padding={"10px"}
              bg={"#390b74"}
              borderRadius={"10px"}
              marginBottom={"20px"}
            >
              {voucherData.data?.Discount_voucher.percent_discount}
            </Text>
          </Box>
        ) : (
          <Box>
            <Heading>Minimum Spend: </Heading>
            <Text>{voucherData.data?.Food_voucher.minimum}</Text>
          </Box>
        )}
      </form>
      <Center>
        <Button
          h={"40px"}
          colorScheme="gray"
          variant="solid"
          width="50%"
          color="#A533C8"
          onClick={onOpen}
          marginRight={3}
        >
          Delete
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bgColor={"#DEBEF6"} color={"#200944"}>
            <ModalHeader mt={3}>Delete voucher</ModalHeader>
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
          onClick={handleClickSubmit}
        >
          Submit
        </Button>
      </Center>
    </Container>
  );
};
