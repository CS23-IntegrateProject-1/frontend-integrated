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
import { BusiProfile } from './Pages/BusiProfile'
import { BusiProfileEdit } from './Pages/BusiProfileEdit'
import { CreateGroup } from './Pages/AddFriends/CreateGroup'
export const Feature01PublicRoutes = () => {
  return [
    //business
    {
      path: "/business/busiProfile",
      element: <BusiProfile/>,
    },
    {
      path: "/business/busiProfileEdit",
      element: <BusiProfileEdit/>,
    },
    {
      path: "/setting",
      element: <SettingHomepage/>,
    },
    {
      path: "/setting/account",
      element: <Account/>,
    },
    {
      path: "/setting/account/profile",
      element: <Profile/>,
    },
    
    {
      path: "/setting/account/paymentmethodsetting",
      element: <PaymentMethodSetting/>,
    },
    {
      path: "/setting/notifications",
      element: <Notifications/>,
    },
    {
      path: "/setting/notifications/EmailNoti",
      element: <EmailNoti/>,
    },
    {
      path: "/setting/notifications/PushNoti",
      element: <PushNoti/>,
    },
    {
      path: "/setting/privacy-policy",
      element: <PrivacyPolicy/>,
    },
    {
      path: "/setting/term-of-service",
      element: <TermOfService/>,
    },
    {
      path: "/setting/help",
      element: <Help/>,
    },
    {
      path: "/setting/about",
      element: <About/>,
    },
    {
      path: "/setting/account/paymentmethodsetting/AddCard",
      element: <AddCard/>,
    },
    {
      path: "/setting/overview",
      element: <Overview/>,
    },
    {
      path: "/FriendMain",
      element: <FriendMain/>,
    },
    // {
    //   path: "/CreateGroup",
    //   element: <CreateGroup/>,
    // },
  ];
};
 