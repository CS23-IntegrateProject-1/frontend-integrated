import { Flex, HStack, Text, VStack, Box, Spacer, Icon } from "@chakra-ui/react";
import textStyles from "../../../theme/foundations/textStyles";
import { FC } from "react";
import { TimeIcon } from "@chakra-ui/icons";

interface foodItems {
    foodName: string;
    amount: number;
    status: number;
}

interface BusCompleteCardProps {
    // id: number;
    items?: foodItems[];
    tableNo: number;
    orderDate: string;
}

export const BusCompleteCard: FC<BusCompleteCardProps>= ({items,tableNo,orderDate}) => {
    return (
        <Flex 
            flexDirection={"column"}
            borderWidth="1px" 
            borderRadius="md" 
            width="319px"  
            height={"auto"}
            p={1} 
            borderColor={"brand.300"}
            bgColor={"brand.300"}
            mt={2}
            >
            <HStack spacing={4} justifyContent="space-between">
                <Text {...textStyles.h2} color="white" lineHeight="1.5" >
                    {/* table No. */}
                    Table No.{tableNo}
                </Text>
               
                <Text {...textStyles.h3} color="white" lineHeight="1.5" justifyContent="flex-end">
                    {/* 1/1/2021 */}
                    <Icon as={TimeIcon} w={4} h={4} color="white" mr={1} />
                    {orderDate}
                </Text>
               
            </HStack>
            <VStack align="start" spacing={2} mt={1}>
            {items?.map((item) => (
                <Box width="100%">
                <Flex justifyContent="space-between" alignItems="flex-start">
                    <Text {...textStyles.h3} color="white" lineHeight="1.5" >
                        {/* Set food Name Integrate */}
                        {item.menuName || item.setName}
                    </Text>
                     <Spacer />
                    <Text {...textStyles.h3} color="white" lineHeight="1.5" alignItems="flex-end" >
                        {/* Set food Name Integrate */}
                        x{item.quantity}
                    </Text>
                </Flex>
                </Box>
                ))}
            </VStack>
        </Flex>
    )
}