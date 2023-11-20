import { RouterProvider } from "react-router-dom";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { PublicRoutes } from "./routes/PublicRoutes";
import { Verify } from "./api/Auth/Verify";
import { createContext, useContext, useEffect, useState } from "react";
import { Axios } from "./AxiosInstance";

const UserContext = createContext(0);

const privateRouter = PrivateRoutes;
const publicRouter = PublicRoutes;
const isLogin = await Verify();

function App() {
  const [userId, setUserId] = useState(-1);

  useEffect(() => {
    if (isLogin) {
      Axios.get("/auth/getUser")
        .then((res) => {
          setUserId(res.data.userId);
        })
        .catch((err) => {
          console.error("Error verifying user:", err);
        });
    } else {
      setUserId(-1);
    }
  }, [isLogin]);

  return (
    <UserContext.Provider value={userId}>
      <RouterProvider router={isLogin ? privateRouter : publicRouter} />;
    </UserContext.Provider>
  );
}

export default App;

export function useUser() {
  return useContext(UserContext);
}
