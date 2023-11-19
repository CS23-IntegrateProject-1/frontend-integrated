import { Box, Button } from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import {MdOutlineQrCode2} from "react-icons/md";
import { FC } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  bgHover?: string;
}

export const QrCodeButton: FC<ButtonProps> = ({
  bgColor,
  textColor,
  borderColor,
  bgHover,
}) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      margin={5}
      width={"100%"}
    > 
    <Button
      width={"70%"}
      height={"40px"}
      bg={!bgColor ? "brand.200" : bgColor}
      color={!textColor ? "white" : textColor}
      borderColor={!borderColor ? "" : borderColor}
      _hover={{ bg: !bgHover ? "brand.300" : bgHover }}
      textColor={"#DEBEF6"}
      leftIcon={<MdOutlineQrCode2 />}
    >
      <Link to={'/venue/:venueId/qr-payment'}>
        QR PromptPay
      </Link>
    </Button>
      <Card size={"sm"} width={"70%"} backgroundColor={"#DEBEF6"}>
        <CardBody>
          <Text color={"#5F0DBB"}>
              Go cashless by scanning QR code.
          </Text>
        </CardBody>
      </Card>
    </Box>
  );
};
