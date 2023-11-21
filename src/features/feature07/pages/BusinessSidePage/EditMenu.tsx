import React, { useRef, useState } from 'react';
import { FormControl, FormLabel, Input, Box, Center, Icon, InputGroup, InputRightElement, HStack } from '@chakra-ui/react';
import { ButtonComponent } from '../../../../components/buttons/ButtonComponent';
import { Image } from "../../component/ImageUpload/Image";
import {useNavigate} from 'react-router-dom';
export const EditMenu = () => {

  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedFile(selectedFile);
    console.log('Selected file:', selectedFile);
  };

  const handleDeleteAndUpdate = () => {
    const targetPath = `/venue/:venueId/menubusiness?section=allmenu`;
    console.log('Navigating to:', targetPath);
    navigate(targetPath);
  };

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
          <Box position="relative">
            <FormLabel>Upload Image</FormLabel>
            <InputGroup>
              <Input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{
                  position: 'absolute',
                  width: '1px',
                  height: '1px',
                  padding: '0',
                  margin: '-1px',
                  overflow: 'hidden',
                  clip: 'rect(0,0,0,0)',
                  border: '0',
                }}
              />
              <Input
                variant="outline"
                width="250px"
                height="130px"
                padding="0px 12px 0px 12px"
                marginBottom="10px"
                borderColor="brand.300"
                bgColor="brand.300"
                style={{
                  backgroundImage: selectedFile ? `url(${URL.createObjectURL(selectedFile)})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
              <InputRightElement
                width="45%"
                height="185%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                onClick={handleImageClick}
              >
                <Icon as={Image} color="currentColor" aria-label="Open Cart" boxSize={40} />
              </InputRightElement>
            </InputGroup>
          </Box>
        </Center>
        <Center>
        <HStack marginTop="2" bottom="4" position="fixed">
          <Box marginRight="4">
            <ButtonComponent
              width={"150px"}
              text="Delete"
              bgColor="white"
              textColor="brand.200"
              onClick={handleDeleteAndUpdate}
            />
          </Box>
          <Box>
            <ButtonComponent
              width={"150px"}
              text="Update"
              onClick={handleDeleteAndUpdate}
            />
          </Box>
        </HStack>
        </Center>
      </Box>
    </FormControl>
  );
};
