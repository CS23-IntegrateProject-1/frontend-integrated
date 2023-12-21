/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Center,
  Image,
  Text,
  Grid,
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { TextStyle } from "../../../theme/TextStyle";
import React, { useEffect, useState } from "react";
import { MovieSeat } from "../Components/MovieSeat/MovieSeat";
import { TypeOfSeatCard } from "../Components/MovieSeat/TypeOfSeat";
import { useParams } from "react-router-dom";
import { getSeatByShowId } from "../../../api/movie/getSeatByShowId";

const ScreenPage: React.FC = () => {
  const posterWidth = "25vh"; // Replace with your desired movie poster width
  const posterHeight = "40vh"; // Replace with your desired movie poster height
  const filmId = parseInt(useParams<{ filmId: string }>().filmId || "0");
  const theaterId =parseInt(useParams<{ theaterId: string }>().theaterId || "0");
  const showId = parseInt(useParams<{ showId: string }>().showId || "0");

  const [datas, setDatas] = useState<any[]>([]);

  const fetchMovieToday = async () => {
    try {
      const response = await getSeatByShowId(showId);
      setDatas(response);
      console.log(response);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    fetchMovieToday();
  });


  return (
    <>
      {/* Movie Info at top*/}
      <Box display={"flex"} flexDirection={"row"} paddingBottom={"7"}>
        <Box>
          <Image
            src={movies.poster_img}
            alt={movies.name}
            borderRadius="lg"
            width={posterWidth}
            height={posterHeight}
          />
        </Box>
        <Box display={"flex"} flexDirection={"column"} padding={"4"}>
          <Text color={"gold"} style={TextStyle.h1} mb={2}>
            {movies.name}
          </Text>
          <Text style={TextStyle.body1} mb={2}>
            {movies.rate}
          </Text>
          <Text style={TextStyle.body1} mb={2}>
            {movies.duration} minutes
          </Text>
        </Box>
      </Box>
      {/* Place + Theater name and time  */}
      <Box>
        <Text style={TextStyle.body1} mb={2}>
          {theaterInfo.name}
        </Text>
        <Box display="flex" flexDirection="row">
          <Center style={TextStyle.body1} mb={2} mr={20}>
            Screen {allShowDetails?.show.Screens.screen_number}
          </Center>
          <Center style={TextStyle.body1} mb={2} mr={2}>
            {allShowDetails?.show.date
              ? formatDate(allShowDetails?.show.date)
              : ""}
          </Center>
          <Center
            style={TextStyle.body1}
            ml={20}
            backgroundColor={"gold"}
            padding="0.5%"
            borderRadius="10%"
          >
            {allShowDetails?.startTime.slice(0, 5)}
          </Center>
        </Box>
      </Box>
      {/* Screen */}
      <Center
        style={TextStyle.h2}
        mt={10}
        mb={10}
        borderWidth="0.2vw"
        borderColor="gold"
        p={1} // Padding to make the border visible
      >
        screen
      </Center>

      {/* seat */}
      <Center flexDir="column">
        {Object.entries(seatsByRow)
          .sort((a, b) => parseInt(b[0], 10) - parseInt(a[0], 10))
          .map(([row, seatsInRow]) => {
            const rowLetter = String.fromCharCode(64 + parseInt(row, 10));

            return (
              <Flex key={row} align="center" mb={4}>
                <Text textAlign="right" fontWeight="bold" mr={4}>
                  {rowLetter}
                </Text>
                {seatsInRow.map((seat) => {
                  const seatIdentifier = `${rowLetter}${seat.seatNo}`;
                  return (
                    <MovieSeat
                      key={seat.seatId}
                      seatId={seat.seatId}
                      isSelected={selectedSeats.includes(seatIdentifier)}
                      // isNotAvailable={isNotAvailable(seat.seatId)}
                      onSeatClick={(seatId: number) => {
                        if (isNotAvailable(seatId)) {
                          return;
                        }
                        handleSeatClick(seatId);
                      }}
                      type={seat.Seat_Types.typeName}
                    />
                  );
                })}
              </Flex>
            );
          })}
      </Center>
      {/* TypeCard */}
      <Center>
        <Grid templateColumns="repeat(3, 1fr)" gap={20}>
          {seatType.map((type) => (
            <Box key={String(type)}>
              <TypeOfSeatCard type={type} key={String(type.seatTypeId)} />
            </Box>
          ))}
        </Grid>
      </Center>
      <Flex justifyContent="center" marginTop="20px">
        <Text>
          Selected Seat No:{" "}
          {selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}
        </Text>
        <Text marginLeft="20px">Total Price: {totalPrice} THB</Text>
      </Flex>

      {/* Buy buton */}
      <Center marginTop={6}>
        <Button
          bg="gold"
          _hover={{ bg: "gold" }}
          size="md"
          width="15rem"
          onClick={handleSelect} // Trigger function on button click
        >
          BUY
        </Button>
      </Center>

      {/* Modal for displaying the message */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="black">Please select a seat</ModalHeader>
          <ModalBody color="black">
            You haven't selected a seat yet. Please select a seat before
            proceeding.
          </ModalBody>
          <ModalFooter>
            <Button bg="gold" _hover={{ bg: "gold" }} mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ScreenPage;
