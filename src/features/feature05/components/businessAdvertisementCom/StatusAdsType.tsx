import {
     Box,
     FormControl,
     FormLabel,
     Input,
     InputGroup,
     InputRightElement,
     Stack,
     Tab,
     TabList,
     TabPanel,
     TabPanels,
     Tabs,
     VStack,
   } from "@chakra-ui/react";
   import { TextStyle } from "../../../../theme/TextStyle";
   import { FC } from "react";
   
   const tabStyle = {
     marginLeft: "3px",
     marginRight: "3px",
     borderRadius: "5px",
     border: "0.1px solid rgba(255, 255, 255, 0.5)",
   };
   
   interface handleChangeProp {
     handleChange: (
       e: React.ChangeEvent<
         HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
       >
     ) => void;
     handleTypeChange: (
       tab: string
     ) => void;
   }
   
   export const StatusAdsType: FC<handleChangeProp> = ({ handleChange, handleTypeChange }) => {
     const tabHeads: string[] = ["Discount", "Gift"];
     return (
       <Box>
         <FormControl>
           <FormLabel style={TextStyle.h2}>Discount Type</FormLabel>
           <Tabs isFitted variant="solid-rounded">
             <TabList>
               {tabHeads.map((tabHead) => (
                 <Tab
                   style={tabStyle}
                   _selected={{
                     bg: "brand.200",
                     color: "white",
                     border: "1px solid red",
                   }}
                   onClick={() => handleTypeChange(tabHead)}
                 >
                   {tabHead}
                 </Tab>
               ))}
             </TabList>
             <TabPanels>
               <TabPanel>
                 <FormControl mb={"20px"}>
                   <FormLabel style={TextStyle.h2}>Discount *</FormLabel>
                   <InputGroup>
                     <Input
                       type={"number"}
                       bg={"#390b74"}
                       border={"none"}
                       name={"discountVoucher.percentage"}
                       onChange={handleChange}
                     />
                     <InputRightElement
                       bg={"#390b74"}
                       children="%"
                       borderRightRadius={"md"}
                     />
                   </InputGroup>
                 </FormControl>
                 <Stack direction={"row"} mb={"30px"}>
                   <FormControl>
                     <FormLabel style={TextStyle.h2}>Minimum spend</FormLabel>
                     <Input
                       type={"number"}
                       bg={"#390b74"}
                       border={"none"}
                       name={"discountVoucher.minimum"}
                       onChange={handleChange}
                     />
                   </FormControl>
                   <FormControl>
                     <FormLabel style={TextStyle.h2}>Max Discount *</FormLabel>
                     <Input
                       type={"number"}
                       bg={"#390b74"}
                       border={"none"}
                       name={"discountVoucher.fixDiscount"}
                       onChange={handleChange}
                     />
                   </FormControl>
                 </Stack>
               </TabPanel>
               <TabPanel>
                 <VStack direction={"row"} mb={"30px"}>
                   <FormControl>
                     <FormLabel style={TextStyle.h2}>Minimum Value *</FormLabel>
                     <Input
                       type={"number"}
                       bg={"#390b74"}
                       border={"none"}
                       name={"giftVoucher.minimum"}
                       onChange={handleChange}
                     />
                   </FormControl>
                   <FormControl>
                     <FormLabel style={TextStyle.h2}>Gift Name *</FormLabel>
                     <Input
                       type={"text"}
                       bg={"#390b74"}
                       border={"none"}
                       name={"voucherType.giftName"}
                       onChange={handleChange}
                     />
                   </FormControl>
                 </VStack>
               </TabPanel>
             </TabPanels>
           </Tabs>
         </FormControl>
       </Box>
     );
   };