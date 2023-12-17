import { SettingHomepage } from './Pages/homepage/SettingHomepage'
import { Account } from './Pages/account/Account'
import { Notifications } from './Pages/notifications/Notifications'
import { PrivacyPolicy } from './Pages/privacyPolicy/PrivacyPolicy'
import { TermOfService } from './Pages/termOfService/TermOfService'
import { Help } from './Pages/help/Help'
import { About } from './Pages/about/About'
import { Profile } from './Pages/profile/Profile'
import { PaymentMethodSetting } from './Pages/paymentMethodSetting/PaymentMethodSetting'
import { EmailNoti } from './Pages/notifications/EmailNoti'
import { PushNoti } from './Pages/notifications/PushNoti'
import { AddCard } from './Pages/AddCard'
import { Overview } from './Pages/overview/Overview'
import { FriendMain } from './Pages/AddFriends/FriendMain'
import { AddFriend } from './Pages/AddFriends/AddFriend'
import { CreateGroup } from './Pages/AddFriends/CreateGroup'
import { SetUpGroup } from './Pages/AddFriends/SetUpGroup'
import { QRScanner } from './Pages/AddFriends/QRScanner'
import { HelpDesk } from './Pages/help/HelpDesk'
export const Feature01Routes = () => {
  return [
    {
      path: "/setting",
      element: <SettingHomepage />,
    },
    {
      path: "/setting/account",
      element: <Account />,
    },
    {
      path: "/setting/account/profile",
      element: <Profile />,
    },

    {
      path: "/setting/account/paymentmethodsetting",
      element: <PaymentMethodSetting />,
    },
    {
      path: "/setting/notifications",
      element: <Notifications />,
    },
    {
      path: "/setting/notifications/EmailNoti",
      element: <EmailNoti />,
    },
    {
      path: "/setting/notifications/PushNoti",
      element: <PushNoti />,
    },
    {
      path: "/setting/privacy-policy",
      element: <PrivacyPolicy />,
    },
    {
      path: "/setting/term-of-service",
      element: <TermOfService />,
    },
    {
      path: "/setting/help",
      element: <Help />,
    },
    {
      path: "/setting/helpdesk",
      element: <HelpDesk />,
    },
    {
      path: "/setting/about",
      element: <About />,
    },
    {
      path: "/setting/account/paymentmethodsetting/AddCard",
      element: <AddCard />,
    },
    {
      path: "/setting/overview",
      element: <Overview />,
    },
    {
      path: "/Friends",
      element: <FriendMain />,
    },
    {
      path: "/AddFriend",
      element: <AddFriend/>,
  },
  {
    path: "/CreateGroup",
    element: <CreateGroup/>,
  },
  {
    path: "/SetUpGroup",
    element: <SetUpGroup/>,
  },
  {
    path: "/AddFriend/QRCode",
    element: <QRScanner/>,
  },
  ];
};
