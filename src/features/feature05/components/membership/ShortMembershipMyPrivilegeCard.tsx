import { Card, Image } from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface IRedeemCard {
  redeemId: number;
  image_url: string;
}

export const ShortMembershipMyPrivilegeCard: FC<IRedeemCard> = ({
  redeemId,
  image_url,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/redeem/${redeemId}`);
  };

  if (redeemId == undefined) {
    console.error("Voucher id is undefined");
    return;
  }

  return (
    <Card
      variant="filled"
      backgroundColor="brand.100"
      overflow={"hidden"}
      h={"200px"}
      minW={"350px"}
      onClick={handleClick}
    >
      <Image
        h={"100%"}
        src={`${import.meta.env.VITE_BACKEND_URL}${image_url}`}
        objectFit={"cover"}
      />
    </Card>
  );
};
