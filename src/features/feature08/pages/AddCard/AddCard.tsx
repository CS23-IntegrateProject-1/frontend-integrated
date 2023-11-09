import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Button,
  Heading,
  Image,
  Flex,
  Text,
  Divider,
  AbsoluteCenter,
} from "@chakra-ui/react";
import { FC } from "react";

interface ButtonProps {
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  bgHover?: string;
}

export const AddCard: FC<ButtonProps> = ({
  bgColor,
  textColor,
  borderColor,
  bgHover,
}) => {
  return (
    <div>
         <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      margin={5}
    >
      <Card
        width={"70%"}
        backgroundColor={"#5F0DBB"}
        color={"#C5C4C7"}
        rounded={50}
      >
        <CardHeader
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box flex="1">
            <Heading size="sm" textTransform="uppercase"></Heading>
          </Box>
          <Box paddingRight="10px">
            {" "}
            {/* Added paddingRight to create space between card and logo */}
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "100px" }}
              maxH={{ base: "100%", sm: "100px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
              alt="Visa"
            />
          </Box>
        </CardHeader>

        <CardBody>
          <Box>
            <Heading size="lg" textTransform="uppercase" color={"white"}>
              P.CHAMCHOY
            </Heading>
          </Box>
        </CardBody>

        <CardFooter
          display="flex"
          justifyContent="space-between"
          alignItems="flex-end"
          padding={4}
        >
          <Box>
            <Heading size="md" color={"white"}>
              5282 3456 7890 1289
            </Heading>
          </Box>
          <Box>
            <Heading size="md" color={"white"}>
              09/25
            </Heading>
          </Box>
        </CardFooter>
      </Card>
      <Button
        width={"70%"}
        height={"40px"}
        bg={!bgColor ? "brand.200" : bgColor}
        color={!textColor ? "white" : textColor}
        borderColor={!borderColor ? "" : borderColor}
        _hover={{ bg: !bgHover ? "brand.300" : bgHover }}
        textColor={"#DEBEF6"}
        //   marginTop={50}
      >
        Apply
      </Button>
    </Box>
    </div>
  );
};
