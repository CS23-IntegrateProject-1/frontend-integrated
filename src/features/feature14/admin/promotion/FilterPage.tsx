import React, { useState } from 'react'
import {
  Box,
  Button,
  ChakraProvider,
  Checkbox,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton
} from '@chakra-ui/react'

const FilterPage: React.FC = () => {
  const [filters, setFilters] = useState<Record<string, boolean>>({
    'Special Offers/Promotions': false,
    'Special Events': false
  })

  const handleFilterChange = (filter: string): void => {
    setFilters({ ...filters, [filter]: !filters[filter] })
  }

  return (
    <ChakraProvider>
      <Modal isOpen={true} onClose={() => {}}>
        <ModalOverlay />
        <ModalContent>
          <Box border="1px solid #D3D3D3" padding="1" width="100%">
            <ModalHeader
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              Filter By
            </ModalHeader>
          </Box>

          <ModalCloseButton />
          <ModalBody>
            <VStack align="start">
              {Object.keys(filters).map((filter) => (
                <Checkbox
                  iconColor="#5F0DBB"
                  iconSize="1rem"
                  color="#5F0DBB"
                  key={filter}
                  isChecked={filters[filter]}
                  onChange={() => { handleFilterChange(filter) }}
                >
                  {filter}
                </Checkbox>
              ))}
            </VStack>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button
              colorScheme="white"
             color="#5F0DBB"
              variant="outline"
              mr={3}
              onClick={() => {}}
            >
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  )
}

export default FilterPage
