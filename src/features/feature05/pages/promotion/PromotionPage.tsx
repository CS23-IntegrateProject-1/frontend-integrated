import { Box } from "@chakra-ui/react";
import ImageBox from "../../components/membership/ImageBox";

type Image = {
  key: number;
  url: string;
};

const images: Image[] = [
  {
    key: 1,
    url: "https://www.ktc.co.th/sites/ktc/image/1545256725585/dining-international-sizzlersignaturedish-promo-min.jpg",
  },
  {
    key: 2,
    url: "https://www.ktc.co.th/pub/media/Promotion/Dining/2021/dining-chester_s-promo.webp",
  },
  {
    key: 3,
    url: "https://www.ktc.co.th/pub/media/Promotion/Dining/food-delivery/grab/AW_APR23-069-GrabFood-x-VISA-x-KFC_EN_PROMO-BANNER-DESKTOP1448x543.webp",
  },
  {
    key: 4,
    url: "https://www.ktc.co.th/pub/media/Promotion/Dining/buffet/LO_Banner_REV_PromotionBanner_1448x543.webp",
  },
  {
    key: 5,
    url: "https://www.ktc.co.th/pub/media/Promotion/Dining/dining-swensen-mango-sundae-promo.jpg",
  },
];

export function PromotionPage() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems={"center"}
      gap="20px"
      // width={"fit-content"}
      height={"fit-content"}
      // height={"auto"}
    >
      {images.map((image, index) => (
        <ImageBox key={index} url_image={image.url} />
      ))}
    </Box>
  );
}
