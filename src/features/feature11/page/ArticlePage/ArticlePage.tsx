import {
  Box,
  Flex,
  Heading,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
BiComment;
import { BiComment } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { ArticleFooter } from "./ArticleFooter";
import { CommentModal } from "./CommentModal";

export const ArticlePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Heading mb={"0.5em"} style={TextStyle.h1}>
        Article Name
      </Heading>
      <Box display={"flex"} mb={"1em"}>
        <Box width={"45px"} height={"45px"} mr={"1em"} bg={"red"}></Box>
        <Box>
          <Text style={TextStyle.h3}>username</Text>
          <Text style={TextStyle.body3}>2 days ago</Text>
        </Box>
      </Box>
      <Box
        display={"flex"}
        minH={"200px"}
        minW={"250px"}
        mb={"1em"}
        bg={"red"}
      ></Box>
      <Box minHeight={"200px"}>
        <Text style={TextStyle.body2}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo soluta
          nostrum quidem saepe, itaque voluptatibus rerum molestiae quae? Sed
          tempore corporis optio eligendi, sit ducimus officiis laborum ipsam
          aut eum?
        </Text>
      </Box>
      <Flex mb={"2em"} justifyContent={"space-between"}>
        <Flex>
          <Flex alignItems={"center"} mr={"2em"}>
            <IconButton
              variant={"link"}
              fontSize={"2xl"}
              color={"white"}
              aria-label="unlike"
              icon={<AiOutlineHeart />}
            />
            {/* <IconButton variant={"link"} fontSize={"3xl"} color={"white"} aria-label="unlike" icon={<AiFillHeart/>} /> */}
            <Text display={"inline"} style={TextStyle.body3}>
              10
            </Text>
          </Flex>
          <Flex alignItems={"center"}>
            <IconButton
              variant={"link"}
              fontSize={"2xl"}
              color={"white"}
              aria-label="unlike"
              icon={<BiComment />}
              onClick={onOpen}
            />
            {/* <IconButton variant={"link"} fontSize={"3xl"} color={"white"} aria-label="unlike" icon={<AiFillHeart/>} /> */}
            <Text display={"inline"} style={TextStyle.body3}>
              10
            </Text>
          </Flex>
        </Flex>

        <IconButton
          variant={"link"}
          fontSize={"2xl"}
          color={"white"}
          aria-label="unlike"
          icon={<FiSend />}
        />
        {/* <IconButton variant={"link"} fontSize={"3xl"} color={"white"} aria-label="unlike" icon={<AiFillHeart/>} /> */}
      </Flex>
      <ArticleFooter />
      <CommentModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
