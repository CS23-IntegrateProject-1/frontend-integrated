import {
    Card,
    Heading,
    CardBody,
    Stack,
    StackDivider,
    Box,
    Text
  } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CheckOutNoti = () => {
  const { venueId } = useParams();
  const { reservationId } = useParams();
  const [tableno, setTableNo] = useState<{ tableNo?:number }>();

  useEffect(() => {
    const fetchTableNumber = async () => {
      try {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        const response = await axios.get(`${backendUrl}/feature8/reservation/${venueId}/${reservationId}`);
        const tableNumberData = response.data;
        setTableNo(tableNumberData);
      } catch (error) {
        console.error('Error fetching table number:', error);
      }
    };  

    fetchTableNumber();
  }, [reservationId]);

    console.log(tableno)


    return (
        <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      margin={[3, 5, 7]} // Responsive margin for different screen sizes
      width={["100%", "80%", "70%"]} // Responsive width for different screen sizes
    >
      <Card width={"70%"} backgroundColor={""} color={"white"} border={"1px solid #DEBEF6"}>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="md" marginBottom={2}>
                Check out
              </Heading>
              <Text>
                Table number 1 wanted to checkout
              </Text>
              <Text decoration={'underline'}>
                  Table number {tableno?.tableNo || 'N/A'}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
    )
}