 import React, { useState } from "react";
 import { Flex, HStack, VStack } from "@chakra-ui/react";
 import { RButton } from "../../component/RButton";
 // import { useParams } from 'react-router-dom';

 import { Axios } from "../../../../AxiosInstance";
 import { useQuery, useQueryClient } from "@tanstack/react-query";
 import { BusOngoCard } from "../../component/BusOngoCard";
 import { BusCompleteCard } from "../../component/BusCompleteCard";
 import { FullPageLoader } from "../../../../components/Loader/FullPageLoader";
 import { formatDatetime1 } from "../../../../functions/formatDatetime";

 interface OrderDetailsProps {
   orderId: number;
   table: {
     tableId: number;
     orderDate: string;
   };
   orderDetails: {
     menuName: string;
     setName: string;
     quantity: number;
     orderDetailId: number;
   }[];
 }

 type OrderStatus = "Preparing" | "Completed";

 export const BusOrderStat: React.FC = () => {
   const [preparingButtonColor, setPreparingButtonColor] = useState<
     "brand.400" | "brand.200"
   >("brand.200");
   const [completedButtonColor, setCompletedButtonColor] = useState<
     "brand.400" | "brand.200"
   >("brand.400");
   const [borderColor, setBorderColor] = useState("brand.200");
   const [status, setStatus] = useState<OrderStatus>("Preparing");

   // const { venueId } = useParams();
   const queryClient = useQueryClient();

  const handleButtonClick = (newStatus: OrderStatus) => {
    setStatus(newStatus);
    setPreparingButtonColor(
      newStatus === "Preparing" ? "brand.200" : "brand.400"
    );
    setCompletedButtonColor(
      newStatus === "Completed" ? "brand.200" : "brand.400"
    );
    setBorderColor(newStatus === "Preparing" ? "brand.200" : "brand.400");
    if(newStatus === "Completed"){
      invalidateCompletedOrderDetails();
    }
  };


  // const { data: tableNumber } = useQuery(['tableNumber'], async () => {
  //   const response = await Axios.get(`/feature7/onGoingOrderDetailsInBusiness/${venueId}`);
  //   console.log("Table:" ,response.data);
  //   return response.data.getTable;
  // });

    const {
      data: ongoingOrderDetails,
      isLoading: ongoingLoading,
      isError: ongoingError,
  } = useQuery(["ongoingOrderDetails"], async () => {
      const response = await Axios.get("/feature7/onGoingOrderDetailsInBusiness");
     console.log("Ongoing:", response.data);
      return response.data;
    });

   const {
     data: completedOrderDetails,
     isLoading: completedLoading,
     isError: completedError,
   } = useQuery(["completedOrderDetails"], async () => {
     const response = await Axios.get(
       "/feature7/completedOrderDetailsInBusiness"
     );
     console.log("Completed:", response.data);
     return response.data;
   });

  if (ongoingLoading || completedLoading) {
    return <FullPageLoader />;
  }
  if (ongoingError || completedError) {
    return <div>Something went wrong</div>;
  }
  const invalidateOngoingOrderDetails = () => {
    queryClient.invalidateQueries(["ongoingOrderDetails"]);
  };
  const invalidateCompletedOrderDetails = () => {
    queryClient.invalidateQueries(["completedOrderDetails"]);
  };
  console.log(
    "hello",
    formatDatetime1(completedOrderDetails[0].table.orderDate)
  );
  const renderCard = () => {
    switch (status) {
      case "Preparing":
        return (
          // <VStack mt={4} overflowY="auto" maxHeight="calc(100vh - 100px)">
          //     <BusOngoCard />
          // </VStack>
          <VStack mt={4} overflowY="auto" maxHeight="calc(100vh - 100px)">
            {ongoingOrderDetails &&
              ongoingOrderDetails.map(
                (order: OrderDetailsProps, index: number) => (
                  // const orderDetails = ongoingOrderDetails[index];
                  // return (
                  <BusOngoCard
                    key={index} /* Use unique key */
                    tableNo={order.table.tableId}
                    orderDate={formatDatetime1(order.table.orderDate)}
                    items={order.orderDetails}
                    invalidateOngoingOrderDetails={
                      invalidateOngoingOrderDetails
                    }
                  />
                )
              )}
          </VStack>
        );
      case "Completed":
        return (
          // <VStack mt={4} overflowY="auto" maxHeight="calc(100vh - 100px)">
          //     <BusCompleteCard />
          // </VStack>
          <VStack mt={4} overflowY="auto" maxHeight="calc(100vh - 100px)">
            {completedOrderDetails &&
              completedOrderDetails.map(
                (order: OrderDetailsProps, index: number) => (
                  <BusCompleteCard
                    key={index} /* Use unique key */
                    tableNo={order.table.tableId}
                    orderDate={
                      order.table.orderDate
                        ? formatDatetime1(order.table.orderDate)
                        : "0"
                    }
                    items={order.orderDetails}
                  />
                )
              )}
          </VStack>
        );
      default:
        return null;
    }
  };

   return (
     <Flex direction="column" align="center" justify="center">
       <HStack spacing={4}>
         <RButton
           text={"Preparing"}
           borderColor={borderColor}
           textStyle={"body2"}
           width={"110px"}
           height={"32px"}
           onClick={() => handleButtonClick("Preparing")}
           bgColor={preparingButtonColor}
         />
         <RButton
           text={"Completed"}
           borderColor={borderColor}
           textStyle={"body2"}
           width={"110px"}
           height={"32px"}
           onClick={() => handleButtonClick("Completed")}
           bgColor={completedButtonColor}
         />
       </HStack>
       <VStack mt={4} overflowY="auto" maxHeight="calc(100vh - 100px)">
         {renderCard()}
       </VStack>
     </Flex>
   );
 };
