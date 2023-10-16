import { Box, Text } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { MdQrCodeScanner } from "react-icons/md";

const ConfirmCheckinCard = () => {
    const handleConfirmCheckin = () => {
        console.log("Confirm checkin");
    };
    return (
        <Box
            onClick={handleConfirmCheckin}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            borderRadius={"5px"}
            width={"319px"}
            height={"47px"}
            bg={"brand.300"}
            marginTop={5}
            padding={4}
            color={"white"}>
            <Box>
                <Text style={TextStyle.h2}>Confirm checkin</Text>
            </Box>
            <Box>
                <MdQrCodeScanner size={22} />
            </Box>
        </Box>
    );
};

export default ConfirmCheckinCard;
