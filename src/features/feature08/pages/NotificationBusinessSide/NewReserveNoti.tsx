import { useState, useEffect } from 'react';
import {
  Card,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  Box,
  Text,
} from "@chakra-ui/react";
import { useParams } from 'react-router-dom';
import { Axios } from '../../../../AxiosInstance';

export const NewReserveNoti = () => {
  const [tableno, setTableNo] = useState<{ tableNo: string }>({ tableNo: '' });
  const { venueId } = useParams();
  const { reservationId } = useParams();

  useEffect(() => {
    const fetchTableNumber = async () => {
      try {
        
        const response = await Axios.get(`/feature8/reservation/${venueId}/${reservationId}`);
        const tableNumberData = response.data;
        setTableNo(tableNumberData);
      } catch (error) {
        console.error('Error fetching table number:', error);
      }
    };  

    fetchTableNumber();
  }, [reservationId, venueId]);


  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      margin={[3, 5, 7]}
      width={["100%", "80%", "70%"]}
    >
      <Card width={"70%"} backgroundColor={""} color={"white"} border={"1px solid #DEBEF6"}>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="lg">
                New Reservation
              </Heading>
              <Text size={"lg"}>
              {typeof tableno === 'string' ? 'Loading table number...' : `You have got the new reservation on table number ${tableno.tableNo}`}


              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};
