import { Search2Icon } from "@chakra-ui/icons";
import {
    Avatar,
    Text,
    Box,
    Button,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    Checkbox,
    FormControl,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Axios } from "../../../../AxiosInstance";
import { TextStyle } from "../../../../theme/TextStyle";
import { GroupAva } from "./GroupAva";
import { NextButton } from "../../Components/TextSlider/NextButton";
import { NavLink } from "react-router-dom";
interface FriendList {
    user_id: number;
    username: string;
    name: string;
    avatar: string;
    friend_since: string;
    status: string;
}
interface SelectedFriend {
    user_id: number;
    name: string;
    avatar: string;
}

export const CreateGroup = () => {
    //calling selectedFriID from main testesting
    const [, setFriendname] = useState("");
    const [friendImg, setFriendImg] = useState("");
    const [friData, setFriData] = useState<FriendList[]>([]);
    const [profileData, setProfileData] = useState("");
    const [username, setUsername] = useState("");
    const [selectedFriends, setSelectedFriends] = useState<SelectedFriend[]>([]);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    selectedFriends.forEach((friend) => {
        console.log(friend, 'from create group');
    });
    if(friendImg){
        console.log(friendImg, 'from create group');
    }

    useEffect(() => {
        const selected = selectedFriends.map((friend) => {
            return friend.user_id.toString();
        });
        setSelectedIds(selected);
    }, [selectedFriends]);

    //get fri list
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
    }, [friData, profileData]);

    const handleSearch = () => {
        console.log("search");
        friData.map((item) => {
            if (item.name.includes(username)) {
                console.log("found");
                //onOpen();
                console.log(item.name);
                console.log(item.avatar);
                setFriendname(item.name);
                setFriendImg(item.avatar);
                //setIsFriend(true);
            }
        });
    };

    return (
        <FormControl>
            <Box>
            {/* create group button next */}
            <Flex mt={-2} pb={2} justifyContent={'space-between'} >
                <Box mt={2} fontSize={TextStyle.h2.fontSize}>
                    {selectedIds.length} selected
                </Box>
                {/* <Button fontSize={TextStyle.h2.fontSize} cursor={'pointer'} bg={'none'} isDisabled={isDisabled} color={buttonColor}> Next</Button> */}
                <NavLink to='/SetUpGroup' state={{ selectedFriends: selectedFriends }}>
                    <NextButton selectedFriends={selectedFriends} />
                </NavLink>
            </Flex>

            {/* search box */}
            <Box mb={4} position={"relative"} overflow={"hidden"}>
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
            {/* show user circle here */}
            {/* <Stack direction={'row'} spacing={8}>
      {selectedFriends.map((friend) => (
        <GroupAva  user_id={friend.user_id.toString()} user_img={friend.avatar}/>
      ))}


      </Stack> */}
            <Stack>
                {/* component here */}
                <GroupAva selectedFriends={selectedFriends} setSelectedFriends={setSelectedFriends} />
            </Stack>
            {/* {JSON.stringify(selectedIds, null, 2)} */}
            <Box cursor={'pointer'}>
                {/* Friend LIST */}
                {friData.map((item) => (
                    <Flex py={2} alignItems={"center"} justifyContent={"space-between"}>
                        <Box>
                            {/* {item.avatar} */}
                        {item.avatar !== null ? (
                                  <Avatar src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${item.avatar}`}size={"md"} />
                                ) : (
                                  <Avatar
                                    src="https://bit.ly/broken-link"
                                    size={"md"}
                                  />
                                )}
                        </Box>
                        {/* <Box>
                <Text fontSize={TextStyle.h3.fontSize} fontWeight={TextStyle.h2.fontWeight}>{item.name}</Text>
            </Box> */}
                        <Box>
                            {selectedFriends.some((friend) => friend.user_id === item.user_id) ? (
                                <Text fontSize={TextStyle.h3.fontSize} fontWeight={TextStyle.h2.fontWeight}>
                                    {item.name}
                                </Text>
                            ) : (
                                <Text fontSize={TextStyle.h3.fontSize} fontWeight={TextStyle.h2.fontWeight}>
                                    {item.name}
                                </Text>
                            )}
                        </Box>
                        <Box>
                            <Checkbox isChecked={selectedIds.includes(item.user_id.toString())} value={item.user_id.toString()} type="checkbox"
                                // checked={selectedFriends.some((friend) => friend.user_id === item.user_id)}
                                onChange={(event) => {
                                    const { target: { checked, value } } = event;
                                    if (checked) {
                                        setSelectedIds((prevSelectedIds) => [...prevSelectedIds, value]);
                                        setSelectedFriends((prevSelectedFriends) => [...prevSelectedFriends, { user_id: parseInt(value), name: item.name, avatar: item.avatar }]);
                                    } else {
                                        selectedIds.splice(selectedIds.indexOf(value), 1);
                                        setSelectedFriends((prevSelectedFriends) =>
                                            prevSelectedFriends.filter((friend) => friend.user_id !== parseInt(value))
                                        );
                                    }
                                }}
                            ></Checkbox>
                        </Box>
                    </Flex>
                ))}
            </Box>
        </Box>
        </FormControl>
    );
};
