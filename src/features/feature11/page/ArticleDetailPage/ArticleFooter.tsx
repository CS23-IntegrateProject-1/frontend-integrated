import React from "react";
import { Box, Heading, Tag, TagLabel} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { ArticleFooterProps, ArticleTagProps } from "../../../../interfaces/feature11/ArticleType";

export const ArticleFooter: React.FC<ArticleFooterProps> = (props) => {
  return (
    <Box
      p={{ base: "1em", md: "2em" }}
      bg={"#A533C8"}
      // bottom={"0"}

      mx={{ base: "-1em", md: "-2em" }}
    >
      {/* <Box w={"60px"} h={"60px"} mb={"1em"} bg={"red"} rounded={"50%"}></Box> */}
      <Heading style={TextStyle.h1} mb={"1em"}>
        Written by {props.author_name}
      </Heading>
    
      <Box>
        {props.Article_tags.map((tag: ArticleTagProps, index) => (
          <Tag
            key={index}
            mr={"0.5em"}
            mb={"0.5em"}
            borderRadius={"full"}
            variant="solid"
            // colorScheme="brand"
            bg={"brand.300"}
          >
            <TagLabel style={TextStyle.body3}>{tag.Tag.tag_name}</TagLabel>
          </Tag>
        ))}
      </Box>
    </Box>
  );
};
