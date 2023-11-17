import { ChatBotPage } from "./pages/chatBotPage/ChatBotPage";
import { CommunityChatPage } from "./pages/communityChatPage/CommunityChatPage";
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
      element: <TestingFeat12 />,
    },
  ];
};
