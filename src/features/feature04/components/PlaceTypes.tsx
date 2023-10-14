import { Box, Text,Spacer, Button } from "@chakra-ui/react";
import React from "react";
import { TextStyle } from "../../../theme/TextStyle";
import colors from "../../../theme/foundations/colors";

const PlaceTypes = () => {
    return (
        <Box display={"flex"} flexDirection={"row"} m={2}>
            <Button variant="link">
            <Text fontSize={TextStyle.h1.fontSize} fontWeight={TextStyle.h1.fontWeight} color={colors.brand[100]}>
                Restaurant
            </Text>
            </Button>
            <Spacer/>
            <Text fontSize={TextStyle.h1.fontSize} fontWeight={TextStyle.h1.fontWeight}>
                Bars
            </Text>
            <Spacer/>
            <Text fontSize={TextStyle.h1.fontSize} fontWeight={TextStyle.h1.fontWeight}>
                Clubs
            </Text>
        </Box>
    );
};

export default PlaceTypes;
