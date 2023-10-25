import { Box, Text } from "@chakra-ui/react";
import Queue from "../../model/queue.model";
import Order from "../../model/order.model";
import TextStyles from "../../../../theme/foundations/textStyles";
import { MdAccessTime, MdOutlineModeEdit } from "react-icons/md";
import { useEffect, useState } from "react";

const OrderQueueCard = (onGoing: boolean, queue: Queue) => {
    const [orders, setOrders] = useState<Order[]>([]);

    const fetchOrder = () => {
        const data: Order[] = [
            {
                name: "Chicken Rice",
                quantity: 2,
                price: 20,
            },
            {
                name: "French Fries",
                quantity: 1,
                price: 80,
            },
            {
                name: "Pepsicola",
                quantity: 2,
                price: 20,
            },
        ];
        setOrders(data);
    };

    useEffect(() => {
        fetchOrder();
    }, []);

    const TopText = () => {
        return (
            <Box>
                <Box
                    display={"flex"}
                    flexDirection={"row"}
                    justifyContent={"flex-start"}
                    alignItems={"center"}>
                    <Text marginRight={3} style={TextStyles.h3}>
                        {queue.name}
                    </Text>
                    <MdAccessTime size={"20px"} />
                    <Text marginLeft={2} style={TextStyles.h3}>
                        {queue.time}
                    </Text>
                    <Text marginLeft={2} style={TextStyles.h3}>
                        Table no. {queue.tableNo}
                    </Text>
                </Box>
                <Text style={TextStyles.h4} color={"grey.200"}>
                    {queue.status}
                </Text>
            </Box>
        );
    };

    const OrderText = (order: Order) => {
        return (
            <Box>
                <Text>{order.name}</Text>
                <Text>{order.quantity}</Text>
            </Box>
        );
    };

    const renderOngoingOrder = () => {
        return (
            <Box
                marginTop={4}
                marginBottom={4}
                width={"319px"}
                height={"161px"}
                background={"brand.300"}
                padding={3}
                borderRadius={"5px"}>
                <Box
                    display={"flex"}
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    alignItems={"start"}>
                    {TopText()}
                    <MdOutlineModeEdit size={"24px"} />
                </Box>
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"space-between"}
                    alignItems={"start"}>
                    {OrderText(orders[0])}
                </Box>
            </Box>
        );
    };
    return onGoing ? renderOngoingOrder() : <Box>Order Card</Box>;
};

export default OrderQueueCard;
