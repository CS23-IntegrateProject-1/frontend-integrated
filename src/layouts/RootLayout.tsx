import { Box } from "@chakra-ui/react";
import { Navbar } from "../components/navbar/Navbar";

import { Outlet } from "react-router-dom";

interface RootLayoutProps {
  role?: string;
}

export const RootLayout = ({ role }: RootLayoutProps) => {
  return (
    <Box>
      <Navbar role={role} />
      <Box
        padding={{ base: "16px", md: "32px" }}
        pt={{ base: "86px", md: "102px" }}
        h={"100vh"}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
