import { AddIcon, TimeIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  Select,
  Flex,
  Text,
  Avatar,
  Stack,
  Tab,
  TabList,
  TabIndicator,
  TabPanel,
  Tabs,
  TabPanels,
  InputGroup,
  InputRightElement,
  Center,
  ButtonGroup,
  Button,
  FormControl,
} from "@chakra-ui/react";
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
  open: string;
  close: string;
}

const defaultAvailability: Availability = {
  openingDay: {
    Mon: {
      open: "00:00",
      close: "11:00",
    },
    Tue: {
      open: "00:00",
      close: "00:00",
    },
    Wed: {
      open: "00:00",
      close: "00:00",
    },
    Thu: {
      open: "00:00",
      close: "00:00",
    },
    Fri: {
      open: "00:00",
      close: "00:00",
    },
    Sat: {
      open: "00:00",
      close: "00:00",
    },
    Sun: {
      open: "00:00",
      close: "00:00",
    },
  },
};

export const BusiProfileEdit = () => {

  //img upload
  const [selectedFile, setSelectedFile] = useState<File>();
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
  //website url
  const [website, setWebsite] = useState("");
  const [venueImg, setVenueImg] = useState<string>();
  //const [preview, setPreview] = useState<string>("");
  //card id
  const [cardInfo] = useState<string>("");

  //const [userid, setuserid] = useState<string>("");
  const [cardData] = useState<CreditCard[]>([]);
  if (cardData) console.log(cardData);
  const [availability, setAvailability] =
    useState<Availability>(defaultAvailability);


  const handleCancel = () => {
    //go back to the previous page
    window.history.back();
  };
  console.log(tabIndex + " index no from tab");
  console.log(name + " name");
  console.log(aboutUs + " about us");
  console.log(address + " address");
  console.log(phNo + " ph no");
  console.log(promptNo + " prompt no");
  console.log(category + " category");
  
  //load the data when the page is loaded
  useEffect(() => {
   
    //venue data
    const url = `/feature1/venue`;
    Axios.get(url, { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data, "venue data");
          setName(response.data.name);
          setAboutUs(response.data.description);
          setAddress(response.data.address);
          setCategory(response.data.category);
          setCapacity(response.data.capacity);
          setWebsite(response.data.website);
          setVenueImg(response.data.avatar);
        }
      })
      .catch((error) => {
        console.error("Error getting venue data:", error);
      });
    //get opening hour
    const openingHour = `/feature1/venue/opening_hours`;
    Axios.get(openingHour, { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.Mon.open, "get open");
          setAvailability({ ...availability, openingDay: response.data });
        }
      })
      .catch((error) => {
        console.error("Error getting opening data:", error);
      });

      //prompt pay and phno
     const url1 = `/feature1/venue/promptpay`;
     Axios.get(url1, { withCredentials: true })
       .then((response) => {
         if (response.status === 200) {
           console.log(response.data);
           setpromptNo(response.data.prompt_pay_number);
           setphNo(response.data.business_phone_number);
         }
       })
       .catch((error) => {
         console.error("Error getting prompt no and ph no data:", error);
       });
  }, []);

  // useEffect(() => {
     
  //     }, [phNo,promptNo]);

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    console.log("selected file: ", file);
    //create url
    const objectUrl = URL.createObjectURL(file);
    console.log(objectUrl);
    setSelectedFile(file);
    setVenueImg(objectUrl);
  };
  
  const handleSave =  (e: { preventDefault: () => void }) => {
    //check the data of Opening Day date and time
    e.preventDefault();
    const venueImage = new FormData();
    venueImage.append("image_url", selectedFile as Blob);

    //Venue Data
    const venueDataUrl = `/feature1/venue/info`;
    const allData = new FormData();
    allData.append("name", name);
    allData.append("description", aboutUs);
    allData.append("address", address);
    allData.append("category", category);
    allData.append("capacity", capacity);
    allData.append("website", website);
    allData.append("avatar", selectedFile as Blob);
    //send a put request to the backend to update a new payment method
    Axios.put(venueDataUrl, allData, { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          console.log(" venue data updated");
        }
      })
      .catch((error) => {
        console.error("Error saving data :", error);
      });

    //venue opening time
    const venueTime = `/feature1/venue/opening_hours`;
    Axios.put(
      venueTime,
      {
        Mon: {
          open: availability.openingDay.Mon.open,
          close: availability.openingDay.Mon.close,
        },
        Tue: {
          open: availability.openingDay.Tue.open,
          close: availability.openingDay.Tue.close,
        },
        Wed: {
          open: availability.openingDay.Wed.open,
          close: availability.openingDay.Wed.close,
        },
        Thu: {
          open: availability.openingDay.Thu.open,
          close: availability.openingDay.Thu.close,
        },
        Fri: {
          open: availability.openingDay.Fri.open,
          close: availability.openingDay.Fri.close,
        },
        Sat: {
          open: availability.openingDay.Sat.open,
          close: availability.openingDay.Sat.close,
        },
        Sun: {
          open: availability.openingDay.Sun.open,
          close: availability.openingDay.Sun.close,
        },
      },
      { withCredentials: true }
    )
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          //setAvailability(response.data);
        }
      })
      .catch((error) => {
        console.error("Error saving data :", error);
      });
    //venue prompt pay
    const promptpay = `/feature1/venue/promptpay`;
    if (promptNo == "") {
      setpromptNo("0614325678");
    }
    if (phNo == null || phNo == "") {
      setphNo("0614325678");
    }
    if(phNo && promptNo){
      Axios.put(
        promptpay,
        {
          promptpay_number: parseInt(promptNo),
          phone_number: phNo
        },
        { withCredentials: true }
      )
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data , 'from ppho prompt');
            // setpromptNo(response.data);
            // setphNo(response.data);
          }
        })
        .catch((error) => {
          console.error("Error saving data :", error);
        });
    }
    
  };

  return (
    <FormControl>
      {/* <Stack direction={{ lg: 'row', base: 'column' }}>
                <Box ml={{ lg: '-2' }} width={{ lg: '45%' }}> */}
      <Flex mt={8} alignItems={"center"} justifyContent={"center"}>
        {/* Img Upload */}
        <Box cursor={"pointer"}>
          <Box position={"relative"} cursor={"pointer"}>
            {selectedFile ? (
              <Avatar size={"xl"} src={venueImg} />
            ) : (
              <Avatar
                size={"xl"}
                src={`${import.meta.env.VITE_BACKEND_URL}${venueImg}`}
              />
            )}
            {/* button to change image */}
            <Box position={"absolute"} top={51} left={20}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="11"
                  fill="white"
                  stroke="#A0AEC0"
                  stroke-width="2"
                />
                <path
                  d="M13.3733 10.0133L13.9867 10.6267L7.94667 16.6667H7.33333V16.0533L13.3733 10.0133ZM15.7733 6C15.6067 6 15.4333 6.06667 15.3067 6.19333L14.0867 7.41333L16.5867 9.91333L17.8067 8.69333C17.8685 8.63166 17.9175 8.5584 17.951 8.47775C17.9844 8.3971 18.0016 8.31065 18.0016 8.22333C18.0016 8.13602 17.9844 8.04957 17.951 7.96892C17.9175 7.88827 17.8685 7.81501 17.8067 7.75333L16.2467 6.19333C16.1133 6.06 15.9467 6 15.7733 6ZM13.3733 8.12667L6 15.5V18H8.5L15.8733 10.6267L13.3733 8.12667Z"
                  fill="#A0AEC0"
                />
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
      <Stack direction={{ lg: "row", base: "column" }}>
        <Box ml={{ lg: "100" }} width={{ lg: "60%" }}></Box>
        <Box width={{ lg: "50%", sm: "100%" }}></Box>
      </Stack>

      {/* Input Name */}
      <Box mt={5}>
        <Text
          fontSize={TextStyle.h2.fontSize}
          fontWeight={TextStyle.h1.fontWeight}
        >
          Name
        </Text>
        <Input
          focusBorderColor="brand.300"
          _hover={{ borderColor: "brand.300" }}
          size="md"
          bg={"brand.300"}
          borderColor={"brand.300"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Input>
      </Box>
      <Box mt={5}>
        <Text
          fontSize={TextStyle.h2.fontSize}
          fontWeight={TextStyle.h1.fontWeight}
        >
          About Us
        </Text>
        <Input
          focusBorderColor="brand.300"
          _hover={{ borderColor: "brand.300" }}
          size="md"
          bg={"brand.300"}
          borderColor={"brand.300"}
          value={aboutUs}
          onChange={(e) => setAboutUs(e.target.value)}
        ></Input>
      </Box>
      <Box mt={5}>
        <Text
          fontSize={TextStyle.h2.fontSize}
          fontWeight={TextStyle.h1.fontWeight}
        >
          Address
        </Text>
        <Input
          focusBorderColor="brand.300"
          _hover={{ borderColor: "brand.300" }}
          size="md"
          bg={"brand.300"}
          borderColor={"brand.300"}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></Input>
      </Box>
      {/* {JSON.stringify(availability, null, 2)} */}
      {/* Open Hours and Date */}
      <Tabs
        mt={5}
        position="relative"
        variant="unstyled"
        onChange={(index) => setTabIndex(index)}
      >
        <TabList
          fontSize={TextStyle.h2.fontSize}
          fontWeight={TextStyle.h1.fontWeight}
        >
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
            <Flex
              ml={{ lg: "55" }}
              mr={{ lg: "155" }}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
                {/* <code>{`2023-01-01T${availability.openingDay.Mon.open}Z`}</code> */}
              <InputGroup size="sm" width={{ base: "45%", lg: "25%" }}>
                <Input
                  size="m"
                  type="time"
                  value={availability.openingDay.Mon.open}
                  onChange={(e) =>
                    setAvailability({
                      ...availability,
                      openingDay: {
                        ...availability.openingDay,
                        Mon: {
                          ...availability.openingDay.Mon,
                          open: `${e.target.value}:00`,
                        },
                      },
                    })
                  }
                />
                <InputRightElement>
                  <TimeIcon />
                </InputRightElement>
              </InputGroup>
              <InputGroup size="sm" width={{ base: "45%", lg: "25%" }}>
                <Input
                  size="m"
                  type="time"
                  value={availability.openingDay.Mon.close}
                // value={'11:00'}
                  onChange={(e) =>
                    setAvailability({
                      ...availability,
                      openingDay: {
                        ...availability.openingDay,
                        Mon: {
                          ...availability.openingDay.Mon,
                          close: `${e.target.value}:00`,
                        },
                      },
                    })
                  }
                />
                <InputRightElement>
                  <TimeIcon />
                </InputRightElement>
              </InputGroup>
            </Flex>
          </TabPanel>
          {/* Tuesday */}
          <TabPanel>
            <Flex
              ml={{ lg: "55" }}
              mr={{ lg: "155" }}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <InputGroup size="sm" width={{ base: "45%", lg: "25%" }}>
                <Input
                  size="m"
                  type="time"
                  value={availability.openingDay.Tue.open}
                  onChange={(e) =>
                    setAvailability({
                      ...availability,
                      openingDay: {
                        ...availability.openingDay,
                        Tue: {
                          ...availability.openingDay.Tue,
                          open: `${e.target.value}:00`,
                        },
                      },
                    })
                  }
                />
                <InputRightElement>
                  <TimeIcon />
                </InputRightElement>
              </InputGroup>
              <InputGroup size="sm" width={{ base: "45%", lg: "25%" }}>
                <Input
                  size="m"
                  type="time"
                  value={availability.openingDay.Tue.close}
                  onChange={(e) =>
                    setAvailability({
                      ...availability,
                      openingDay: {
                        ...availability.openingDay,
                        Tue: {
                          ...availability.openingDay.Tue,
                          close: `${e.target.value}:00`,
                        },
                      },
                    })
                  }
                />
                <InputRightElement>
                  <TimeIcon />
                </InputRightElement>
              </InputGroup>
            </Flex>
          </TabPanel>
          {/* Wednesday */}
          <TabPanel>
            <Flex
              ml={{ lg: "55" }}
              mr={{ lg: "155" }}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <InputGroup size="sm" width={{ base: "45%", lg: "25%" }}>
                <Input
                  size="m"
                  type="time"
                  value={availability.openingDay.Wed.open}
                  onChange={(e) =>
                    setAvailability({
                      ...availability,
                      openingDay: {
                        ...availability.openingDay,
                        Wed: {
                          ...availability.openingDay.Wed,
                          open: `${e.target.value}:00`,
                        },
                      },
                    })
                  }
                />
                <InputRightElement>
                  <TimeIcon />
                </InputRightElement>
              </InputGroup>
              <InputGroup size="sm" width={{ base: "45%", lg: "25%" }}>
                <Input
                  size="m"
                  type="time"
                  value={availability.openingDay.Wed.close}
                  onChange={(e) =>
                    setAvailability({
                      ...availability,
                      openingDay: {
                        ...availability.openingDay,
                        Wed: {
                          ...availability.openingDay.Wed,
                          close: `${e.target.value}:00`,
                        },
                      },
                    })
                  }
                />
                <InputRightElement>
                  <TimeIcon />
                </InputRightElement>
              </InputGroup>
            </Flex>
          </TabPanel>
          {/* Thursday */}
          <TabPanel>
            <Flex
              ml={{ lg: "55" }}
              mr={{ lg: "155" }}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <InputGroup size="sm" width={{ base: "45%", lg: "25%" }}>
                <Input
                  size="m"
                  type="time"
                  value={availability.openingDay.Thu.open}
                  onChange={(e) =>
                    setAvailability({
                      ...availability,
                      openingDay: {
                        ...availability.openingDay,
                        Thu: {
                          ...availability.openingDay.Thu,
                          open: `${e.target.value}:00`,
                        },
                      },
                    })
                  }
                />
                <InputRightElement>
                  <TimeIcon />
                </InputRightElement>
              </InputGroup>
              <InputGroup size="sm" width={{ base: "45%", lg: "25%" }}>
                <Input
                  size="m"
                  type="time"
                  value={availability.openingDay.Thu.close}
                  onChange={(e) =>
                    setAvailability({
                      ...availability,
                      openingDay: {
                        ...availability.openingDay,
                        Thu: {
                          ...availability.openingDay.Thu,
                          close: `${e.target.value}:00`,
                        },
                      },
                    })
                  }
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
            <Flex
              ml={{ lg: "55" }}
              mr={{ lg: "155" }}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <InputGroup size="sm" width={{ base: "45%", lg: "25%" }}>
                <Input
                  size="m"
                  type="time"
                  value={availability.openingDay.Fri.open}
                  onChange={(e) =>
                    setAvailability({
                      ...availability,
                      openingDay: {
                        ...availability.openingDay,
                        Fri: {
                          ...availability.openingDay.Fri,
                          open: `${e.target.value}:00`,
                        },
                      },
                    })
                  }
                />
                <InputRightElement>
                  <TimeIcon />
                </InputRightElement>
              </InputGroup>
              <InputGroup size="sm" width={{ base: "45%", lg: "25%" }}>
                <Input
                  size="m"
                  type="time"
                  value={availability.openingDay.Fri.close}
                  onChange={(e) =>
                    setAvailability({
                      ...availability,
                      openingDay: {
                        ...availability.openingDay,
                        Fri: {
                          ...availability.openingDay.Fri,
                          close: `${e.target.value}:00`,
                        },
                      },
                    })
                  }
                />
                <InputRightElement>
                  <TimeIcon />
                </InputRightElement>
              </InputGroup>
            </Flex>
          </TabPanel>
          {/* Saturday */}
          <TabPanel>
            <Flex
              ml={{ lg: "55" }}
              mr={{ lg: "155" }}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <InputGroup size="sm" width={{ base: "45%", lg: "25%" }}>
                <Input
                  size="m"
                  type="time"
                  value={availability.openingDay.Sat.open}
                  onChange={(e) =>
                    setAvailability({
                      ...availability,
                      openingDay: {
                        ...availability.openingDay,
                        Sat: {
                          ...availability.openingDay.Sat,
                          open: `${e.target.value}:00`,
                        },
                      },
                    })
                  }
                />
                <InputRightElement>
                  <TimeIcon />
                </InputRightElement>
              </InputGroup>
              <InputGroup size="sm" width={{ base: "45%", lg: "25%" }}>
                <Input
                  size="m"
                  type="time"
                  value={availability.openingDay.Sat.close}
                  onChange={(e) =>
                    setAvailability({
                      ...availability,
                      openingDay: {
                        ...availability.openingDay,
                        Sat: {
                          ...availability.openingDay.Sat,
                          close: `${e.target.value}:00`,
                        },
                      },
                    })
                  }
                />
                <InputRightElement>
                  <TimeIcon />
                </InputRightElement>
              </InputGroup>
            </Flex>
          </TabPanel>
          {/* Sunday */}
          <TabPanel>
            <Flex
              ml={{ lg: "55" }}
              mr={{ lg: "155" }}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <InputGroup size="sm" width={{ base: "45%", lg: "25%" }}>
                <Input
                  size="m"
                  type="time"
                  value={availability.openingDay.Sun.open}
                  onChange={(e) =>
                    setAvailability({
                      ...availability,
                      openingDay: {
                        ...availability.openingDay,
                        Sun: {
                          ...availability.openingDay.Sun,
                          open: `${e.target.value}:00`,
                        },
                      },
                    })
                  }
                />
                <InputRightElement>
                  <TimeIcon />
                </InputRightElement>
              </InputGroup>
              <InputGroup size="sm" width={{ base: "45%", lg: "25%" }}>
                <Input
                  size="m"
                  type="time"
                  
                  value={availability.openingDay.Sun.close}
                  onChange={(e) =>
                    setAvailability({
                      ...availability,
                      openingDay: {
                        ...availability.openingDay,
                        Sun: {
                          ...availability.openingDay.Sun,
                          close: `${e.target.value}:00`,
                        },
                      },
                    })
                  }
                />
                <InputRightElement>
                  <TimeIcon />
                </InputRightElement>
              </InputGroup>
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex
              ml={{ lg: "55" }}
              mr={{ lg: "155" }}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <InputGroup size="sm" width={{ base: "45%", lg: "25%" }}>
                <Input size="m" type="time" />
                <InputRightElement>
                  <TimeIcon />
                </InputRightElement>
              </InputGroup>
              <InputGroup size="sm" width={{ base: "45%", lg: "25%" }}>
                <Input size="m" type="time" />
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
      <Select
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        placeholder="Select option"
        bg={"brand.300"}
        borderColor={"brand.300"}
      >
        <option value="restaurant">Restaurant</option>
        <option value="club">Club</option>
        <option value="bar">Bar</option>
      </Select>
      {/* Input Name */}
      <Box mt={5}>
        <Text
          fontSize={TextStyle.h2.fontSize}
          fontWeight={TextStyle.h1.fontWeight}
        >
          Capacity
        </Text>
        <Input
          onChange={(e) => setCapacity(e.target.value)}
          value={capacity}
          focusBorderColor="brand.300"
          _hover={{ borderColor: "brand.300" }}
          size="md"
          bg={"brand.300"}
          borderColor={"brand.300"}
        ></Input>
      </Box>
      {/* <Box mt={5}>
                        <Text fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h1.fontWeight}>Deposite</Text>
                        <Input onChange={(e) => setDeposite(e.target.value)} value={deposite} focusBorderColor='brand.300' _hover={{ borderColor: 'brand.300' }} size='md' bg={'brand.300'} borderColor={'brand.300'}></Input>
                    </Box> */}
      <Box mt={5}>
        <Text
          fontSize={TextStyle.h2.fontSize}
          fontWeight={TextStyle.h1.fontWeight}
        >
          Website
        </Text>
        <Input
          onChange={(e) => setWebsite(e.target.value)}
          value={website}
          focusBorderColor="brand.300"
          _hover={{ borderColor: "brand.300" }}
          size="md"
          bg={"brand.300"}
          borderColor={"brand.300"}
        ></Input>
      </Box>
      {/* {phNo} */}
      <Box mt={8}>
        <Text
          fontSize={TextStyle.h2.fontSize}
          fontWeight={TextStyle.h3.fontWeight}
        >
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
          onChange={(e) => setphNo(e.target.value)}
          value={phNo}
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
          onChange={(e) => setpromptNo(e.target.value)}
          value={promptNo}
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
        To Add Credit Card
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
        <NavLink to={"/business/BusiAddCard"} state={cardInfo}>
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
            onClick={() => handleCancel}
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
            onClick={handleSave}
          >
            Save
          </Button>
        </ButtonGroup>
      </Center>
    </FormControl>
  );
};
