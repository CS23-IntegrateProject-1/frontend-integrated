import { Box, Text } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";

export const CommentItem = () => {
  return (
    <Box my={"1em"} borderBottom={"solid 1px #A533C8"}>
      <Box display={"flex"} alignItems={"center"} mb={"1em"}>
        <Box width={"45px"} height={"45px"} mr={"1em"} bg={"red"}></Box>
        <Box>
          <Text color={"black"} style={TextStyle.h5}>
            username
          </Text>
          <Text color={"black"} style={TextStyle.body3}>
            2 days ago
          </Text>
        </Box>
      </Box>
      <Text style={TextStyle.body2} mb={"1em"} color={"black"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora harum,
        voluptas nihil placeat dicta explicabo. Vitae quam placeat labore
        aliquam, dolorem aspernatur obcaecati reiciendis aut corrupti
        blanditiis, consequuntur a consequatur?
      </Text>
    </Box>
  );
};
