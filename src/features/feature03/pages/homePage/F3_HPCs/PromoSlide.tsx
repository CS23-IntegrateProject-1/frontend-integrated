import { Box, Card, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../../../../AxiosInstance";
import { FullPageLoader } from "../../../../../components/Loader/FullPageLoader";

interface PromoSlide {
  promotionId: number;
  name: string;
  description: string;
  image_url: string;
}


export const PromoSlide = () => {
  const {
    isLoading: promoSlideLoading,
    isError: promoSlideError,
    data: promoSlideData,
  } = useQuery<PromoSlide[]>({
    queryKey: ["getPromotionS"], 
    queryFn: async () => {
      const { data } = await Axios.get(`/feature3/PromotionHomePage`);
      return data;
    },
  });

  if (promoSlideLoading) {
    return (
      <span>
        <FullPageLoader />
      </span>
    );
  }

  if (promoSlideError) {
    return <span>An error occurred: </span>;
  }


  return (
    <Box overflowX="auto"
    css={{
      '&::-webkit-scrollbar': {
        width: '4px',
      },
      '&::-webkit-scrollbar-track': {
        width: '6px',
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: '24px',
      },
    }} width={"100%"} pt={1}>
      <Box>
        <Box display="flex">
          {promoSlideData.map((PSD) => (
            <Card
              key={`${PSD.promotionId}`}
              minW={"300px"}
              maxW="sm"
              minH={"180px"}
              maxH="sm"
              borderRadius="xl"
              marginRight="5"
            >
              <NavLink to={`/promotion/${PSD.promotionId}`}>
                <Image
                  src={`${import.meta.env.VITE_BACKEND_URL}${PSD.image_url}`}
                  alt={`Promotion_Pic not load ${PSD.promotionId}`}
                  borderRadius="xl"
                  w="100%"
                  maxW="300px"
                  h="180px"
                  objectFit={"cover"}
                />
              </NavLink>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
