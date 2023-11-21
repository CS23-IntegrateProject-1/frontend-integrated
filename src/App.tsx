import { RouterProvider } from "react-router-dom";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { PublicRoutes } from "./routes/PublicRoutes";
import { Verify } from "./api/Auth/Verify";
import { createContext, useContext, useEffect, useState } from "react";
import { Axios } from "./AxiosInstance";

interface User {
  //   userId: number;
  fname: string;
  lname: string;
  email: string;
  addId: string;
  phone: string;
  profile_picture: string;
}


const UserContext = createContext({
  //   userId: -1,
  fname: "",
  lname: "",
  email: "",
  addId: "",
  phone: "",
  profile_picture: "",
});

const privateRouter = PrivateRoutes;
const publicRouter = PublicRoutes;
const isLogin = await Verify();

function App() {
  const [user, setUser] = useState<User>({
    // userId: -1,
    fname: "",
    lname: "",
    email: "",
    addId: "",
    phone: "",
    profile_picture: "",
  });

  useEffect(() => {
    if (isLogin) {
      Axios.get("/auth/getUser")
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.error("Error verifying user:", err);
        });
    }
  }, [isLogin]);

  return (
    <UserContext.Provider value={user}>
      <RouterProvider router={isLogin ? privateRouter : publicRouter} />;
    </UserContext.Provider>
  );
}

export default App;

export function useUser() {
  return useContext(UserContext);
}
