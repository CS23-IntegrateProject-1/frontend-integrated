/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Text,
  Flex,
  Avatar,
  Accordion,
  HStack,
  VStack,
  Grid,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
  AccordionItem,
  Spacer,
  Badge,
  GridItem,
  Drawer,
  DrawerContent,
  Center,
  ButtonGroup,
  Button,
  useDisclosure,
  FormControl,
} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { ButtonComponent } from "../../../../components/buttons/ButtonComponent";
import { Progress } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Axios } from "../../../../AxiosInstance";
export const Overview = () => {
    //For Drawer Sign out
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleOpen = () => {
        onOpen();
    }
    //Data 
    const [profileData, setProfileData] = useState({
        username:"",
        avatar:"",
        member_point:"",
        member_point_used:"",
        member_tier:"",
    });

    // const [memberData, setMemberData] = useState({
    //     member_point:"",
    //     member_tier:"",
    // });
    
    //Get Profile Data
    useEffect(() => {
        const url1 = `/feature1/profile`;
        Axios.get(url1, { withCredentials: true })
          .then((response) => {
            if (response.status == 200) {
              //const data = response.data;
              setProfileData(response.data);
            //   setMemberData(response.data);
              console.log(profileData.avatar);
              console.log(profileData.member_point);
              console.log(profileData.member_tier);
              console.log("tracker");
            //   debugger;
            }
          })
          .catch((error) => {
            console.error("Error fetching profile  data:", error);
          });
      }, []);

      //Get member points & tier
      useEffect (() => {
        const url2 = ' ';
        Axios.get(url2, {withCredentials: true})
        .then((response) => {
            if (response.status == 200) {
                setProfileData(response.data);
                console.log(profileData);
            }
        })
        .catch((error) => {
            console.error("Error fetching member data:", error);
        });
        }, []);
  return (
    <FormControl>
        <Box>
        <Grid>
      <Grid>
        <HStack boxShadow={"md"}>
          <Box width={"20%"} display={"flex"} justifyContent={"center"}>
            <Flex align={"center"}>
              <Box position={"relative"} cursor={"pointer"}>
              {profileData.avatar !== null ? (
                <Avatar  src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${profileData.avatar}`} size={"xl"} />
              ) : (
                <Avatar src="https://bit.ly/broken-link" size={"xl"} />
              )}
            </Box>
            </Flex>
          </Box>
          <Box width={"60%"}>
            <VStack>
              <Box display={"flex"} width={"100%"}>
                <Text> {profileData.username ? profileData.username : "Demo Name"}</Text>
              </Box>
              {/* Progress Bar */}
              <Box width={"100%"}>
                <Progress
                    value={ (parseInt(profileData.member_point)-parseInt(profileData.member_point_used)) * 100 / parseInt(profileData.member_point)}
                    colorScheme="purple"
                  borderRadius={"50px"}
                />
              </Box>
              {/* XP Points */}
              <Box width={"100%"} display={"flex"}>
                <Text> {profileData.member_tier ? profileData.member_tier : "Regular"}</Text>
                <Spacer />
                <Text> {parseInt(profileData.member_point) - parseInt(profileData.member_point_used) }
                /
                {profileData.member_point ? profileData.member_point: 'Total'}
                </Text>
              </Box>
            </VStack>
          </Box>
          <Box  width={"20%"} display={"flex"} justifyContent={"center"}>
            <NavLink to={"/setting/account/profile"}>
                <ChevronRightIcon  alignItems={"center"} />
            </NavLink>
            
          </Box>
        </HStack>
      </Grid>

      <Grid mx={10} mt={7}>
        <VStack>
          <Box width={"100%"} display={"flex"} mt={"5px"}>
            <Text>Member Level</Text>
            <Spacer />
            <Badge
              borderRadius={"50px"}
              padding={"5px"}
              width={"80px"}
              textAlign={"center"}
            >
              {" "}
              {profileData.member_tier ? profileData.member_tier : "Regular"}
            </Badge>
          </Box>
          <Box width={"100%"} display={"flex"} mt={"5px"}>
            <Text>Member Points</Text>
            <Spacer />
            <Badge
              borderRadius={"50px"}
              padding={"5px"}
              width={"80px"}
              textAlign={"center"}
            >
              {parseInt(profileData.member_point) - parseInt(profileData.member_point_used) }
            </Badge>
          </Box>
          <Box width={"100%"}>              
          <NavLink to="/customer/history">
          <Box  display={"flex"}>
            {/* to link with group 8 history payment */}
           
            <Text 
            fontWeight={TextStyle.body1.fontWeight}
            fontSize={TextStyle.body1.fontSize}> Payment History</Text> 
            <Spacer />
            <ChevronRightIcon />
            
          </Box>
          </NavLink>
          </Box>

          <Box width={"100%"}>              
          <NavLink to="/ticketHistory">
          <Box  display={"flex"}>
            {/* to link with group 8 history payment */}
           
            <Text  
            fontWeight={TextStyle.body1.fontWeight}
            fontSize={TextStyle.body1.fontSize}> My Tickets</Text> 
            <Spacer />
            <ChevronRightIcon />
            
          </Box>
          </NavLink>
          </Box>          

          {/* <Box width={"100%"}>
            <NavLink to="/ticketHistory">
            <Box display={"flex"}>
            <Text
              fontWeight={TextStyle.body1.fontWeight}
              fontSize={TextStyle.body1.fontSize}
            >
              My Tickets
            </Text>
            <Spacer />
            <ChevronRightIcon />
            </NavLink>
            </Box>
          </Box> */}

          <Box ml={-2} width={"100%"} display={"flex"}>
            <Accordion allowMultiple width={"100%"}>
              <AccordionItem
                borderTop={"1px solid #200944"}
                borderBottom={"1px solid #200944"}
              >
                <h2>
                  <AccordionButton>
                    <Box
                      fontWeight={TextStyle.body1.fontWeight}
                      fontSize={TextStyle.body1.fontSize}
                      color={"white"}
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                     <Text   ml={-3} > My Reservations</Text>
                    </Box>
                    <AccordionIcon
                      color={"white"}
                      fontWeight={TextStyle.body1.fontWeight}
                      fontSize={TextStyle.body1.fontSize}
                    />
                  </AccordionButton>
                </h2>
                <AccordionPanel bg={"#DEBEF6"} pb={4} color={"black"}>
                  <NavLink to="/my-reservation">
                    <Flex
                      px={2}
                      bg={"#DEBEF6"}
                      py={2}
                      alignContent={"center"}
                      alignItems={"center"}
                    >
                      <Box ml={10}>
                        <Text
                          fontSize={TextStyle.h3.fontSize}
                          fontWeight={TextStyle.h2.fontWeight}
                          ml={-10}
                        >
                          Reservations
                        </Text>
                      </Box>
                      <Spacer />
                      <Box>
                        <ChevronRightIcon />
                      </Box>
                    </Flex>
                  </NavLink>
                </AccordionPanel>
                <AccordionPanel
                  bg={"#DEBEF6"}
                  pb={4}
                  color={"black"}
                  borderBottomEndRadius={"25px"}
                  borderBottomLeftRadius={"25px"}
                >
                  <NavLink to="/map/food-delivery/my-delivery/completed">
                    <Flex
                      px={2}
                      bg={"#DEBEF6"}
                      py={2}
                      alignContent={"center"}
                      alignItems={"center"}
                    >
                      <Box ml={10}>
                        <Text
                          fontSize={TextStyle.h3.fontSize}
                          fontWeight={TextStyle.h2.fontWeight}
                          ml={-10}
                        >
                          Delivery
                        </Text>
                      </Box>
                      <Spacer />
                      <Box>
                        <ChevronRightIcon />
                      </Box>
                    </Flex>
                  </NavLink>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </VStack>
      </Grid>
      <GridItem
        display="flex"
        justifyContent={"center"}
        alignContent={"flex-end"}
        mt={20}
      >
        <ButtonComponent
          text="Sign Out"
          textColor="red"
          bgColor="#200944"
          border={"1px solid red"}
          bgColorHover="white"
          onClick={handleOpen}
        />
      </GridItem>
    </Grid>
        {/* Drawer for sign out*/}
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
            Sign Out
          </Center>
          <Center pt={1} color={"black"} fontSize={TextStyle.body2.fontSize}>
            Are you sure you want to sign out?
          </Center>
          <Center>
            <ButtonGroup pt={2} spacing="6">
                <NavLink to={"/login"}>
                <Button px={12}>
                Continue
              </Button>
                </NavLink>
              <Button
                width={"140px"}
                height={"40px"}
                onClick={onClose}
                bg={"brand.200"}
                color={"white"}
                _hover={{ bg: "brand.300" }}
              >
                Cancel
              </Button>
            </ButtonGroup>
          </Center>
        </DrawerContent>
      </Drawer>
    </Box>
    </FormControl>
    
    
  );
};
