import React, { useState } from 'react'
import {
  Button,
  ChakraProvider,
  CSSReset,
  extendTheme,
  FormControl,
  Textarea,
  Center,
  Text
} from '@chakra-ui/react'

const customTheme = extendTheme({
  // Define your custom color scheme or styles here
  // You can customize colors, fonts, and other styles
})

const RejectPage: React.FC = () => {
  const [feedback, setFeedback] = useState('')

  const handleSendFeedback = (): void => {
    // Implement your feedback submission logic here
    console.log('Feedback submitted:', feedback)
  }

  return (
    <ChakraProvider theme={customTheme}>
        <CSSReset />
        <Center>
        <Text fontSize="xl" fontWeight="semibold" mb={5} color="white">
            Why is the request rejected?
        </Text>
        </Center>
        <Center>
        <FormControl mt={4}>
        <Textarea
        bg={'white'} textColor={'black'} height="200px"width="300px"
                placeholder="Description"
                value={feedback}
                onChange={(e) => { setFeedback(e.target.value) }}
                />
        </FormControl>
        </Center>
        <Center mt={4}>
        <Button color="white" bg="#A533C8" onClick={handleSendFeedback}>
            Send Feedback
        </Button>
        </Center>
    </ChakraProvider>
  )
}

export default RejectPage
