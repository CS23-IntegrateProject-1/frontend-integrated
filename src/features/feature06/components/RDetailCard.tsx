import {
  Box,
  Image,
  Text,
  Flex,
} from "@chakra-ui/react";
import { FC } from "react";

interface RDetailCardProps {
  name?: string;
  star?: string;
  location?: string;
  venueId?: number;
  src?: string;
}

export const RDetailCard: FC<RDetailCardProps> = ({
  name,
  star,
  location,
}) => {
  const images: string[] = ["1", "2", "3", "4", "5", "6"];
  
  return (
    <Box
      width="320px"
      height="300px"
      flexDirection={"row"}
      overflow="hidden"
      background={"none"}
      alignContent={"center"}
      style={{ borderColor: "#DEBEF6" }}
    >
      <Box w={"100vw"} pos={"absolute"} left={0}>
        <Flex overflow={"scroll"}>
          {images.map((image) => (
            <Image
              key={image}
              ml={"10px"}
              minWidth="320px"
              height="168px"
              borderRadius="15px"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Barbieri_-_ViaSophia25668.jpg/1200px-Barbieri_-_ViaSophia25668.jpg"
              // src ={src}
              alt="Caffe Latte"
            />
          ))}
        </Flex>
      </Box>
      <Box height="168px" />
      <Text
        color="#FFF"
        /* H1 */
        fontFamily="Roboto"
        fontSize="22px"
        fontStyle="normal"
        fontWeight="700"
        line-height="normal"
        marginTop="20px"
        marginBottom="6px"
      >
        {name}
      </Text>
      <Text
        color="#FFF"
        /* H1 */
        fontFamily="Roboto"
        fontSize="16px"
        fontStyle="normal"
        fontWeight="400"
        line-height="normal"
        marginTop="-5px"
      >{location}
      </Text>
      <Box marginLeft="4px" marginTop="4px">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M8.5 12.4479L12.517 15L11.451 10.19L15 6.95368L10.3265 6.53632L8.5 2L6.6735 6.53632L2 6.95368L5.549 10.19L4.483 15L8.5 12.4479Z"
            fill="#F6F6F6"
            stroke="#F6F6F6"
          />
        </svg>
        <Text
          color="#F6F6F6"
          /* H5 */
          fontFamily="Roboto"
          fontSize="12px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="normal"
          marginTop="-13px"
          marginLeft="19px"
        >
          {star}
        </Text>
      </Box>
    </Box>
  );
};
