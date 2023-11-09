import React, { createContext, useContext, ReactNode, useEffect } from "react";

interface User {
  userId: string;
  username: string;
  userRole: string;

  //   settings: {
  //   };
}
interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);
  useEffect(() => {
    //   async function checkAuthCookie() {
    //     try {
    //       const response = await fetch("/api/check-auth");
    //       if (response.ok) {
    //         const user = await response.json();
    //         setUser(user);
    //       }
    //     } catch (error) {
    //       // Handle error
    //     }
    //   }

    //   checkAuthCookie();
    setUser({
      userId: "1",
      username: "minklim",
      userRole: "customer",
    });
  }, []);

  //   // Logout function that sends a request to clear the authentication cookie
  //   const logout = async () => {
  //     try {
  //       await fetch("/api/logout");
  //       setUser(null);
  //     } catch (error) {
  //       // Handle error
  //     }
  //   };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
