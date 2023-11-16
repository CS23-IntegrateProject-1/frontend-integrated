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
  Select,
  Stack,
} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { BiImageAdd } from "react-icons/Bi";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { VoucherType } from "../../components/businessVoucherCom/VoucherType";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface VoucherType {
  voucherName: string;
  description: string;
  target: string;
  startDate: Date;
  endDate: Date;
  voucherImage: string;
  limitation: number;
  voucherType: string;
  discountVoucher: DiscountVoucherType;
  giftVoucher: GiftVoucherType;
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
    voucherImage: "",
    target: "",
    startDate: new Date(),
    endDate: new Date(),
    limitation: 0,
    voucherType: "",
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

  const navigate = useNavigate();
  const handleClickSubmit = () => {
    navigate("/voucher/status");
  };

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
        <FormControl mb={"12px"}>
          <FormLabel style={TextStyle.h2}>Target customer *</FormLabel>
          <Select
            name="target"
            onChange={handleChange}
            bg={"#390b74"}
            border={"none"}
          >
            <option value="all">All</option>
            <option value="regular">Regular customer</option>
            <option value="silver">Silver customer</option>
            <option value="gold">Gold customer</option>
            <option value="diamond">Diamond customer</option>
          </Select>
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
        <Center>
          <Button
            w={"100%"}
            h={"50px"}
            bg={"brand.200"}
            color={"white"}
            borderColor={""}
            _hover={{ bgColor: "brand.300" }}
            onClick={handleClickSubmit}
          >
            Submit
          </Button>
        </Center>
      </form>
    </Container>
  );
};