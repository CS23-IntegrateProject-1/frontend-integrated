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
  RadioGroup,
  Radio,
  Stack,
  InputRightElement,
  Spacer,
  Checkbox,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Axios } from "../../../../AxiosInstance";
import { TextStyle } from "../../../../theme/TextStyle";
interface FriendList {
  user_id: number;
  username: string;
  name: string;
  avatar: string;
  friend_since: string;
  status: string;
}
export const CreateGroup = () => {
  const [friendname, setFriendname] = useState("");
  const [friendImg, setFriendImg] = useState("");
  const [friData, setFriData] = useState<FriendList[]>([]);
  const [profileData, setProfileData] = useState("");
  const [username, setUsername] = useState("");
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
  }, []);

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
    <Box>
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
      <Box>
        {/* Friend LIST */}
        {friData.map((item) => (
          <Flex py={2} alignItems={"center"} justifyContent={"space-between"}>
            <Box>
              {item.avatar ? (
                <Avatar src={friendImg} size={"md"} />
              ) : (
                <Avatar src="https://bit.ly/broken-link" size={"md"} />
              )}
            </Box>
            <Box>
                <Text fontSize={TextStyle.h3.fontSize} fontWeight={TextStyle.h2.fontWeight}>{item.name}</Text>
            </Box>
            <Box>
              <Checkbox value={item.user_id.toString()} type="checkbox"></Checkbox>
            </Box>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};
