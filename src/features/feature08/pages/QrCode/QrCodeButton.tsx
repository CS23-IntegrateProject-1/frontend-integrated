import { Box , Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FC } from "react";
import {MdOutlineQrCode2} from "react-icons/md"

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
      margin={[3, 5, 7]} // Responsive margin for different screen sizes
      width={["100%", "80%", "70%"]} // Responsive width for different screen sizes
    >
      <Button
        width={"100%"}
        height={"40px"}
        bg={!bgColor ? "brand.200" : bgColor}
        color={!textColor ? "white" : textColor}
        borderColor={!borderColor ? "" : borderColor}
        _hover={{ bg: !bgHover ? "brand.300" : bgHover }}
        textColor={"#DEBEF6"}
        leftIcon={<MdOutlineQrCode2 />}
    >
      <Link to={'/Notification/entercode'}>
        QR PromptPay
      </Link>
    </Button>
      {/* <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "50%" }}
        maxH={{ base: "100%", sm: "50%" }}
        src="https://cdn.discordapp.com/attachments/1156171563436085268/1177514282355802142/image.png?ex=6572c8a2&is=656053a2&hm=4e9504358342c43a2398295ae729c605b110ddfce33750cc3c4f068a09b0310a&"
        alt="QR CODE"
        margin={5}
      /> */}
    </Box>
  );
};
