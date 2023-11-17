import {
  Box,
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiSolidCamera } from "react-icons/Bi";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { Form } from "react-router-dom";
import { useConversations } from "./ConversationsProvider";

const cameraIconStyle = {
  borderRadius: "50%",
  color: "#DEBEF6",
  background: "#A533C8",
  fontSize: "30px",
  padding: "2px",
};
const sendButtonStyle = {
  border: "none",
  color: "#A533C8",
  fontSize: "30px",
};
export default function SendMessage() {
  const [text, setText] = useState<string>("");
  const { sendMessage } = useConversations();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    sendMessage(text);
    console.log(text);
    setText("");
  }
  return (
    <Box>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <InputLeftElement display={"flex-end"}>
            <IconButton
              aria-label="Send Image"
              icon={<BiSolidCamera style={cameraIconStyle} />}
            />
          </InputLeftElement>
          <FormControl px="25px" isRequired>
            <Input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Message..."
              bg="white"
              color="black"
            />
          </FormControl>
          <InputRightElement>
            <IconButton
              type="submit"
              aria-label="Send Message"
              icon={
                <PiPaperPlaneRightFill border="none" style={sendButtonStyle} />
              }
            />
          </InputRightElement>
        </InputGroup>
      </Form>
    </Box>
  );
}
