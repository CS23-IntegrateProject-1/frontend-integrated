import { Card, Image } from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface ICard {
  voucherId: number;
  voucher_image: string;
}

export const ShortVoucherCard: FC<ICard> = ({ voucherId, voucher_image }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/voucher/${voucherId}`);
  };

    if (voucherId == undefined) {
      console.error("Voucher id is undefined");
      return;
    }
 
  
  return (
    <Card
      variant="filled"
      backgroundColor="brand.100"
      overflow={"hidden"}
      h={"200px"}
      margin={"5px"}
      onClick={handleClick}
    >
      <Image
        h={"100%"}
        src={`${import.meta.env.VITE_BACKEND_URL}${voucher_image}` || ""}
        objectFit={"cover"}
      />
    </Card>
  );
};
