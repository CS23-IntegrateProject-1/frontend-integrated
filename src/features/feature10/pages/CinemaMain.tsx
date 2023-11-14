import React from 'react';
import  { useState, useEffect} from 'react';
import { NowShowList } from '../components/nowShowList'
import { SoonList } from '../components/SoonList'
import {Button, Box , Image} from '@chakra-ui/react'
import map1 from "../assets/img/map1.png"

const buttonStyles = { 
  borderRadius: "35px",
  textColor: "white",
  mr: 5,
  mt: 5,
  mb: 5,
};

export const CinemaMain = () => {

  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (index) => {
    setActiveButton(index);    
  };
  
  const buttons = ['All' ,'Dolby', 'IMAX', 'kid'];
  
  return (
    <>
    <Box marginBottom={'5px'} >
        <Image src={map1} ></Image>
    </Box>
    <Box textAlign="center" fontSize="xl" >
    {buttons.map((button, index) => (
          <Button 
            {...buttonStyles} 
            bg={activeButton === index ? "brand.300" : "rgba(0, 0, 0, 0.3)"} 
            onClick={() => handleClick(index)}
          >
            {button}
          </Button>
        ))}
    </Box>
    <NowShowList/>
    <SoonList/>
    </>
  )
}
