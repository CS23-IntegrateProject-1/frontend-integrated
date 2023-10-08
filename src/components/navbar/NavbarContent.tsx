import {
  Box,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { FC } from "react";
import { CloseIcon, BellIcon, SettingsIcon } from "@chakra-ui/icons";

interface NavbarContentProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const NavbarContent: FC<NavbarContentProps> = ({
  isOpen,
  onOpen,
  onClose,
}) => {
  return (
    <Box display={isOpen ? "flex" : "none"} flexDir={"column"} justifyContent={"space-around"} alignItems={"center"} width={"100vw"} height={"100vh"} padding={"32px"}>
      <IconButton aria-label='Close Navigation Bar' variant={"unstyled"} alignSelf={"flex-end"} onClick={onClose} icon={<CloseIcon boxSize={6} />} />
      <Stack spacing={"32px"} align={"center"} textAlign={"center"}>
        <Box width={"100px"} height={"100px"} bg={"pink"}>
        </Box>
        <Box>
          Home
        </Box>
        <Box>
          Reservations
        </Box>
        <Box>
          Saved Places
        </Box>
        <Box>
          Promotion
        </Box>
        <Box>
          Membership
        </Box>
        <IconButton aria-label='Notification Page' variant={"unstyled"} icon={<BellIcon boxSize={8} />} />
      </Stack>
      <IconButton aria-label='Setting Page' variant={"unstyled"} icon={<SettingsIcon alignSelf={"flex-end"} boxSize={6} />} />
    </Box>
  );
};
