import { Box, Text } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { MdChair } from "react-icons/md";

const TableListCard = () => {
    const handleOpenTableList = () => {
        console.log("Table List Open");
    };
    return (
        <Box
            onClick={handleOpenTableList}
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
            borderRadius={"5px"}
            width={"147px"}
            height={"100px"}
            bg={"brand.310"}
            marginTop={4}
            padding={4}
            color={"white"}>
            <Box>
                <MdChair size={45} />
            </Box>
            <Box>
                <Text style={TextStyle.h2}>Table</Text>
                <Text style={TextStyle.h2}>List</Text>
            </Box>
        </Box>
    );
};

export default TableListCard;
