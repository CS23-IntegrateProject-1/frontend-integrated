/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Flex, Box, Text, Spacer } from '@chakra-ui/react';
import { useLocation, useParams } from 'react-router-dom';
import { Axios } from '../../../../AxiosInstance';
import { useQuery } from '@tanstack/react-query';
import { formatDate1 } from '../../../../functions/formatDatetime';

interface OrderResponse {
  ordersss: orders[];
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

export const Receipt = () => {
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
      const orderData = orderRes.data || { ordersss: [] };
      return { orderData };
    } catch (error) {
      console.error('Error fetching order data:', error);
      return { orderData: { ordersss: [] } };
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
      const orderFilterData = orderResponseFilter.data || { ordersss: [] };
      return { orderFilterData };
    } catch (error) {
      console.error('Error fetching filtered order data:', error);
      return { orderFilterData: { ordersss: [] } };
    }
  };

  const { data, isLoading } = useQuery(['fetchOrderData', venueId || ''], () => fetchOrderData());

  const orderData = (data?.orderData?.ordersss as orders[]) || [];

  const [dataFiltered, setDataFiltered] = useState<orders[]>([]);

  useEffect(() => {
    setIsFiltered(false);
    if (fromDate !== 'All time' && toDate !== 'All time') {
      fetchOrderTimeFilterData()
        .then((response) => {
          setDataFiltered(response.orderFilterData.ordersss);
          setIsFiltered(true);
        })
        .catch((error) => {
          console.error('Error fetching filtered order data:', error);
        });
    }
  }, [fromDate, toDate, venueId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isFiltered
        ? dataFiltered.map((order, index) => (
            <Flex
              key={index}
              bg="blackAlpha.300"
              h="75px"
              align="center"
              borderRadius="10px"
              transition="background-color 0.3s ease-in-out"
              _hover={{ bg: 'blackAlpha.400' }}
              _active={{ bg: 'blackAlpha.200' }}
              marginBottom="10px"
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
          ))
          : orderData.map((order, index) => (
            <Flex
              key={index}
              bg="blackAlpha.300"
              h="75px"
              align="center"
              borderRadius="10px"
              transition="background-color 0.3s ease-in-out"
              _hover={{ bg: 'blackAlpha.400' }}
              _active={{ bg: 'blackAlpha.200' }}
              marginBottom="10px"
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
          ))}
    </div>
  );
};
