import { Avatar, Box, Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from "react";
import textStyles from "../../../../theme/foundations/textStyles";
import { NavLink, useLocation } from "react-router-dom";
import { TextStyle } from "../../../../theme/TextStyle";
import { Axios } from "../../../../AxiosInstance";
import { useNavigate } from "react-router-dom";
export const SetUpGroup = () => {
  // const [newGroup, setNewGroup] = useState();
  const [groupName, setGroupName] = useState("");
  const [groupImg, setGroupImg] = useState("");
  const navigate = useNavigate();
  // const [groupData, setGroupData] = useState<any[]>([]);
  //use location to call state of array
  const location = useLocation();
  const selectedFriends = location.state.selectedFriends;
  console.log(selectedFriends); //testing state
  //to check group name is not null
  const isDisabled = groupName.length < 1;
  const buttonColor = isDisabled ? "" : "brand.200";
  //to refresh group list

  const groupImageProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    
    const file = e.target.files[0];
    const objUrl = URL.createObjectURL(file);
    console.log(objUrl);
    setGroupImg(objUrl);
  };

  const createGroupHandler = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const allData = new FormData();
    allData.append("group_name", groupName);
    allData.append("group_img", groupImg);
    // allData.append("members", selectedFriends.map((friend: any) => {
    //   return friend.user_id;
    // }));
    const url = `/feature1/group/add`;
    Axios.post(
      url,
      allData,
      { withCredentials: true }
    )
      .then((response) => {
        if (response.status == 200) {
          console.log(response.data);
          console.log("successfully added");
          const newGroup = response.data;
          navigate("/Friends", { state: { newGroup } });
        }
      })
      .catch((error) => {
        console.error("Error fetching fir list data:", error);
      });
   // console.log(groupName, groupImg);
    // const url = `/feature1/group/add`;
    // Axios.post(
    //   url,
    //   {
    //     group_name: groupName,
    //     // group_img: groupImg, later
    //     members: selectedFriends.map((friend: any) => {
    //       return friend.user_id;
    //     }),
    //   },
    //   { withCredentials: true }
    // )
    //   .then((response) => {
    //     if (response.status == 200) {
    //       console.log(response.data);
    //       console.log("successfully added");
    //       const newGroup = response.data;
    //       const navigate = useNavigate();
    //       navigate("/Friends", { state: { newGroup } });
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching fir list data:", error);
    //   });
      
  };
  
  return (
    <FormControl>
         <Box position={"relative"}>
      {/* top text */}
      <Flex mt={-2} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Text
            fontSize={TextStyle.h2.fontSize}
            fontWeight={TextStyle.h2.fontWeight}
          >
            Set up group profile
          </Text>
        </Box>
        {/* NavLink to ..chat group */}
        <Box>
          <Button
            onSubmit={createGroupHandler}
            isDisabled={isDisabled}
            bg={"none"}
            color={buttonColor}
          >
            Create
          </Button>
        </Box>
      </Flex>
      <Flex mt={5} gap={6} alignItems={"center"}>
        {/* img */}
        <Box cursor={"pointer"}>
          {groupImg ? (
            <Avatar src={groupImg} width={84} height={84} />
          ) : (
            <svg
              width="84"
              height="84"
              viewBox="0 0 84 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="42" cy="42" r="42" fill="#D9D9D9" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M31.4142 35.683C31.4142 33.3257 33.3252 31.4147 35.6825 31.4147C38.0398 31.4147 39.9508 33.3257 39.9508 35.683C39.9508 38.0403 38.0398 39.9513 35.6825 39.9513C33.3252 39.9513 31.4142 38.0403 31.4142 35.683ZM35.6825 34.8294C35.2111 34.8294 34.8289 35.2115 34.8289 35.683C34.8289 36.1545 35.2111 36.5367 35.6825 36.5367C36.154 36.5367 36.5362 36.1545 36.5362 35.683C36.5362 35.2115 36.154 34.8294 35.6825 34.8294Z"
                fill="#2D3648"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.585 29.7074C24.585 26.8786 26.8781 24.5854 29.7069 24.5854H53.6093C56.4381 24.5854 58.7313 26.8786 58.7313 29.7074V53.6098C58.7313 56.4386 56.4381 58.7318 53.6093 58.7318H29.7069C26.8781 58.7318 24.585 56.4386 24.585 53.6098V29.7074ZM29.7069 28.0001C28.764 28.0001 27.9996 28.7645 27.9996 29.7074V53.6098C27.9996 54.342 28.4604 54.9665 29.1079 55.2091L47.2803 37.0367C47.947 36.37 49.028 36.37 49.6948 37.0367L55.3167 42.6586V29.7074C55.3167 28.7645 54.5523 28.0001 53.6093 28.0001H29.7069ZM55.3167 47.4876L48.4875 40.6585L33.8289 55.3172H53.6093C54.5523 55.3172 55.3167 54.5528 55.3167 53.6098V47.4876Z"
                fill="#2D3648"
              />
            </svg>
          )}
        </Box>
        {/* group name */}
        <Input
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          variant="flushed"
          placeholder="Group Name"
          color={"white"}
          borderBottomColor={"brand.300"}
          _focus={{ borderBottomColor: "brand.200" }}
        />
        <Box>
          <Input
            type="file"
            height={20}
            width={20}
            position={"absolute"}
            top={"20%"}
            left={0}
            opacity={0}
            aria-visibility={"hidden"}
            accept="image/*"
            onChange={groupImageProfile}
          />
        </Box>
      </Flex>
      {/* group name length */}
      <Box position={"absolute"} top={10} left={"85%"}>
        <Text fontSize={textStyles.body2.fontSize}>{groupName.length}/50</Text>
      </Box>
      {/* Group Members */}
      <Box mt={10}>
        <Text
          color={"brand.100"}
          fontSize={TextStyle.h1.fontSize}
          fontWeight={TextStyle.h1.fontWeight}
        >
          Members {selectedFriends.length}
        </Text>
        <Flex mt={4} gap={5}>
          {/* add more fri */}
          <NavLink to="/CreateGroup">
            <Box cursor={"pointer"}>
              <svg
                width="49"
                height="51"
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.9587 13.2082H23.042V23.0415H13.2087V27.9582H23.042V37.7915H27.9587V27.9582H37.792V23.0415H27.9587V13.2082ZM25.5003 0.916504C11.9549 0.916504 0.916992 11.9544 0.916992 25.4998C0.916992 39.0453 11.9549 50.0832 25.5003 50.0832C39.0457 50.0832 50.0837 39.0453 50.0837 25.4998C50.0837 11.9544 39.0457 0.916504 25.5003 0.916504ZM25.5003 45.1665C14.6591 45.1665 5.83366 36.3411 5.83366 25.4998C5.83366 14.6586 14.6591 5.83317 25.5003 5.83317C36.3416 5.83317 45.167 14.6586 45.167 25.4998C45.167 36.3411 36.3416 45.1665 25.5003 45.1665Z"
                  fill="#D9D9D9"
                />
              </svg>
              <Text mt={1} ml={2}>
                Add
              </Text>
            </Box>
          </NavLink>

          {/* loop friend list here */}
          {selectedFriends.map((item: { avatar: string | undefined; name: string | number | boolean | ReactElement<string | JSXElementConstructor<string>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => {
            return (
              <Box>
                <Avatar src={item.avatar} />
                <Text
                  mt={2}
                  fontSize={TextStyle.body2.fontSize}
                  fontWeight={TextStyle.h1.fontWeight}
                >
                  {item.name}
                </Text>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </Box>
    </FormControl>
   
  );
};
