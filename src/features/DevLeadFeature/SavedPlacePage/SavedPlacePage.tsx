import { Box, Button } from "@chakra-ui/react";
import { useUserContext } from "../../../contexts/UserContext";
import { useEffect } from "react";

export const SavedPlacePage = () => {
  const { user,setUser } = useUserContext();

  useEffect(()=> {
    console.log(user)
  },[]);
  return (
    <div>
      <h2>User Profile</h2>
      <p>User ID: {user?.userId}</p>
      <p>Username: {user?.username}</p>
      <p>User Role: {user?.userRole}</p>
    <Button onClick={()=>setUser(null)}>Logout</Button>
    </div>
  );
};
