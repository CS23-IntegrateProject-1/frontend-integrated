import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";

export const RootLayout = () => {
  return (
    <Box>
      <Navbar />
      <Box
        padding={{ base: "16px", md: "32px" }}
        pt={{ base: "76px", md: "102px" }}
        h={"100vh"}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
