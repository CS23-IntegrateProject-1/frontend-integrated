import { Box, VStack, StackDivider} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { NavLink } from "react-router-dom";
export const Account = () => {
  
  const links = [
    {title : "Profile", to : "/setting/overview"},
    {title : "Update Payment Method", to : "/setting/account/paymentmethodsetting"},
  ];

  return(
    <VStack 
      textStyle={TextStyle.h1.fontSize} 
      fontWeight={TextStyle.h1.fontWeight}
      divider={<StackDivider/>}
      spacing={4}
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
  );
    
};