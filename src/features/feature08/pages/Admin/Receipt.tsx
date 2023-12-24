/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Flex, Box, Text, Spacer } from '@chakra-ui/react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Axios } from '../../../../AxiosInstance';
import { useQuery } from '@tanstack/react-query';
import { formatDate1 } from '../../../../functions/formatDatetime';

interface OrderResponse {
  orders: orders[];
}

interface orders {
  reservedId: number;
  orderId: number;
  total_amount: string;
  status: string;
  order_date: string;
  isDelivery: boolean;
  timestamp: string;
}

export const Receipt: React.FC = () => {
  const location = useLocation();
  const [fromDate, setFromDate] = useState('All time');
  const [toDate, setToDate] = useState('All time');
  const { venueId } = useParams();
  const [isFiltered, setIsFiltered] = useState<boolean>(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setFromDate(params.get('fromDate') || 'All time');
    setToDate(params.get('toDate') || 'All time');
  }, [location]);

  const fetchOrderData = async () => {
    try {
      const orderRes = await Axios.get<OrderResponse>(`/feature8/getTransactionReserveIdByVenueIdAndEqualToStatusCompleted/${venueId}`);
      const orderData = orderRes.data || { orders: [] };
      return orderData;
    } catch (error) {
      console.error('Error fetching order data:', error);
      return { orders: [] };
    }
  };

  const fetchOrderTimeFilterData = async () => {
    try {
      const orderResponseFilter = await Axios.get<OrderResponse>(`feature8/getTransactionReserveIdByVenueIdAndEqualToStatusCompletedAndFiltered/${venueId}`, {
        params: {
          fromTime: fromDate,
          toTime: toDate,
        },
      });
      const orderFilterData = orderResponseFilter.data || { orders: [] };
      return orderFilterData;
    } catch (error) {
      console.error('Error fetching filtered order data:', error);
      return { orders: [] };
    }
  };

  const { data, isLoading } = useQuery(['fetchOrderData', venueId || ''], fetchOrderData);

  const orderData = (data?.orders as orders[]) || [];

  const [dataFiltered, setDataFiltered] = useState<orders[]>([]);

        

      //   setDataFiltered(response.ordersss);
      //   setIsFiltered(true);
      // } catch (error) {
      //   console.error('Error fetching filtered order data:', error);
      // }
      useEffect(() => {
        if (fromDate !== 'All time' && toDate !== 'All time') {
          // Execute the code when fromTime is not 'All time'
      
          const fetchData = async () => {
            try {
              const response = await fetchOrderTimeFilterData();
              setDataFiltered(response.orders);
              setIsFiltered(true);
            } catch (error) {
              console.error('Error fetching filtered order data:', error);
            }
          };
      
          fetchData();
        } else {
          // Execute alternative code when fromTime is 'All time'
          // For example, you might want to reset the dataFiltered and isFiltered states
          setDataFiltered([]);
          setIsFiltered(false);
        }
      }, [ fromDate, toDate, venueId]);
      


  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isFiltered
        ? dataFiltered.map((order, index) => (
            <Link key={index} to={`/venue/${venueId}/admin/checkbill/${order?.orderId}`}>
              <Flex
                bg="blackAlpha.300"
                h="75px"
                align="center"
                borderRadius="10px"
                transition="background-color 0.3s ease-in-out"
                _hover={{ bg: 'blackAlpha.400' }}
                _active={{ bg: 'blackAlpha.200' }}
                marginBottom="10px"
                cursor="pointer"
              >
                <Box ml="3">
                  <Text fontWeight="bold">Order ID #{order?.orderId}</Text>
                  <Text fontSize="sm">{order?.total_amount} Baht</Text>
                </Box>
                <Spacer />
                <Box>
                  <Text fontSize="md" textAlign="right" paddingRight={3}>
                    {formatDate1(order.timestamp)}
                  </Text>
                </Box>
              </Flex>
            </Link>
          ))
        : orderData.map((order, index) => (
          
            <Link key={index} to={`/admin/checkbill/${order?.orderId}/${venueId}`}>
              <Flex
                bg="blackAlpha.300"
                h="75px"
                align="center"
                borderRadius="10px"
                transition="background-color 0.3s ease-in-out"
                _hover={{ bg: 'blackAlpha.400' }}
                _active={{ bg: 'blackAlpha.200' }}
                marginBottom="10px"
                cursor="pointer"
              >
                <Box ml="3">
                  <Text fontWeight="bold">Order ID #{order?.orderId}</Text>
                  <Text fontSize="sm">{order?.total_amount} Baht</Text>
                </Box>
                <Spacer />
                <Box>
                  <Text fontSize="md" textAlign="right" paddingRight={3}>
                    {formatDate1(order?.timestamp)}
                  </Text>
                </Box>
              </Flex>
            </Link>
          ))}
    </div>
  );
};
