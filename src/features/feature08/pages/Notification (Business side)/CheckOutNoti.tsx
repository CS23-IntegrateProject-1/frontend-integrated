import {
    Card,
    Heading,
    CardBody,
    Stack,
    StackDivider,
    Box,
    Text
  } from "@chakra-ui/react";

export const CheckOutNoti = () => {
    return (
        <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      margin={5}
      width={"50%"}
    >
      <Card width={"70%"} backgroundColor={"#5F0DBB"} color={"#C5C4C7"}>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="md">
                Check out
              </Heading>
              <Text>
                Table number 1 wanted to checkout
              </Text>
              <Text decoration={'underline'}>
                Table number 1
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
    )
}