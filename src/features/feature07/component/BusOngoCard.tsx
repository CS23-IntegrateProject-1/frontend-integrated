import { Flex, HStack, Text, VStack, Box } from "@chakra-ui/react";
import { FC } from "react";
import textStyles from "../../../theme/foundations/textStyles";
import { ButtonComponent } from "../../../components/buttons/ButtonComponent";
import { formatDatetime1 } from "../../../functions/formatDatetime";

interface foodItems {
    foodName: string;
    amount: number;
    status: number;
}

interface BusOngoCardProps {
    id: number;
    items?: foodItems[];
    tableNo: number;
    orderDate: string;
};

export const BusOngoCard: FC<BusOngoCardProps>= ({id,items,tableNo,orderDate}) => {
    return (
        <Flex 
            flexDirection={"column"}
            borderWidth="1px" 
            borderRadius="md" 
            width="319px"  
            height={"auto"}
            p={1} 
            borderColor={"brand.100"}
            >
            <HStack spacing={4}>
                <Text {...textStyles.h2} color="white" lineHeight="1.5" >
                    table No.
                </Text>
                <Text {...textStyles.h2} color="white" lineHeight="1.5" >
                    1/1/2021
                    {/* {formatDatetime1(orderDate)} */}
                </Text>
            </HStack>
            <VStack align="start" spacing={2}>
                {items?.map((item) => (
                <Box>
                <HStack justify={'space-between'} align="center">  
                    <Text {...textStyles.h2} color="white" lineHeight="1.5" >
                        {/* Set food Name Integrate */}
                        {item.foodName}
                    </Text>
                    <Text {...textStyles.h2} color="white" lineHeight="1.5" >
                        {/* Set famount Integrate */}
                        x{item.amount}
                    </Text>
                    //check if completed or not

                    <ButtonComponent
                        text="Mark as Completed"
                    />
                    //if completed,show only text completed
                </HStack>
                </Box>
                ))}
            </VStack>
        </Flex>
    )
}