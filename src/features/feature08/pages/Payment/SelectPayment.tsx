import { ButtonComponent } from "../../../../components/buttons/ButtonComponent"
import { QrCodeButton } from "../QrCode/QrCodeButton"
import { MobileBankingList } from "../MobileBanking/MobileBankingList"
import { Box } from "@chakra-ui/react"

export const SelectPayment = () => {
    return (
        <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        margin={5}
      >
        <ButtonComponent textColor="#DEBEF6" text="Cash" />
        <QrCodeButton />
        <MobileBankingList />
        </Box>
    )
}