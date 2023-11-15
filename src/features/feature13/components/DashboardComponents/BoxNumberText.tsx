import { Text } from "@chakra-ui/react";
import { FONT_WEIGHT } from "../../../../theme/foundations/textStyles";

const BoxNumberText = (number: number) => {
    const num: string = number.toLocaleString();
    const numLength: number = num.length;
    const size = {
        S: {
            fontSize: "20px",
            fontWeight: FONT_WEIGHT.BOLD,
        },
        M: {
            fontSize: "28px",
            fontWeight: FONT_WEIGHT.BOLD,
        },
        L: {
            fontSize: "36px",
            fontWeight: FONT_WEIGHT.BOLD,
        },
    };
    if (numLength <= 3) {
        return (
            <Text style={size.L} color={"white"} marginBottom={0}>
                {num}
            </Text>
        );
    } else if (numLength <= 5) {
        return (
            <Text style={size.M} color={"white"} marginBottom={1}>
                {num}
            </Text>
        );
    } else {
        return (
            <Text style={size.S} color={"white"} marginBottom={3}>
                {num}
            </Text>
        );
    }
};

export default BoxNumberText;
