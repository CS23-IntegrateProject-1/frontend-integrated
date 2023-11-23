import { Box } from "@chakra-ui/react";
import { Navbar } from "../components/navbar/Navbar";

import { Outlet} from "react-router-dom";

export const RootLayout = () => {
  return (
    <Box>
      <Navbar />
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
