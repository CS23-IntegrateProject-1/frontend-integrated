import React from "react";
import { Box, Heading, Tag, TagLabel, Text } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { ArticleFooterProps, ArticleTagProps } from "../../ArticleTypes";

export const ArticleFooter: React.FC<ArticleFooterProps> = (props) => {
  return (
    <Box
      p={{ base: "1em", md: "2em" }}
      bg={"#A533C8"}
      // position={"absolute"}
      bottom={"0"}
      // left={"0"}
      // w={"100vw"}
      mx={{ base: "-1em", md: "-2em" }}
    >
      <Box w={"60px"} h={"60px"} mb={"1em"} bg={"red"} rounded={"50%"}></Box>
      <Heading style={TextStyle.h1} mb={"1em"}>
        Written by {props.author_name}
      </Heading>
      {/* <Text mb={"1em"} style={TextStyle.body2}>
        
      </Text> */}
      <Box>
        {props.Article_tags.map((tag: ArticleTagProps) => (
          <Tag
            key={tag.tag.tagId}
            mr={"0.5em"}
            mb={"0.5em"}
            borderRadius={"full"}
            variant="solid"
            // colorScheme="brand"
            bg={"brand.300"}
          >
            <TagLabel style={TextStyle.body3}>{tag.tag.tag_name}</TagLabel>
          </Tag>
        ))}
      </Box>
    </Box>
  );
};
