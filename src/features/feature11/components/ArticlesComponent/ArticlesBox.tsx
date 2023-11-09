import { Box } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react';
import { AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/Bi";
import { MdOutlineSend } from "react-icons/md";

// Component for an article box
export const ArticlesBox = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="393px"
      height="130px"
      border="1px"
      borderColor="#A533C8"
    >
      {/* Profile Info */}
      <Box className="ProfileBox" 
        display="flex" 
        alignItems="center" 
        mt="18px" 
        ml="-200px" 
        width="150px" 
        height="32px">
        <img src="/src/features/feature11/img/Profile.png" alt="Profile" width="32px" height="32px" />
        <Text className="username" fontSize="xs" ml="10px" color={"#C5C4C7"}>
          username
        </Text>
        <Text className="time" fontSize="xs" ml="25px" color={"#C5C4C7"}>
          <ul><li>10 m</li></ul>
        </Text>
      </Box>

      {/* Article Name */}
      <Box display="flex" alignItems="center" width="100px" height="30px" ml="-150px" >
        <Text color={"#C5C4C7"} as={"b"} lineHeight={"18.75"}>Article Name</Text>
      </Box>

      {/* Article Image */}
      <Box width="114px" height="78px" mt="-55px" ml="225px">
        <img src="/src/features/feature11/img/Rectangle 186.png" alt="Article" />
      </Box>

      {/* Like section */}
      <Box className="Like" display="flex" ml="-280px">
        <AiOutlineHeart />
        <Text fontSize="xs" ml="3px" color={"#DEBEF6"}>
          30
        </Text>
      </Box>

      {/* Comment section */}
      <Box className="comment" display="flex" mt="-17px" ml="-180px">
        <BiComment />
        <Text fontSize="xs" ml="3px" color={"#DEBEF6"}>
          2
        </Text>
      </Box>

      {/* Share section */}
      <Box display="flex" mt="-21px" ml="-80px" transform="rotate(315deg)">
        <MdOutlineSend />
      </Box>
    </Box>
  );
};
