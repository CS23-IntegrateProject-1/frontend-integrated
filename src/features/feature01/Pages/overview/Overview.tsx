import { Box, Text, Flex, Avatar, Accordion, HStack,VStack,Grid,AccordionPanel, AccordionIcon, AccordionButton, AccordionItem, Spacer, Badge, GridItem} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { ButtonComponent } from "../../../../components/buttons/ButtonComponent";
import { Progress } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
export const Overview = () => {
    
  return (
    <Grid>
        <Grid>
            <HStack boxShadow={"md"} >
                <Box width={"20%"} display={"flex"} justifyContent={"center"}>
                    <Flex align={"center"}>
                        <Box  position={'relative'} cursor={'pointer'}>
                        <Avatar size={'xl'} src='https://bit.ly/broken-link' />
                        {/* button to change image */}
                        <Box  position={'absolute'} top={51} left={20}>
                        
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="11" fill="white" stroke="#A0AEC0" stroke-width="2"/>
                            <path d="M13.3733 10.0133L13.9867 10.6267L7.94667 16.6667H7.33333V16.0533L13.3733 10.0133ZM15.7733 6C15.6067 6 15.4333 6.06667 15.3067 6.19333L14.0867 7.41333L16.5867 9.91333L17.8067 8.69333C17.8685 8.63166 17.9175 8.5584 17.951 8.47775C17.9844 8.3971 18.0016 8.31065 18.0016 8.22333C18.0016 8.13602 17.9844 8.04957 17.951 7.96892C17.9175 7.88827 17.8685 7.81501 17.8067 7.75333L16.2467 6.19333C16.1133 6.06 15.9467 6 15.7733 6ZM13.3733 8.12667L6 15.5V18H8.5L15.8733 10.6267L13.3733 8.12667Z" fill="#A0AEC0"/>
                            </svg>
                        </Box>
                        </Box>
                        
                    </Flex>
                </Box>
                <Box width={"60%"} >
                    <VStack  >
                        <Box display={"flex"}  width={"100%"}>
                            <Text >
                                {" "}
                                Demo Name
                            </Text>
                        </Box>
                        {/* Progress Bar */}
                        <Box width={"100%"}>
                            <Progress value={50} colorScheme="purple" borderRadius={"50px"} /> 
                            
                        </Box>
                        {/* XP Points */}
                        <Box width={"100%"} display={"flex"}>
                            <Text>
                                {" "}
                                Regular

                            </Text>
                            <Spacer />
                            <Text >
                                {" "}
                                500/1000
                            </Text>
                        </Box>
                    </VStack>    
                </Box>
                <Box width={"20%"} display={"flex"} justifyContent={"center"}>
                    <ChevronRightIcon alignItems={"center"}/>
                </Box>
            </HStack>
        </Grid >
        
        <Grid>
            <VStack>
            <Box width={"100%"} display={"flex"} mt={"5px"}>
                <Text>
                    Member Level
                </Text>
                <Spacer />
                <Badge borderRadius={"50px"} padding={"5px"} width={"80px"} textAlign={"center"}> 
                {" "}
                    Regular 
                </Badge>
            </Box>
            <Box width={"100%"} display={"flex"} mt={"5px"}>
                <Text>
                    Member Points
                </Text>
                <Spacer />
                <Badge borderRadius={"50px"} padding={"5px"} width={"80px"} textAlign={"center"}> 
                {" "}
                    500 
                </Badge>
            </Box>
            
            <Box width={"100%"} display={"flex"}>
                <Text>
                    {" "}
                    Payment History

                </Text>
                <Spacer />
                <ChevronRightIcon />
            </Box>
            <Box width={"100%"} display={"flex"}>
                <Text>
                    {" "}
                    My Tickets

                </Text>
                <Spacer />
                <ChevronRightIcon />
            </Box>

            <Box width={"100%"} display={"flex"}>
                <Accordion defaultIndex={[0]} allowMultiple width={"100%"}>
                    <AccordionItem borderTop={"1px solid #200944"} borderBottom={"1px solid #200944"}>
                        <h2>
                        <AccordionButton _expanded={{bg: 'brand.200'}}>
                            <Box as="span" flex='1' textAlign='left' style={TextStyle.h4}>
                            My Reservations
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} borderTop={"1px solid white"} style={TextStyle.body2}>
                        Yes, we take the privacy and security of your information seriously. Refer to our privacy policy for detailed information on how we handle user data.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>

            </VStack>

        </Grid>
        <GridItem display="flex" justifyContent={"center"} alignContent={"flex-end"}>
            <ButtonComponent text="Sign Out"  textColor="red" bgColor="#200944" border={"1px solid red"} bgColorHover="white"/>
        </GridItem>

    </Grid>
  )
}