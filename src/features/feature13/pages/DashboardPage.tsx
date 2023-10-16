import { Box, Heading } from "@chakra-ui/react";
import { TextStyle } from "../../../theme/TextStyle";
import { Property } from "../model/property.model";
import DashboardTopStatus from "../components/DashboardComponents/DashboardTopStatus";
import ConfirmCheckinCard from "../components/DashboardComponents/ConfirmCheckinCard";
import MenuStockCard from "../components/DashboardComponents/MenuStockCard";
import ReservationQueues from "../components/DashboardComponents/ReservationQueues";
import OrderQueues from "../components/DashboardComponents/OrderQueues";
import TableLayout from "../components/DashboardComponents/TableLayout";

const DashboardPage = () => {
    const isMoblie = window.innerWidth < 768;
    const property: Property = { id: 1, name: "CS SIP" };

    const renderMoblie = () => {
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
                    {ConfirmCheckinCard()}
                    {MenuStockCard()}
                    {ReservationQueues()}
                    {OrderQueues()}
                    {TableLayout()}
                </Box>
            </>
        );
    };

    const renderDesktop = () => {
        return <>this is desktop</>;
    };

    return isMoblie ? renderMoblie() : renderDesktop();
};

export default DashboardPage;
