import {
    Card,
    Heading,
    CardBody,
    Stack,
    StackDivider,
    Box,
    Text
  } from "@chakra-ui/react";

export const UpdateNoti = () => {
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
                Update
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consect
                adipiscing elit. Vestibulum at tortor 
                efficitur, incidunt tortor non, mattis 
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
    )
}