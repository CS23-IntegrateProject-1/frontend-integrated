import { ButtonComponent } from "../../../../components/buttons/ButtonComponent"
import { Box } from "@chakra-ui/react"
export const ConfirmButton = () => {
    return (
        <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      margin={10}
      width={"50%"}
    >
        <ButtonComponent text="Confirm" />
    </Box>
    )
}