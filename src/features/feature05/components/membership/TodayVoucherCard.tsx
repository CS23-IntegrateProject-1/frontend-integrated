import { Box, Center, Icon, Image } from "@chakra-ui/react";
import { FC } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const TodayVoucherCard: FC = () => {
  const navigate = useNavigate();
  const handleClickEdit = () => {
    navigate("/voucher/edit/:id");
  };
  return (
    <Image
      margin={"0 auto"}
      w={"90%"}
      minW={"200px"}
      maxW={"500px"}
      objectFit={"cover"}
      src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-food-voucher-template-design-3f760e8c846b211d1f48bbbdc1364386_screen.jpg?ts=1588142046"
    />
  );
};
