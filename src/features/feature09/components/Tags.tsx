import React from 'react'
import { Box ,Text} from '@chakra-ui/react'

interface Name {
    tag_text : string
}


function Tags(props : Name) {
    
  return (
    <>
     <Box 
     className='Topic' 
     w="144px" 
     h="33px" 
     backgroundColor="#5F0DBB"
     borderRadius="5px"
     display="flex"
     justifyContent="center"
     >
    <Text margin="1">{props.tag_text}</Text>
     </Box>
    </>
  )
}

export default Tags