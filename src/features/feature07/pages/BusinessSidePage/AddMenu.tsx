import React from 'react';
import { FormControl, FormLabel, Input, Box, Center, Icon,InputGroup, InputRightElement } from '@chakra-ui/react'; 
import { ButtonComponent } from '../../../../components/buttons/ButtonComponent';
import { Image } from "../../component/ImageUpload/Image";
import { useRef,useState } from 'react';
import { Axios } from '../../../../AxiosInstance';
import { useNavigate, useParams } from 'react-router-dom';
import { useCustomToast } from '../../../../components/useCustomToast';

export const AddMenu = () => {

  const navigate = useNavigate();
  const { venueId } = useParams();
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const toast = useCustomToast();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
  });

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedFile(selectedFile);
    console.log('Selected file:', selectedFile);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataWithFile = new FormData();
    //console.log(formData);
    formDataWithFile.append('name', formData.name);
    formDataWithFile.append('description', formData.description);
    formDataWithFile.append('price', formData.price);
    formDataWithFile.append('menuImage', selectedFile);
    //console.log('Form data with file entries:', Array.from(formDataWithFile.entries()));

    try {
      const response = await Axios.post(`/feature7/addMenu/${venueId}`, formDataWithFile, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Menu added:', response.data);
      toast.success("Menu Added Successfully");
      navigate(`/venue/${venueId}/menubusiness`);
      // Add logic for what happens after successfully adding menu item
    } catch (error) {
      console.error('Error adding menu:', error);
      // Add logic for error handling
    }
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
        text= "Add Menu"
        onClick={handleSubmit}
        />
        </Box>
        </Center>
      </Box>
    </FormControl>
  );
};
