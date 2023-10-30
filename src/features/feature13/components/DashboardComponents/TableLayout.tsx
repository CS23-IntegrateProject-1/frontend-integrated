import { Box, Text } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";

const TableLayout = () => {
    const handleOpenTable = (size: string) => {
        switch (size) {
            case "Small":
                console.log("Open Small Table");
                break;
            case "Medium":
                console.log("Open Medium Table");
                break;
            case "Large":
                console.log("Open Large Table");
                break;
            case "Extra large":
                console.log("Open Extra large Table");
                break;
            default:
                break;
        }
    };

    const TableLayoutText = () => {
        return (
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"319px"}
                marginTop={5}
                color={"grey.200"}>
                <Box>
                    <Text style={TextStyle.h2}>Table Layout</Text>
                </Box>
            </Box>
        );
    };

    const TableBox = (size: string) => {
        const peopleSize =
            size === "Extra large"
                ? "10+ peoples"
                : size === "Large"
                ? "6-10 peoples"
                : size === "Medium"
                ? "4-6 peoples"
                : "1-4 peoples";
        return (
            <Box
                onClick={() => handleOpenTable(size)}
                width={"70px"}
                height={"70px"}
                border={"1px"}
                borderRadius={5}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}>
                {size === "Extra large" ? (
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        justifyContent={"Center"}>
                        <Text style={TextStyle.h3}>Extra</Text>
                        <Text style={TextStyle.h3}>Large</Text>
                        <Text style={TextStyle.h5}>{peopleSize}</Text>
                    </Box>
                ) : (
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        justifyContent={"Center"}>
                        <Text style={TextStyle.h3}>{size}</Text>
                        <Text style={TextStyle.h5}>{peopleSize}</Text>
                    </Box>
                )}
            </Box>
        );
    };

    const TableLayoutBox = () => {
        return (
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                borderRadius={"5px"}
                width={"319px"}
                height={"89px"}
                bg={"brand.300"}
                padding={2}
                marginTop={1}
                color={"white"}>
                {TableBox("Small")}
                {TableBox("Medium")}
                {TableBox("Large")}
                {TableBox("Extra large")}
            </Box>
        );
    };

    return (
        <Box>
            {TableLayoutText()}
            {TableLayoutBox()}
        </Box>
    );
};

export default TableLayout;
