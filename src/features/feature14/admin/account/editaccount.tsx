import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Axios } from '../../../../AxiosInstance'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Radio,
  Stack,
  Image
} from '@chakra-ui/react'

const AccountEditPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  const profilePhotoInputRef = useRef<HTMLInputElement | null>(null) // Define the ref

  const [formData, setFormData] = useState({
    businessName: '',
    description: '',
    phoneNo: '',
    email: '',
    fromTime: new Date(),
    toTime: new Date(),
    category: '',
    restaurantSubcategory: '',
    state: '',
    district: '',
    address: '',
    acceptPeople: '',
    paymentmethod: '',
    photo: '',
    profilePhoto: null as File | null
  })

  const initialFormData = { ...formData } // Save initial state for reset

  const setDescription = (newDescription: string): void => {
    setFormData((prevData) => ({
      ...prevData,
      description: newDescription
    }))
  }

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await Axios.get(`/feature14/accountUpdate/${id}`)
        setFormData((prevData) => ({ ...prevData, ...response.data }))
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    void fetchData()
  }, [id])

  const handleProfilePhotoChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files != null && event.target.files.length > 0) {
      const file: File = event.target.files[0]
      setFormData((prevData) => ({ ...prevData, profilePhoto: file }))
    }
  }

  const handleProfileClick = (): void => {
    // Trigger input file click when profile picture is clicked
    if (profilePhotoInputRef.current != null) {
      profilePhotoInputRef.current.click()
    }
  }

  const handleBusinessNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, businessName: event.target.value })
  }

  const handlePhoneNoChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, phoneNo: event.target.value })
  }

  const handleemailNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, email: event.target.value })
  }

  const handlefromTimeChange = (newDate: Date | null): void => {
    setFormData({ ...formData, fromTime: newDate ?? new Date() })
  }

  const handletoTimeChange = (newDate: Date | null): void => {
    setFormData({ ...formData, toTime: newDate ?? new Date() })
  }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0]
    if (file != null) {
      setFormData({ ...formData, photo: URL.createObjectURL(file) })
    }
  }

  const handleRestaurantSubcategoryChange = (value: string): void => {
    setFormData({ ...formData, restaurantSubcategory: value })
  }

  const handleCategoryChange = (value: string): void => {
    setFormData({ ...formData, category: value })
  }

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, address: event.target.value })
  }

  const handleAcceptPeopleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, acceptPeople: event.target.value })
  }

  const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, paymentmethod: event.target.value })
  }

  const handleFormSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault()

    try {
      // Implement the logic to update the data on the server using Axios
      const response = await Axios.put(`/feature14/account/${id}`, formData)
      console.log('Data updated successfully', response.data)
    } catch (error) {
      console.error('Error updating data:', error)
    }
  }

  const handleReset = (): void => {
    setFormData(initialFormData)
  }

  const customDatePickerStyles = {
    input: {
      backgroundColor: 'white',
      color: 'black',
      border: '1px solid #cbd5e0',
      borderRadius: '0.375rem',
      padding: '0.375rem 0.75rem'
    }
  }

  return (
    <Box p={4} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <form
        onSubmit={(event) => {
          event.preventDefault()
          void handleFormSubmit(event) // Use the `void` operator to handle the Promise
        }}
          >
            <FormControl mt={4}>
              <FormLabel>Profile Photo</FormLabel>
              <Input
                type="file"
                accept="image/*"
                onChange={handleProfilePhotoChange}
                ref={profilePhotoInputRef}
                style={{ display: 'none' }}
              />
              <Box
                position="relative"
                onClick={handleProfileClick}
                cursor="pointer"
                borderRadius="full"
                overflow="hidden"
                boxSize="250px"
              >
                <Image
                  borderRadius="full"
                  boxSize="100%"
                  src={(formData.profilePhoto != null) ? URL.createObjectURL(formData.profilePhoto) : 'https://bit.ly/dan-abramov'}
                  alt="Selected Photo"
                />
              </Box>
            </FormControl>
            <FormLabel>Business Name*</FormLabel>
            <Input
              type="text"
              bg={'white'}
              textColor={'black'}
              value={formData.businessName}
              onChange={handleBusinessNameChange}
              placeholder=" Business name"
            />
            <FormControl mt={4}>
                <FormLabel>Description*</FormLabel>
                    <Textarea
                        bg={'white'}
                        textColor={'black'}
                        value={formData.description}
                        onChange={(e) => { setDescription(e.target.value) }}
                    />
            </FormControl>
            <FormControl mt={4}>
            <FormLabel>Phone No.*</FormLabel>
            <Input
                type="tel" bg={'white'} textColor={'black'}
                value={formData.phoneNo}
                onChange={handlePhoneNoChange}
                placeholder="xxx-xxx-xxxx"
            />
            </FormControl>
            <FormControl mt={4}>
            <FormLabel>Email*</FormLabel>
            <Input
                type="text"bg={'white'} textColor={'black'}
                value={formData.email}
                onChange={handleemailNameChange}
                placeholder="Business Name"
            />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Open Hour*</FormLabel>
              <FormLabel>From</FormLabel>
              <DatePicker
                selected={formData.fromTime}
                onChange={(date) => { handlefromTimeChange(date) }}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                customInput={<Input style={customDatePickerStyles.input} />}
              />
              <FormLabel>To</FormLabel>
              <DatePicker
                selected={formData.toTime}
                onChange={(date) => { handletoTimeChange(date) }}
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
                  isChecked={formData.category === 'club'}
                  onChange={() => { handleCategoryChange('club') }}
                >
                  Club
                </Radio>
                <Radio
                  value="bar"
                  isChecked={formData.category === 'bar'}
                  onChange={() => { handleCategoryChange('bar') }}
                >
                  Bar
                </Radio>
                <Radio
                  value="restaurant"
                  isChecked={formData.category === 'restaurant'}
                  onChange={() => { handleCategoryChange('restaurant') }}
                >
                  Restaurant
                </Radio>
              </Stack>
            </FormControl>

            {formData.category === 'restaurant' && formData.restaurantSubcategory != null && (
                <FormControl mt={4}>
                  <FormLabel>Restaurant Subcategory</FormLabel>
                  <Stack direction="row" spacing={4}>
                    <Radio
                      value="ala-carte"
                      isChecked={formData.restaurantSubcategory === 'ala-carte'}
                      onChange={() => { handleRestaurantSubcategoryChange('ala-carte') }}
                    >
                      A La Carte
                    </Radio>
                    <Radio
                      value="buffet"
                      isChecked={formData.restaurantSubcategory === 'buffet'}
                      onChange={() => { handleRestaurantSubcategoryChange('buffet') }}
                    >
                      Buffet
                    </Radio>
                  </Stack>
                </FormControl>
            )}
            </Box>
        <FormControl mt={4}>
            <FormControl mt={4}>
            <FormLabel>Address</FormLabel>
            <Input
                type="text"bg={'white'} textColor={'black'}
                value={formData.address}
                onChange={ handleAddressChange}
                placeholder=""
            />
            </FormControl>
            <FormControl mt={4}>
            <FormLabel>Number of people that can accept</FormLabel>
            <Input
                type="text"bg={'white'} textColor={'black'}
                value={formData.acceptPeople}
                onChange={handleAcceptPeopleChange}
                placeholder=""
            />
            </FormControl>
            <FormControl mt={4}>
            <FormLabel>Payment Method*</FormLabel>
            <Input
                type="text"bg={'white'} textColor={'black'}
                value={formData.paymentmethod}
                onChange={handlePaymentMethodChange}
                placeholder=""
            />
            </FormControl>
            <FormControl>
              <FormLabel>Photo of Business</FormLabel>
              <Input type="file" accept="image/*" onChange={handleImageChange} />
            </FormControl>

            {(formData.photo != null) && (
              <Box mt={4} position="relative">
                <Image
                  borderRadius="md"
                  boxSize="250px"
                  src={formData.photo}
                  alt="Selected Photo"
                />
              </Box>
            )}
            <Button mt={4} color="white" textColor={'purple'} marginRight={100} borderRadius="lg" type="button" onClick={handleReset}>
              Cancel
            </Button>
            <Button mt={4} bg={'brand.200'} textColor={'white'} type="submit">
              Update
            </Button>
            </FormControl>
        </form>
    </Box>
  )
}

export default AccountEditPage
