import { Box, Text } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { MdFastfood } from "react-icons/md";

const MenuCard = () => {
    const handleOpenMenu = () => {
        console.log("Menu Open");
    };
    return (
        <Box
            onClick={handleOpenMenu}
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
                <MdFastfood size={45} />
            </Box>
            <Box>
                <Text style={TextStyle.h2}>Menu</Text>
            </Box>
        </Box>
    );
};

export default MenuCard;
