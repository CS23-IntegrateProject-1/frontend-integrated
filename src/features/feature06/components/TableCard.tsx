import { Box, Card, Image, Heading, Text } from "@chakra-ui/react";
import { TextStyle } from "../../../theme/TextStyle";
import { FC } from "react";

interface TableCardProps {
  tableno?: number;
  type?: string;
  status?: string;
  tableId?: string;
  image?: string;
}
export const TableCard: FC<TableCardProps> = ({
  tableno,
  type,
  status,
  image,
}) => {
  return (
    <Card
      width="320px" // Set the width to 320px
      height="130px" // Set the height to 129px
      flexDirection={"row"}
      overflow="hidden"
      borderRadius={"10px"}
      background={"rgba(95, 13, 187, 0.40)"}
      alignContent={"center"}
    >
      <Image
        objectFit="cover"
        width="100px" // Set the width to 100px
        height="100px" // Set the height to 100px
        borderRadius="10px"
        src={import.meta.env.VITE_BACKEND_URL + image}
        alt="Caffe Latte"
        margin={"15px"}
      />
      <Box
        className="info"
        display={"flex"}
        flexDirection={"column"}
        columnGap={"10px"}
        alignItems={"space-between"}
        justifyContent={"center"}
        marginLeft={"20px"}
      >
        <Heading style={TextStyle.h1} color={"white"}>
          Table no: {tableno}
        </Heading>
        <Box
          className="seat"
          display={"flex"}
          flexDirection={"row"}
          marginTop={"8px"}
        >
          <Text color={"white"}>{type}</Text>
        </Box>
        <Box className="size" display={"flex"} flexDirection={"row"}>
          <Text color={"white"}>
            {status === "Available" ? (
              <Text color={"#007E33"}>Available</Text>
            ) : status === "Unavailable" ? (
              <Text color={"#C00"}>Booked</Text>
            ) : (
              ""
            )}
          </Text>
        </Box>
      </Box>
    </Card>
  );
};
