import React from 'react'
import { Box, Text, Button, Stack } from '@chakra-ui/react';
import MemberShipCard from './MemberShipCard';
import Tags from '../../components/Tags';
import ImageBox from './ImageBox';
import { key } from 'localforage';

type Image = {
  key: number
  url: string
}

const images: Image[] = [
  {
    key: 1,
    url: "https://www.w3schools.com/tags/img_girl.jpg"
  },
  {
    key: 2,
    url: "https://www.w3schools.com/tags/img_girl.jpg"
  }
  ,
  {
    key: 3,
    url: "https://www.w3schools.com/tags/img_girl.jpg"
  }
  ,
  {
    key: 4,
    url: "https://www.w3schools.com/tags/img_girl.jpg"
  }
  ,
  {
    key: 5,
    url: "https://www.w3schools.com/tags/img_girl.jpg"
  }
  ,
  {
    key: 6,
    url: "https://www.w3schools.com/tags/img_girl.jpg"
  }
  ,
  {
    key: 7,
    url: "https://www.w3schools.com/tags/img_girl.jpg"
  }
  ,
  {
    key: 8,
    url: "https://www.w3schools.com/tags/img_girl.jpg"
  }
  ,
  {
    key: 9,
    url: "https://www.w3schools.com/tags/img_girl.jpg"
  }
  ,
  {
    key: 10,
    url: "https://www.w3schools.com/tags/img_girl.jpg"
  }
  ,
  {
    key: 11,
    url: "https://www.w3schools.com/tags/img_girl.jpg"
  }
  ,
  {
    key: 12,
    url: "https://www.w3schools.com/tags/img_girl.jpg"
  }
  
]


function MemberShipPages() {
  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box position="absolute" top="15vh">
          <MemberShipCard />
        </Box>


        <Box
          backgroundColor="#DEBEF6"
          w="100vw"
          h="100vh"
          position="absolute"
          top="30vh"
        >
          <Stack direction={['column']} spacing='0px'>
            //Box one
            <Box className='BoxOne'>
              <Box
                w="100vw"
                h="15vh"
              // backgroundColor="blue"
              >

              </Box>
              <Box
                w="100vw"
                h="fit-content"
                // backgroundColor="red"
                display="flex"
                flexDirection="row"
              >
                <Tags tag_text='Recently' />
                <Box
                  display="flex"
                  flexDirection="row"
                  position="absolute"
                  right="0"
                  margin="5px"
                  marginRight="20px"
                  // backgroundColor="blue"
                  w="60px"
                  h="fit-content"
                  justifyContent="center"
                >
                  <Button variant="link" color="black" textDecoration="underline" fontWeight="regular">See all</Button>
                </Box>
              </Box>
              <Box display="flex" overflowX="auto" maxH="193px" gap="20px" padding="15px" paddingTop="25px">
                {images.map((image, index) => (
                  <ImageBox key={image.key} url_image={image.url} />
                ))}
              </Box>
            </Box>

            {/* End of Recently */}


            {/* Today section */}
            <Box className='BoxTwo'>
              <Box
                w="100vw"
                h="1vh"
              // backgroundColor="blue"
              >

              </Box>
              <Box
                w="100vw"
                h="fit-content"
                // backgroundColor="red"
                display="flex"
                flexDirection="row"
              >
                <Tags tag_text="Today’s privileges" />
                <Box
                  display="flex"
                  flexDirection="row"
                  position="absolute"
                  right="0"
                  // margin="5px"
                  marginRight="20px"
                  // backgroundColor="blue"
                  w="60px"
                  h="fit-content"
                  justifyContent="center"
                >
                  <Button variant="link" color="black" textDecoration="underline" fontWeight="regular">See all</Button>
                </Box>
              </Box>
              <Box display="flex" overflowX="auto" maxH="193px" gap="20px" padding="15px" paddingTop="25px">
                {images.map((image, index) => (
                  <ImageBox key={image.key} url_image={image.url} />
                ))}
              </Box>
            </Box>

            {/* End of Today */}

            <Box className='BoxThree'>
              <Box
                w="100vw"
                h="1vh"
              // backgroundColor="blue"
              >

              </Box>
              <Box
                w="100vw"
                h="fit-content"
                // backgroundColor="red"
                display="flex"
                flexDirection="row"
              >
                <Tags tag_text="Seasonally" />
                <Box
                  display="flex"
                  flexDirection="row"
                  position="absolute"
                  right="0"
                  // margin="5px"
                  marginRight="20px"
                  // backgroundColor="blue"
                  w="60px"
                  h="fit-content"
                  justifyContent="center"
                >
                  <Button variant="link" color="black" textDecoration="underline" fontWeight="regular">See all</Button>
                </Box>
              </Box>
              <Box display="flex" overflowX="auto" maxH="193px" gap="20px" padding="15px" paddingTop="25px">
                {images.map((image, index) => (
                  <ImageBox key={image.key} url_image={image.url} />
                ))}
              </Box>
            </Box>

            {/* End of Today */}
          </Stack>
        </Box>
      </Box>
    </>
  )
}

export default MemberShipPages