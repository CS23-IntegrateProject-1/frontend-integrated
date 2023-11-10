import { Box, Grid, GridItem, Heading, Text,HStack, Divider, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { ButtonComponent } from "../../../../components/buttons/ButtonComponent";
import textStyles from "../../../../theme/foundations/textStyles";

export const Help = () => {
  return(
    <Grid>
      <GridItem>
        <Box p={"20px"} bgColor={"white"}>
        <Text color={"black"} textAlign={"center"}>
          Carousel
        </Text>
        </Box>
      </GridItem>

      <GridItem marginTop={"20px"}>
      <HStack>
        <Heading 
        style={TextStyle.h2}>
        FAQs
      </Heading>
      <Divider border={"2px"} color={"brand.100"} />
      </HStack> 
      </GridItem>
{/* Accordion 1 */}
      <GridItem>
      <Accordion borderColor={"grey.200"} marginTop={"20px"} marginBottom={"20px"}>
          <AccordionItem >
            <h2>
              <AccordionButton  _expanded={{ bg: 'brand.200', color: 'white' }} borderColor={"grey.200"}>
                <Box as="span" flex='1' textAlign='left' borderColor={"grey.200"}
                style={TextStyle.h4}>
                  {" "}
                  FAQ #1
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} bgColor={"brand.200"} opacity={"50%"} style={TextStyle.body2} >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  {" "}
                  FAQ #2
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </GridItem>

      <GridItem marginTop={"10px"}>
      <HStack>
        <Heading 
        style={TextStyle.h2}>
        Contact
      </Heading>
      <Divider border={"2px"} color={"brand.100"} />
      </HStack> 
      </GridItem>
      <GridItem marginTop={"20px"} >
        <Box border={"1px"}  borderColor={"brand.200"} bg = 'brand.300' >
          <Text padding={"10px"} style={TextStyle.h4}>
            Call Center
          </Text>
        </Box>
      </GridItem>
      <GridItem>
        <Box border={"1px"}  borderColor={"brand.200"} bg = 'brand.300' >
          <Text padding={"10px"} style={TextStyle.h4}>
            Live message with ChatBox
          </Text>
        </Box>
      </GridItem>
    </Grid>
  );
};