import {
  Box,
  Flex,
  // Heading,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { NavbarContent } from "./NavbarContent";
import { useLocation } from "react-router-dom";
import { getPageTitle } from "../../functions/getPageTitle";
import { FC } from "react";
import { NavbarBusiness } from "./NavbarBusiness";
import { NavbarAdmin } from "./NavbarAdmin";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  role?: string;
}

export const Navbar: FC<NavbarProps> = ({ role }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const navigate = useNavigate();
  const pageTitle = getPageTitle(location.pathname);
  const handleOpenNav = () => {
    onOpen();
  };

  const handleGoback = () => {
    navigate(-1);
  };

  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      height="70px"
      padding={"1em"}
      bg={"brand.400"}
      shadow={"md"}
      position={"fixed"}
      top={"0"}
      zIndex={"100"}
      width={"100%"}
    >
      {location.pathname === "/" ? (
        <Box width={"40px"} height={"40px"} visibility={"hidden"}></Box>
      ) : (
        <IconButton
          aria-label="Notification Page"
          variant={"unstyled"}
          icon={
            <ArrowBackIcon
              width={"24px"}
              height={"24px"}
              onClick={handleGoback}
            />
          }
        />
      )}

      <Box color="white">{pageTitle}</Box>
      <IconButton
        aria-label="Notification Page"
        variant={"unstyled"}
        icon={
          <HamburgerIcon
            width={"24px"}
            height={"24px"}
            color={"white"}
            onClick={handleOpenNav}
          />
        }
      />

      <Box position={"absolute"} top={"0"} left={"0"}>
        {role == "customer" ? (
          <NavbarContent isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        ) : role == "business" ? (
          <NavbarBusiness isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        ) : role == "admin" ? (
          <NavbarAdmin isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        ) : (
          <NavbarContent isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        )}
      </Box>
    </Flex>
  );
};
