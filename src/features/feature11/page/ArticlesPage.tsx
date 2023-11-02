import { Box, IconButton } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react';
import { ArticlesBox} from "../components/ArticlesComponent/ArticlesBox";
import { MdAddCircle } from "react-icons/md";

export const ArticlesPage = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
    <Box width={"393px"} height={"56px"} bg={"#5F0DBB"} mt={"-15px"} >
      <Text 
        fontSize={"16px"}
        color= {"#DEBEF6"}
        lineHeight={"56px"}
        as={"b"}
        margin={"22px"}
        >
        User Feed
      </Text>
    </Box>   

      <IconButton 
        borderRadius={"50%"} 
        position={"fixed"} 
        bottom={"40px"} 
        right={"10px"}
        variant="unstyled"
        aria-label="add" 
        icon={<MdAddCircle size={"72px"} color={"#A533C8"}
      />}
    />
      <ArticlesBox />
      <ArticlesBox />
      <ArticlesBox />
      <ArticlesBox />
      <ArticlesBox />
      <ArticlesBox />
      <ArticlesBox />
      <ArticlesBox />
    </Box>
  );
};