import { Box, Icon, Image } from "@chakra-ui/react";
import { FC } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const AdvertisementStatusCard: FC = () => {
  const navigate = useNavigate();
  const handleClickEdit = () => {
    navigate("/advertisement/edit/:id");
  };
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
          bg={"red"}
          bottom={2}
          right={2}
          borderRadius={10}
          px={"10px"}
        >
          Reject
        </Box>
        <Box pos={"absolute"} top={2} right={1} borderRadius={10} px={"10px"}>
          <Icon
            as={FaRegEdit}
            color={"#5F0DBB"}
            onClick={handleClickEdit}
          ></Icon>
        </Box>
      </Box>
    </Box>
  );
};
