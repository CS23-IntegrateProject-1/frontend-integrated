import { Box } from '@chakra-ui/react';

interface Card {
  url_image: string;
}

function ImageBox(props: Card) {
  return (
    <Box minW="193px" height="129px">
      <img
        src={`${import.meta.env.VITE_BACKEND_URL}${props.url_image}`}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
    </Box>
  );
}

export default ImageBox;
