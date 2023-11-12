import { Box, Button, Flex, Heading, Input, Textarea } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { FC, useState } from "react";
import { Axios } from "../../../../AxiosInstance";
import { useParams } from "react-router-dom";

export const CommentInput = () => {
  const [content, setContent] = useState("");
  const id = useParams();
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleCreateComment = () => {
    Axios.post("/api/comment", {
      content: content,
      articleId: id,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <Flex
      flexDir={"column"}
      bg={"white"}
      w={"100%"}
      minH={"150px"}
      shadow={"md"}
      p={"1em"}
      justifyContent={"space-between"}
      borderRadius={"20px"}
    >
      <Box>
        <Flex alignItems={"center"} mb={"0.25em"}>
          <Box w={"30px"} h={"30px"} mr={"0.5em"} bg={"red"}></Box>
          <Heading style={TextStyle.h4} color={"black"}>
            username
          </Heading>
        </Flex>
        {/* <Box my={"1em"}> */}
        <Textarea
          p={"0.5em"}
          style={TextStyle.body3}
          variant={"unstyled"}
          rows={2}
          placeholder={"Write a comment..."}
          value={content}
          onChange={handleContentChange}
          color={"black"}
          resize={"none"}
          // bg={"red"}
        />
        {/* </Box> */}
      </Box>

      <Flex justifyContent={"flex-end"}>
        <Button
          border={"solid 1px"}
          bg={"white"}
          borderColor={"brand.200"}
          borderRadius={"30px"}
          h={"25px"}
          mr={"1em"}
          style={TextStyle.h5}
        >
          Cancel
        </Button>
        <Button
          borderRadius={"30px"}
          h={"25px"}
          bg={"brand.200"}
          color={"white"}
          _hover={{ bg: "brand.300" }}
          style={TextStyle.h5}
          onClick={handleCreateComment}
        >
          Comment
        </Button>
      </Flex>
    </Flex>
  );
};
