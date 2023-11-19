import React, {useState} from "react";
import { extendTheme, Box, FormControl, FormLabel, Input,
  Textarea,Select, Button,Checkbox,CheckboxGroup, Stack,
ChakraProvider,Container,MenuButton, MenuItem, MenuList, Menu  } from "@chakra-ui/react";
 import { ChevronDownIcon } from "@chakra-ui/icons"


// const paymentMethodOptions = [
//   'Credit Card',
//   'Debit Card',
//   'PayPal',
//   'Bank Transfer',
//   // Add more payment method options here
// ];

// const customTheme = extendTheme({
//   styles: {
//     global: {
//       'html, body': {
//         height: '100%',
//       },
//     },
//   },
// });
const handleProfilePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  if (event.target.files && event.target.files.length > 0) {
    setProfilePhoto(event.target.files[0]);
  }
};
const handleImageChange = (event) => {
    const file = event.target.files[0];
    // Do something with the selected file, like uploading it to a server
    // For now, just set it to state to display a preview
    setSelectedImage(URL.createObjectURL(file));
  };
const paymentMethodOptions = [
    'Credit Card',
    'Debit Card',
    'PayPal',
    'Bank Transfer',
    // Add more payment method options here
  ];

const customTheme = extendTheme({
    styles: {
      global: {
        'html, body': {
          height: '100%',
        },
      },
    },
  }); 

export const AccountEditPage: React.FC = () => {
  const [businessName, setBusinessName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [phoneNo, setPhoneNo] = useState<string>("");
  const [email, setemailName] = useState<string>("");
  const [fromTime, setFromTime] = useState<string>("");
  const [toTime, setToTime] = useState<string>("");
  const [category, setCategory] = useState<string[]>([]);
  const [state, setState] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [acceptPeople, setAcceptPeople] = useState<string>("");
  const [paymentmethod, setPaymentMethod] = useState<string>("");
  const [photo, setPhoto] = useState<string>("");

  const handleBusinessNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBusinessName(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  const handlePhoneNoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNo(event.target.value);
  };
  const handleemailNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setemailName(event.target.value);
  };

  const handleFromTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFromTime(event.target.value);
  };

  const handleToTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setToTime(event.target.value);
  };

  const handleCategoryChange = (newCategories: string[]) => {
    setCategory(newCategories);
  };
  const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };
  const handleDistrictChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDistrict(event.target.value);
  };
  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  const handleAcceptPeopleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptPeople(event.target.value);
  };

  const handlepaymentmethodChange = (
    event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoto(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
  };

  return (
    <Box p={4} color="white">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Business Name*</FormLabel>
          <Input
            type="text" bg={"white"} textColor={"black"}
            value={businessName}
            onChange={handleBusinessNameChange}
            placeholder=" Business name" text-color={"black"}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Description*</FormLabel>
          <Textarea
          bg={"white"} textColor={"black"}
            value={description}
            onChange={handleDescriptionChange}
            placeholder=""
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Phone No.*</FormLabel>
          <Input
            type="tel" bg={"white"} textColor={"black"}
            value={phoneNo}
            onChange={handlePhoneNoChange}
            placeholder="xxx-xxx-xxxx"
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Email*</FormLabel>
          <Input
            type="text"bg={"white"} textColor={"black"}
            value={email}
            onChange={handleemailNameChange}
            placeholder="Business Name"
          />
        </FormControl>

        {/* New form fields for editing account information */}
        <FormControl mt={4}>
          <FormLabel>From Time*</FormLabel>
          <Select value={fromTime} onChange={handleFromTimeChange}>
            <option value=""></option>
            {/* Add time options for "From" */}
          </Select>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>To Time*</FormLabel>
          <Select value={toTime} onChange={handleToTimeChange}>
            <option value=""></option>
            {/* Add time options for "To" */}
          </Select>
        </FormControl>
        <Box >
        <FormControl mt={4}>
          <FormLabel>Category</FormLabel>
          <CheckboxGroup value={category} onChange={handleCategoryChange}>
            <Stack direction="row" spacing={4}>
              <Checkbox value="club">Club</Checkbox>
              <Checkbox value="bar">Bar</Checkbox>
              <Checkbox value="restaurant">Restaurant</Checkbox>
            </Stack>
          </CheckboxGroup>
        </FormControl>
        </Box>

        <FormControl mt={4}>
          <FormLabel>State/Province*</FormLabel>
          <Input
            type="text"
            bg={"white"}
            textColor={"black"}
            value={state}
            onChange={handleStateChange}
            placeholder=""
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>District*</FormLabel>
          <Input
            type="text"
            bg={"white"}
            textColor={"black"}
            value={district}
            onChange={handleDistrictChange}
            placeholder=""
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Address*</FormLabel>
          <Input
            type="text"
            bg={"white"}
            textColor={"black"}
            value={address}
            onChange={handleAddressChange}
            placeholder=""
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Number of people that can accept</FormLabel>
          <Input
            type="text"bg={"white"} textColor={"black"}
            value={acceptPeople}
            onChange={handleAcceptPeopleChange}
            placeholder=""
          />
        {/* </FormControl>
        <FormControl mt={4}>
          <FormLabel>Payment Method*</FormLabel>
          <Input
            type="text"bg={"white"} textColor={"black"}
            value={paymentmethod}
            onChange={handlePaymentMethodChange}
            placeholder=""
          /> */}
           <ChakraProvider theme={customTheme}>
      <Container centerContent>
        <FormControl mt={4}>
          <FormLabel htmlFor="paymentmethod">Payment Method*</FormLabel>
          <Select
          id="paymentmethod"
                value={paymentmethod}
                onChange={handlepaymentmethodChange}
                placeholder="Select a payment method"
            
          >
            {paymentMethodOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </FormControl>
        <Box>
          <p>Selected Payment Method: {paymentmethod}</p>
        </Box>
      </Container>
      <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
        {isOpen ? 'Close' : 'Open'}
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem onClick={() => alert('Kagebunshin')}>Create a Copy</MenuItem>
      </MenuList>
    </>
  )}
</Menu>
    </ChakraProvider>




        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Photo of Business</FormLabel>
          <Input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
            />
        </FormControl>
         <Button mt={4} color="white"textColor={"purple"} marginRight={100} borderRadius="lg" type="submit">
          Cancel
        </Button>
        <Button mt={4} bg={"brand.200"} textColor={"white"}type="submit">
        Submit
        </Button>
      </form>
    </Box>
  );
};

export default AccountEditPage;