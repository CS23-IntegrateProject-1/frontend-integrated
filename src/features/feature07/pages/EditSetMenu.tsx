import React from 'react';
import { FormControl, FormLabel, Input, HStack,Box, Center, Icon,InputGroup, InputRightElement, InputLeftElement,VStack,Flex,IconButton} from '@chakra-ui/react'; 
import { ButtonComponent } from '../../../components/buttons/ButtonComponent';
import { Image } from "../component/ImageUpload/Image";
import { useRef,useState,useEffect } from 'react';
import { AddIcon, DeleteIcon} from '@chakra-ui/icons'
import { useNavigate,useLocation } from 'react-router-dom';

interface Menu {
    name: string;
  }
  const placeholderMenus: Menu[] = [
    { name: 'Menu 1' },
    { name: 'Menu 2' },
  ];
  export const EditSetMenu: React.FC = () => {

  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedMenus, setSelectedMenus] = useState<Menu[]>([]);
  const [inputFieldValue, setInputFieldValue] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleDeleteMenu = (index) => {
    const updatedMenus = [...selectedMenus];
    updatedMenus.splice(index, 1);
    setSelectedMenus(updatedMenus);
  };

  useEffect(() => {
    console.log('Location state:', location.state);
    if (location.state && location.state.selectedMenus) {
      console.log('Selected Menus:', location.state.selectedMenus);
      setSelectedMenus(location.state.selectedMenus);
    }
  }, [location.state]);
  

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedFile(selectedFile);
    console.log('Selected file:', selectedFile);
  };

  const handleAddMenuClick = () => {
    const targetPath = '/venue/:venueId/choosemenu';
    console.log('Navigating to:', targetPath);
    navigate(targetPath);
  };
   
    const handleDeleteAndUpdate = () => {
    const targetPath = `/venue/:venueId/menubusiness?section=setmenu`;
    console.log('Navigating to:', targetPath);
    navigate(targetPath);
  };

  useEffect(() => {
    setSelectedMenus(placeholderMenus);
  }, []);

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
      <FormLabel>Selected Food in set:</FormLabel>
      <VStack align="start" spacing={2}>
        {selectedMenus.map((menu, index) => (
            <Box key={index}>
            <HStack spacing={2} align="center">
                <Box>{menu.name}</Box>
                <DeleteIcon
                ml={60}
                boxSize={4}
                aria-label={`Delete ${menu.name}`}
                onClick={() => handleDeleteMenu(index)}
                />
            </HStack>
            </Box>
        ))}
        </VStack>

      <InputGroup>
        <InputLeftElement>
          <AddIcon boxSize={4} onClick={handleAddMenuClick} />
        </InputLeftElement>
        <Input
          variant="flushed"
          width="307px"
          value={inputFieldValue}
          onChange={(e) => setInputFieldValue(e.target.value)}
        />
      </InputGroup>
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
