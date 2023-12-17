import { BusiProfile } from './Pages/BusiProfile'
import { BusiProfileEdit } from './Pages/BusiProfileEdit'
import { BusiUpdateCard } from './Pages/BusiUpdateCard'
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
      path: "/business/busiUpdateCard",
      element: <BusiUpdateCard/>,
    },
  ];
};
 