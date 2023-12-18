import { Flex, HStack, Text, VStack, Box, Icon, Spacer } from "@chakra-ui/react";
import { FC } from "react";
import textStyles from "../../../theme/foundations/textStyles";
import { ButtonComponent } from "../../../components/buttons/ButtonComponent";
import { TimeIcon } from "@chakra-ui/icons";
import { Axios } from "../../../AxiosInstance";


interface foodItems {
    menuName: string;
    setName: string;
    quantity: number;
    orderDetailId: number;
}

interface BusOngoCardProps {
    // id: number;
    items?: foodItems[];
    tableNo: number;
    orderDate: string;
    invalidateOngoingOrderDetails: () => void;
}

export const BusOngoCard: FC<BusOngoCardProps>= ({items,tableNo,invalidateOngoingOrderDetails,orderDate}) => {

    const handleComplete = async (orderDetailId:number) => {
        try{
            const response = await Axios.post(`/feature7/changeOrderDetailsStatusCompleted/${orderDetailId}`);
            invalidateOngoingOrderDetails();
            console.log(response);
        } catch (error) {
            console.log(error); 
        }
    }

    return (
        <Flex 
            flexDirection={"column"}
            borderWidth="1px" 
            borderRadius="md" 
            width="319px"  
            height={"auto"}
            p={1} 
            borderColor={"brand.100"}
            bgColor={"brand.300"}
            mt={2}
            >
            <HStack spacing={4} justifyContent="space-between">
                <Text {...textStyles.h2} color="white" lineHeight="1.5" >
                    Table No.{tableNo}
                </Text>
                <Text {...textStyles.h2} color="white" lineHeight="1.5" justifyContent="flex-end">
                    {/* 1/1/2021 */}
                    <Icon as={TimeIcon} w={4} h={4} color="white" mr={1} />
                    {orderDate}
                </Text>
            </HStack>
            <VStack align="start" spacing={2} mt={1}>
                {items?.map((item) => (
                <Box width="100%">
                <Flex justifyContent="space-between" alignItems="flex-start">  
                    <Text {...textStyles.h2} color="white" lineHeight="1.5" >
                        {/* Set food Name Integrate */}
                        {item.menuName || item.setName}
                    </Text>
                    <Spacer />
                    <Text {...textStyles.h2} color="white" lineHeight="1.5" >
                        {/* Set famount Integrate */}
                        x{item.quantity}
                    </Text>
                    <Spacer />

                    <ButtonComponent
                        text="Mark as Completed"
                        onClick={()=>handleComplete(item.orderDetailId)}
                    />
                </Flex>
                </Box>
                ))}
            </VStack>
        </Flex>
    )
}