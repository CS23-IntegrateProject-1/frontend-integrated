import { BusiProfile } from './Pages/BusiProfile'
import { BusiProfileEdit } from './Pages/BusiProfileEdit'
import { BusinessAddCard } from './Pages/BusiAddCard'
export const Feature01PrivateRoutes = () => {
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
      path: "/business/busiAddCard",
      element: <BusinessAddCard/>,
    },
  ];
};
 