import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react';

interface SortingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SortingModal: React.FC<SortingModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={true} closeOnEsc={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center" color="black">
          Sort By
        </ModalHeader>
        <ModalCloseButton color="black" />
        <ModalBody textAlign="center" display="flex" flexDirection="column" alignItems="center">
          <Button colorScheme="purple" onClick={() => console.log('Sort A to Z')} mb={2}>
            A to Z
          </Button>
          <Button colorScheme="purple" onClick={() => console.log('Sort Z to A')} mb={2}>
            Z to A
          </Button>
          <Button colorScheme="purple" onClick={onClose}>
            Close
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SortingModal;
