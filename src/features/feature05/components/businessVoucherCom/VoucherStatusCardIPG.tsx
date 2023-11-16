import { Box, Image } from "@chakra-ui/react";
import { FC } from "react";

export const VoucherStatusCardIPG: FC = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
    >
      <Box
        pos={"relative"}
        w={"320px"}
        h={"129px"}
        overflow={"hidden"}
        marginTop={8}
        borderRadius={6}
      >
        <Image
          objectFit={"cover"}
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-food-voucher-template-design-3f760e8c846b211d1f48bbbdc1364386_screen.jpg?ts=1588142046"
        />
        <Box
          pos={"absolute"}
          bg={"blue"}
          bottom={2}
          right={2}
          borderRadius={10}
          px={"10px"}
        >
          In progess
        </Box>
      </Box>
    </Box>
  );
};
