import { ChatBotPage } from "./pages/chatBotPage/ChatBotPage";
import { CommunityChatPage } from "./pages/communityChatPage/CommunityChatPage";
import { ConversationsProvider } from "./pages/communityChatPage/ConversationsProvider";
import {TestingFeat12} from "./pages/testingPage/TestingFeat12";
export const Feature12Routes = () => {
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
      element:
        <ConversationsProvider id="id">
          <TestingFeat12 />,
        </ConversationsProvider>
    },
  ];
};
