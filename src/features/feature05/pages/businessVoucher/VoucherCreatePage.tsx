import {
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Image,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Box,
  Icon,
  useDisclosure,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
// import { BiImageAdd } from "react-icons/bi";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { VoucherType } from "../../components/businessVoucherCom/VoucherType";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../../../AxiosInstance";
import { AiOutlineClose } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";
import { useCustomToast } from "../../../../components/useCustomToast";

interface VoucherType {
  voucherName: string;
  description: string;
  startDate: string;
  endDate: string;
  //   voucherImage: File;
  limitation: number;
  voucherType: string;
  discountVoucher: DiscountVoucherType;
  giftVoucher: GiftVoucherType;
  point_use?: number;
}

interface DiscountVoucherType {
  fixDiscount: number;
  percentage: number;
  minimum: number;
}

interface GiftVoucherType {
  giftName: string;
  minimum: number;
}

export const VoucherCreatePage = () => {
  const [voucher, setVoucher] = useState<VoucherType>({
    voucherName: "",
    description: "",
    //     voucherImage: null,
    startDate: "",
    endDate: "",
    point_use: 0,
    limitation: 0,
    voucherType: "Discount",
    discountVoucher: {
      fixDiscount: 0,
      percentage: 0,
      minimum: 0,
    },
    giftVoucher: {
      giftName: "",
      minimum: 0,
    },
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useCustomToast();

  const handleCloseImage = () => {
    setImagePreview(null);
  };

  useEffect(() => {
    // try {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const navigate = useNavigate();
  console.log(voucher.voucherType);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const previewURL = URL.createObjectURL(e.target.files[0]);
      setImagePreview(previewURL);
      setImage(e.target.files[0]);
    }
  };

  const handleClickSubmit = async () => {
    if (
      voucher.voucherName == "" ||
      voucher.description == "" ||
      //  voucher.voucherImage == "" ||
      voucher.startDate == "" ||
      voucher.endDate == "" ||
      voucher.limitation == 0 ||
      (voucher.voucherType == "Discount" &&
        (voucher.discountVoucher.fixDiscount < 0 ||
          voucher.discountVoucher.minimum < 0 ||
          voucher.discountVoucher.percentage < 0)) ||
      (voucher.voucherType == "Gift" && voucher.giftVoucher.minimum < 0) ||
      image == null
    ) {
      toast.warning("Please fill all the fields");
      onClose();
      return;
    }
    try {
      const formData = new FormData();
      formData.append("voucherName", voucher.voucherName);
      formData.append("description", voucher.description);
      formData.append("start_date", voucher.startDate.toString());
      formData.append("end_date", voucher.endDate.toString());
      formData.append("limitation", voucher.limitation.toString());
      formData.append("voucherType", voucher.voucherType);
      if (voucher.voucherType === "Discount") {
        formData.append("point_use", voucher.point_use?.toString() || "0");
      } else {
        formData.append("point_use", "0");
      }

      formData.append(
        "minimum_spend",
        voucher.discountVoucher.minimum.toString()
      );
      formData.append(
        "percent_discount",
        voucher.discountVoucher.percentage.toString()
      );
      formData.append(
        "fix_discount",
        voucher.discountVoucher.fixDiscount.toString()
      );
      formData.append(
        "minimum_spend_gift",
        voucher.giftVoucher.minimum.toString()
      );
      //  formData.append("discount_price", voucher..toString());
      if (image) {
        formData.append("file", image);
      }
      const response = await Axios.post(`feature5/Voucher`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data); // Log the response data
      navigate("/business/voucher/status");
    } catch (err) {
      console.error("Error submitting promotion:", err);
    }
  };
  console.log(voucher);

  const handleTypeChange = (tab: string) => {
    setVoucher((prevVoucher) => ({
      ...prevVoucher,
      voucherType: tab,
    }));
  };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    if (name.startsWith("discountVoucher.")) {
      const typeField = name.split(".")[1];

      setVoucher((prevVoucher) => ({
        ...prevVoucher,
        discountVoucher: {
          ...prevVoucher.discountVoucher,
          [typeField]: value,
        },
      }));
      // your existing code for discountVoucher and giftVoucher
    } else if (name.startsWith("giftVoucher.")) {
      const typeField = name.split(".")[1];

      setVoucher((prevVoucher) => ({
        ...prevVoucher,
        giftVoucher: {
          ...prevVoucher.giftVoucher,
          [typeField]: value,
        },
      }));
    } else if (name === "startDate" || name === "endDate") {
      const dateValue = new Date(value);
      setVoucher((prevVoucher) => ({
        ...prevVoucher,
        [name]: dateValue.toISOString(),
      }));
    } else {
      setVoucher((prevVoucher) => ({
        ...prevVoucher,
        [name]: value,
      }));
    }
  };

  const handleArrowUp = () => {
    setVoucher((prevVoucher) => ({
      ...prevVoucher,
      limitation: voucher.limitation + 1,
    }));
  };

  const handleArrowDown = () => {
    setVoucher((prevVoucher) => ({
      ...prevVoucher,
      limitation: voucher.limitation - 1,
    }));
  };

  return (
    <Container>
      <form>
        <FormControl mb={"12px"}>
          <FormLabel style={TextStyle.h2}>Vocher name *</FormLabel>
          <Input
            name="voucherName"
            value={voucher.voucherName}
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
              onChange={handleChange}
              type={"date"}
              bg={"#390b74"}
              border={"none"}
            />
          </FormControl>
          <FormControl overflow={"hidden"}>
            <FormLabel style={TextStyle.h2}>End Date *</FormLabel>
            <Input
              name="endDate"
              onChange={handleChange}
              type={"date"}
              bg={"#390b74"}
              border={"none"}
            />
          </FormControl>
        </Stack>
        <FormControl mb={"12px"}>
          <FormLabel style={TextStyle.h2}>Point to collect *</FormLabel>
          <Input
            name="point_use"
            value={voucher.point_use}
            onChange={handleChange}
            bg={"#390b74"}
            border={"none"}
            isRequired
          />
        </FormControl>
        <FormControl mb={"20px"}>
          <FormLabel style={TextStyle.h2}>Limitation *</FormLabel>
          <InputGroup>
            <Input
              name="limitation"
              value={voucher.limitation}
              onChange={handleChange}
              type={"number"}
              bg={"#390b74"}
              border={"none"}
            />
            <InputRightElement
              children={
                <Flex flexDir={"column"} ml={"auto"}>
                  <IconButton
                    aria-label="arrowup"
                    as={IoIosArrowUp}
                    h={"20px"}
                    minW={"15px"}
                    px={"3px"}
                    fontSize={"20px"}
                    borderRadius={"0px 5px 0px 0px"}
                    onClick={handleArrowUp}
                  />
                  <IconButton
                    aria-label="arrowdown"
                    as={IoIosArrowDown}
                    h={"20px"}
                    px={"3px"}
                    minW={"15px"}
                    fontSize={"20px"}
                    borderRadius={"0px 0px 5px 0px"}
                    onClick={handleArrowDown}
                  />
                </Flex>
              }
            />
          </InputGroup>
        </FormControl>

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
              <Image src={imagePreview} alt={"image"} width={"100%"}></Image>
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
                width={"125%"}
                height={"100px"}
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

        <VoucherType
          handleChange={handleChange}
          handleTypeChange={handleTypeChange}
          voucher={voucher}
        />
        <Box
          width="100%"
          // minWidth="250px"
          // maxWidth="400px"
          display="flex"
          flexDirection={"row"}
          paddingBottom={3}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button
            h={"40px"}
            backgroundColor="#A533C8"
            variant="solid"
            width="100%"
            color="white"
            onClick={() => {
              onOpen();
            }}
          >
            Submit
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bgColor={"#DEBEF6"} color={"#200944"}>
              <ModalHeader mt={3}>Submit voucher</ModalHeader>
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
                  onClick={handleClickSubmit}
                  color={"white"}
                  width="30%"
                >
                  Confirm
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </form>
    </Container>
  );
};
