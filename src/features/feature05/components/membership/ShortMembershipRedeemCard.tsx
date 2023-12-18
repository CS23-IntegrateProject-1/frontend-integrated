
import { Card, Image } from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface ICard {
  voucherId: number;
  voucher_image: string;
}

export const ShortMembershipRedeemCard: FC<ICard> = ({
  voucherId,
  voucher_image,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/voucher/${voucherId}`);
  };

  return (
    <Card
      variant="filled"
      backgroundColor="brand.100"
      overflow={"hidden"}
      h={"200px"}
      minW={"350px"}
      onClick={handleClick}
    >
      <Image h={"100%"} src={voucher_image} objectFit={"cover"} />
    </Card>
  );
};
