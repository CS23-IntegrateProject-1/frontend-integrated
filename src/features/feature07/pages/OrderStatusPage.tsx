import React, { useState } from "react";
import { Flex, HStack, VStack, Box, Center } from "@chakra-ui/react";
import { RButton } from "../component/RButton";
import { PreparedMenuCard } from "../component/PreparedCard";
import { CompleteCard } from "../component/CompleteCard";
import { ButtonComponent } from "../../../components/buttons/ButtonComponent";
import { useNavigate } from "react-router-dom";

import { Axios } from "../../../AxiosInstance";
import { useQuery } from "@tanstack/react-query";

interface OrderProps {
  orderDetailId: number;
  menuId: number | null;
  setId: number | null;
  additional_req: string;
  unit_price: number;
  imageUrl: string;
  quantity: number;
  menu: {
    name: string;
    image: string;
  };
  set: {
    name: string;
    image_url: string;
  };
}
type OrderStatus = "Preparing" | "Completed";

export const OrderStatusPage: React.FC = () => {
  const [preparingButtonColor, setPreparingButtonColor] = useState<
    "brand.400" | "brand.200"
  >("brand.200");
  const [completedButtonColor, setCompletedButtonColor] = useState<
    "brand.400" | "brand.200"
  >("brand.400");
  const [borderColor, setBorderColor] = useState("brand.200");
  const [status, setStatus] = useState<OrderStatus>("Preparing");
  const navigate = useNavigate();

  // const { venueId } = useParams();

  const handleButtonClick = (newStatus: OrderStatus) => {
    setStatus(newStatus);
    setPreparingButtonColor(
      newStatus === "Preparing" ? "brand.200" : "brand.400"
    );
    setCompletedButtonColor(
      newStatus === "Completed" ? "brand.200" : "brand.400"
    );
    setBorderColor(newStatus === "Preparing" ? "brand.200" : "brand.400");
  };

  const { data: ongoingOrderDetails } = useQuery(
    ["ongoingOrderDetails"],
    async () => {
      const response = await Axios.get("/feature7/showOngoingOrderDetails");
      return response.data;
    },
    {
      enabled: status === "Preparing",
    }
  );

  const { data: completedOrderDetails } = useQuery(
    ["completedOrderDetails"],
    async () => {
      const response = await Axios.get("/feature7/showCompletedOrderDetails");
      return response.data;
    },
    {
      enabled: status === "Completed",
    }
  );

  const hasOngoingOrders =
    ongoingOrderDetails && ongoingOrderDetails.length > 0;
  const hasCompletedOrders =
    completedOrderDetails && completedOrderDetails.length > 0;

  const renderCard = () => {
    switch (status) {
      case "Preparing":
        return (
          <VStack mt={4} overflowY="auto" maxHeight="calc(100vh - 100px)">
            {ongoingOrderDetails &&
              ongoingOrderDetails.map((order: OrderProps) => (
                <PreparedMenuCard
                  key={order.orderDetailId} /* Use unique key */
                  id={order.menuId !== null ? order.menuId : order.setId}
                  foodName={
                    order.menuId !== null ? order.menu?.name : order.set?.name
                  }
                  description={order.additional_req}
                  price={order.unit_price}
                  imageUrl={
                    order.menuId !== null
                      ? order.menu?.image
                      : order.set?.image_url
                  }
                  amount={order.quantity}
                />
              ))}
            {status === "Preparing" && (
              <Box
                position="fixed"
                bottom="4"
                width="109px"
                height="29px"
                textAlign="center"
                borderRadius="5px"
              >
                <ButtonComponent
                  width="160px"
                  text="Order Again"
                  onClick={() => {
                    navigate("/venue/menu");
                  }}
                />
              </Box>
            )}
          </VStack>
        );
      case "Completed":
        return (
          <VStack mt={4} overflowY="auto" maxHeight="calc(100vh - 100px)">
            {completedOrderDetails &&
              completedOrderDetails.map((order: OrderProps) => (
                <CompleteCard
                  key={order.orderDetailId} /* Use unique key */
                  id={order.menuId !== null ? order.menuId : order.setId}
                  foodName={
                    order.menuId !== null ? order.menu?.name : order.set?.name
                  }
                  description={order.additional_req}
                  price={order.unit_price}
                  imageUrl={
                    order.menuId !== null
                      ? order.menu?.image
                      : order.set?.image_url
                  }
                  amount={order.quantity}
                />
              ))}
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

      {status === "Completed" && (
        <Center>
          <Flex align="center" justify="center">
            <Box
              position="fixed"
              bottom="4"
              width="109px"
              height="29px"
              textAlign="center"
              borderRadius="5px"
            >
              <ButtonComponent
                width={"160px"}
                text="View Receipt"
                onClick={() => navigate("/venue/receipt")}
                isDisabled={!hasOngoingOrders && !hasCompletedOrders}
              />
            </Box>
          </Flex>
        </Center>
      )}
    </Flex>
  );
};
