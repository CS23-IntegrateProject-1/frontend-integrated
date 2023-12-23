import { Box } from '@chakra-ui/react';

interface ImgVoucer {
  url_image: string;
}

export function ImageVoucher(props: ImgVoucer) {
  return (
    <Box
      // minW="400px"
      minW={"100%"}
      height="273px"
    >
      <img
        src={`${import.meta.env.VITE_BACKEND_URL}${props.url_image}` || ""}
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </Box>
  );
}
