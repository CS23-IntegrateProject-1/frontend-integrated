import { useState } from "react";
import { ConversationsProvider } from "./context/ConversationProvider";
import { ChatBotPage } from "./pages/chatBotPage/ChatBotPage";
import { CommunityChatPage } from "./pages/communityChatPage/CommunityChatPage";
import { TestingFeat12 } from "./pages/testingPage/TestingFeat12";
export const Feature12Routes = () => {
  const [id, setId] = useState<string>("1");
  return [
    {
      path: "/chatbot",
      element: <ChatBotPage />,
    },
    {
      path: "/communitychat",
      element:
        <ConversationsProvider id={id}>
          <CommunityChatPage id={ id } />,
        </ConversationsProvider>
    },
    {
      path: "/feature12Testing",
      element: (
            <TestingFeat12 />
      ),
    },
  ];
};
