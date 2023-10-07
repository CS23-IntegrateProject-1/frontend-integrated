import {
  Box,
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
import { CloseIcon } from "@chakra-ui/icons";

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
    <Box display={isOpen?"flex":"none"} >
      <CloseIcon onClick={onClose}  />
      <Stack>
        <Box>

        </Box>
        <Box>
          Home
        </Box>
        <Box>
          Home
        </Box>
        <Box>
          Home
        </Box>
        <Box>
          Home
        </Box>
      </Stack>
    </Box>
  );
};
