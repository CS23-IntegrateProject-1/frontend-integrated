import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  Box,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";


export const MobileBankingList = () => {
  //hold data for list of mobileBanking?
  const [mobileBankingData, setMobileBankingData] = useState([]);
  const [loading, setLoading] = useState(true);



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
          <Heading size="lg">Mobile Banking</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="sm" textTransform="uppercase">
                <AddIcon boxSize={3} /> k plus
              </Heading>
            </Box>
            <Box>
              <Heading size="sm">
                <AddIcon boxSize={3} /> Krungthai NEXT
              </Heading>
            </Box>
            <Box>
              <Heading size="sm" textTransform="uppercase">
                <AddIcon boxSize={3} /> scb easy
              </Heading>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};
