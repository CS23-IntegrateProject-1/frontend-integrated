import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Box,
  Image,
  Text,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

export const CreditCardList = () => {
const [value, setValue] = React.useState('1')
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      margin={5}
      width={"100%"}
    >
      <Card width={"70%"} backgroundColor={"#5F0DBB"} color={"#C5C4C7"}>
        <CardHeader>
          <Heading size="lg">Credit Cards</Heading>
        </CardHeader>

        <CardBody>
          <RadioGroup onChange={setValue} value={value} maxWidth={"100%"}>
            
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                backgroundColor={""}
                padding={5}
                margin={5}
                maxWidth={"100%"}
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src="https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg"
                  alt="Visa"
                />

                <CardBody>
                  <Heading size="md" color={"white"}>
                    Visa
                  </Heading>

                  <Text py="2" color={"white"}>
                    ****1319
                  </Text>
                </CardBody>
                <Radio value="1" />
              </Card>
              <Box margin={5}>
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  variant="outline"
                  backgroundColor={""}
                  padding={5}
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/2560px-Mastercard_2019_logo.svg.png"
                    alt="Mastercard"
                    backgroundColor={"white"}
                  />

                  <CardBody>
                    <Heading size="md" color={"white"}>
                      Master
                    </Heading>

                    <Text py="2" color={"white"}>
                      ****1319
                    </Text>
                  </CardBody>
                  <Radio value="2" />
                </Card>
              </Box>
          </RadioGroup>
          <Box margin={5}>
            <Link to={"/venue/:venueId/addcard"}>
              <Card
                    direction={{ base: "column", sm: "row" }}
                    overflow="hidden"
                    variant="outline"
                    backgroundColor={""}
                    padding={5}
                  >
                    <CardBody>
                      <Heading size="sm" color={"white"}>
                        <AddIcon boxSize={3} /> Add Card
                      </Heading>
                    </CardBody>
                  </Card>
            </Link>           
              </Box>
        </CardBody>
      </Card>
    </Box>
  );
};
