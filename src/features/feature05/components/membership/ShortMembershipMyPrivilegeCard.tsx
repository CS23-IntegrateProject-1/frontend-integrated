import { Card, Image } from "@chakra-ui/react";
import { FC } from "react";

interface IRedeemCard {
  image_url?: string;
}

export const ShortMembershipMyPrivilegeCard: FC<IRedeemCard> = (cardInfo) => {
  return (
    <Card
      variant="filled"
      backgroundColor="brand.100"
      overflow={"hidden"}
      h={"200px"}
      minW={"350px"}
    >
      <Image src={cardInfo.image_url} />
    </Card>
  );
};

