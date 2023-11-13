import { Box, Flex, Text,Spacer, Center, ButtonGroup, Button, Divider, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { AddIcon } from '@chakra-ui/icons'
import { useDisclosure } from "@chakra-ui/hooks";
import { useState, useEffect } from "react";
import { Axios } from "../../../../AxiosInstance";
export const PaymentMethodSetting = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [flexBoxId, setFlexBoxId] = useState("");
  const handleConfirm = () => {
    const buttonId = flexBoxId;
    //testing
    console.log(buttonId+" confirm");
    // Close the drawer
    onClose();
    if(buttonId==="Kplus"){
      document.getElementById("KplusDef")!.hidden=false;
      document.getElementById("KthaiDef")!.hidden=true;
      document.getElementById("SCBDef")!.hidden=true;
    }
    else if(buttonId==="Kthai"){
      document.getElementById("KthaiDef")!.hidden=false;
      document.getElementById("KplusDef")!.hidden=true;
      document.getElementById("SCBDef")!.hidden=true;
    }
    else if(buttonId==="SCB"){
      document.getElementById("SCBDef")!.hidden=false;
      document.getElementById("KplusDef")!.hidden=true;
      document.getElementById("KthaiDef")!.hidden=true;
    }
    //**have to delete store at local storage after getting success response from backend
    localStorage.setItem("primaryPayment", buttonId);
    //data to send to the backend
    if(localStorage.getItem("primaryPayment") == null){
      useEffect(() => {
        if ("userToken") {
          const url = `feature01/primaryPayment=${buttonId}`;
          const config = {
            headers: {
              'Authorization': `Bearer ${"userToken"}`,
            },
          };
          //send a get request to the backend
          Axios.get(url, config)
            .then((response) => {
              if (response.status === 200) {
                //store consent in local storage
                localStorage.setItem("primaryPayment", buttonId);
                console.log("consent saved");
              }
            })
            .catch((error) => {
              console.error('Error saving consent:', error);
            });
        }
     }, ["userToken"]);
    }
    //final buttonID here
  }
  const handleOpen = (event : any) => {
    const buttonId = event.currentTarget.id;
    setFlexBoxId(buttonId);
    //testing
    console.log(buttonId+"onpen");
    // Open the drawer
    onOpen();
  }
  
  return (
      <Box>
          <Box bg={"brand.300"} fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h3.fontWeight} py={4} px={4} m={-4}>Mobile Banking</Box>
          {(localStorage.getItem("primaryPayment") === "Kplus") && (
            <Box mt={7} fontSize={TextStyle.h3.fontSize} fontWeight={TextStyle.h3.fontWeight}>
            <Flex id="Kplus" onClick={handleOpen} cursor={'pointer'}>
                <Box pl={3}>
                  <AddIcon border='1.2px solid white' borderRadius='50%' padding={0.5}/>
                </Box>
                <Text pl={6}>K PLUS</Text>
                <Spacer/>
                <Text id="KplusDef" hidden={false} color={'brand.100'}>Default</Text>
            </Flex>
            <Divider py={2}/>
            <Flex mt={4} id="Kthai" onClick={handleOpen} cursor={'pointer'}>
                <Box pl={3}>
                  <AddIcon border='1.2px solid white' borderRadius='50%' padding={0.5}/>
                </Box>
                <Text pl={6}>Krungthai NEXT</Text>
                <Spacer/>
                <Text id="KthaiDef" hidden={true} color={'brand.100'}>Default</Text>
            </Flex>
            <Divider py={2}/>
            <Flex mt={4} id="SCB" onClick={handleOpen} cursor={'pointer'}>
                <Box pl={3}>
                  <AddIcon border='1.2px solid white' borderRadius='50%' padding={0.5}/>
                </Box>
                <Text pl={6}>SCB EASY</Text>
                <Spacer/>
                <Text id="SCBDef" hidden={true} color={'brand.100'}>Default</Text>
            </Flex>
            <Divider py={2}/>
           </Box>
          )}
          {(localStorage.getItem("primaryPayment") === "Kthai") && (
              <Box mt={7} fontSize={TextStyle.h3.fontSize} fontWeight={TextStyle.h3.fontWeight}>
              <Flex id="Kplus" onClick={handleOpen} cursor={'pointer'}>
                  <Box pl={3}>
                    <AddIcon border='1.2px solid white' borderRadius='50%' padding={0.5}/>
                  </Box>
                  <Text pl={6}>K PLUS</Text>
                  <Spacer/>
                  <Text id="KplusDef" hidden={true} color={'brand.100'}>Default</Text>
              </Flex>
              <Divider py={2}/>
              <Flex mt={4} id="Kthai" onClick={handleOpen} cursor={'pointer'}>
                  <Box pl={3}>
                    <AddIcon border='1.2px solid white' borderRadius='50%' padding={0.5}/>
                  </Box>
                  <Text pl={6}>Krungthai NEXT</Text>
                  <Spacer/>
                  <Text id="KthaiDef" hidden={false} color={'brand.100'}>Default</Text>
              </Flex>
              <Divider py={2}/>
              <Flex mt={4} id="SCB" onClick={handleOpen} cursor={'pointer'}>
                  <Box pl={3}>
                    <AddIcon border='1.2px solid white' borderRadius='50%' padding={0.5}/>
                  </Box>
                  <Text pl={6}>SCB EASY</Text>
                  <Spacer/>
                  <Text id="SCBDef" hidden={true} color={'brand.100'}>Default</Text>
              </Flex>
              <Divider py={2}/>
            </Box>
          )}
          {(localStorage.getItem("primaryPayment") === "SCB") && (
                <Box mt={7} fontSize={TextStyle.h3.fontSize} fontWeight={TextStyle.h3.fontWeight}>
                <Flex id="Kplus" onClick={handleOpen} cursor={'pointer'}>
                    <Box pl={3}>
                      <AddIcon border='1.2px solid white' borderRadius='50%' padding={0.5}/>
                    </Box>
                    <Text pl={6}>K PLUS</Text>
                    <Spacer/>
                    <Text id="KplusDef" hidden={true} color={'brand.100'}>Default</Text>
                </Flex>
                <Divider py={2}/>
                <Flex mt={4} id="Kthai" onClick={handleOpen} cursor={'pointer'}>
                    <Box pl={3}>
                      <AddIcon border='1.2px solid white' borderRadius='50%' padding={0.5}/>
                    </Box>
                    <Text pl={6}>Krungthai NEXT</Text>
                    <Spacer/>
                    <Text id="KthaiDef" hidden={true} color={'brand.100'}>Default</Text>
                </Flex>
                <Divider py={2}/>
                <Flex mt={4} id="SCB" onClick={handleOpen} cursor={'pointer'}>
                    <Box pl={3}>
                      <AddIcon border='1.2px solid white' borderRadius='50%' padding={0.5}/>
                    </Box>
                    <Text pl={6}>SCB EASY</Text>
                    <Spacer/>
                    <Text id="SCBDef" hidden={false} color={'brand.100'}>Default</Text>
                </Flex>
                <Divider py={2}/>
            </Box>
          )}
          {/* Drawer */}
          <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
          <DrawerContent bg={'brand.100'} px={4} pt={4} pb={5} transition="all 0.1s ease">
            <Center color={"black"}fontWeight={TextStyle.h1.fontWeight} fontSize={TextStyle.h1.fontSize}>Set as Primary Payment</Center>
            <Center pt={1} color={"black"} fontSize={TextStyle.body2.fontSize}>Tap "Confirm" to set this as a parimary payment method</Center>
            <Center>
              <ButtonGroup pt={2} spacing='6'>
                  <Button px={12} onClick={handleConfirm }>Confirm</Button>
                  <Button width={"140px"} height={"40px"} onClick={onClose} bg={"brand.200"} color={'white'} _hover={{bg:"brand.300"}}>Later</Button>
              </ButtonGroup>  
            </Center>         
          </DrawerContent>
          </Drawer>
      </Box>
  )
} 