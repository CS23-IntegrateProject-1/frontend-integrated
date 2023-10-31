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
            flexDirection={"column"}
            justifyContent={"space-around"}
            alignItems={"center"}
            borderRadius={"5px"}
            width={"147px"}
            height={"209px"}
            bg={"brand.110"}
            marginTop={5}
            marginRight={5}
            padding={4}
            color={"white"}>
            <Box>
                <MdQrCodeScanner size={109} />
            </Box>
            <Box>
                <Text style={TextStyle.h2}>Confirm</Text>
                <Text style={TextStyle.h2}>checkin</Text>
            </Box>
        </Box>
    );
};

export default ConfirmCheckinCard;
