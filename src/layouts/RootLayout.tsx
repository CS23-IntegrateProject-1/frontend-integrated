import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";

export const RootLayout = () => {
  return (
    <Box>
      <Navbar />
      <Box padding={"16px"}>
        <Outlet />
      </Box>
    </Box>
  );
};
