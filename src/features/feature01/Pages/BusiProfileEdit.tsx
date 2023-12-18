import { AddIcon, TimeIcon } from "@chakra-ui/icons";
import { Box, Input, Select, Flex, Text, Avatar, Stack, Tab, TabList, TabIndicator, TabPanel, Tabs, TabPanels, InputGroup, InputRightElement, RadioGroup, Center, ButtonGroup, Button, FormControl } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { TextStyle } from "../../../theme/TextStyle";
import { NavLink } from "react-router-dom";
// import { AddCard } from "./AddCard";
import { Axios } from "../../../AxiosInstance";
interface CreditCard {
    creditCardId: number;
    card_no: string;
    name: string;
    country: string;
    bank: string;
    cvc: number;
    exp: string;
    userId: number;
}

interface Availability {
    venueId: number;
    openingDay: OpeningDay;
}

interface OpeningDay {
    Mon: AvailabilityTime;
    Tue: AvailabilityTime;
    Wed: AvailabilityTime;
    Thu: AvailabilityTime;
    Fri: AvailabilityTime;
    Sat: AvailabilityTime;
    Sun: AvailabilityTime;
}

interface AvailabilityTime {
    openingTime: string;
    closingTime: string;
}

const defaultAvailability: Availability = {
    venueId: 0,
    openingDay: {
        Mon: {
            openingTime: "",
            closingTime: ""
        },
        Tue: {
            openingTime: "",
            closingTime: ""
        },
        Wed: {
            openingTime: "",
            closingTime: ""
        },
        Thu: {
            openingTime: "",
            closingTime: ""
        },
        Fri: {
            openingTime: "",
            closingTime: ""
        },
        Sat: {
            openingTime: "",
            closingTime: ""
        },
        Sun: {
            openingTime: "",
            closingTime: ""
        }
    }
}

export const BusiProfileEdit = () => {
    //img upload
    const [selectedFile, setSelectedFile] = useState("");
    //index for tabs open days
    //0 - Sun , 1 - Mon , 2 - Tue , 3 - Wed , 4 - Thu , 5 - Fri , 6 - Sat
    const [tabIndex, setTabIndex] = useState(0);
    //name
    const [name, setName] = useState("");
    //about us
    const [aboutUs, setAboutUs] = useState("");
    //address
    const [address, setAddress] = useState("");
    //ph no
    const [phNo, setphNo] = useState("");
    //prompt pay no
    const [promptNo, setpromptNo] = useState("");
    //category
    const [category, setCategory] = useState("");
    //capacity
    const [capacity, setCapacity] = useState("");
    //deposti
    const [deposite, setDeposite] = useState("");
    //website url
    const [website, setWebsite] = useState("");
    //card id
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [cardInfo] = useState<string>("");

    //const [userid, setuserid] = useState<string>("");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [cardData] = useState<CreditCard[]>([]);
    if(cardData)console.log(cardData);
    const [availability, setAvailability] = useState<Availability>(defaultAvailability);

    const handleCancel = () => {
        //go back to the previous page
        window.history.back();
    }
    console.log(tabIndex + " index no from tab");
    console.log(name + " name");
    console.log(aboutUs + " about us");
    console.log(address + " address");
    console.log(phNo + " ph no");
    console.log(promptNo + " prompt no");
    console.log(category + " category");
    //check the data of Opening Day date and time


    //load the data when the page is loaded
    useEffect(() => {
        // const fetchData = async () => {
        //     const venueData = await Axios.get('url');
        //     const venueImage = await Axios.get('url');
        //     const venueAvailability = await Axios.get('url');
        //     const venuePromptPay = await Axios.get('url');
        //     const venuePhone = await Axios.get('url');
        //     const venueCreditCard = await Axios.get('url');

        // };
        // fetchData();
    }, []);
    const handleProfileImageChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        if(!e.target.files) {
            return;
        }
        const selectedFile = e.target.files[0];
        console.log('selected file: ', selectedFile);
        //create url
        const objectUrl = URL.createObjectURL(selectedFile);
        console.log(objectUrl);
        setSelectedFile(objectUrl);
    }

    const handleSave = async (e: { preventDefault: () => void; } ) => {
        //check the data of Opening Day date and time
        e.preventDefault();
        // const allData = new FormData();
        // allData.append('image_url', selectedFile);
        //date and time
        //allData.append('openingDay', JSON.stringify(availability.openingDay));
        
        
        // console.log('Form data with file entries:', Array.from(formDataWithFile.entries()));
        // Log form data to console
        const venueData = new FormData();
        const venueImage = new FormData();
        const venueCreditCard = new FormData();
        const venuePhoneNPrompt = new FormData();
        const venueDeposit = new FormData();
        const venueAvailability = new FormData();
        const venueAddress = new FormData();
        //console.log(formData);
        venueImage.append('image_url', selectedFile);

        venueData.append('name', name);
        venueData.append('description', aboutUs);
        venueData.append('category', category);
        venueData.append('capacity', capacity);
        venueData.append('website_url', website);

        venueAddress.append('address', address); //use table location
        //date and time
        venueAvailability.append('MON_OpeningTime', JSON.stringify(availability.openingDay.Mon.openingTime));
        venueAvailability.append('MON_ClosingTime', JSON.stringify(availability.openingDay.Mon.closingTime));
        venueAvailability.append('TUE_OpeningTime', JSON.stringify(availability.openingDay.Tue.openingTime));
        venueAvailability.append('TUE_ClosingTime', JSON.stringify(availability.openingDay.Tue.closingTime));
        venueAvailability.append('WED_OpeningTime', JSON.stringify(availability.openingDay.Wed.openingTime));
        venueAvailability.append('WED_ClosingTime', JSON.stringify(availability.openingDay.Wed.closingTime));
        venueAvailability.append('THU_OpeningTime', JSON.stringify(availability.openingDay.Thu.openingTime));
        venueAvailability.append('THU_ClosingTime', JSON.stringify(availability.openingDay.Thu.closingTime));
        venueAvailability.append('FRI_OpeningTime', JSON.stringify(availability.openingDay.Fri.openingTime));
        venueAvailability.append('FRI_ClosingTime', JSON.stringify(availability.openingDay.Fri.closingTime));
        venueAvailability.append('SAT_OpeningTime', JSON.stringify(availability.openingDay.Sat.openingTime));
        venueAvailability.append('SAT_ClosingTime', JSON.stringify(availability.openingDay.Sat.closingTime));
        venueAvailability.append('SUN_OpeningTime', JSON.stringify(availability.openingDay.Sun.openingTime));
        venueAvailability.append('SUN_ClosingTime', JSON.stringify(availability.openingDay.Sun.closingTime));

        venueDeposit.append('deposite', deposite);

        venuePhoneNPrompt.append('phone_number', phNo);
        venuePhoneNPrompt.append('promptpay_number', promptNo);
        venueCreditCard.append('credit_card_id', cardInfo);
        //Venue Data
        const url = `/feature1/venueData`;
        //send a put request to the backend to update a new payment method
        Axios.put(
            url,
            venueData,
            { withCredentials: true }
        )
            .then((response) => {
                if (response.status === 200) {
                    console.log(" venue data updated");
                }
            })
            .catch((error) => {
                console.error("Error saving venude data:", error);
            });
        // //Venue Image
        const url2 = `/feature1/venueImage`;
        //send a put request to the backend to update a new payment method
        Axios.put(
            url2,
            venueImage,
            { withCredentials: true }
        )
            .then((response) => {
                if (response.status === 200) {
                    console.log(" venue image updated");
                }
            })
            .catch((error) => {
                console.error("Error saving venude image:", error);
            });
        //Venue availability
        const url3 = `/feature1/venueAvailability`;
        //send a put request to the backend to update a new payment method
        Axios.put(
            url3,
            venueAvailability,
            { withCredentials: true }
        )
            .then((response) => {
                if (response.status === 200) {
                    console.log(" venue availability updated");
                }
            })
            .catch((error) => {
                console.error("Error saving venude availability:", error);
            });
        //venue prompt pay
        const url4 = `/feature1/venuePromptPay`;
        //send a put request to the backend to update a new payment method
        Axios.put(
            url4,
            venuePhoneNPrompt,
            { withCredentials: true }
        )
            .then((response) => {
                if (response.status === 200) {
                    console.log(" venue prompt pay updated");
                }
            })
            .catch((error) => {
                console.error("Error saving venude prompt pay:", error);
            });

        // //venue creditCard
        const url5 = `/feature1/venuePhone`;
        //send a put request to the backend to update a new payment method
        Axios.put(
            url5,
            venueCreditCard,
            { withCredentials: true }
        )
            .then((response) => {
                if (response.status === 200) {
                    console.log(" venue phone updated");
                }
            })
            .catch((error) => {
                console.error("Error saving venude phone:", error);
            });
    }


    // function setButtonClick(arg0: boolean): void {
    //     throw new Error("Function not implemented.");
    // }

    return (
        <FormControl>
            {/* <Stack direction={{ lg: 'row', base: 'column' }}>
                <Box ml={{ lg: '-2' }} width={{ lg: '45%' }}> */}
                    <Flex mt={8} alignItems={'center'} justifyContent={'center'}>
                        {/* Img Upload */}
                        <Box cursor={"pointer"}>
                            <Box position={'relative'} cursor={'pointer'}>
                                <Avatar size={'xl'} src={selectedFile ? selectedFile : 'https://bit.ly/broken-link'} />
                                {/* button to change image */}
                                <Box position={'absolute'} top={51} left={20}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="11" fill="white" stroke="#A0AEC0" stroke-width="2" />
                                        <path d="M13.3733 10.0133L13.9867 10.6267L7.94667 16.6667H7.33333V16.0533L13.3733 10.0133ZM15.7733 6C15.6067 6 15.4333 6.06667 15.3067 6.19333L14.0867 7.41333L16.5867 9.91333L17.8067 8.69333C17.8685 8.63166 17.9175 8.5584 17.951 8.47775C17.9844 8.3971 18.0016 8.31065 18.0016 8.22333C18.0016 8.13602 17.9844 8.04957 17.951 7.96892C17.9175 7.88827 17.8685 7.81501 17.8067 7.75333L16.2467 6.19333C16.1133 6.06 15.9467 6 15.7733 6ZM13.3733 8.12667L6 15.5V18H8.5L15.8733 10.6267L13.3733 8.12667Z" fill="#A0AEC0" />
                                    </svg>
                                </Box>
                                <Input
                                    type="file"
                                    height="100%"
                                    width="100%"
                                    position="absolute"
                                    top="0"
                                    left="0"
                                    opacity="0"
                                    aria-hidden="true"
                                    accept="image/*"
                                    onChange={handleProfileImageChange}
                                />
                            </Box>
                        </Box>
                    </Flex>
                    <Stack direction={{ lg: 'row', base: 'column' }}>
                        <Box ml={{ lg: '100' }} width={{ lg: '60%' }}>
                        </Box>
                        <Box width={{ lg: '50%', sm: '100%' }}>
                        </Box>
                    </Stack>

                    {/* Input Name */}
                    <Box mt={5}>
                        <Text fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h1.fontWeight}>Name</Text>
                        <Input focusBorderColor='brand.300' _hover={{ borderColor: 'brand.300' }} size='md' bg={'brand.300'} borderColor={'brand.300'} value={name} onChange={(e) => setName(e.target.value)} ></Input>
                    </Box>
                    <Box mt={5}>
                        <Text fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h1.fontWeight}>About Us</Text>
                        <Input focusBorderColor='brand.300' _hover={{ borderColor: 'brand.300' }} size='md' bg={'brand.300'} borderColor={'brand.300'} value={aboutUs} onChange={(e) => setAboutUs(e.target.value)}></Input>
                    </Box>
                    <Box mt={5}>
                        <Text fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h1.fontWeight}>Address</Text>
                        <Input focusBorderColor='brand.300' _hover={{ borderColor: 'brand.300' }} size='md' bg={'brand.300'} borderColor={'brand.300'} value={address} onChange={(e) => setAddress(e.target.value)}></Input>
                    </Box>
                    {/* {JSON.stringify(availability, null, 2)} */}
                    {/* Open Hours and Date */}
                    <Tabs mt={5} position="relative" variant="unstyled" onChange={(index) => setTabIndex(index)}>
                        <TabList fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h1.fontWeight}>
                            <Tab>Mon</Tab>
                            <Tab>Tue</Tab>
                            <Tab>Wed</Tab>
                            <Tab>Thu</Tab>
                            <Tab>Fri</Tab>
                            <Tab>Sat</Tab>
                            <Tab>Sun</Tab>
                        </TabList>
                        <TabIndicator
                            mt="-1.5px"
                            height="2px"
                            bg="brand.100"
                            borderRadius="1px"
                        />
                        <TabPanels>
                            {/* Monday */}
                            <TabPanel>
                                <Flex ml={{ lg: '55' }} mr={{ lg: '155' }} flexDirection={'row'} justifyContent={'space-between'}>
                                    <InputGroup size='sm' width={{ base: '45%', lg: '25%' }}>
                                        <Input size='m' type="time" value={availability.openingDay.Mon.openingTime} onChange={(e) => setAvailability({ ...availability, openingDay: { ...availability.openingDay, Mon: { ...availability.openingDay.Mon, openingTime: e.target.value } } })}
                                        />
                                        <InputRightElement>
                                            <TimeIcon />
                                        </InputRightElement>
                                    </InputGroup>
                                    <InputGroup size='sm' width={{ base: '45%', lg: '25%' }}>
                                        <Input size='m' type="time" value={availability.openingDay.Mon.closingTime} onChange={(e) => setAvailability({ ...availability, openingDay: { ...availability.openingDay, Mon: { ...availability.openingDay.Mon, closingTime: e.target.value } } })}
                                        />
                                        <InputRightElement>
                                            <TimeIcon />
                                        </InputRightElement>
                                    </InputGroup>
                                </Flex>
                            </TabPanel>
                            {/* Tuesday */}
                            <TabPanel>
                                <Flex ml={{ lg: '55' }} mr={{ lg: '155' }} flexDirection={'row'} justifyContent={'space-between'}>
                                    <InputGroup size='sm' width={{ base: '45%', lg: '25%' }}>
                                        <Input size='m' type="time" value={availability.openingDay.Tue.openingTime} onChange={(e) => setAvailability({ ...availability, openingDay: { ...availability.openingDay, Tue: { ...availability.openingDay.Tue, openingTime: e.target.value } } })}
                                        />
                                        <InputRightElement>
                                            <TimeIcon />
                                        </InputRightElement>
                                    </InputGroup>
                                    <InputGroup size='sm' width={{ base: '45%', lg: '25%' }}>
                                        <Input size='m' type="time" value={availability.openingDay.Tue.closingTime} onChange={(e) => setAvailability({ ...availability, openingDay: { ...availability.openingDay, Tue: { ...availability.openingDay.Tue, closingTime: e.target.value } } })}
                                        />
                                        <InputRightElement>
                                            <TimeIcon />
                                        </InputRightElement>
                                    </InputGroup>
                                </Flex>
                            </TabPanel>
                            {/* Wednesday */}
                            <TabPanel>
                                <Flex ml={{ lg: '55' }} mr={{ lg: '155' }} flexDirection={'row'} justifyContent={'space-between'}>
                                    <InputGroup size='sm' width={{ base: '45%', lg: '25%' }}>
                                        <Input size='m' type="time" value={availability.openingDay.Wed.openingTime} onChange={(e) => setAvailability({ ...availability, openingDay: { ...availability.openingDay, Wed: { ...availability.openingDay.Wed, openingTime: e.target.value } } })}
                                        />
                                        <InputRightElement>
                                            <TimeIcon />
                                        </InputRightElement>
                                    </InputGroup>
                                    <InputGroup size='sm' width={{ base: '45%', lg: '25%' }}>
                                        <Input size='m' type="time" value={availability.openingDay.Wed.closingTime} onChange={(e) => setAvailability({ ...availability, openingDay: { ...availability.openingDay, Wed: { ...availability.openingDay.Wed, closingTime: e.target.value } } })}
                                        />
                                        <InputRightElement>
                                            <TimeIcon />
                                        </InputRightElement>
                                    </InputGroup>
                                </Flex>
                            </TabPanel>
                            {/* Thursday */}
                            <TabPanel>
                                <Flex ml={{ lg: '55' }} mr={{ lg: '155' }} flexDirection={'row'} justifyContent={'space-between'}>
                                    <InputGroup size='sm' width={{ base: '45%', lg: '25%' }}>
                                        <Input size='m' type="time" value={availability.openingDay.Thu.openingTime} onChange={(e) => setAvailability({ ...availability, openingDay: { ...availability.openingDay, Thu: { ...availability.openingDay.Thu, openingTime: e.target.value } } })}
                                        />
                                        <InputRightElement>
                                            <TimeIcon />
                                        </InputRightElement>
                                    </InputGroup>
                                    <InputGroup size='sm' width={{ base: '45%', lg: '25%' }}>
                                        <Input size='m' type="time" value={availability.openingDay.Thu.closingTime} onChange={(e) => setAvailability({ ...availability, openingDay: { ...availability.openingDay, Thu: { ...availability.openingDay.Thu, closingTime: e.target.value } } })}
                                        />
                                        <InputRightElement>
                                            <TimeIcon />
                                        </InputRightElement>
                                    </InputGroup>
                                </Flex>
                            </TabPanel>
                            {/* Friday */}
                            {/* Tuesday */}
                            <TabPanel>
                                <Flex ml={{ lg: '55' }} mr={{ lg: '155' }} flexDirection={'row'} justifyContent={'space-between'}>
                                    <InputGroup size='sm' width={{ base: '45%', lg: '25%' }}>
                                        <Input size='m' type="time" value={availability.openingDay.Fri.openingTime} onChange={(e) => setAvailability({ ...availability, openingDay: { ...availability.openingDay, Fri: { ...availability.openingDay.Fri, openingTime: e.target.value } } })}
                                        />
                                        <InputRightElement>
                                            <TimeIcon />
                                        </InputRightElement>
                                    </InputGroup>
                                    <InputGroup size='sm' width={{ base: '45%', lg: '25%' }}>
                                        <Input size='m' type="time" value={availability.openingDay.Fri.closingTime} onChange={(e) => setAvailability({ ...availability, openingDay: { ...availability.openingDay, Fri: { ...availability.openingDay.Fri, closingTime: e.target.value } } })}
                                        />
                                        <InputRightElement>
                                            <TimeIcon />
                                        </InputRightElement>
                                    </InputGroup>
                                </Flex>
                            </TabPanel>
                            {/* Saturday */}
                            <TabPanel>
                                <Flex ml={{ lg: '55' }} mr={{ lg: '155' }} flexDirection={'row'} justifyContent={'space-between'}>
                                    <InputGroup size='sm' width={{ base: '45%', lg: '25%' }}>
                                        <Input size='m' type="time" value={availability.openingDay.Sat.openingTime} onChange={(e) => setAvailability({ ...availability, openingDay: { ...availability.openingDay, Sat: { ...availability.openingDay.Sat, openingTime: e.target.value } } })}
                                        />
                                        <InputRightElement>
                                            <TimeIcon />
                                        </InputRightElement>
                                    </InputGroup>
                                    <InputGroup size='sm' width={{ base: '45%', lg: '25%' }}>
                                        <Input size='m' type="time" value={availability.openingDay.Sat.closingTime} onChange={(e) => setAvailability({ ...availability, openingDay: { ...availability.openingDay, Sat: { ...availability.openingDay.Sat, closingTime: e.target.value } } })}
                                        />
                                        <InputRightElement>
                                            <TimeIcon />
                                        </InputRightElement>
                                    </InputGroup>
                                </Flex>
                            </TabPanel>
                            {/* Sunday */}
                            <TabPanel>
                                <Flex ml={{ lg: '55' }} mr={{ lg: '155' }} flexDirection={'row'} justifyContent={'space-between'}>
                                    <InputGroup size='sm' width={{ base: '45%', lg: '25%' }}>
                                        <Input size='m' type="time" value={availability.openingDay.Sun.openingTime} onChange={(e) => setAvailability({ ...availability, openingDay: { ...availability.openingDay, Sun: { ...availability.openingDay.Sun, openingTime: e.target.value } } })}
                                        />
                                        <InputRightElement>
                                            <TimeIcon />
                                        </InputRightElement>
                                    </InputGroup>
                                    <InputGroup size='sm' width={{ base: '45%', lg: '25%' }}>
                                        <Input size='m' type="time" value={availability.openingDay.Sun.closingTime} onChange={(e) => setAvailability({ ...availability, openingDay: { ...availability.openingDay, Sun: { ...availability.openingDay.Sun, closingTime: e.target.value } } })}
                                        />
                                        <InputRightElement>
                                            <TimeIcon />
                                        </InputRightElement>
                                    </InputGroup>
                                </Flex>
                            </TabPanel>
                            <TabPanel>
                                <Flex ml={{ lg: '55' }} mr={{ lg: '155' }} flexDirection={'row'} justifyContent={'space-between'}>
                                    <InputGroup size='sm' width={{ base: '45%', lg: '25%' }}>
                                        <Input size='m' type="time" />
                                        <InputRightElement>
                                            <TimeIcon />
                                        </InputRightElement>
                                    </InputGroup>
                                    <InputGroup size='sm' width={{ base: '45%', lg: '25%' }}>
                                        <Input size='m' type="time" />
                                        <InputRightElement>
                                            <TimeIcon />
                                        </InputRightElement>
                                    </InputGroup>
                                </Flex>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                {/* </Box> */}
                {/* <Box ml={{ lg: '10' }} width={{ lg: '50%', sm: '100%' }}> */}
                    {/* DropDown Category */}
                    <Text>Category</Text>
                    <Select onChange={(e) => setCategory(e.target.value)} value={category} placeholder='Select option' bg={'brand.300'} borderColor={'brand.300'}>
                        <option value='restaurant'>Restaurant</option>
                        <option value='club'>Club</option>
                        <option value='bar'>Bar</option>
                    </Select>
                    {/* Input Name */}
                    <Box mt={5}>
                        <Text fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h1.fontWeight}>Capacity</Text>
                        <Input onChange={(e) => setCapacity(e.target.value)} value={capacity} focusBorderColor='brand.300' _hover={{ borderColor: 'brand.300' }} size='md' bg={'brand.300'} borderColor={'brand.300'}></Input>
                    </Box>
                    <Box mt={5}>
                        <Text fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h1.fontWeight}>Deposite</Text>
                        <Input onChange={(e) => setDeposite(e.target.value)} value={deposite} focusBorderColor='brand.300' _hover={{ borderColor: 'brand.300' }} size='md' bg={'brand.300'} borderColor={'brand.300'}></Input>
                    </Box>
                    <Box mt={5}>
                        <Text fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h1.fontWeight}>Website</Text>
                        <Input onChange={(e) => setWebsite(e.target.value)} value={website} focusBorderColor='brand.300' _hover={{ borderColor: 'brand.300' }} size='md' bg={'brand.300'} borderColor={'brand.300'}></Input>
                    </Box>
                    {/* {phNo} */}
                    <Box mt={8}>
                        <Text
                            fontSize={TextStyle.h2.fontSize}
                            fontWeight={TextStyle.h3.fontWeight}>
                            Payment
                        </Text>
                    </Box>
                    <Box my={4}>
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
                        Choose your Credit Cards to Update
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
                            {/* loop credit card info here */}
                            {/* setType willl store Credit Card user ID */}
                            {/* {cardData.map((card) => (
                                <AddCard
                                    key={card.creditCardId}
                                    cardType = "visa"
                                    setType={setcardInfo}
                                    bank={card.bank}
                                    card_no={card.card_no}
                                    country={card.country}
                                    creditCardId={card.creditCardId}
                                    cvc={card.cvc}
                                    exp={card.exp}
                                    name={card.name}
                                    userId={card.userId}
                                />
                            ))}  */}
                            </RadioGroup>
                        <NavLink to={"/business/BusiUpdateCard"} state={cardInfo}>
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
                                <Text pl={35}>Update Card</Text>
                            </Flex>
                        </NavLink>
                    </Box>
                {/* </Box>
            </Stack> */}
            {/* two buttons */}
            <Center pb={5}>
                <ButtonGroup pt={2} spacing="6">
                    <Button
                        // onClick={handleCancel}
                        bg="white"
                        color="brand.200"
                        width="30vw"
                        display="block"
                        margin="auto"
                        marginTop="5vh"
                        onClick={() => handleCancel}>
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
                        onSubmit={handleSave}
                    >
                        Save
                    </Button>
                </ButtonGroup>
            </Center>

        </FormControl>


    )
}