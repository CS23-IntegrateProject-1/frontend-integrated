import { SettingHomepage } from './Pages/homepage/SettingHomepage'
import { Account } from './Pages/account/Account'
import { Notifications } from './Pages/notifications/Notifications'
import { PrivacyPolicy } from './Pages/privacyPolicy/PrivacyPolicy'
import { TermOfService } from './Pages/termOfService/TermOfService'
import { Help } from './Pages/help/Help'
import { About } from './Pages/about/About'
import { Profile } from './Pages/profile/Profile'
import { PaymentMethodSetting } from './Pages/paymentMethodSetting/PaymentMethodSetting'
export const Feature01Routes = () => {
  return [
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
  ];
};
