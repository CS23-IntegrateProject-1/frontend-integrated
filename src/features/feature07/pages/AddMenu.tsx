import React from 'react';
import { FormControl, FormLabel, Input, Box, Center } from '@chakra-ui/react';

interface AddMenuProps {}

export const AddMenu: React.FC<AddMenuProps> = () => {
  return (
    <FormControl>
      <Box display="flex" flexDirection="column">
        <Center>
          <Box>
            <FormLabel>Food name</FormLabel>
            <Input
              size="sm"
              variant="outline"
              width="307px"
              height="32px"
              padding="0px 12px 0px 12px"
              borderRadius="4px"
              borderColor="brand.300"
              bgColor="brand.300"
              marginBottom="10px"
              color="gray.300"
            />
          </Box>
        </Center>

        <Center>
          <Box>
            <FormLabel>Description</FormLabel>
            <Input
              variant="outline"
              width="307px"
              height="60px"
              marginBottom="10px"
              padding="0px 12px 0px 12px"
              borderColor="brand.300"
              bgColor="brand.300"
            />
          </Box>
        </Center>

        <Center>
          <Box>
            <FormLabel>Price</FormLabel>
            <Input
              size="sm"
              variant="outline"
              width="307px"
              height="32px"
              padding="0px 12px 0px 12px"
              borderRadius="4px"
              borderColor="brand.300"
              bgColor="brand.300"
              marginBottom="10px"
            />
          </Box>
        </Center>

        <Center>
          <Box>
            <FormLabel>Upload Image</FormLabel>
            <Input
              variant="outline"
              width="250px" // Adjust width as needed
              height="130px"
              padding="0px 12px 0px 12px"
              marginBottom="10px"
              borderColor="brand.300"
              bgColor="brand.300"
            />
          </Box>
        </Center>
      </Box>
    </FormControl>
  );
};
