import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import index from "../../.././../../theme/foundations/index";
interface AllInformation {
  mainAddress: string;
  subAddress: string;
  cardTypeImg: string;
  cardType: string;
  cardNo: number;
  amount: number;
  restaurant: string;
  size: string;
  price: number;
}
export const YourOrderStatusComp = (props: AllInformation) => {
  const PinIcon: React.FC = () => {
    return (
      <svg
        width="19"
        height="17"
        viewBox="0 0 19 17"
        fill={index.colors.brand[200]}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 0C2.68286 0 0 2.504 0 5.6C0 9.8 6 16 6 16C6 16 12 9.8 12 5.6C12 2.504 9.31714 0 6 0ZM6 7.6C5.43168 7.6 4.88663 7.38929 4.48477 7.01421C4.08291 6.63914 3.85714 6.13043 3.85714 5.6C3.85714 5.06957 4.08291 4.56086 4.48477 4.18579C4.88663 3.81071 5.43168 3.6 6 3.6C6.56832 3.6 7.11337 3.81071 7.51523 4.18579C7.91709 4.56086 8.14286 5.06957 8.14286 5.6C8.14286 6.13043 7.91709 6.63914 7.51523 7.01421C7.11337 7.38929 6.56832 7.6 6 7.6Z" />
      </svg>
    );
  };

  const PaymentIcon: React.FC = () => {
    return (
      <svg
        width="24"
        height="23"
        viewBox="0 0 24 23"
        fill="#A533C8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.204 0.0672533C18.5356 -0.0156915 18.8817 -0.0219995 19.2161 0.0488083C19.5505 0.119616 19.8644 0.265678 20.1339 0.475907C20.4034 0.686135 20.6214 0.955003 20.7715 1.2621C20.9216 1.5692 20.9997 1.90645 21 2.24825V4.07825H21.75C22.3467 4.07825 22.919 4.31531 23.341 4.73726C23.7629 5.15922 24 5.73152 24 6.32825V19.8283C24 20.425 23.7629 20.9973 23.341 21.4192C22.919 21.8412 22.3467 22.0783 21.75 22.0783H2.25C1.65326 22.0783 1.08097 21.8412 0.65901 21.4192C0.237053 20.9973 1.47137e-07 20.425 1.47137e-07 19.8283V6.32825C-0.000209191 5.74903 0.222964 5.19205 0.623066 4.77322C1.02317 4.3544 1.56938 4.10601 2.148 4.07975L18.204 0.0672533ZM8.343 4.07825H19.5V2.24825C19.4997 2.13446 19.4736 2.02221 19.4235 1.92002C19.3735 1.81782 19.3008 1.72836 19.2111 1.65841C19.1213 1.58845 19.0168 1.53984 18.9055 1.51625C18.7941 1.49266 18.6789 1.49471 18.5685 1.52225L8.343 4.07825ZM2.25 5.57825C2.05109 5.57825 1.86032 5.65727 1.71967 5.79792C1.57902 5.93858 1.5 6.12934 1.5 6.32825V19.8283C1.5 20.0272 1.57902 20.2179 1.71967 20.3586C1.86032 20.4992 2.05109 20.5783 2.25 20.5783H21.75C21.9489 20.5783 22.1397 20.4992 22.2803 20.3586C22.421 20.2179 22.5 20.0272 22.5 19.8283V6.32825C22.5 6.12934 22.421 5.93858 22.2803 5.79792C22.1397 5.65727 21.9489 5.57825 21.75 5.57825H2.25Z"
          fill="#A533C8"
        />
      </svg>
    );
  };
  const HideCardNumber = `• • • •${String(props.cardNo).slice(11, 15)}`;

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

  return (
    <Box>
      <Flex display={"flex"} justifyContent={"center"}>
        <Box
          borderRadius={10}
          backgroundColor={index.colors.grey[100]}
          width={600}
          minWidth={300}
          height={"auto"}
          p={5}
        >
          <Flex flexDirection={"row"}>
            <PinIcon />
            <Text color={index.colors.black}>Delivery address</Text>
          </Flex>
          <Flex flexDirection={"column"} m={2}>
          <Text color={index.colors.black}>{props.mainAddress}</Text>
          <Text color={index.colors.black}>{props.subAddress}</Text>
          </Flex>

        </Box>
      </Flex>

      <br />
      <Flex display={"flex"} justifyContent={"center"}>
        <Box
          borderRadius={10}
          backgroundColor={index.colors.grey[100]}
          width={600}
          minWidth={300}
          height={"auto"}
          p={5}
        >
          <Flex flexDirection={"column"} gap={2}>
            <Flex flexDirection={"row"} justifyContent={"space-between"}>
              <Box display={"flex"} flexDirection={"row"} gap={2}>
                <PaymentIcon />
                <Text color={index.colors.black}>Payment method</Text>
              </Box>
            </Flex>
            <Flex flexDirection={"row"} gap={2} color={index.colors.black}>
              <img
                src={props.cardTypeImg}
                width="10%"
                height="10%"
                style={{ borderRadius: "20px" }}
                alt="CardType"
              />
              <Flex flexDirection={"column"}>
                <Text>
                  {/* Card Type */}
                  {props.cardType}
                </Text>

                <Text>
                  {/* Card No, passes from payment feature */}
                  {HideCardNumber}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Flex>

      <br />
      <Flex
        display={"flex"}
        justifyContent={"center"}
        color={index.colors.black}
      >
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
              {/* {orders.map((order, index) => (
                <div key={index}>
                  <Text>
                    {order.amount}X {order.restaurant}
                  </Text>
                  <Text>{order.size}</Text>
                </div>
              ))} */}
              <Flex flexDir={"column"}>
                <Text>
                  {props.amount}X {props.restaurant}
                </Text>
                <Text>{props.size}</Text>
              </Flex>
              <Box>
                {/* {orders.map((order, index) => (
                  <div key={index}>
                    <Text>${order.price}</Text>
                  </div>
                ))} */}
                ${props.price}
              </Box>
            </Flex>
            <Divider borderColor={index.colors.black} />
            <Flex flexDir={"row"} justifyContent={"space-between"}>
              <Text>Subtotal</Text>
              <Text>$210</Text>
            </Flex>
            <Flex flexDir={"row"} justifyContent={"space-between"}>
              <Text>Delivery</Text>
              <Text>Free</Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <br />
    </Box>
  );
};
