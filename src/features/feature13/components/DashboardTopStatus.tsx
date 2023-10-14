import { Box, Grid, Text } from "@chakra-ui/react";
import { Property } from "../model/property.model";
import { TextStyle } from "../../../theme/TextStyle";
import colors from "../../../theme/foundations/colors";

const DashboardTopStatus = (property: Property) => {
    const revenue = property ? 10100 : 0;
    const customer = property ? 20 : 0;
    const table = property ? 9 : 0;

    const revenueCard = () => {
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
                <Text style={TextStyle.h1} color={"white"} margin={0}>
                    {revenue.toLocaleString()}
                </Text>
                <Text
                    style={TextStyle.h2}
                    color={"white"}
                    marginTop={2}
                    marginBottom={2}>
                    {" "}
                    Revenue{" "}
                </Text>
            </Box>
        );
    };

    const customerCard = () => {
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
                <Text style={TextStyle.h1} color={"white"} margin={0}>
                    {customer.toLocaleString()}
                </Text>
                <Text
                    style={TextStyle.h2}
                    color={"white"}
                    marginTop={2}
                    marginBottom={2}>
                    {" "}
                    Customer{" "}
                </Text>
            </Box>
        );
    };

    const tableCard = () => {
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
                <Text style={TextStyle.h1} color={"white"} margin={0}>
                    {table.toLocaleString()}
                </Text>
                <Text
                    style={TextStyle.h2}
                    color={"white"}
                    marginTop={2}
                    marginBottom={2}>
                    {" "}
                    Table{" "}
                </Text>
            </Box>
        );
    };

    return (
        <>
            <Grid templateColumns="repeat(3, 1fr)" gap={4} marginTop={"15px"}>
                {revenueCard()}
                {customerCard()}
                {tableCard()}
            </Grid>
        </>
    );
};

export default DashboardTopStatus;
