import { Box, Flex, Switch, Spacer, Divider, Text } from "@chakra-ui/react";

export const EmailNoti = () => {
  return (
    <Box>
    <Flex>
        <Text>Email Notifications</Text>
        <Spacer/>
        <Switch id='emailNoti'/>
    </Flex>
    <Divider py={2}/>
    <Flex pt={4}>
        <Text>Updates</Text>
        <Spacer/>
        <Switch id='emailUpdates'/>
    </Flex>
    <Divider py={2}/>
    <Flex pt={4}>
        <Text>Offers</Text>
        <Spacer/>
        <Switch id='emailOffers'/>
    </Flex>
    <Divider py={2}/>
    <Flex pt={4}>
        <Text>Feedback</Text>
        <Spacer/>
        <Switch id='emailFeedback'/>
    </Flex>
    <Divider py={2}/>
  </Box>
  )
}