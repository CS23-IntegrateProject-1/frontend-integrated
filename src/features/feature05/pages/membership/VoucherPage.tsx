import { Box, Text, Button } from "@chakra-ui/react";
import { ImageVoucher } from "../../components/membership/ImageVoucher";
import { Circle } from "@chakra-ui/react";

const images = [
  {
    key: 1,
    url: "https://www.w3schools.com/tags/img_girl.jpg",
  },
];

export function VoucherPage() {
  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        {/* image */}
        <Box
          display="flex"
          // maxH="273px"
          maxW={"400px"}
          w={"100%"}
        >
          {images.map((image, index) => (
            <ImageVoucher key={index} url_image={image.url} />
          ))}
        </Box>

        {/* coupon */}

        <Box
          // width="400px"
          height="102px"
          backgroundColor="#5F0DBB"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          w={"100%"}
          maxW={"400px"}
        >
          <Text fontSize="24px" marginLeft="20px" fontWeight="bold">
            Discount 20%
          </Text>
          <Text fontSize="16px" marginLeft="20px">
            Use 1,000 Points
          </Text>
          <Circle
            size="56px"
            bg="#200944"
            position="absolute"
            right="-8"
          ></Circle>
        </Box>

        {/* description */}
        <Box
          // width="354px"
          // height="101px"
          display="flex"
          justifyContent="center"
          marginTop="20px"
          w={"100%"}
          maxW={"400px"}
        >
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio esse
            mollitia ipsa consectetur nesciunt facere facilis voluptatum ducimus
            at, nulla natus, sequi deleniti aliquam, cupiditate autem neque
            maiores aliquid quod!
          </Text>
        </Box>

        {/* redeem */}
        <Box
          display="flex"
          w={"100%"}
          maxW={"400px"}
          justifyContent={"flex-end"}
          my={"1em"}
        >
          <Button backgroundColor="#5F0DBB" color="white">
            Redeem
          </Button>
        </Box>
      </Box>
    </>
  );
}
