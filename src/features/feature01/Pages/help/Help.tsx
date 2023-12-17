import { Box, Grid, GridItem, Heading, Text,HStack, Divider, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import {useState} from "react";
import '../../Components/TextSlider/TextSlider.css';
import { NavLink } from "react-router-dom";

export const Help = () => {
  
  const words=[
    {id:0,value:"Tip 1: You can add friends, and create groups to stay connected and plan outings or events with ease."},
    {id:1,value:"Tip 2: You can choose your prefered payment method in the Update Payment Method section under Account & Security. "},
    {id:2,value:"Tip 3: Your reservations, payment history, and tickets can be found under your Profile."},
  ];
  const [wordData,setWordData]=useState(words[0].value)
  const handleClick=(index: number)=>{
    console.log(index)
    const wordSlider=words[index].value;
    setWordData(wordSlider)
  }

  return(
    
    <Grid>
      <GridItem>
        <Box p={"20px"} bgColor={"#D9D9D9"} >
        <div className="main">
          <div className="tips" style={TextStyle.body2}> {wordData} </div>
          <div className='flex_row' style={{}}>
          {words.map((_data,i)=>
            <Box  key={i} onClick={()=>handleClick(i)}
            as='button'
            height='17px'
            width='15px'
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            px='8px'
            borderRadius='50px'
            bg='#bf86d0'
            marginLeft={"5px"}
            _hover={{ bg: '#b25ccc' }}
            _active={{
              bg: '#b25ccc',
              transform: 'scale(0.98)'
              
            }}
            />
          )}
          </div>
        </div>
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
      <Accordion defaultIndex={[0]} allowMultiple bg={"brand.300"}>
      <AccordionItem borderLeft={"1px solid white"} borderRight={"1px solid white"}>
        <h2>
          <AccordionButton _expanded={{bg: 'brand.200'}}>
            <Box as="span" flex='1' textAlign='left' style={TextStyle.h4}>
            How can I contact customer support?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} borderTop={"1px solid white"} style={TextStyle.body2}>
        You can reach our customer support team by clicking on the "Live message with ChatBox" or the "Call center" icon on the bottom of the page.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem borderLeft={"1px solid white"} borderRight={"1px solid white"}>
        <h2>
          <AccordionButton _expanded={{bg: 'brand.200'}}>
            <Box as="span" flex='1' textAlign='left' style={TextStyle.h4}>
            What payment methods are accepted?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} borderTop={"1px solid white"} style={TextStyle.body2}>
        We accept payments via K Plus, Krungthai NEXT, and SCB EASY.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem borderLeft={"1px solid white"} borderRight={"1px solid white"}>
        <h2>
          <AccordionButton _expanded={{bg: 'brand.200'}}>
            <Box as="span" flex='1' textAlign='left' style={TextStyle.h4}>
            Is my personal information safe with Harmoni?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} borderTop={"1px solid white"} style={TextStyle.body2}>
        Yes, we take the privacy and security of your information seriously. Refer to our privacy policy for detailed information on how we handle user data.
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
        <NavLink to={"/setting/helpdesk"}>
          <Box border={"1px"}  borderColor={"brand.200"} bg = 'brand.300' >
            <Text padding={"10px"} style={TextStyle.h4}>
                Help Desk System
            </Text>
          </Box>
        </NavLink>
        
      </GridItem>
      <GridItem>
        <NavLink to = "/chatbot">
        <Box border={"1px"}  borderColor={"brand.200"} bg = 'brand.300' >
          <Text padding={"10px"} style={TextStyle.h4}>
            Live message with ChatBox
          </Text>
        </Box>
        </NavLink>
      </GridItem>
    </Grid>
  );
};