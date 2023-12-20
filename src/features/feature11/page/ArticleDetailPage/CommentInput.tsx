import { Box, Button, Flex, Heading, Textarea } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { useState } from "react";
import { Axios } from "../../../../AxiosInstance";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

export const CommentInput = () => {
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();
  const { articleId } = useParams<{ articleId: string }>();
  const articleIdAsNumber = parseInt(articleId || "0", 10); // or use Number(articleId || "0");

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleCreateComment = () => {
    console.log(articleId);
    Axios.post("/feature11/writeComment", {
      content: content,
      articleId: articleIdAsNumber,
    })
      .then((res) => {
        console.log(res);
        queryClient.invalidateQueries({ queryKey: ["comments"] });
        setContent("");
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
