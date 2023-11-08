import {
  Box,
  Divider,
  HStack,
  IconButton,
  Input,
  Tag,
  TagCloseButton,
  TagLabel,
} from "@chakra-ui/react";
import { AutoResizeTextarea } from "../components/AutoResizeTextarea";
import { useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";

export const CreateArticlePage = () => {
  const [tags, setTags] = useState<string[]>(["hello", "Heoo"]);
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Input
        placeholder="Untitled"
        h={"60px"}
        fontWeight={"bold"}
        fontSize={"2xl"}
        border={"none"}
        mb={"5px"}
        focusBorderColor="rgba(0, 0, 0, 0)"
      />
      <Divider />
      <Box mt={"10px"} w={"95%"} display={"flex"}>
        <HStack>
          {tags.map((value) => (
            <Tag
              size={"sm"}
              key={value}
              borderRadius="full"
              variant="solid"
              bgColor={"brand.200"}
            >
              <TagLabel>{value}</TagLabel>
              <TagCloseButton />
            </Tag>
          ))}
        </HStack>
        <IconButton mx={"5px"} textColor={"white"} variant={"unstyled"} height={"20px"} w={"20px"} fontSize={"20px"} borderRadius={"50%"} aria-label="add tag" icon={<IoAddCircleSharp />} />

      </Box>
      <AutoResizeTextarea
        placeholder="Write your story"
        border={"none"}
        rows={15}
        mt={"5px"}
        focusBorderColor="rgba(0, 0, 0, 0)"
      ></AutoResizeTextarea>
    </Box>
  );
};
