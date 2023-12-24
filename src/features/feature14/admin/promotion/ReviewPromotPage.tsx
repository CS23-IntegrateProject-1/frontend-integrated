import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  ChakraProvider,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  // checkbox
  Select,
  VStack,
  HStack,
  Radio,
  RadioGroup,
  Center
} from '@chakra-ui/react'

const ReviewPromotPage: React.FC = () => {
  // State for form values
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')
  const [specialOffers, setSpecialOffers] = useState<boolean>(false)
  const [specialEvents, setSpecialEvents] = useState<boolean>(false)
  const [advertisementPlan, setAdvertisementPlan] = useState<string>('')
  const [paymentMethod, setPaymentMethod] = useState<string>('')

  // State for uploaded images
  const [images, setImages] = useState<File[]>([])

  // Handle form submission
  const handleSubmit = (): void => {
    // Implement your form submission logic here
    console.log({
      name,
      description,
      startDate,
      endDate,
      specialOffers,
      specialEvents,
      images
    })
  }

  // Handle file input change
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const fileList = event.target.files
    if (fileList !== null) {
      const selectedImages = Array.from(fileList)
      setImages(selectedImages)
    }
  }

  return (
    <ChakraProvider>
      <Box p={4}>
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel textColor={'white'}>Name*</FormLabel>
            <Input type="text" bg={'white'} value={name} onChange={(e) => { setName(e.target.value) }} />
          </FormControl>

          <FormControl>
            <FormLabel textColor={'white'}>Description*</FormLabel>
            <Textarea bg={'white'}
              value={description}
              onChange={(e) => { setDescription(e.target.value) }}
            />
          </FormControl>

          <HStack spacing={4}>
            <FormControl>
              <FormLabel textColor={'white'}>Start Date*</FormLabel>
              <Input bg={'white'}
                type="date"
                value={startDate}
                onChange={(e) => { setStartDate(e.target.value) }}
              />
            </FormControl>

            <FormControl>
              <FormLabel textColor={'white'}>End Date*</FormLabel>
              <Input type="date" bg={'white'} value={endDate} onChange={(e) => { setEndDate(e.target.value) }} />
            </FormControl>
          </HStack>

          <FormControl>
            <FormLabel textColor={'white'}>Type</FormLabel>
            <RadioGroup color={'white'} value={specialEvents ? 'Special Events' : 'Special Offers'} onChange={(value) => {
              if (value === 'Special Events') {
                setSpecialEvents(true)
                setSpecialOffers(false) // Assuming you want to uncheck 'Special Offers'
              } else {
                setSpecialEvents(false)
                setSpecialOffers(true) // Assuming you want to uncheck 'Special Events'
              }
            }}>
                <Radio
                value='Special Offers'
                >
                Special Offers
                </Radio>
                <Radio
                value='Special Events'
                >
                Special Events
                </Radio>
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel textColor={'white'}>Images(mobile & desktop view)</FormLabel>
            <Input bg={'white'}
              type="file"
              multiple
              onChange={handleFileChange}
              accept="image/*"
            />
          </FormControl>
          <FormControl>
            <FormLabel textColor="white">Advertisement Plan</FormLabel>
            <RadioGroup color="white">
            <Radio
              isChecked={advertisementPlan === '100 Baht/week'}
              onChange={() => { setAdvertisementPlan('100 Baht/week') }}
            >
              100 Baht/week
            </Radio>
            <Radio
              isChecked={advertisementPlan === '300 Baht/Month'}
              onChange={() => { setAdvertisementPlan('300 Baht/Month') }}
            >
              300 Baht/Month
            </Radio>
            <Radio
              isChecked={advertisementPlan === '3,600 Baht/Year'}
              onChange={() => { setAdvertisementPlan('3,600 Baht/Year') }}
            >
              3,600 Baht/Year
            </Radio>
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel textColor="white">Payment Method</FormLabel>
            <Select
              placeholder="Select Payment Method"
              value={paymentMethod}
              onChange={(e) => { setPaymentMethod(e.target.value) }}
              bg={'white'}
            >
              <option value="bank1">Bangkok Bank</option>
              <option value="bank2">Bank Asia</option>
              <option value="bank3">Kasikorn</option>
              <option value="bank4">SCB</option>
            </Select>
          </FormControl>
          <Center>
            <VStack w={{ base: '100%', md: '100px' }}>
              <Button mt={4} color="white" textColor="purple" size={{ base: 'sm', md: 'md' }} w='100%' borderRadius="lg" type="submit">
                Reject
              </Button>
              <Button
                as={Link}
                to="/admin/promotion" // Specify the target page
                mt={4}
                w='100%'
                color="white"
                textColor="purple"
                size={{ base: 'sm', md: 'md' }}
                borderRadius="lg"
                onClick={handleSubmit}
              >
                Accept
              </Button>
            </VStack>
          </Center>
        </VStack>
      </Box>
    </ChakraProvider>
  )
}

export default ReviewPromotPage
