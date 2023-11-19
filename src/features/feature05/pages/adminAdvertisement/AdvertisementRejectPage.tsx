import { Box, Button, Input, Text, useDisclosure } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { Textarea } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

export const AdvertisementRejectPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/advertisement");
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
    >
      <Box
        paddingBottom={3}
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
      >
        <Text style={TextStyle.h2} color={"white"} paddingBottom={2}>
          {" "}
          Why is the request rejected?
        </Text>
        <Textarea placeholder="Description" variant="filled" height={"150px"} />
      </Box>

      <Box
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"row"}
        paddingBottom={3}
        justifyContent={"right"}
      >
        <Button
          backgroundColor="#A533C8"
          variant="solid"
          width="150px"
          color="white"
          onClick={handleClick}
        >
          Send Feedback
          {/* เพิ่ม send feedbackไปหน้า adsvertisementpage */}
        </Button>
      </Box>
    </Box>
  );
};
