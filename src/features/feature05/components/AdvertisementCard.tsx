import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";

export const AdvertisementCard = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
    >

      {/* AdvertisementCard */}
      <Card
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
        variant="outline"
      >     
        <CardBody>
          <Box>
            <Text pt="2" fontSize="md">
              Name: Product 'z' launch
              <br />
              Description:
            </Text>
          </Box>
        </CardBody>
      </Card>

      <Stack spacing='4'>
  {['elevated', 'outline', 'filled', 'unstyled'].map((variant) => (
    <Card key={variant} variant={variant}>
      <CardHeader>
        <Heading size='md'> {variant}</Heading>
      </CardHeader>
      <CardBody>
        <Text>variant = {variant}</Text>
      </CardBody>
    </Card>
  ))}
</Stack>

    </Box>
  );
};
