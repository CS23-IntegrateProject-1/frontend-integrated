import { useEffect, useRef, useState, ChangeEvent } from 'react';
import { FormControl, FormLabel, Input, Box, Center, Icon, InputGroup, InputRightElement, HStack } from '@chakra-ui/react';
import { ButtonComponent } from '../../../../components/buttons/ButtonComponent';
import { Image } from "../../component/ImageUpload/Image";
import {useNavigate, useParams} from 'react-router-dom';
import { Axios } from '../../../../AxiosInstance';
import { useQuery } from '@tanstack/react-query';
import { useCustomToast } from "../../../../components/useCustomToast";
import { FullPageLoader } from '../../../../components/Loader/FullPageLoader';

const getMenuItem = async (menuid: string) => {
  const response = await Axios.get(`/feature7/getMenuById/${menuid}`);
  return response.data;
};

export const EditMenu = () => {

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const navigate = useNavigate();
  const toast = useCustomToast();
  const { venueId, menuid } = useParams();
  const [editFormData, setEditFormData] = useState({
    name: '',
    description: '',
    price: '',
  });
  
  const { data: menuData, isLoading, isError } = useQuery(['menuItem', menuid], () =>{
    if (menuid !== undefined) {
      return getMenuItem(menuid);
    }return Promise.reject(new Error('menuid is undefined'));
  } );
  console.log(menuData);
  useEffect(() => {
    if (menuData) {
      setEditFormData({
        name: menuData.name,
        description: menuData.description,
        price: menuData.price,
      });
    }
  }, [menuData]);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] ? event.target.files?.[0] : null;
    setSelectedFile(selectedFile);
    console.log('Selected file:', selectedFile);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append('name', editFormData.name);
    formData.append('description', editFormData.description);
    formData.append('price', editFormData.price);
    if (selectedFile) {
      formData.append('menuImage', selectedFile);
    }

    try {
      const response = await Axios.post(`/feature7/editMenu/${menuid}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Menu edited:', response.data);
      toast.success("Menu Edited");
      const targetPath = `/venue/${venueId}/bmenudetail/Menu/${menuid}`;
      navigate(targetPath);
    } catch (error) {
        console.error('Error editing menu:', error);
        // Add logic for error handling
      }
  };

  if (isLoading) {
    return <FullPageLoader />
  }
  if(isError){
    return <div>Something went wrong</div>
  }
  
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
              value={editFormData.name}
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
              value={editFormData.description}
              onChange={handleInputChange}
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
              name='price'
              value={editFormData.price}
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
                  backgroundImage: selectedFile ? `url(${URL.createObjectURL(selectedFile)})` : `url(${import.meta.env.VITE_BACKEND_URL}${menuData?.image})`,
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
              text="Cancel"
              bgColor="white"
              textColor="brand.200"
              // onClick={() => navigate(`/venue/${venueId}/bmenudetail/Menu/${menuid}`)}
              onClick={() => navigate(`/venue/${venueId}/menubusiness`)}
            />
          </Box>
          <Box>
            <ButtonComponent
              width={"150px"}
              text="Update"
              onClick={handleUpdate}
            />
          </Box>
        </HStack>
        </Center>
      </Box>
    </FormControl>
  );
};
