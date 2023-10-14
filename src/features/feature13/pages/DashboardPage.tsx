import { Box, Heading } from "@chakra-ui/react";
import { TextStyle } from "../../../theme/TextStyle";
import DashboardTopStatus from "../components/DashboardTopStatus";
import { Property } from "../model/property.model";

const DashboardPage = () => {
    const property: Property = { id: 1, name: "MockName" };
    return (
        <>
            <Heading style={TextStyle.h1} color={"white"} paddingLeft={4}>
                {property.name}
            </Heading>
            <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}>
                {DashboardTopStatus(property)}
            </Box>
        </>
    );
};

export default DashboardPage;
