import React from 'react';
import { Select,FormControl, FormLabel, Input, HStack,Box, Center, Icon,InputGroup, InputRightElement, InputLeftElement,VStack,Flex,IconButton} from '@chakra-ui/react'; 
import { ButtonComponent } from '../../../../components/buttons/ButtonComponent';
import { Image } from "../../component/ImageUpload/Image";
import { useRef,useState,useEffect } from 'react';
import { AddIcon, DeleteIcon} from '@chakra-ui/icons'
import { useNavigate,useLocation, useParams } from 'react-router-dom';
import { Axios } from '../../../../AxiosInstance';
import { useQuery } from '@tanstack/react-query';

interface Menu {
    name: string;
  }

  export const AddSetMenu: React.FC = () => {

  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedMenus, setSelectedMenus] = useState<Menu[]>([]);
  const [inputFieldValue, setInputFieldValue] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const {venueId} = useParams();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
  });

  const getMenu = async () => {
    const response = await Axios.get(`/feature7/getMenusByVenueId/${venueId}`);
    const menuData = response.data;
    //console.log(menuData);
    return menuData;
  }

const { data : menuOptions, isLoading, isError } = useQuery(["menuData"], () => getMenu());

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDeleteMenu = (index: number) => {
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
  
  //for image upload
  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedFile(selectedFile);
    console.log('Selected file:', selectedFile);
  };

  //for choose menu
  const handleChooseMenuClick = () => {
    const targetPath = `/venue/${venueId}/choosemenu`;
    console.log('Navigating to:', targetPath);
    navigate(targetPath);
  };
   
  const handleAddSetMenuClick = () => {
    const targetPath = `/venue/${venueId}/menubusiness?section=setmenu`;
    console.log('Navigating to:', targetPath);
    navigate(targetPath);
  };
  
  const handleDropdownChange = (selectedMenuId: string) => {};
 
  const handleMenuSelect = (selectedMenu: Menu) => {
    setSelectedMenus((prevMenus) => [...prevMenus, selectedMenu]);
    setInputFieldValue('');
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
              name='name'
              value={formData.name}
              onChange={handleInputChange}
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
              name='description'
              value={formData.description}
              onChange={handleInputChange}
            />
          </Box>
        </Center>
        {/* <Center>
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
          <AddIcon boxSize={4} onClick={handleChooseMenuClick} />
        </InputLeftElement>
        <Input
          variant="flushed"
          width="307px"
          value={inputFieldValue}
          onChange={(e) => setInputFieldValue(e.target.value)}
        />
      </InputGroup>
    </Box>
        </Center> */}
        <Center>
          <Box>
            <FormLabel>Selected Food in set:</FormLabel>
            <VStack align="start" spacing={2}>
              {/* {selectedMenus?.map((menu, index) => (
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
              ))} */}
            </VStack>
            <InputGroup>
              {/* <InputLeftElement>
                <AddIcon boxSize={4} onClick={handleChooseMenuClick} />
              </InputLeftElement> */}
        <Select
  variant="flushed"
  width="307px"
  placeholder="Select a menu"
  onChange={(e) => handleDropdownChange(e.target.value)}
  styles={{
    control: (styles) => ({
      ...styles,
      backgroundColor: 'brand.300',
      borderColor: 'brand.300',
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      backgroundColor: isSelected ? 'brand.500' : isFocused ? 'brand.400' : 'brand.300',
      color: isSelected ? 'white' : 'black',
    }),
    singleValue: (styles) => ({
      ...styles,
      color: 'black',
    }),
  }}
  
  as="select"
>
  {menuOptions?.map((menu) => (
    <option key={menu.menuId} value={menu.name}>
      {menu.name}
    </option>
  ))}
</Select>

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
              name='price'
              value={formData.price}
              onChange={handleInputChange}
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
        <Box
        position="fixed"
        bottom="4"
        textAlign="center"
        borderRadius="5px">
        <ButtonComponent 
        width={"330px"}
        text= "Add Set Menu"
        onClick={handleAddSetMenuClick}
        />
        </Box>
        </Center>
      </Box>
    </FormControl>
  );
};
