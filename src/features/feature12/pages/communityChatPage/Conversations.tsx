import { List, ListItem } from "@chakra-ui/react";
import React from "react";
import { useConversations } from "../../context/ConversationProvider";

const Conversations: React.FC = () => {
  const { conversations, selectedConversationIndex } = useConversations();
  console.log(conversations);
  return (
    <>
      <List spacing={3} variant="flush" width="100%" borderBottom="0.5px solid black">
        {conversations.map((conversation, index: number) => (
          <ListItem key={index} cursor={"pointer"} padding={3} onClick={() => selectedConversationIndex(index)}
          background={conversation.selected ? '#DEBEF6' : 'transparent'}>
            {conversation.recipients
              .map((recipient) => recipient.name)
              .join(", ")}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Conversations;
