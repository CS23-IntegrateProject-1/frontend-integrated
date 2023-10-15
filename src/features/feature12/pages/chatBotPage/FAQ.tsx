import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/react";
  import { TextStyle } from "../../../../theme/TextStyle";
  
  export const FAQ = () => {
    return (
    <Accordion defaultIndex={[0]} allowMultiple bg={"brand.300"}>
      <AccordionItem borderLeft={"1px solid white"} borderRight={"1px solid white"}>
        <h2>
          <AccordionButton _expanded={{bg: 'brand.200'}}>
            <Box as="span" flex='1' textAlign='left' style={TextStyle.h4}>
              FAQ #1
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} borderTop={"1px solid white"} style={TextStyle.body2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem borderLeft={"1px solid white"} borderRight={"1px solid white"}>
        <h2>
          <AccordionButton _expanded={{bg: 'brand.200'}}>
            <Box as="span" flex='1' textAlign='left' style={TextStyle.h4}>
              FAQ #2
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} borderTop={"1px solid white"} style={TextStyle.body2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem borderLeft={"1px solid white"} borderRight={"1px solid white"}>
        <h2>
          <AccordionButton _expanded={{bg: 'brand.200'}}>
            <Box as="span" flex='1' textAlign='left' style={TextStyle.h4}>
              FAQ #3
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} borderTop={"1px solid white"} style={TextStyle.body2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
    );
  };
  