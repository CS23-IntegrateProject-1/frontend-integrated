import {
    Card,
    Heading,
    CardBody,
    Stack,
    StackDivider,
    Box,
    Text
  } from "@chakra-ui/react";

export const NewReserveNoti = () => {
    return (
        <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      margin={[3, 5, 7]} // Responsive margin for different screen sizes
      width={["100%", "80%", "70%"]} // Responsive width for different screen sizes
    >
      <Card width={"70%"} backgroundColor={""} color={"white"} border={"1px solid #DEBEF6"}>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="lg">
                New Reservation 
              </Heading>
              <Text size={"lg"}>
               You have got the new reservation on table number 10
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
    )
}