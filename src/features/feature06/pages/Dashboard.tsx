import { Box, Text } from "@chakra-ui/react";
export const Dashboard = () => {
    return (
      <Box
        display={"flex"}
        flexDirection={"column"}

        position={"relative"}
      >
        <Text
          fontSize={"20px"}
          fontWeight={"700"}
          fontStyle={"normal"}
          lineHeight={"normal"}
        >
          Restaurant Name
        </Text>
        <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"}>
          <Box
            width={"95px"}
            height={"95px"}
            borderRadius={"6px"}
            border={"1px solid var(--Dark-accent, #DEBEF6)"}
            background={"rgba(217, 217, 217, 0.0)"}
            marginTop={"19px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Text fontSize={"14px"} fontWeight={"700"} marginTop={"12px"}>
              Revenue
            </Text>
            <Text fontSize={"20px"} fontWeight={"700"}>
              22,400
            </Text>
          </Box>
          <Box
            width={"95px"}
            height={"95px"}
            borderRadius={"6px"}
            border={"1px solid var(--Dark-accent, #DEBEF6)"}
            background={"rgba(217, 217, 217, 0.0)"}
            marginTop={"19px"}
          ></Box>
          <Box
            width={"95px"}
            height={"95px"}
            borderRadius={"6px"}
            border={"1px solid var(--Dark-accent, #DEBEF6)"}
            background={"rgba(217, 217, 217, 0.0)"}
            marginTop={"19px"}
          ></Box>
        </Box>
      </Box>
    );
}