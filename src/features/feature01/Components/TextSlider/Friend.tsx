import { FC } from 'react';
import { Avatar, Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import { TextStyle } from '../../../../theme/TextStyle';
interface FriendProps {
  username: string;
  user_img: string;
}

export const Friend: FC<FriendProps> = (props) => {

  return (
    <Box>
      {/* Your component content goes here */}
      <Box py={'2%'} bg={'brand.300'}>
        <Flex  justifyContent={'space-between'}>
          <Box   ml={{ lg: '15%', base:'10%' }}>
            <Text fontSize={TextStyle.h1.fontSize} fontWeight={TextStyle.h2.fontWeight}>{props.username}</Text>
          </Box>
          <Box mr={{ lg: '15%', base:'10%' }}>
            <Avatar src='https://bit.ly/broken-link' size={'xl'} />
          </Box>
        </Flex>
      </Box>
      {/* outer box */}
      <Box bg={'brand.200'}>

        <Tabs borderColor={'brand.200'} isFitted variant='enclosed'>
          <TabList mb='1em'>
          <Tab color={'black'} fontSize={TextStyle.h1.fontSize} fontWeight={TextStyle.h2.fontWeight}>Home</Tab>
          <Tab fontSize={TextStyle.h1.fontSize} fontWeight={TextStyle.h2.fontWeight}>Chats</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>

            </TabPanel>
            <TabPanel>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}