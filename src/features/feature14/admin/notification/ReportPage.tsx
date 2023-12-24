import React, { useState, useEffect } from 'react'
import { Box, ChakraProvider, extendTheme, Text, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import axios from 'axios'

interface Report {
  foodName: string
  problem: string
}

// Create a custom theme if needed
const theme = extendTheme(/* Your custom theme here */)

// Function to get the current time
const getCurrentTime = (): string => {
  const currentTime = new Date()
  return currentTime.toLocaleTimeString()
}

const Reportbox: React.FC<Report> = ({ foodName, problem }) => {
  return (
    <Link as={RouterLink} to={`/admin/notification/${foodName}`}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        marginBottom="2"
        fontSize="lg"
        borderBottom="1px solid white"
        paddingY="2"
      >
        <Box display="flex" flexDirection="row">
          <Text color="white" fontSize="xl" marginRight="4">
            {foodName}
          </Text>
          <Text color="white" fontSize="sm">
            {problem}
          </Text>
        </Box>
        <Box display="flex" flexDirection="column">
          <Text color="white">{getCurrentTime()}</Text>
        </Box>
      </Box>
    </Link>
  )
}

// Main component
const ReportPage: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([])

  useEffect(() => {
    axios.get('/api/reports')
      .then(response => {
        setReports(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, []) // Empty dependency array ensures that the effect runs only once

  return (
    <ChakraProvider theme={theme}>
      <Box>
        {/* Display food name, problem, and time in separate boxes with no left and right borders */}
        {reports.map((report, index) => (
          <Reportbox key={index} {...report} />
        ))}
      </Box>
    </ChakraProvider>
  )
}

export default ReportPage
