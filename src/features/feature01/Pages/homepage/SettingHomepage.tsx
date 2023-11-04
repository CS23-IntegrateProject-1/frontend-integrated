import { Box, VStack, StackDivider, Divider } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { NavLink } from "react-router-dom";
// import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

// const xl = defineStyle({
//     border: "100%x solid",
//     borderRadius: 'lg',
// })

// export const dividerTheme = defineStyleConfig({
//     sizes: { xl },
// })


export const SettingHomepage = () => {

  const links = [
    {title : "Account & Security", to : "/setting/account"},
    {title : "Notification", to : "/setting/notifications"},
    {title : "Privacy & Policy", to : "/setting/privacy-policy"},
    {title : "Terms of Service", to : "/setting/term-of-service"},
    {title : "Help & Support", to : "/setting/help"},
    {title : "About", to : "/setting/about"},
  ];

  return (
    <VStack 
    textStyle={TextStyle.h1.fontSize} 
    fontWeight={TextStyle.h1.fontWeight}
    divider={<Divider />}
    spacing={5}
    align={"stretch"}
  > 
  {/* Generating link for each item in the array */}
    {links.map((link) => (
      <Box>
          <Box  key={link.title} as={NavLink} to={link.to} pl={6}>
          {link.title}
          </Box>
      </Box>
      
    ))}

    {/* Adding blank Box to make the last item at the bottom */}
    <Box></Box>
  </VStack>
  )
}
