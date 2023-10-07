import { Box, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavbarContent } from "./NavbarContent";
import { useState } from "react";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpenNav = () => {
    onOpen();
  };
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      height="124px"
      padding={"1em"}
    >
      <Box>
        {" "}
        <HamburgerIcon />
      </Box>
      <Box>Harmoni</Box>
      <HamburgerIcon width={"24px"} height={"24px"} onClick={handleOpenNav} />

      <Box position={"absolute"} >
        <NavbarContent isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      </Box>
    </Flex>
  );
};
