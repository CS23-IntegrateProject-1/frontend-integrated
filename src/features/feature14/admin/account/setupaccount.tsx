import React,{useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { Box, Flex, FormControl, FormLabel, Input,Textarea, Button, Radio, Stack, Image } from "@chakra-ui/react";

const placeholderImage = "https://media.gettyimages.com/id/1295387240/photo/delicious-meal.jpg?s=612x612&w=gi&k=20&c=MVcagVTGWtQKWS7w6OwjxJMH8RUkMr7SFwyWYHfAKSQ=";

 export const AccountSetupPage: React.FC = () => {
  const [businessName, setBusinessName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [phoneNo, setPhoneNo] = useState<string>("");
  const [email, setemailName] = useState<string>("");
  const [fromTime, setFromTime] = useState<string>("");
  const [toTime, setToTime] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [restaurantSubcategory, setRestaurantSubcategory] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [acceptPeople, setAcceptPeople] = useState<string>("");
  const [paymentmethod, setPaymentMethod] = useState<string>("");
  const [photo, setPhoto] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const initialFormData = {
    businessName: "",
    description: "",
    phoneNo: "",
    email: "",
    fromTime: "",
    toTime: "",
    category: [],
    state: "",
    district: "",
    address: "",
    acceptPeople: "",
    paymentmethod: "",
    photo: "",
    profilePhoto: null,
  };

  const handleReset = () => {
    setBusinessName(initialFormData.businessName);
    setDescription(initialFormData.description);
    setPhoneNo(initialFormData.phoneNo);
    setemailName(initialFormData.email);
    setFromTime(initialFormData.fromTime);
    setToTime(initialFormData.toTime);
    setCategory(initialFormData.category);
    setState(initialFormData.state);
    setDistrict(initialFormData.district);
    setAddress(initialFormData.address);
    setAcceptPeople(initialFormData.acceptPeople);
    setPaymentMethod(initialFormData.paymentmethod);
    setPhoto(initialFormData.photo);
    setProfilePhoto(initialFormData.profilePhoto);
    setSelectedImage(null); // Reset the selected image as well
  };
  
  const customDatePickerStyles = {
    input: {
      backgroundColor: "white",
      color: "black",
      border: "1px solid #cbd5e0",
      borderRadius: "0.375rem",
      padding: "0.375rem 0.75rem",
    },
  };

  const handleProfilePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setProfilePhoto(event.target.files[0]);
    }
  };

  const handleProfilePhotoClick = () => {
    // Trigger the click event of the file input when the profile photo is clicked
    if (profilePhotoInputRef.current) {
      profilePhotoInputRef.current.click();
    }
  };

  const profilePhotoInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleBusinessNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBusinessName(event.target.value);
  };

  const handlePhoneNoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNo(event.target.value);
  };
  const handleemailNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setemailName(event.target.value);
  };
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
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

  const handlePaymentMethodChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentMethod(event.target.value);
  };

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoto(event.target.value);
  };

  const handleRestaurantSubcategoryChange = (newSubcategory: string) => {
    setRestaurantSubcategory(newSubcategory);
  };
  
  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
  
    // If the selected category is "Restaurant", reset the subcategory
    if (newCategory === "restaurant") {
      setRestaurantSubcategory("");
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append('businessName', businessName);
      formData.append('description', description);
      formData.append('phoneNo', phoneNo);
      formData.append('email', email);
      formData.append('fromTime', fromTime);
      formData.append('toTime', toTime);
  
      // Append checkboxes (assuming category is an array of strings)
      formData.append('category', category);
        if (category === 'restaurant') {
          formData.append('restaurantSubcategory', restaurantSubcategory);
        }
  
      formData.append('state', state);
      formData.append('district', district);
      formData.append('address', address);
      formData.append('acceptPeople', acceptPeople);
      formData.append('paymentmethod', paymentmethod);
  
      // Append profile photo (if any)
      if (profilePhoto) {
        formData.append('profilePhoto', profilePhoto);
      }
  
      // Append business photos (assuming 'photo' is an array of files)
      if (photo && photo.length > 0) {
        photo.forEach((businessPhoto, index) => {
          formData.append(`businessPhotos[${index}]`, businessPhoto);
        });
      }
  
      const response = await axios.post(import.meta.env.VITE_BACKEND_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log('Response from the server:', response.data);
  
      // Optionally, you can handle success and reset the form
      handleReset();
    } catch (error) {
      console.error('Error while submitting data:', error);
      // Handle error accordingly, e.g., show an error message to the user
    }
  };

  return (
    <Box p={4} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <form onSubmit={handleSubmit}>
            {/* ... (other form controls) */}

            <FormControl mt={4}>
            <FormLabel>Profile Photo</FormLabel>
              <Input
                type="file"
                accept="image/*"
                onChange={handleProfilePhotoChange}
                ref={profilePhotoInputRef}
                style={{ display: 'none' }} // Hide the file input
              />
              <Image
                mt={4}
                borderRadius="full"
                boxSize="150px"
                src={profilePhoto ? URL.createObjectURL(profilePhoto) : "https://bit.ly/dan-abramov"}
                alt="Profile Photo"
                onClick={handleProfilePhotoClick}
                cursor="pointer"
                mx="auto"
                title="Edit"
              />
            <FormLabel>Business Name*</FormLabel>
            <Input
                type="text" bg={"white"} textColor={"black"}
                value={businessName}
                onChange={handleBusinessNameChange}
                placeholder=" Business name" text-color={"black"}
            />
            <FormControl mt={4}>
                <FormLabel>Description*</FormLabel>
                    <Textarea
                        bg={"white"}
                        textColor={"black"}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
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
            <FormControl mt={4}>
              <FormLabel>Open Hour*</FormLabel>
              <FormLabel>From</FormLabel>
              <DatePicker
                selected={fromTime}
                onChange={(date) => setFromTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                customInput={<Input style={customDatePickerStyles.input} />}
              />
              <FormLabel>To</FormLabel>
              <DatePicker
                selected={toTime}
                onChange={(date) => setToTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                customInput={<Input style={customDatePickerStyles.input} />}
              />
            </FormControl>
            <Box >
            <FormControl mt={4}>
              <FormLabel>Category</FormLabel>
              <Stack direction="row" spacing={4}>
                <Radio
                  value="club"
                  isChecked={category === "club"}
                  onChange={() => handleCategoryChange("club")}
                >
                  Club
                </Radio>
                <Radio
                  value="bar"
                  isChecked={category === "bar"}
                  onChange={() => handleCategoryChange("bar")}
                >
                  Bar
                </Radio>
                <Radio
                  value="restaurant"
                  isChecked={category === "restaurant"}
                  onChange={() => handleCategoryChange("restaurant")}
                >
                  Restaurant
                </Radio>
              </Stack>
            </FormControl>

            {category === "restaurant" && (
              <FormControl mt={4}>
                <FormLabel>Restaurant Subcategory</FormLabel>
                <Stack direction="row" spacing={4}>
                  <Radio
                    value="ala-carte"
                    isChecked={restaurantSubcategory === "ala-carte"}
                    onChange={() => handleRestaurantSubcategoryChange("ala-carte")}
                  >
                    A La Carte
                  </Radio>
                  <Radio
                    value="buffet"
                    isChecked={restaurantSubcategory === "buffet"}
                    onChange={() => handleRestaurantSubcategoryChange("buffet")}
                  >
                    Buffet
                  </Radio>
                </Stack>
              </FormControl>
            )}
            </Box>

        <FormControl mt={4}>
            <FormLabel>State/Province*</FormLabel>
            <Input
                type="text"bg={"white"} textColor={"black"}
                value={state}
                onChange={handleStateChange}
                placeholder=""
            />
            </FormControl>   
            {/* <Button mt={4} colorScheme="teal" type="submit"> */}
            {/* Save Account */}
            {/* </Button> */}
        
            <FormControl mt={4}>
            <FormLabel>District*</FormLabel>
            <Input
                type="text"bg={"white"} textColor={"black"}
                value={district}
                onChange={handleDistrictChange}
                placeholder=""
            />
            </FormControl>
            <FormControl mt={4}>
            <FormLabel>Address</FormLabel>
            <Input
                type="text"bg={"white"} textColor={"black"}
                value={address}
                onChange={ handleAddressChange}
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
            </FormControl>
            <FormControl mt={4}>
            <FormLabel>Payment Method*</FormLabel>
            <Input
                type="text"bg={"white"} textColor={"black"}
                value={paymentmethod}
                onChange={handlePaymentMethodChange}
                placeholder=""
            />
            </FormControl>
            <FormControl>
              <FormLabel>Photo of Business</FormLabel>
              <Input type="file" accept="image/*" onChange={handleImageChange} />
            </FormControl>

            {selectedImage && (
              <Box mt={4} position="relative">
                <Image
                  borderRadius="md"
                  boxSize="250px"
                  src={selectedImage}
                  alt="Selected Photo"
                />
              </Box>
            )}
            <Button mt={4} color="white" textColor={"purple"} marginRight={100} borderRadius="lg" type="button" onClick={handleReset}>
              Cancel
            </Button>
            <Button mt={4} bg={"brand.200"} textColor={"white"} type="submit">
              Submit
            </Button>
            </FormControl>
        </form>
    </Box>
  );
};

export default AccountSetupPage;