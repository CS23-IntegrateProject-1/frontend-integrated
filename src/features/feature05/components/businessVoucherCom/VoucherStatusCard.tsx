import { Box, Icon, Image } from "@chakra-ui/react";
import { FC } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const VoucherStatusCard: FC = () => {
  const navigate = useNavigate();
  const handleClickEdit = () => {
    navigate("/voucher/edit/:id");
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
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-food-voucher-template-design-3f760e8c846b211d1f48bbbdc1364386_screen.jpg?ts=1588142046"
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
