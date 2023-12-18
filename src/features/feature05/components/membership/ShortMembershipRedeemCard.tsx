import { Card, Image } from "@chakra-ui/react";
import { FC } from "react";

interface ICard {
  voucher_image: string;
}

export const ShortMembershipRedeemCard: FC<ICard> = (cardInfo) => {
  return (
    <Card
      variant="filled"
      backgroundColor="brand.100"
      overflow={"hidden"}
      h={"200px"}
      minW={"350px"}
    >
      <Image h={"100%"} src={cardInfo.voucher_image} objectFit={"cover"} />
    </Card>
  );
};
