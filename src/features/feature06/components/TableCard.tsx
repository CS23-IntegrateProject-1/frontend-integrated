import { Box , Card , Image , Stack , CardBody , Heading , Text , CardFooter , Button} from "@chakra-ui/react"
import { TextStyle } from "../../../theme/TextStyle"
import { FC } from "react";

interface TableCardProps {
    tableno?: number;
    type?: string;
    status?: string;
    tableId?: string;
}
export const TableCard: FC<TableCardProps> = ({
    tableno,
    type,
    status,
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
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
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
}