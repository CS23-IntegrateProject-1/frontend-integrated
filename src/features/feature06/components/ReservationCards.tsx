import { Box, Card, Image, Heading, Text, Button } from "@chakra-ui/react";
import { TextStyle } from "../../../theme/TextStyle";
import { FC } from "react";
import { useNavigate } from "react-router";

interface ReservationCardsProps {
  src?: string;
  name?: string;
  text?: string;
  star?: string;
  startPrice?: number;
  reservationId?: number;
  venueId?: number;
  isReview?: boolean;
  status?: string;
  isPaidDeposit?: string;
  branchId?: number;
}

export const ReservationCards: FC<ReservationCardsProps> = ({
  src,
  text,
  name,
  star,
  startPrice,
  venueId,
  isReview,
  status,
  isPaidDeposit,
  branchId
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    const path = `/getreservation-detail/${venueId}/${branchId}}`;
    navigate(path);
  };

  return (
    <Card
      width="320px"
      height="130px"
      flexDirection={"row"}
      overflow="hidden"
      variant="outline"
      background={"none"}
      alignContent={"center"}
      onClick={handleClick}
      style={{ borderColor: "#DEBEF6" }}
    >
      <Image
        objectFit="cover"
        width="100px"
        height="100px"
        borderRadius="10px"
        src={src || "https://via.placeholder.com/100"}
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
        <Heading
          style={TextStyle.h1}
          color={"white"}
          fontWeight={"700px"}
          marginLeft={"-15px"}
        >
          {name}
        </Heading>
        <Box
          className="star"
          display={"flex"}
          flexDirection={"row"}
          marginLeft={-15}
          marginTop={0}
        >
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
            color={"white"}
            marginTop={0.5}
            marginLeft={"10px"}
            fontWeight={700}
            fontSize={10}
          >
            {star}
          </Text>
        </Box>
        <Box className="info" display={"flex"} flexDirection={"row"}>
          <Text
            color={"white"}
            marginTop={1}
            marginLeft={"-15px"}
            fontWeight={400}
            fontSize={10}
            style={{ width: "165px", height: "23px" }}
            flexShrink={0}
          >
            {text ? text.slice(0, 80) + "..." : ""}
          </Text>
        </Box>
        <Box className="size" display={"flex"} flexDirection={"row"}>
          <Text
            color={"white"}
            marginLeft={"-15px"}
            fontWeight={400}
            fontSize={10}
            marginTop={2}
          >
            Start : {startPrice} Baht
          </Text>
        </Box>
      </Box>
      <Box
        className="NextIcon"
        display={"flex"}
        flexDirection={"column"}
        alignContent={"center"}
        justifyContent={"center"}
        marginLeft={"-12px"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z"
            fill="#F6F6F6"
          />
        </svg>
      </Box>
      <Box
        position="absolute"
        className="NextIcon"
        display={"flex"}
        flexDirection={"column"}
        alignContent={"center"}
        justifyContent={"center"}
        marginLeft={"-12px"}
      >
        {isReview === false && status === "Check_out" ? (
          // <Link to={`/review/${venueId}/${reservationId}`}>
          <Box
            width="60px"
            height="30px"
            marginLeft="260px"
            marginTop="86px"
            fontSize="12px"
            color="white"
            backgroundColor="#A533C8"
            borderRadius="6px"
          >
            <Text
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              mt={1.5}
            >
              Review
            </Text>
          </Box>
        ) : // </Link>
        isReview === true && status === "Check_out" ? (
          <Box
            width="60px"
            height="30px"
            marginLeft="260px"
            marginTop="86px"
            fontSize="12px"
            color="#1CDA68"
          >
            Already Review
          </Box>
        ) : isPaidDeposit === "Pending" &&
          status === "Pending" &&
          name !== "MIK" ? (
          <Box
            width="50px"
            height="20px"
            marginLeft="260px"
            marginTop="86px"
            fontSize="12px"
            color="white"
            backgroundColor="red"
            borderRadius="6px"
            position={"absolute"}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            mb={6}
          >
            <Text fontWeight={700} fontSize={10} marginTop={0.5}>
              not paid
            </Text>
          </Box>
        ) : (
          ""
        )}
      </Box>
    </Card>
  );
};
