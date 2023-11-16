import {
  Box,
  Flex,
  Text,
  Spacer,
  RadioGroup,
  Input,
  Center,
  ButtonGroup,
  Button,
  Divider,
  Drawer,
  DrawerContent,

} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { AddIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/hooks";
import { useEffect, useState } from "react";
import { Axios } from "../../../../AxiosInstance";
import { NavLink } from "react-router-dom";
import { AddCard } from "../../Components/TextSlider/AddCard";
export const PaymentMethodSetting = () => {
  var userId;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isShowDrawerPromptPay, setIsShowDrawerPromptPay ] = useState(false);
  const [flexBoxId, setFlexBoxId] = useState("");
  const [phNo, setphNo] = useState("");
  const [promptNo, setpromptNo] = useState<string>("");
  const [cardInfo, setcardInfo] = useState<string>("");
  const onClosePromptPay = () => setIsShowDrawerPromptPay(false);
  //get updated data of promtpay from the backend
  // useEffect(() => {
    useEffect(() => {
      const url = `feature1/promptpay`;
      Axios.get(url, { withCredentials: true })
        .then((response) => {
          if (response.status == 200) {
            const data = response.data;
            setphNo(data.phone_number);
            setpromptNo(data.promptpay_number);
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }, []); // Run once on component mount
  
  // }),[];

  //handling Prompt Pay Update
  const handleConfirmPromptPay = () => {
    //get phone number and prompt pay number
    const phNoTag = document.getElementById("one") as HTMLInputElement;
    const promptNoTag = document.getElementById("two") as HTMLInputElement;
    const phNo = phNoTag.value;
    const promptNo = promptNoTag.value;
    console.log("prompt");
    onClosePromptPay();
    const url = `/feature1/promptpay`;
    //send a put request to the backend to update a new payment method
    Axios.put(
      url,
      { 
        promptpay_number: Number(promptNo),
        phone_number: phNo.toString(),
      },
      { withCredentials: true } 
    )
      .then((response) => {
        if (response.status === 200) {
          console.log("prompt pay updated");
        }
      })
      .catch((error) => {
        console.error("Error saving consent:", error);
      }); 
  }
  //handle drawer prompt
  const handlePrompt = () =>{
    onClose();
    setIsShowDrawerPromptPay(true);
  }
  //handle cancel
  const handleCancel = () => {
    //return to previous page
    window.history.back();
  };
  const handleConfirm = () => {
    const buttonId = flexBoxId;
    //testing
    console.log(buttonId + " confirm");
    // Close the drawer
    onClose();
    if (buttonId === "Kplus") {
      document.getElementById("KplusDef")!.hidden = false;
      document.getElementById("KthaiDef")!.hidden = true;
      document.getElementById("SCBDef")!.hidden = true;
    } else if (buttonId === "Kthai") {
      document.getElementById("KthaiDef")!.hidden = false;
      document.getElementById("KplusDef")!.hidden = true;
      document.getElementById("SCBDef")!.hidden = true;
    } else if (buttonId === "SCB") {
      document.getElementById("SCBDef")!.hidden = false;
      document.getElementById("KplusDef")!.hidden = true;
      document.getElementById("KthaiDef")!.hidden = true;
    }
    //**have to delete store at local storage after getting success response from backend
    //localStorage.setItem("primaryPayment", buttonId);
    //data to send to the backend
    if (localStorage.getItem("primaryPayment") == null) {
      localStorage.setItem("primaryPayment", buttonId);
      const url = `/feature1/payment-method`;
      //send a post request to the backend to create a new payment method
      Axios.post(
        url,
        {
          method: "Mobilebanking",
        },
        { withCredentials: true }
      )
        .then((response) => {
          if (response.status == 200) {
            //store consent in local storage
            localStorage.setItem("primaryPayment", buttonId);
            console.log("consent saved");
          }
          if (response.status == 409) {
            console.log("consent already saved");
            localStorage.setItem("primaryPayment", buttonId);
          }
        })
        .catch((error) => {
          console.error("Error saving consent:", error);
        });
    }
    //update primary payment method
    else if (localStorage.getItem("primaryPayment") != buttonId) {
      console.log("update");
      const url = `/feature1/payment-method`;
      //send a put request to the backend to update a new payment method
      Axios.put(
        url,
        {
          method: "Mobilebanking",
        },
        { withCredentials: true }
      )
        .then((response) => {
          if (response.status === 200) {
            //store consent in local storage
            localStorage.setItem("primaryPayment", buttonId);
            console.log("consent updated");
          }
          if (response.status === 409) {
            console.log("consent already saved");
            localStorage.setItem("primaryPayment", buttonId);
          }
        })
        .catch((error) => {
          console.error("Error saving consent:", error);
        });
    }
    //final buttonID here
  };
  const handleOpen = (event: any) => {
    const buttonId = event.currentTarget.id;
    setFlexBoxId(buttonId);
    //testing
    console.log(buttonId + "onpen");
    // Open the drawer
    onOpen();
  };

  return (
    <Box>
      <Box
        bg={"brand.300"}
        fontSize={TextStyle.h2.fontSize}
        fontWeight={TextStyle.h3.fontWeight}
        py={4}
        px={4}
        m={-4}
      >
        Mobile Banking
      </Box>
      {localStorage.getItem("primaryPayment") === "Kplus" && (
        <Box
          mt={7}
          fontSize={TextStyle.h3.fontSize}
          fontWeight={TextStyle.h3.fontWeight}
        >
          <Flex id="Kplus" onClick={handleOpen} cursor={"pointer"}>
            <Box pl={3}>
              <AddIcon
                border="1.2px solid white"
                borderRadius="50%"
                padding={0.5}
              />
            </Box>
            <Text pl={6}>K PLUS</Text>
            <Spacer />
            <Text id="KplusDef" hidden={false} color={"brand.100"}>
              Default
            </Text>
          </Flex>
          <Divider py={2} />
          <Flex mt={4} id="Kthai" onClick={handleOpen} cursor={"pointer"}>
            <Box pl={3}>
              <AddIcon
                border="1.2px solid white"
                borderRadius="50%"
                padding={0.5}
              />
            </Box>
            <Text pl={6}>Krungthai NEXT</Text>
            <Spacer />
            <Text id="KthaiDef" hidden={true} color={"brand.100"}>
              Default
            </Text>
          </Flex>
          <Divider py={2} />
          <Flex mt={4} id="SCB" onClick={handleOpen} cursor={"pointer"}>
            <Box pl={3}>
              <AddIcon
                border="1.2px solid white"
                borderRadius="50%"
                padding={0.5}
              />
            </Box>
            <Text pl={6}>SCB EASY</Text>
            <Spacer />
            <Text id="SCBDef" hidden={true} color={"brand.100"}>
              Default
            </Text>
          </Flex>
          {/* <Divider py={2}/> */}
        </Box>
      )}
      {localStorage.getItem("primaryPayment") === "Kthai" && (
        <Box
          mt={7}
          fontSize={TextStyle.h3.fontSize}
          fontWeight={TextStyle.h3.fontWeight}
        >
          <Flex id="Kplus" onClick={handleOpen} cursor={"pointer"}>
            <Box pl={3}>
              <AddIcon
                border="1.2px solid white"
                borderRadius="50%"
                padding={0.5}
              />
            </Box>
            <Text pl={6}>K PLUS</Text>
            <Spacer />
            <Text id="KplusDef" hidden={true} color={"brand.100"}>
              Default
            </Text>
          </Flex>
          <Divider py={2} />
          <Flex mt={4} id="Kthai" onClick={handleOpen} cursor={"pointer"}>
            <Box pl={3}>
              <AddIcon
                border="1.2px solid white"
                borderRadius="50%"
                padding={0.5}
              />
            </Box>
            <Text pl={6}>Krungthai NEXT</Text>
            <Spacer />
            <Text id="KthaiDef" hidden={false} color={"brand.100"}>
              Default
            </Text>
          </Flex>
          <Divider py={2} />
          <Flex mt={4} id="SCB" onClick={handleOpen} cursor={"pointer"}>
            <Box pl={3}>
              <AddIcon
                border="1.2px solid white"
                borderRadius="50%"
                padding={0.5}
              />
            </Box>
            <Text pl={6}>SCB EASY</Text>
            <Spacer />
            <Text id="SCBDef" hidden={true} color={"brand.100"}>
              Default
            </Text>
          </Flex>
          {/* <Divider py={2}/> */}
        </Box>
      )}
      {localStorage.getItem("primaryPayment") === "SCB" && (
        <Box
          mt={7}
          fontSize={TextStyle.h3.fontSize}
          fontWeight={TextStyle.h3.fontWeight}
        >
          <Flex id="Kplus" onClick={handleOpen} cursor={"pointer"}>
            <Box pl={3}>
              <AddIcon
                border="1.2px solid white"
                borderRadius="50%"
                padding={0.5}
              />
            </Box>
            <Text pl={6}>K PLUS</Text>
            <Spacer />
            <Text id="KplusDef" hidden={true} color={"brand.100"}>
              Default
            </Text>
          </Flex>
          <Divider py={2} />
          <Flex mt={4} id="Kthai" onClick={handleOpen} cursor={"pointer"}>
            <Box pl={3}>
              <AddIcon
                border="1.2px solid white"
                borderRadius="50%"
                padding={0.5}
              />
            </Box>
            <Text pl={6}>Krungthai NEXT</Text>
            <Spacer />
            <Text id="KthaiDef" hidden={true} color={"brand.100"}>
              Default
            </Text>
          </Flex>
          <Divider py={2} />
          <Flex mt={4} id="SCB" onClick={handleOpen} cursor={"pointer"}>
            <Box pl={3}>
              <AddIcon
                border="1.2px solid white"
                borderRadius="50%"
                padding={0.5}
              />
            </Box>
            <Text pl={6}>SCB EASY</Text>
            <Spacer />
            <Text id="SCBDef" hidden={false} color={"brand.100"}>
              Default
            </Text>
          </Flex>
          {/* <Divider py={2}/> */}
        </Box>
      )}
      {/* Primary Method haven't set */}
      {localStorage.getItem("primaryPayment") === null && (
        <Box
          mt={7}
          fontSize={TextStyle.h3.fontSize}
          fontWeight={TextStyle.h3.fontWeight}
        >
          <Flex id="Kplus" onClick={handleOpen} cursor={"pointer"}>
            <Box pl={3}>
              <AddIcon
                border="1.2px solid white"
                borderRadius="50%"
                padding={0.5}
              />
            </Box>
            <Text pl={6}>K PLUS</Text>
            <Spacer />
            <Text id="KplusDef" hidden={true} color={"brand.100"}>
              Default
            </Text>
          </Flex>
          <Divider py={2} />
          <Flex mt={4} id="Kthai" onClick={handleOpen} cursor={"pointer"}>
            <Box pl={3}>
              <AddIcon
                border="1.2px solid white"
                borderRadius="50%"
                padding={0.5}
              />
            </Box>
            <Text pl={6}>Krungthai NEXT</Text>
            <Spacer />
            <Text id="KthaiDef" hidden={true} color={"brand.100"}>
              Default
            </Text>
          </Flex>
          <Divider py={2} />
          <Flex mt={4} id="SCB" onClick={handleOpen} cursor={"pointer"}>
            <Box pl={3}>
              <AddIcon
                border="1.2px solid white"
                borderRadius="50%"
                padding={0.5}
              />
            </Box>
            <Text pl={6}>SCB EASY</Text>
            <Spacer />
            <Text id="SCBDef" hidden={true} color={"brand.100"}>
              Default
            </Text>
          </Flex>
          {/* <Divider py={2}/> */}
        </Box>
      )}
      {/* Prompt Pay */}
      <Box
        bg={"brand.300"}
        fontSize={TextStyle.h2.fontSize}
        fontWeight={TextStyle.h3.fontWeight}
        py={4}
        px={4}
        mx={-4}
        mt={15}
      >
        Prompt Pay
      </Box>
      <Box
        mt={15}
        border={"1px solid white"}
        borderRadius={"5"}
        px={25}
        pt={25}
      >
        {/* Phone Number */}
        {/* {phNo} */}
        <Box>
          <Text mb={1}>Phone Number</Text>
          <Input
            w="100%"
            borderRadius="7px"
            borderColor={"brand.300"}
            p="7px 15px"
            boxSizing="border-box"
            mb="5vh"
            bg="brand.300"
            type="phone"
            _placeholder={{ color: "white" }}
            _hover={{ borderColor: "brand.300" }}
            id="one"
            value={phNo}
            onChange={(e) => setphNo(e.target.value)}
          />
        </Box>
        {/* PromptPay Number */}
        <Box mt={-7}>
          <Text mb={1}>Prompt pay Number</Text>
          <Input
            w="100%"
            borderRadius="7px"
            borderColor={"brand.300"}
            p="7px 15px"
            boxSizing="border-box"
            mb="5vh"
            bg="brand.300"
            type="phone"
            _placeholder={{ color: "white" }}
            _hover={{ borderColor: "brand.300" }}
            id="two"
            value={promptNo}
            onChange={(e) => setpromptNo(e.target.value)}
          />
        </Box>
      </Box>

      {/* Credit Cards */}
      <Box
        bg={"brand.300"}
        fontSize={TextStyle.h2.fontSize}
        fontWeight={TextStyle.h3.fontWeight}
        py={4}
        px={4}
        mx={-4}
        mt={15}
      >
        Credit Cards
      </Box>
      {/* {cardInfo} */}
      <Box 
        mt={15}
        border={"1px solid white"}
        borderRadius={"5"}
        px={25}
        py={8}
        pt={25}
        cursor={"pointer"}

      >
        {/* radio group */}
        <RadioGroup>
          {/* Visa */}
          <AddCard cardType="visa" cardId="visa" cardNo="" setType= {setcardInfo}/>
        {/* Master */}
          <AddCard cardType="master" cardId="master" cardNo="" setType={setcardInfo}/>
        </RadioGroup>
        <NavLink to={"/setting/account/paymentmethodsetting/AddCard"} state={cardInfo}>
          <Flex
            py={5}
            border={"1px solid"}
            borderColor={"brand.100"}
            borderRadius={"7"}
            width={"100%"}
            // onClick={handleAddCard}
          >
            <Box pl={10}>
              <AddIcon
                border="1.2px solid white"
                borderRadius="50%"
                padding={0.5}
              />
            </Box>
            <Text pl={35}>Add Card</Text>
          </Flex>
        </NavLink>
      </Box>
      {/* two buttons */}
      <Center pb={5}>
        <ButtonGroup pt={2} spacing="6">
          <Button
            onClick={handleCancel}
            bg="white"
            color="brand.200"
            width="30vw"
            display="block"
            margin="auto"
            marginTop="5vh"
           >
            Cancel
          </Button>
          <Button
            _hover={{ bg: "brand.200" }}
            bg="brand.200"
            color="white"
            width="30vw"
            display="block"
            margin="auto"
            marginTop="5vh"
            onClick={handlePrompt}
          >
            Save
          </Button>
        </ButtonGroup>
      </Center>
      {/* Drawer set primary method*/}
      <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
        <DrawerContent
          bg={"brand.100"}
          px={4}
          pt={4}
          pb={5}
          transition="all 0.1s ease"
        >
          <Center
            color={"black"}
            fontWeight={TextStyle.h1.fontWeight}
            fontSize={TextStyle.h1.fontSize}
          >
            Set as Primary Payment
          </Center>
          <Center pt={1} color={"black"} fontSize={TextStyle.body2.fontSize}>
            Tap "Confirm" to set this as a parimary payment method
          </Center>
          <Center>
            <ButtonGroup pt={2} spacing="6">
              <Button px={12} onClick={handleConfirm}>
                Confirm
              </Button>
              <Button
                width={"140px"}
                height={"40px"}
                onClick={onClose}
                bg={"brand.200"}
                color={"white"}
                _hover={{ bg: "brand.300" }}
              >
                Later
              </Button>
            </ButtonGroup>
          </Center>
        </DrawerContent>
      </Drawer>
      {/* DrawerrPromptPay */}
      <Drawer placement={"bottom"} onClose={onClosePromptPay} isOpen={isShowDrawerPromptPay}>
  <DrawerContent
    bg={"brand.100"}
    px={4}
    pt={4}
    pb={5}
    transition="all 0.1s ease"
  >
    <Center
      color={"black"}
      fontWeight={TextStyle.h1.fontWeight}
      fontSize={TextStyle.h1.fontSize}
    >
      Set as prompt pay
    </Center>
    <Center pt={1} color={"black"} fontSize={TextStyle.body2.fontSize}>
      Tap "Confirm" to set this as a prompt pay no
    </Center>
    <Center>
      <ButtonGroup pt={2} spacing="6">
        <Button px={12} onClick={handleConfirmPromptPay}>
          Confirm
        </Button>
        <Button
          width={"140px"}
          height={"40px"}
          onClick={() => setIsShowDrawerPromptPay(false)}
          bg={"brand.200"}
          color={"white"}
          _hover={{ bg: "brand.300" }}
        >
          Later
        </Button>
      </ButtonGroup>
    </Center>
  </DrawerContent>
</Drawer>

    </Box>
  );
};
