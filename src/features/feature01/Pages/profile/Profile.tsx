import { Box, Text, Flex, Avatar, Input, useDisclosure} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { ButtonComponent } from "../../../../components/buttons/ButtonComponent";

export const Profile = () => {
 
  return (
      <Box>
          {/* white bg box */}
          <Box  zIndex={-2} bg={'white'} w={'200'} h={'120'}></Box>
          <Flex zIndex={-1} mt={-14} alignItems={'center'} justifyContent={'center'}>
                <Box  position={'relative'} cursor={'pointer'}>
                  <Avatar size={'xl'} src='https://bit.ly/broken-link' />
                  {/* button to change image */}
                  <Box  position={'absolute'} top={51} left={20}>
                  
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="11" fill="white" stroke="#A0AEC0" stroke-width="2"/>
                      <path d="M13.3733 10.0133L13.9867 10.6267L7.94667 16.6667H7.33333V16.0533L13.3733 10.0133ZM15.7733 6C15.6067 6 15.4333 6.06667 15.3067 6.19333L14.0867 7.41333L16.5867 9.91333L17.8067 8.69333C17.8685 8.63166 17.9175 8.5584 17.951 8.47775C17.9844 8.3971 18.0016 8.31065 18.0016 8.22333C18.0016 8.13602 17.9844 8.04957 17.951 7.96892C17.9175 7.88827 17.8685 7.81501 17.8067 7.75333L16.2467 6.19333C16.1133 6.06 15.9467 6 15.7733 6ZM13.3733 8.12667L6 15.5V18H8.5L15.8733 10.6267L13.3733 8.12667Z" fill="#A0AEC0"/>
                    </svg>
                  </Box>
                </Box>
                
            </Flex>
            
            
      </Box>
  )
}