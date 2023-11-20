// import { useState } from "react";
import { ContactProvider } from "./context/ContactProvider";
import { ConversationsProvider } from "./context/ConversationProvider";
import { ChatBotPage } from "./pages/chatBotPage/ChatBotPage";
import { CommunityChatPage } from "./pages/communityChatPage/CommunityChatPage";
import { TestingFeat12 } from "./pages/testingPage/TestingFeat12";
export const Feature12Routes = () => {
  // const [id, setId] = useState<string>("15");
  return [
    {
      path: "/chatbot",
      element: <ChatBotPage />,
    },
    {
      path: "/communitychat",
      element: <CommunityChatPage />,
    },
    {
      path: "/feature12Testing",
      element: (
        <ContactProvider>
          <ConversationsProvider id="id">
            <TestingFeat12 />,
          </ConversationsProvider>
        </ContactProvider>
      ),
    },
  ];
};
