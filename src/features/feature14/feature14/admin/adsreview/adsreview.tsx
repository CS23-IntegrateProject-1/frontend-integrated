import React, { useState } from 'react';
import {
  Button,
  Center,
  ChakraProvider,
  CSSReset,
  extendTheme,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const AdsreviewPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePrint = () => {
    // Implement your print logic here
    console.log('Print button clicked');
  };

  const handleSendMail = () => {
    // Implement your send mail logic here
    console.log('Send Mail button clicked');
  };

  return (
    <ChakraProvider>
      <CSSReset />
      <Center>
        <Link to="/admin/approval"> {/* Replace 'S00001' with the actual approvalId */}
          <Button
            onClick={() => setIsOpen(true)}
            bg="#A533C8"
            color="white"
          >
            Approve
          </Button>
        </Link>
        <Link to="/admin/approval/:approvalId/reject"> {/* Replace 'S00001' with the actual approvalId */}
          <Button
            onClick={() => setIsOpen(true)}
            bg="#FFFFFF"
            color="#A533C8"
          >
            Reject
          </Button>
        </Link>
      </Center>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent bg="#DEBEF6">
          <ModalHeader>The request has been approved.</ModalHeader>
          <ModalCloseButton />
          <ModalFooter>
            <Button color="#A533C8" bg="white" mr={2} onClick={handlePrint}>
              Print
            </Button>
            <Button bg="#A533C8" color="white" onClick={handleSendMail}>
              Send Mail
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};

export default AdsreviewPage;