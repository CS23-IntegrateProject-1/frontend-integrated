import { Box, Heading } from "@chakra-ui/react";
import { TextStyle } from "../../../theme/TextStyle";
import { Property } from "../model/property.model";
import DashboardTopStatus from "../components/DashboardComponents/DashboardTopStatus";
import ReservationQueues from "../components/DashboardComponents/ReservationQueues";
import OrderQueues from "../components/DashboardComponents/OrderQueues";
import ConfirmCheckinCard from "../components/DashboardComponents/ConfirmCheckinCard";
import MenuCard from "../components/DashboardComponents/MenuCard";
import TableListCard from "../components/DashboardComponents/TableListCard";

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
                    <Box
                        display={"flex"}
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        {ConfirmCheckinCard()}
                        <Box
                            display={"flex"}
                            flexDirection={"column"}>
                            {MenuCard()}
                            {TableListCard()}
                        </Box>
                    </Box>
                    {ReservationQueues()}
                    {OrderQueues()}
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
