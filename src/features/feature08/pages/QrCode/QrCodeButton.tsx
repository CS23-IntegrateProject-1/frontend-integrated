import { ButtonComponent } from "../../../../components/buttons/ButtonComponent";
import { Box } from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export const QrCodeButton = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      margin={5}
      width={"100%"}
    >
      <ButtonComponent textColor="#DEBEF6" text="QR PromptPay" />
      <Card size={"sm"} width={"70%"} backgroundColor={"#DEBEF6"}>
        <CardBody>
          <Text color={"#5F0DBB"}>
              Go cashless by scanning QR code.
          </Text>
        </CardBody>
      </Card>
    </Box>
  );
};
