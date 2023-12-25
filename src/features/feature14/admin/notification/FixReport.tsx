import React from 'react'
import { ChakraProvider, extendTheme, Box, Text, Button } from '@chakra-ui/react'

const theme = extendTheme()

const FixReportPage: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        borderColor="white"
        p="4"
        marginBottom="4"
        width="300px"
        color="white"
      >
        <Text fontSize="md" marginBottom="2">
          Title:
        </Text>
        <Text fontSize="md" marginBottom="2">
          Date: {new Date().toLocaleDateString()}
        </Text>
        <Text fontSize="md" marginBottom="2">
          Time: {new Date().toLocaleTimeString()}
        </Text>
        <Text fontSize="md" marginBottom="2">
          Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
          justo vel ante tincidunt euismod. Nulla facilisi.
        </Text>
      </Box>
      {/* Fixed button */}
      <Button
      position="fixed"
      top="50%"
      left="7%"
      transform="translate(7%, -50%)"
      bg="white"
      color="#A533C8"
      >
        Fixed Button
      </Button>
    </ChakraProvider>
  )
}

export default FixReportPage
