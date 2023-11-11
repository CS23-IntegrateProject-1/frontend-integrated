import { Box } from "@chakra-ui/react";
import { Text, Image } from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/Bi";
import { MdOutlineSend } from "react-icons/md";
import { TextStyle } from "../../../../theme/TextStyle";

// Component for an article box
export const ArticlesBox = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width={{ base: "100%", md: "80%", lg: "50%" }}
      // height="130px"
      border="1px"
      borderColor="#A533C8"
      p={"1em"}
    >
      {/* Profile Info */}
      <Box
        // className="ProfileBox"
        display="flex"
        alignItems="center"
        // mt="18px"
        // ml="-200px"
        // width="150px"
        // p={"2em"}
        w={"100%"}
        height="32px"
      >
        <Box display="flex" alignItems={"center"}>
          <img
            src="/src/features/feature11/img/Profile.png"
            alt="Profile"
            width="32px"
            height="32px"
          />
          <Text
            // className="username"
            style={TextStyle.h4}
            ml="10px"
            color={"#C5C4C7"}
          >
            username
          </Text>
          <Text
            // className="time"
            style={TextStyle.h4}
            ml="25px"
            color={"#C5C4C7"}
          >
            <ul>
              <li>10 m</li>
            </ul>
          </Text>
        </Box>
      </Box>
      {/* 
      {/* Article Name */}
      <Box
        w={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        {/* {/* <Box
        display="flex"
        alignItems="center"
        width="100px"
        height="30px"
        ml="-150px"
      > */}
        <Text color={"#C5C4C7"} style={TextStyle.h2}>
          Article Name
        </Text>
        {/* </Box> */}
        <Image
          src="/src/features/feature11/img/Rectangle 186.png"
          alt="Article"
          w={"200px"}
          h={"100px"}
        />
      </Box>
      <Box display={"flex"} alignSelf={"flex-start"}>
        <Box className="Like" display="flex" mr={"1em"}>
          <AiOutlineHeart />
          <Text fontSize="xs" ml="3px" color={"#DEBEF6"}>
            30
          </Text>
        </Box>

        {/* Comment section */}
        <Box className="comment" display="flex" mr={"1em"}>
          <BiComment />
          <Text fontSize="xs" ml="3px" color={"#DEBEF6"}>
            2
          </Text>
        </Box>

        {/* Share section */}
        <Box display="flex"transform="rotate(315deg)">
          <MdOutlineSend />
        </Box>
      </Box>
    

      {/* Like section */}
    </Box>
  );
};
