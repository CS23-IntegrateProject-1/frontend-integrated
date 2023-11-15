import { Box, Icon, Image } from "@chakra-ui/react";
import { FC } from "react";

export const AdvertisementStatusCardIPG: FC = () => {
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
          src="https://cms.dmpcdn.com/travel/2020/03/12/7b5fa580-6418-11ea-8884-dfd81909e81a_original.jpg"
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
