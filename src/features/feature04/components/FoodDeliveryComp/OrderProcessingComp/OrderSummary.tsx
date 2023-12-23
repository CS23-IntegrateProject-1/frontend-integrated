import { Box, Text, Flex, Divider } from "@chakra-ui/react";
import index from "../../../../../theme/foundations/index";
const SummaryIcon: React.FC = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="#A533C8"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.3333 2.5H15.76C15.2 1.05 13.7333 0 12 0C10.2667 0 8.8 1.05 8.24 2.5H2.66667C1.2 2.5 0 3.625 0 5V22.5C0 23.875 1.2 25 2.66667 25H21.3333C22.8 25 24 23.875 24 22.5V5C24 3.625 22.8 2.5 21.3333 2.5ZM12 2.5C12.7333 2.5 13.3333 3.0625 13.3333 3.75C13.3333 4.4375 12.7333 5 12 5C11.2667 5 10.6667 4.4375 10.6667 3.75C10.6667 3.0625 11.2667 2.5 12 2.5ZM14.6667 20H5.33333V17.5H14.6667V20ZM18.6667 15H5.33333V12.5H18.6667V15ZM18.6667 10H5.33333V7.5H18.6667V10Z"
        fill="#A533C8"
      />
    </svg>
  );
};
interface order {
  amount: number;
  restaurant: string;
  size: string;
  price: number;
}

interface OrderSummaryProps {
  orders: order[];
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({ orders }) => {
  const calculateTotalAmount = () => {
    return orders.reduce((total, order) => total + order.price * order.amount, 0);
  };

  return (
    <Box>
      <Flex display={"flex"} justifyContent={"center"} color={index.colors.black}>
        <Box
          borderRadius={10}
          backgroundColor={index.colors.grey[100]}
          width={600}
          minWidth={300}
          height={"auto"}
          p={5}
        >
          <Flex flexDirection={"column"} gap={2}>
            <Box display={"flex"} flexDirection={"row"} gap={2}>
              <SummaryIcon />
              <Text color={index.colors.black}>Order Summary</Text>
            </Box>

            <Flex flexDir={"row"} justifyContent={"space-between"}>
              {orders.map((order, index) => (
                <div key={index}>
                  <Text>
                    {order.amount}X {order.restaurant}
                  </Text>
                  <Text>{order.size}</Text>
                 
                </div>
              ))}
              <Box>
                {orders.map((order, index) => (
                  <div key={index}>
                    <Text>${order.price}</Text>
                  </div>
                ))}
              </Box>
            </Flex>
            <Divider borderColor={index.colors.black} />
            <Flex flexDir={"row"} justifyContent={"space-between"}>
              <Text>Subtotal</Text>
              <Text>${calculateTotalAmount()}</Text>
            </Flex>
            <Flex flexDir={"row"} justifyContent={"space-between"}>
              <Text>Delivery</Text>
              <Text>Free</Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
