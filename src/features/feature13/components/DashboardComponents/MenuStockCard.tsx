import { Box, Text } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const MenuStockCard = () => {
    const handleOpenMenuStock = () => {
        console.log("Menu Stock Open");
    };
    return (
        <Box
            onClick={handleOpenMenuStock}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            borderRadius={"5px"}
            width={"319px"}
            height={"47px"}
            bg={"brand.300"}
            marginTop={4}
            padding={4}
            color={"white"}>
            <Box>
                <Text style={TextStyle.h2}>Menu Stock</Text>
            </Box>
            <Box>
                <MdOutlineArrowForwardIos size={20} />
            </Box>
        </Box>
    );
};

export default MenuStockCard;
