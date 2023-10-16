import { Box, Grid, Text } from "@chakra-ui/react";
import { Property } from "../../model/property.model";
import { TextStyle } from "../../../../theme/TextStyle";
import colors from "../../../../theme/foundations/colors";
import BoxNumberText from "./BoxNumberText";

const DashboardTopStatus = (property: Property) => {
    const revenue = property ? 22400 : 0;
    const customer = property ? 2010 : 0;
    const table = property ? 9 : 0;

    const BoxCard = (type: string, amount: number) => {
        return (
            <Box
                height={"95px"}
                width={"95px"}
                display={"flex"}
                border={"1px"}
                borderColor={colors.brand[100]}
                borderRadius={"5px"}
                padding={0}
                flexDirection={"column"}
                justifyContent={"end"}
                alignItems={"center"}>
                <Box>{BoxNumberText(amount)}</Box>
                <Text style={TextStyle.h3} color={"white"} marginBottom={2}>
                    {type}
                </Text>
            </Box>
        );
    };

    return (
        <>
            <Grid templateColumns="repeat(3, 1fr)" gap={4} marginTop={"15px"}>
                {BoxCard("Revenue", revenue)}
                {BoxCard("Customer", customer)}
                {BoxCard("Table", table)}
            </Grid>
        </>
    );
};

export default DashboardTopStatus;
