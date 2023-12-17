import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  ModalBody,
  ModalContent,
  ModalHeader,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Form } from "react-router-dom";
import { useConversations } from "../context/ConversationProvider";

interface NewConversationModalProps {
  closeModal: () => void;
}
// interface Contact {
//   username: string;
//   userId: string;
// }
interface Recipient  {
  id: string;
  name: string;
}

const NewConversationModal: React.FC<NewConversationModalProps> = ({closeModal}) =>{
  const [selectedContactIds, setSelectedContactIds] = useState<Recipient[]>([]);
  const { contacts, createConversation } = useConversations();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createConversation(selectedContactIds);
    console.log("selectedContactIds", selectedContactIds);
  }

  // if (contacts) {
  //   contacts.forEach((contact) => {
  //     console.log(contact.userId);
  //   });
  // }

  function handleCheckboxChange(contactId: string) {
    setSelectedContactIds((prevSelectedContactIds: Recipient[]) => {
      // If current contactId is already in the array, remove it
      if (
        prevSelectedContactIds.some((recipient) => recipient.id === contactId)
      ) {
        return prevSelectedContactIds.filter((prevId: Recipient) => {
          return contactId !== prevId.id; // assuming id is a property of Recipient
        });
      } else {
        // Find the recipient object that matches the contactId
        let newRecipient;
        if (contacts) {
          newRecipient = contacts.find(
            (contact) => contact.addId === contactId
          );
        }
        if (newRecipient) {
          // Convert the newRecipient from a Contact to a Recipient
          const recipient: Recipient = {
            id: newRecipient.addId,
            name: newRecipient.username,
            // add other properties as needed
          };
          return [...prevSelectedContactIds, recipient];
        } else {
          return prevSelectedContactIds;
        }
      }
    });
    // setSelectedContactIds((prevSelectedContactIds: number[]) => {
    //   if (prevSelectedContactIds.includes(contactId)) {
    //     return prevSelectedContactIds.filter((prevId => contactId !== prevId))
    //   } else {
    //     return [...prevSelectedContactIds, contactId];
    //   }
    // })
    console.log("selectedContactdIds", selectedContactIds);
  }

  return (
    <div>
      <ModalContent>
        <ModalHeader color={"black"}>Create Group Chat</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            {contacts &&
              contacts.map((contact, index: number) => (
                <FormControl key={index}>
                  <FormLabel>
                    <Checkbox
                      // isChecked={selectedContactIds.includes(contact.userId)}
                      onChange={() => handleCheckboxChange(contact.addId)}
                      color={"black"}
                    >
                      <Text color={"black"}>{contact.username}</Text>
                    </Checkbox>
                  </FormLabel>
                </FormControl>
              ))}
            <Button type="submit" onClick={closeModal}>
              Create
            </Button>
            <Button onClick={closeModal}>Cancel</Button>
          </Form>
        </ModalBody>
      </ModalContent>
    </div>
  );
}

export default NewConversationModal;