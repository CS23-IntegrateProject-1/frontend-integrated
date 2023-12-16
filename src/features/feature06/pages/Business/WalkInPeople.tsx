import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AmountOfPeopleIcon } from "../../components/AmountOfPeople";

export const WalkInPeople = () => {
  const [count, setCount] = useState(0);

  function increment() {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Heading
        style={TextStyle.h1}
        color={"white"}
        fontSize="20px"
        alignItems={"center"}
      >
        Enter your number of people
      </Heading>
      <Box
        className="Line"
        width="360.001px"
        height="1px"
        backgroundColor="white"
        marginTop={"22px"}
      />
      <AmountOfPeopleIcon />
      <Box
        className="AmountOfPeople"
        width="313px"
        height="80px"
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignContent={"center"}
        borderRadius="17px"
        backgroundColor="rgba(165, 51, 200, 0.30)"
        boxShadow="2px 2px 4px 0px rgba(0, 0, 0, 0.25)"
        marginBottom={"75px"}
      >
        <Button
          id="Minus"
          onClick={decrement}
          marginLeft={"24px"}
          marginTop={"11px"}
          marginBottom={"16.43px"}
          width={"54px"}
          height={"54px"}
          borderRadius={"50"}
          backgroundColor="#A533C8"
          boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
          _focus={{
            background: "#A533C8",
            borderColor: "none",
          }}
        >
          <Text
            color="var(--white, #F6F6F6)"
            fontFamily="Roboto"
            fontSize={"36px"}
            fontStyle="normal"
            fontWeight="700"
            lineHeight="normal"
          >
            -
          </Text>
        </Button>
        <Text
          color="var(--white, #F6F6F6)"
          fontFamily="Roboto"
          fontSize={"50px"}
          fontStyle="normal"
          fontWeight="700"
        >
          {count}
        </Text>
        <Button
          id="Plus"
          onClick={increment}
          marginRight={"24px"}
          marginTop={"11px"}
          marginBottom={"16.43px"}
          width={"54px"}
          height={"54px"}
          borderRadius={"50"}
          backgroundColor="#A533C8"
          boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
          _focus={{
            background: "#A533C8",
            borderColor: "none",
          }}
        >
          <Text
            color="var(--white, #F6F6F6)"
            fontFamily="Roboto"
            fontSize={"36px"}
            fontStyle="normal"
            fontWeight="700"
            lineHeight="normal"
          >
            +
          </Text>
        </Button>
      </Box>
      <Link to={`/business/WalkInDetail?count=${count}`}>
        <Button
          width={"140px"}
          height={"40px"}
          bg={"brand.200"}
          color={"white"}
          _hover={{ bg: "brand.300" }}
        >
          Continue
        </Button>
      </Link>
    </Box>
  );
};
