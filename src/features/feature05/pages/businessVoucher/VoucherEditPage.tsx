import {
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { useNavigate, useParams } from "react-router-dom";
import { BiImageAdd } from "react-icons/bi";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { VoucherType } from "../../components/businessVoucherCom/VoucherType";
import { useState, useEffect, ChangeEvent } from "react";
import { GetEachVoucher } from "../../../../api/Voucher/GetEachVoucher";
import { Axios } from "../../../../AxiosInstance";
import { useQuery } from "@tanstack/react-query";

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
}
interface DiscountVoucherType {
  fix_discount: number;
  percent_discount: number;
  minimum_spend: number;
  limitation: number;
}
// interface GiftVoucherType {
//   giftName: string;
//   minimum: number;
// }

export const VoucherEditPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const id = Number(useParams<{ voucherId: string }>().voucherId);
  //   const fetchDatas = async () => {
  //     const result = (await GetEachVoucher(id))?.data[0];
  //     setVoucher(result);
  //   };
  //   useEffect(() => {
  //     GetEachVoucher(9);
  //   }, []);

  const voucherDiscount = useQuery({
    queryKey: ["voucher"],
    queryFn: () => GetEachVoucher(id),
    onSuccess: (data: VoucherType) => {
      // Set default values once the data is successfully fetched
      setVoucher((prevVoucher) => ({
        ...prevVoucher,
        voucherName: data.voucher_name,
        description: data.description,
        start_date: data.start_date,
        end_date: data.end_date,
        venueId: data.venueId,
        isApprove: data.isApprove,
        voucher_image: data.voucher_image,
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
  const [voucher, setVoucher] = useState<VoucherType>({
    voucher_name: "",
    description: "",
    start_date: "",
    end_date: "",
    point_use: null,
    venueId: 0,
    isApprove: "",
    voucher_image: "",
    voucherType: "",
    Discount_voucher: {
      fix_discount: 0,
      percent_discount: 0,
      minimum_spend: 0,
      limitation: 0,
    },
  });
  if (voucherDiscount.status === "loading") {
    return <span>Loading...</span>;
  }

  if (voucherDiscount.error instanceof Error) {
    return <div>An error occurred: {voucherDiscount.error.message}</div>;
  }

  const handleClickSubmit = () => {
    navigate("/business/voucher");
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

  const handleTypeChange = (tab: string) => {
    setVoucher((prevVoucher) => ({
      ...prevVoucher,
      voucherType: tab,
    }));
  };
  const handleStartDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     const selectedDate = new Date(event.target.value);
    console.log(event.target.value);
    setVoucher({
      ...voucher,
      start_date: event.target.value,
    });
  };
  const handleEndDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     const selectedDate = new Date(event.target.value);
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
    if (name.startsWith("discountVoucher.")) {
      const typeField = name.split(".")[1];
      setVoucher((prevVoucher) => ({
        ...prevVoucher,
        discountVoucher: {
          ...prevVoucher.discountVoucher,
          [typeField]: value,
        },
      }));
    } else if (name.startsWith("giftVoucher.")) {
      const typeField = name.split(".")[1];
      setVoucher((prevVoucher) => ({
        ...prevVoucher,
        giftVoucher: {
          ...prevVoucher.giftVoucher,
          [typeField]: value,
        },
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
        <FormControl mb={"20px"}>
          <FormLabel style={TextStyle.h2}>Limitation *</FormLabel>
          <InputGroup>
            <Input
              name="limitation"
              value={voucher.voucherType.limitation}
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
        <FormControl mb={"20px"}>
          <FormLabel style={TextStyle.h2}>Upload image *</FormLabel>
          <Center bg={"#390b74"} h={"100px"} borderRadius={"md"}>
            <Input
              pos={"absolute"}
              type={"file"}
              w={"100%"}
              h={"100%"}
              opacity={"0"}
            />
            <Icon as={BiImageAdd} h={"40px"} w={"auto"} />
          </Center>
        </FormControl>
        <VoucherType
          handleChange={handleChange}
          handleTypeChange={handleTypeChange}
        />
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
