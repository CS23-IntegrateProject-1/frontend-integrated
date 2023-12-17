import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Checkbox, Button, Stack } from '@chakra-ui/react';

const textColor = '#ffffff'; // สีข้อความ
const checkboxColor = '#763FAF'; // สีกล่องเลือก


interface FilteringModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilteringModal: React.FC<FilteringModalProps> = ({ isOpen, onClose }) => {
  const [options, setOptions] = useState<{ [key: string]: boolean }>({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
  });

  const handleOptionChange = (option: string) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));
  };

  const handleApplyFilter = () => {
    // Handle applying filter based on selected options
    console.log('Selected options:', options);
    // Add your filter logic here
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent color="black">
        <ModalHeader>Filter By</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={2}>
          <Checkbox
            isChecked={options.option1}
            onChange={() => handleOptionChange('option1')}
            colorScheme="purple"
            color={checkboxColor}
          >
            Restaurant
          </Checkbox>
            <Checkbox isChecked={options.option2} onChange={() => handleOptionChange('option2')} colorScheme="purple"
            color={checkboxColor}>
              Club
            </Checkbox>
            <Checkbox isChecked={options.option3} onChange={() => handleOptionChange('option3')} colorScheme="purple"
            color={checkboxColor}>
              Bar
            </Checkbox>
            <Checkbox isChecked={options.option4} onChange={() => handleOptionChange('option4')} colorScheme="purple"
            color={checkboxColor}>
              Loyal Customer
            </Checkbox>
            <Checkbox isChecked={options.option5} onChange={() => handleOptionChange('option5')} colorScheme="purple"
            color={checkboxColor}>
              Normal Customer
            </Checkbox>
          </Stack>
        </ModalBody>
        <ModalFooter>
        <Button
          colorScheme="purple"
          mr={3}
          onClick={handleApplyFilter}
          backgroundColor={checkboxColor} // กำหนดสีพื้นหลังของ Button
          _hover={{ backgroundColor: '#5F0DBB' }} // กำหนดสีเมื่อโฮเวอร์
          _active={{ backgroundColor: '#5F0DBB' }} // กำหนดสีเมื่อกด
        >
          Done
        </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FilteringModal;
