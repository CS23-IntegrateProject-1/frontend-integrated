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
import React, { FC } from "react";
import { Link, useParams } from "react-router-dom";

interface Credit_cardProps {
  creditCardId:string;
  card_no:string;
  name:string;
  country:string;
  bank:string;
  cvc:string;
  exp:Date;
  userId?:string;
  venueId?: string;
}


interface CreditCardListProps {
  card: Credit_cardProps[];
}

export const CreditCardList: FC<CreditCardListProps> = ({ card }) => {
  const [value, setValue] = React.useState("");
  const { userId, venueId } = useParams<{ userId: string; venueId: string }>();


  const cardArray = Array.isArray(card) ? card : [card];

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
            {cardArray.map((cardItem) => (
              <Card
                key={cardItem.creditCardId}
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
                  src={cardItem.name.toLowerCase() === 'visa'
                    ? 'https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg' // Replace with the actual URL for the Visa image
                    : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/2560px-Mastercard_2019_logo.svg.png'} // Mastercard image URL
                  alt={cardItem.name}
                  backgroundColor={"white"}
                />

                <CardBody>
                  <Heading size="md" color={"white"}>
                    {cardItem.name}
                  </Heading>

                  <Text py="2" color={"white"}>
                    {cardItem.card_no}
                  </Text>
                </CardBody>
                <Radio value={cardItem.creditCardId.toString()} />
              </Card>
            ))} 
            {/* /venue/:venueId/business/addcard || /customer/:userId/addcard */}
          </RadioGroup>
          <Box margin={5}>
          <Link to={userId ? `/customer/${userId}/addcard` : venueId ? `/venue/${venueId}/business/addcard` : userId&&venueId? `/customer/${userId}/addcard` :"/"}>
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
