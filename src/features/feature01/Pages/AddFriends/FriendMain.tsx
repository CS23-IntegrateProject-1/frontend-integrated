/* eslint-disable react-hooks/exhaustive-deps */
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogOverlay,
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import {  Search2Icon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { Axios } from "../../../../AxiosInstance";
import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
interface FriendList {
  user_id: number;
  username: string;
  name: string;
  avatar: string;
  friend_since: string;
  status: string;
}
interface GroupList {
  group_id: number;
  group_name: string;
  group_avatar: string;
  is_secret_group: boolean;
}
interface ProfileData {
  userId: number,
  username: string,
  phone: string,
  email: string,
  birthday: string,
  gender: string,
  avatar: string, //change later
}
export const FriendMain = () => {
  const [isShowAddFri, setisShowAddFri] = useState(false);
  const [friData, setFriData] = useState<FriendList[]>([]);
  const [groupData, setGroupData] = useState<GroupList[]>([]);
  const [profileData, setProfileData] = useState<ProfileData>();
  //to show overlay box to integrate with chat group
  const [selectedFrigateId, setSelectedFrigateId] = useState(0);
  const [selectedGroupId, setSelectedGroupId] = useState(0);
  if(selectedGroupId){console.log(selectedGroupId)}// testing to see id
  const location = useLocation();
  const navigate = useNavigate();
  const newGroup = location.state?.newGroup; // access updated group data
  console.log(newGroup);
  //get the fir list of the user when the page is loaded
  useEffect(() => {
    //fri list
    const url = `/feature1/friend`;
    Axios.get(url, { withCredentials: true })
      .then((response) => {
        if (response.status == 200) {
          setFriData(response.data);
          console.log("list of fri" + friData);
          // friData.map((item) => {
          //     console.log(item.name);
          // })
        }
      })
      .catch((error) => {
        console.error("Error fetching fir list data:", error);
      });
    const url1 = `/feature1/profile`;
    Axios.get(url1, { withCredentials: true })
      .then((response) => {
        if (response.status == 200) {
          setProfileData(response.data);
          console.log(profileData + "profile");
        }
      })
      .catch((error) => {
        console.error("Error fetching user list data:", error);
      });

    //group list
    const groupurl = `/feature1/group`;
    Axios.get(groupurl, { withCredentials: true })
      .then((response) => {
        if (response.status == 200) {
          setGroupData(response.data);
          groupData.map((item) => {
            console.log(item.group_name);
            console.log(item.group_id);
            console.log(item.group_avatar);
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching group list data:", error);
      });

  }, []);
  useEffect(() => {
    if (newGroup) {
      //group list
      const groupurl = `/feature1/group`;
      Axios.get(groupurl, { withCredentials: true })
        .then((response) => {
          if (response.status == 200) {
            setGroupData(response.data);
            console.log("list of group" + groupData);
            groupData.map((item) => {
              console.log(item.group_name);
            });
          }
        })
        .catch((error) => {
          console.error("Error fetching group list data:", error);
        });
      //setGroupData([...groupData, newGroup]);
    }
  }, [ ]);
  //click frilist to show overlay
  const handleFriClick = (id: number) => {
    setSelectedFrigateId(id);
    //check if fridata id and selected id is same
    friData.map((item) => {
      if (item.user_id == id) {
        console.log("same");
        onOpen();
        console.log(item.name);
        console.log(item.user_id);
        setFriendId(item.user_id);
        console.log(item.user_id), "testing id article";
        setFriendname(item.name);
        setFriendImg(item.avatar);
      }
    });
  };
  //click group list to show overlay
  const handleGroupClick = (id : number) => {
    setSelectedGroupId(id); //---------> if group list was clicked by user
    //check if fridata id and selected id is same
    groupData.map((item) => {
      if (item.group_id == id ) {
        console.log("same");
        //pass to chat group by to show each group chat
        console.log(item.group_name);
        console.log(item.group_id);
      }
    });
  };
  const onCloseAddFri = () => setisShowAddFri(false);
  //handle drawer prompt
  const handleAdd = () => {
    onClose();
    setisShowAddFri(true);
  };
//   const handleCofirmAddFri = () => {
//     onCloseAddFri();
//     setisShowAddFri(false);
//   };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [username, setUsername] = useState("");
  const [friendname, setFriendname] = useState("");
  const [friendImg, setFriendImg] = useState("");
  const [friendId, setFriendId] = useState<number>();
  //const [isFriend, setIsFriend] = useState(false);

  console.log(username);
  //navigate to community chat
  const handleNavigateChat = () => {
    //navigate to comuunity chat
    navigate("/communitychat");
  };
  const handleSearch = () => {
    console.log("search");
    //check is there any username at the backend --Add fri
    // const url = `/feature1/search/friends?username=${username}`;
    // Axios.get(url, { withCredentials: true })
    //     .then((response) => {
    //         if (response.status == 200) {
    //             console.log(response.data);
    //             onOpen();
    //             console.log(response.data.name);
    //             console.log(response.data.avatar);
    //             setFriendname(response.data.name);
    //             setFriendImg(response.data.avatar);
    //         }
    //     })
    //     .catch((error) => {
    //         console.error("Error fetching username data:", error);
    //     });
    //check fri list from search box
    friData.map((item) => {
      if (item.name.includes(username)) {
        console.log("found");
        onOpen();
        console.log(item.name);
        console.log(item.avatar, "fri avatar");
        setFriendname(item.name);
        setFriendImg(item.avatar);
        //setIsFriend(true);
      }
    });
  };

  return (
    <Box>
      {/* Your component content goes here */}
      <Box m={-5} py={"1%"} bg={"brand.300"}>
        <Flex justifyContent={"space-between"}>
          <Box ml={{ lg: "15%", base: "10%" }}>
            <Text
              mt={"45%"}
              fontSize={TextStyle.h1.fontSize}
              fontWeight={TextStyle.h2.fontWeight}
            > 
            {/* {profileData?.avatar} */}
              {profileData?.username ? profileData.username : "Username"}
            </Text>
          </Box>
          {/* Backend still need to send avatar */}
          <Box mr={{ lg: "15%", base: "10%" }}>
            {/* {profileData?.avatar} */}
            {profileData?.avatar !== null ? (
              <Avatar src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${profileData?.avatar}`} size={"lg"} />
            ) : (
              <Avatar src="https://bit.ly/broken-link" size={"lg"} />
            )}
          </Box>
        </Flex>
      </Box>
      {/* outer box */}
      <Box m={-5} mt={5}>
        <Tabs borderColor={"brand.200"} isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab
              borderRadius={"none"}
              bg={"brand.200"}
              color={"black"}
              fontSize={TextStyle.h1.fontSize}
              fontWeight={TextStyle.h2.fontWeight}
            >
              Home
            </Tab>
            <Tab
              borderRadius={"none"}
              bg={"brand.200"}
              fontSize={TextStyle.h1.fontSize}
              fontWeight={TextStyle.h2.fontWeight}
              onClick={handleNavigateChat}
            >
              Chats
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Flex justifyContent={{ lg: "space-evenly" }}>
                <Box position={"relative"} overflow={"hidden"}>
                  <InputGroup size="md" borderRadius={"2"}>
                    <Input
                      border={"none"}
                      pr="4.5rem"
                      placeholder="Search by username"
                      bg={"gray.200"}
                      color={"black"}
                      borderRadius={"20"}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <InputLeftElement>
                      <Button
                        _hover={{ bg: "none" }}
                        position={"absolute"}
                        left={"-1"}
                        bg={"none"}
                        h="1.75rem"
                        size="sm"
                        onClick={handleSearch}
                      >
                        <Search2Icon />
                      </Button>
                    </InputLeftElement>
                  </InputGroup>
                </Box>
                <Box ml={5}>
                  <Stack cursor={"pointer"} onClick={handleAdd}>
                    <Box>
                      <svg
                        width="27"
                        height="21"
                        viewBox="0 0 27 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.1247 10.5002C19.7951 10.5002 21.958 8.33725 21.958 5.66683C21.958 2.99641 19.7951 0.833496 17.1247 0.833496C14.4543 0.833496 12.2913 2.99641 12.2913 5.66683C12.2913 8.33725 14.4543 10.5002 17.1247 10.5002ZM17.1247 3.25016C18.4538 3.25016 19.5413 4.33766 19.5413 5.66683C19.5413 6.996 18.4538 8.0835 17.1247 8.0835C15.7955 8.0835 14.708 6.996 14.708 5.66683C14.708 4.33766 15.7955 3.25016 17.1247 3.25016ZM17.1247 12.9168C13.8984 12.9168 7.45801 14.536 7.45801 17.7502V20.1668H26.7913V17.7502C26.7913 14.536 20.3509 12.9168 17.1247 12.9168ZM9.87467 17.7502C10.1405 16.8802 13.8743 15.3335 17.1247 15.3335C20.3872 15.3335 24.133 16.8922 24.3747 17.7502H9.87467ZM6.24967 14.1252V10.5002H9.87467V8.0835H6.24967V4.4585H3.83301V8.0835H0.208008V10.5002H3.83301V14.1252H6.24967Z"
                          fill="#DEBEF6"
                        />
                      </svg>
                    </Box>
                    <Box fontSize={TextStyle.body2.fontSize}>Add Friends</Box>
                  </Stack>
                </Box>
                <Box ml={5}>
                  <Stack cursor={"pointer"}>
                    <NavLink to={"/CreateGroup"}>
                      <Box cursor={"pointer"}>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.6547 2.66683C23.6547 1.3835 22.6163 0.333496 21.333 0.333496H2.66634C1.38301 0.333496 0.333008 1.3835 0.333008 2.66683V16.6668C0.333008 17.9502 1.38301 19.0002 2.66634 19.0002H18.9997L23.6663 23.6668L23.6547 2.66683ZM17.833 10.8335H13.1663V15.5002H10.833V10.8335H6.16634V8.50016H10.833V3.8335H13.1663V8.50016H17.833V10.8335Z"
                            fill="#DEBEF6"
                          />
                        </svg>
                      </Box>
                      <Box fontSize={TextStyle.body2.fontSize}>
                        Create Group
                      </Box>
                    </NavLink>
                  </Stack>
                </Box>
              </Flex>
              <Box mt={5}>
                <Accordion m={-2} bg={"white"} allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          fontWeight={TextStyle.h1.fontWeight}
                          fontSize={TextStyle.h2.fontSize}
                          color={"black"}
                          as="span"
                          flex="1"
                          textAlign="left"
                        >
                          Groups {groupData.length}
                        </Box>
                        <AccordionIcon
                          color={"black"}
                          fontWeight={TextStyle.h1.fontWeight}
                          fontSize={TextStyle.h2.fontSize}
                        />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel bg={"brand.200"} pb={4} color={"black"}>

                    {/* don't show group if it is secret group */}


                      {/* loop group list here ***/}
                      
                      {groupData
                      .filter((item) => item.is_secret_group !== true)
                      .map((item) => (
                        <NavLink to="/communitychat" state={item.group_id}>
                        <Flex
                          key={item.group_id}
                          px={2}
                          bg={"brand.200"}
                          borderBottom={"0.2px solid black"}
                          py={2}
                          alignContent={"center"}
                          alignItems={"center"}
                          onClick={() => handleGroupClick(item.group_id)}
                        >
                          <Box
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                          >
                            <Box>
                              {item.group_avatar !== null ? (
                                <Avatar src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${item.group_avatar}`}size={"md"} />
                              ) : (
                                <Avatar
                                  src="https://bit.ly/broken-link"
                                  size={"md"}
                                />
                              )}
                            </Box>
                            <Box ml={15}>
                              <Text
                                fontSize={TextStyle.h3.fontSize}
                                fontWeight={TextStyle.h2.fontWeight}
                              >
                                {item.group_name}
                              </Text>
                              {/* <Text fontSize={TextStyle.body2.fontSize}>Last Message</Text> */}
                            </Box>
                            <Box>
                              {/* <Text fontSize={TextStyle.body2.fontSize}>Time</Text> */}
                            </Box>
                          </Box>
                        </Flex>
                      </NavLink>
                        
                      ))}
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          fontWeight={TextStyle.h1.fontWeight}
                          fontSize={TextStyle.h2.fontSize}
                          color={"black"}
                          as="span"
                          flex="1"
                          textAlign="left"
                        >
                          Friends {friData.length}
                        </Box>
                        <AccordionIcon
                          color={"black"}
                          fontWeight={TextStyle.h1.fontWeight}
                          fontSize={TextStyle.h2.fontSize}
                        />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel bg={"brand.200"} pb={4} color={"black"}>
                      {/* loop friend list here ***/}

                      {friData.map((item) => (
                        <Flex
                          px={2}
                          bg={"brand.200"}
                          borderBottom={"0.2px solid black"}
                          py={2}
                          alignContent={"center"}
                          alignItems={"center"}
                          onClick={() => handleFriClick(item.user_id)}
                        >
                          <Box>
                            {item.avatar !== null ? (
                                  <Avatar src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${item.avatar}`}size={"md"} />
                                ) : (
                                  <Avatar
                                    src="https://bit.ly/broken-link"
                                    size={"md"}
                                  />
                                )}
                          </Box>
                          <Box ml={10}>
                            <Text
                              fontSize={TextStyle.h3.fontSize}
                              fontWeight={TextStyle.h2.fontWeight}
                            >
                              {item.name}
                            </Text>
                            {/* <Text fontSize={TextStyle.body2.fontSize}>Last Message</Text> */}
                          </Box>
                          <Box>
                            {/* <Text fontSize={TextStyle.body2.fontSize}>Time</Text> */}
                          </Box>
                        </Flex>
                      ))}
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            </TabPanel>
            <TabPanel>
              {/* chat */}
              {/* link to chat bot group */}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      {/* Overlay Box for friendlist search*/}
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef as any}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent width={"80%"} py={2}>
          <AlertDialogCloseButton
            fontSize={TextStyle.h2.fontSize}
            fontWeight={TextStyle.h1.fontWeight}
            color={"brand.200"}
          />
          <AlertDialogBody>
            <Center py={2} flexDirection={"column"}>
              {/* {friendImg}
              <Text color={'black'}>{friendImg}</Text> */}
              {friendImg !== null ? (
                <Avatar src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${friendImg}`} size={"xl"} />
              ) : (
                <Avatar src="https://bit.ly/broken-link" size={"xl"} />
              )}
              <Text
                py={2}
                color={"brand.200"}
                fontSize={TextStyle.h2.fontSize}
                fontWeight={TextStyle.h2.fontWeight}
              >
                {friendname}
              </Text>
            </Center>
            <Flex py={2} justifyContent={"space-evenly"}>
              {/* Chat */}
              {/*-------- pass ID here ---------------------------------------*/}
              <NavLink to={"/communitychat"} state={selectedFrigateId}>
                <Stack
                  direction={"column"}
                  color={"brand.200"}
                  fontSize={TextStyle.h2.fontSize}
                  fontWeight={TextStyle.h2.fontWeight}
                >
                  <Text color={"brand.200"}>
                    <svg
                      color="brand.200"
                      width="29"
                      height="29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.83301 2.4165H24.1663C25.4955 2.4165 26.583 3.504 26.583 4.83317V19.3332C26.583 20.6623 25.4955 21.7498 24.1663 21.7498H7.24967L2.41634 26.5832V4.83317C2.41634 3.504 3.50384 2.4165 4.83301 2.4165ZM7.24967 16.9165H21.7497V14.4998H7.24967V16.9165ZM7.24967 13.2915H21.7497V10.8748H7.24967V13.2915ZM7.24967 9.6665H21.7497V7.24984H7.24967V9.6665Z"
                        fill="#DEBEF6"
                      />
                    </svg>
                  </Text>
                  <Text
                    mt={-2}
                    color={"brand.200"}
                    fontSize={TextStyle.body1.fontSize}
                  >
                    Chat
                  </Text>
                </Stack>
              </NavLink>
              {/* Articles */}
             {/* loop fri Data here */}
             {/* {friData.map((item) => ( */}
              <NavLink to={`/article/userarticles/${friendId}`}>
              <Stack
                direction={"column"}
                color={"brand.200"}
                fontSize={TextStyle.h2.fontSize}
                fontWeight={TextStyle.h2.fontWeight}
              >
                <Text color={"brand.200"}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.66634 5.00016H0.333008V21.3335C0.333008 22.6168 1.38301 23.6668 2.66634 23.6668H18.9997V21.3335H2.66634V5.00016ZM21.333 0.333496H7.33301C6.04967 0.333496 4.99967 1.3835 4.99967 2.66683V16.6668C4.99967 17.9502 6.04967 19.0002 7.33301 19.0002H21.333C22.6163 19.0002 23.6663 17.9502 23.6663 16.6668V2.66683C23.6663 1.3835 22.6163 0.333496 21.333 0.333496ZM21.333 16.6668H7.33301V2.66683H21.333V16.6668ZM9.66634 8.50016H18.9997V10.8335H9.66634V8.50016ZM9.66634 12.0002H14.333V14.3335H9.66634V12.0002ZM9.66634 5.00016H18.9997V7.3335H9.66634V5.00016Z"
                      fill="#DEBEF6"
                    />
                  </svg>
                </Text>
                <Text
                  mt={-1}
                  color={"brand.200"}
                  fontSize={TextStyle.body1.fontSize}
                >
                  Articles
                </Text>
              </Stack>
            </NavLink>
              {/* ))} */}
              

              
            </Flex>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialog>

      {/* Add fri */}
      {/* Overlay Box for add fri*/}
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef as any}
        onClose={onCloseAddFri}
        isOpen={isShowAddFri}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent width={"80%"} py={2} color={"black"}>
          <AlertDialogCloseButton
            onClick={() => setisShowAddFri(false)}
            fontSize={TextStyle.h2.fontSize}
            fontWeight={TextStyle.h1.fontWeight}
            color={"brand.200"}
          />
          <AlertDialogBody>
            <Center py={2} flexDirection={"column"}>
              Add Friends
            </Center>
            <Flex py={2} justifyContent={"space-evenly"} cursor={"pointer"}>
              {/* <Text onClick={handleCofirmAddFri}>Search</Text> */}
              <NavLink to={"/AddFriend/QRCode"}>
                <Box
                  px={35}
                  borderRadius={15}
                  color={"white"}
                  py={8}
                  bg={"brand.300"}
                >
                  <Box mt={5} ml={1}>
                    <svg
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <rect width="46" height="46" fill="url(#pattern0)" />
                      <defs>
                        <pattern
                          id="pattern0"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlinkHref="#image0_6082_13767"
                            transform="scale(0.00195312)"
                          />
                        </pattern>
                        <image
                          id="image0_6082_13767"
                          width="512"
                          height="512"
                          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAA3XAAAN1wFCKJt4AAAFyWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuYTg3MzFiOSwgMjAyMS8wOS8wOS0wMDozNzozOCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMS0yMVQxODozMDowOCswNzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTEtMjFUMTg6MzQ6NTkrMDc6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTEtMjFUMTg6MzQ6NTkrMDc6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZmZWNjODI3LTI2NGMtODk0ZC05NWExLTllNWUwYWUyYTRkOCIgeG1wTU06RG9jdW1lbnRJRD0i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"
                        />
                      </defs>
                    </svg>
                  </Box>
                  <Box
                    ml={1}
                    mt={3}
                    fontWeight={TextStyle.body3.fontWeight}
                    fontSize={TextStyle.body2.fontSize}
                  >
                    QR code
                  </Box>
                </Box>
              </NavLink>

              <NavLink to="/AddFriend" state={friData}>
                <Box
                  px={35}
                  borderRadius={15}
                  color={"white"}
                  py={8}
                  bg={"brand.300"}
                >
                  <Box fontWeight={TextStyle.h1.fontWeight} fontSize={50}>
                    <Search2Icon />
                  </Box>
                  <Box
                    fontWeight={TextStyle.body3.fontWeight}
                    fontSize={TextStyle.body2.fontSize}
                  >
                    <Text mt={1} ml={2}>
                      Search
                    </Text>
                  </Box>
                </Box>
              </NavLink>
            </Flex>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialog>
    </Box>
  );
};
