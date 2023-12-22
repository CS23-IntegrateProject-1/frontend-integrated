import { Box, Flex, Text } from "@chakra-ui/react";
import index from "../../../../../theme/foundations/index";
import { AiOutlineClockCircle } from "react-icons/ai"; 

export const DeliveryTime = () => {
  const FoodsIcon: React.FC = () => {
    return (
      <svg
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="96" height="96" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_3709_12759" transform="scale(0.0104167)" />
          </pattern>
          <image
            id="image0_3709_12759"
            width="96"
            height="96"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGLklEQVR4nO2cbWxTVRjHD8qLLwRjJCQKnwbu3i2BaJa2h/VKe1dQZBUSkxljiNFEUaEFlQ8YP0CMiSLLbZzxg0uMAW+n7g4EYiDRFklkLQ7G4APtxBh8IcEXAnO0oDjlmNt2o/e0tL33dve0d88v+SfN+uQ2+f/Pec5z264IAQAAAAAAAAAATAEiinJXRJHfjyg9L1WjDtDBV73yE9He8PmoEiaR3vBI5PNd95ipA3RwuKdnblSR/1RNnVCv/KbROsAA0V759XxjI4p86eDBrllG6wCdHJTlOVFFvqgxty+8xmgdYICoIoe07SW8y0wdoJNDn4WXaYxVwmfM1AE6OdLTczfV36+aqQN08uWej+dRK3vUTB2gk6gS3kyNmENm6gAdqHe39HQTVeStRusAnagmUqZeVM02WgfoJKrIJ6m+vtlMHaCTiCKn8o1VD1ozdYBOor3hK/nGqqOmmTpAJ+rNlKa19MkPmakDcqR9TlJLQlONdA2YDgH42BsPO8DH3nxoQT4IAM6AeoF8j2aR0yhIkmiAJFGaJNGVzOME2khOo5mVXqcWVn3dtSAyjO4jSTREkojcRCdJEt1bybVYG153AZBBNIMk0IkS5meVQINqbbnrsTa8/gJIoBfLmj+uYbSu3PWmXACZ3q326ST6Nte70ySBjpIkWq/27oySaIPm+ezj7PNJdERj8gAiZB8iZC8i5FjBLjhLEiieu0Yq9zqB8TOCfIfmsjacVpznCxTjuN/iHPdprKnpQXPmn0HzSRKdKtE2jmdU+vlRzd9U4/ty2lfhzsi2sOdIEo3UQwB5QfwT47hnja/8UuYb1V4DAeSpngLIiOPGYo2NDv0BZNsOqbqO5ULYV6QF2TGA7E7Yoz+A7LxeWe+upgZKvw5rw2kV+IbQLf2NjWs1AfD8BSMBpKrZOkiVWlStB6By2OOZTrchI9NOVXs3mUoBNDfPpnbAqLlppwq9m1TpjKiHAGINDfOoM+BX66adST4r0nUQwNGmpvupHXDWumlnkltVuh52QFPTMuoMGKp82oEAiNkA4hz3FBXA3sqnnUnu4WQq7ACe30LdC3RNPIlDAqlnpesjgHB+AEd5/lUIwGddAHGeP0Udwn4IwGdNAPEFC26Pcdw1TQANDTe+7si6hWCbt6B+nn+Y6v8/aApYG4htHkCc5zup9hOGAHyWBjBM7YCnqQDcadarGNt0B/RznEiZ/9dgQ4P2nz2w5D7H2kRs0wDiPL+bCmB3wYjkCrmHWJuIbRhAnOMWq287U/P/44UBSMJO1iZimwVwurl5ZoznB6jVP6x+OFNsB2xibSK2UQCDLS0z1G9A0B9DFl39mQDeFZawNhHbKIAYx50o8kH8F0XNz5uEzrA2EtskgIIP4Hn+xwGeL/2jT66Q8BZrI7ENA4hx3C/9ixYtLGl+ZgdIeD4OCddYm4ltFECM5/dr3vMph0sSwqzNxPYIoDvGca1IL607Whe6JPffrA3FOnW5BkwfV6rN+R8yA5aETtaGYp06/yh74yfU5vzDVADOLuccV0j4ibWpWIeGV7vYGz8hR8JUAJldEBLcLsn9L2tjcYWKd+BaCuBr0wFkQpCErayNxRXqo+eX1oDxWaXanG9XJQBE0LR6mYpefq21lnbAyuoEgBDybPPchiXhMGuDcRm17RDIpRWsjXeSlM9x9XePZzaqJi3dLXdgyX2Itcm4jPqeYX8OpNoc3WgyWNK54k4cEg6wNhmX0JNvuElqOeMAluPFaLLoUDpuxSFhO2ujcQkdWMtyFzg+QVawVBI6XJJ7hLXZuIge2e4m51YxCeBCasVS637WTH3LAkvCN6wNx0X0ypZWctnCVpTyOcbSPseNb7npIeAXB4N+kYBEyz1QvUcBv/cFMF9ksgA3tovr0PoOz+yA3zsKIYjWBtAupoIrV84Zb0PdEIBodQAfTJwDm1Z5HoAARKvbT4vmMA62i8chBNGq1X+8YBoKPuZdAwGIlgSwoV1cfbORFM4C/6Sv/g9L3RZMC/rFd4J+8TrsBrHa5l8P+L3vbfN4ppe9Odu0yusK+r27Au3enwN+cQzCEA2ZrnqX83BnoL3NWdZ4AAAAAAAAAAAAAAAAANmZ/wECKYIx2nVegwAAAABJRU5ErkJggg=="
          />
        </defs>
      </svg>
    );
  };

  const calculateDeliveryDateTime = () => {
    const now = new Date();

    // Assuming delivery is scheduled for 3 days from the current date
    const deliveryDate = new Date(now);
    deliveryDate.setDate(now.getDate());

    // Calculate delivery time based on current user time
    const deliveryTimeStart = new Date(now);
    deliveryTimeStart.setMinutes(now.getMinutes() + 30);

    const deliveryTimeEnd = new Date(deliveryTimeStart);
    deliveryTimeEnd.setMinutes(deliveryTimeEnd.getMinutes() + 15);

    // Format the date and time
    const formattedDeliveryDateTime = {
      date: deliveryDate.toLocaleDateString(undefined,  { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }),
      timeStart: deliveryTimeStart.toLocaleTimeString(undefined, { hour: 'numeric', minute: 'numeric' }),
      timeEnd: deliveryTimeEnd.toLocaleTimeString(undefined, { hour: 'numeric', minute: 'numeric' }),
    };

    return formattedDeliveryDateTime;
  };

  return (
    <Box>
      <Flex flexDirection={"column"} alignItems={"center"}>
      <Box
        bg={index.colors.grey[100]}
        minHeight={200}
        minWidth={300}
        maxWidth={500}
        maxHeight={200}
        borderRadius={20}
        p={10}
        mt={10}
        display={"flex"}
        flexDir={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
        gap={20}
      >
        <FoodsIcon />
        <Box
          display={"flex"}
          flexDirection={"column"}
          color={index.colors.black}
        >
           <Text
              fontSize={index.textStyles.h2.fontSize}
              fontWeight={index.textStyles.h2.fontWeight}
              mb={5} 
            >
              {calculateDeliveryDateTime().date}
            </Text>

            <Text>
              Delivery time
            </Text>
            <Flex alignItems="center">
              <AiOutlineClockCircle size={24} color={index.colors.brand[200]} />
              <Text
                fontSize={index.textStyles.h1.fontSize}
                fontWeight={index.textStyles.h1.fontWeight}
                ml={2} // Add some margin to the left for spacing
              >
                {`${calculateDeliveryDateTime().timeStart} - ${calculateDeliveryDateTime().timeEnd}`}
              </Text>
            </Flex>
        </Box>
      </Box>
      </Flex>
    </Box>
  );
};
