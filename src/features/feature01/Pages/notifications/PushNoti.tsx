import { Box, Flex, Text, Spacer, Switch, Divider} from "@chakra-ui/react";

export const PushNoti = () => {
  return (
      <Box>
        <Flex>
            <Text>Push Notifications</Text>
            <Spacer/>
            <Switch id='pushNoti'/>
        </Flex>
        <Divider py={2}/>
        <Flex pt={4}>
            <Text>Updates</Text>
            <Spacer/>
            <Switch id='pushUpdates'/>
        </Flex>
        <Divider py={2}/>
        <Flex pt={4}>
            <Text>Offers</Text>
            <Spacer/>
            <Switch id='pushOffers'/>
        </Flex>
        <Divider py={2}/>
        <Flex pt={4}>
            <Text>Feedback</Text>
            <Spacer/>
            <Switch id='pushFeedback'/>
        </Flex>
        <Divider py={2}/>
      </Box>
  )
}