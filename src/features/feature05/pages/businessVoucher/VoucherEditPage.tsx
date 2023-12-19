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
    },
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

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
      // voucher.point_use == "" ||
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
      formData.append("voucherName", voucher.voucher_name);
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
      navigate("/business/voucher");
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
      navigate("/business/voucher"); // Redirect to a different page, for instance
    } catch (error) {
      console.error(error);
      // Handle errors, if any, during the deletion process
    }
  };
  const handleStartDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setVoucher({
      ...voucher,
      start_date: event.target.value,
    });
  };
  const handleEndDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVoucher({
      ...voucher,
      end_date: event.target.value,
    });
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
        <FormControl mb={"12px"}>
          <FormLabel style={TextStyle.h2}>Vocher name *</FormLabel>
          <Input
            name="voucher_name"
            value={voucher.voucher_name}
            onChange={handleChange}
            bg={"#390b74"}
            border={"none"}
            isRequired
          />
        </FormControl>
        <FormControl mb={"12px"}>
          <FormLabel style={TextStyle.h2}>Vocher description *</FormLabel>
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
          <FormControl overflow={"hidden"}>
            <FormLabel style={TextStyle.h2}>Start Date *</FormLabel>
            <Input
              name="startDate"
              onChange={handleStartDateChange}
              type={"date"}
              bg={"#390b74"}
              border={"none"}
              value={voucher.start_date}
              //     value={
              //       voucher.start_date
              //         ? voucher.start_date.toISOString().split("T")[0]
              //         : ""
              //     }
            />
          </FormControl>
          <FormControl overflow={"hidden"}>
            <FormLabel style={TextStyle.h2}>End Date *</FormLabel>
            <Input
              name="endDate"
              onChange={handleEndDateChange}
              type={"date"}
              bg={"#390b74"}
              border={"none"}
              value={voucher.end_date}
            />
          </FormControl>
        </Stack>
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
              <img src={imagePreview} alt="image" width="100%" />
            </Box>
          </FormControl>
        ) : (
          <FormControl
            isRequired
            width="100%"
            minWidth="250px"
            maxWidth="400px"
            display="flex"
            flexDirection={"column"}
            paddingBottom={3}
          >
            <FormLabel style={TextStyle.h2} color={"white"} paddingBottom={1}>
              {" "}
              Upload image
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

        {voucherData.data?.voucherType === "Discount" ? (
          <Box>
            <Heading style={TextStyle.h2}>Fix discount: </Heading>
            <Text>{voucherData.data?.Discount_voucher.fix_discount}</Text>
            <Heading style={TextStyle.h2}>Limitation: </Heading>

            <Text>{voucherData.data?.Discount_voucher.limitation}</Text>
            <Heading style={TextStyle.h2}>Minimum Spend: </Heading>

            <Text>{voucherData.data?.Discount_voucher.minimum_spend}</Text>
            <Heading style={TextStyle.h2}>Percent Discount: </Heading>

            <Text>{voucherData.data?.Discount_voucher.percent_discount}</Text>
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
