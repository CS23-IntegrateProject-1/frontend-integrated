import { Box, Flex, IconButton, Stack, Slide } from "@chakra-ui/react";
import { Center, ButtonGroup, Button, Drawer, DrawerContent } from "@chakra-ui/react";
import { TextStyle } from "../../theme/TextStyle";
import { FC } from "react";
//import { CloseIcon, BellIcon, SettingsIcon } from "@chakra-ui/icons";
import { CloseIcon, SettingsIcon } from "@chakra-ui/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

import { ButtonComponent } from "../buttons/ButtonComponent";

import { Axios } from "../../AxiosInstance";

interface NavbarContentProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const NavbarAdmin: FC<NavbarContentProps> = ({
  isOpen,
   onOpen,
  onClose,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpen = () => {
    onOpen();
    setIsDrawerOpen(true);
  }
  const handleLinkClick = () => {
    onClose();
  };
  const navigate = useNavigate();
  const links = [
    { title: "Dashboard", to: "/" },
    //{
    //  title: "Request Approval",
    //  to: "/request-approval",
    //},
    {
      title: "Request Approval",
      to: "/admin/voucher",
    },
    //{
    //  title: "Account Setup",
    //  to: "/account-setup",
    //},
    //{
    //  title: "Survey",
    //  to: "/survey",
    //},
    {
      title: "Advertisement",
      to: "/admin/advertisement",
    },
    {
      title: "Promotion",
      to: "/admin/promotion",
    },
    //{
    //  title: "Report to Admin",
    //  to: "/report-to-admin",
    //},
    {
      title: "Report to Admin",
      to: "/admin/notification",
    },
  ];

  const handleSignOut = () => {
    const url = `/auth/logout`;
    Axios.post(url, { withCredentials: true })
      .then((response) => {
        if (response.status == 200) {
          console.log("Sign out success");
          window.location.href = "/admin/login";
        }
        return response;
      })
      .catch((error) => {
        console.error("Error fetching profile  data:", error);
      });
  }
  
  return (
    <Slide direction="top" in={isOpen} unmountOnExit style={{ zIndex: 10 }}>
      <Box
        display={isOpen ? "flex" : "none"}
        flexDir={"column"}
        justifyContent={"space-around"}
        alignItems={"center"}
        width={"100vw"}
        height={"100vh"}
        padding={"32px"}
        background={"black"}
        transition={"height 0.5s ease-in-out"}
      >
        <IconButton
          aria-label="Close Navigation Bar"
          variant={"unstyled"}
          alignSelf={"flex-end"}
          onClick={onClose}
          icon={<CloseIcon boxSize={6} color="white" />}
        />
        <Stack
          width={"100%"}
          spacing={"16px"}
          justify={"center"}
          align={"center"}
          textAlign={"center"}
        >
          {links.map((link, index) => (
            <NavLink to={link.to} onClick={handleLinkClick} key={index}>
              <Flex align={"center"} p={"16px 32px"} color={"white"}>
                {link.title}
              </Flex>
            </NavLink>
          ))}

          {/*<IconButton
            aria-label="Notification Page"
            variant={"unstyled"}
            icon={<BellIcon boxSize={8} color={"white"} />}
          />*/}
          <ButtonComponent
            text="Sign Out"
            textColor="red"
            bgColor="#191919"
            border={"1px solid red"}
            bgColorHover="white"
            onClick={handleOpen}
        />
        </Stack>
        <IconButton
          aria-label="Setting Page"
          variant={"unstyled"}
          icon={
            <SettingsIcon alignSelf={"flex-end"} boxSize={6} color={"white"} />
          }
          onClick={() => {
            navigate("/setting");
            onClose();
          }}
        />
      </Box>

      <Drawer
        placement={"bottom"}
        onClose={() => {
          onClose();
          setIsDrawerOpen(false); // Close the drawer when it's explicitly closed
        }}
        isOpen={isDrawerOpen} // Use isDrawerOpen state to control drawer visibility
      >
        <DrawerContent
          bg={"brand.100"}
          px={4}
          pt={4}
          pb={5}
          transition="all 0.1s ease"
        >
          <Center
            color={"black"}
            fontWeight={TextStyle.h1.fontWeight}
            fontSize={TextStyle.h1.fontSize}
          >
            Sign Out
          </Center>
          <Center pt={1} color={"black"} fontSize={TextStyle.body2.fontSize}>
            Are you sure you want to sign out?
          </Center>
          <Center>
            <ButtonGroup pt={2} spacing="6">
                {/* <NavLink to={"/login"}> */}
                <Button px={12} onClick={handleSignOut}>
                Continue
              </Button>
                {/* </NavLink> */}
              <Button
                width={"140px"}
                height={"40px"}
                onClick={onClose}
                bg={"brand.200"}
                color={"white"}
                _hover={{ bg: "brand.300" }}
              >
                Cancel
              </Button>
            </ButtonGroup>
          </Center>
        </DrawerContent>
      </Drawer>
    </Slide>
  );
};
