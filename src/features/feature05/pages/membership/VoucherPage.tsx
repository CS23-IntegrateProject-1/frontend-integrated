import { VoucherCard } from "../../components/membership/VoucherCard";
import { Box } from "@chakra-ui/react";
import Tags from "../../components/membership/Tags";
import { VoucherList } from "../../components/membership/VoucherList";

export const VoucherPage = () => {
  return (
    <Box display="flex" flexDirection="column" padding="0px" rowGap="40px" marginRight="150px" marginLeft="150px">
      <VoucherCard />
      <Tags tag_text="recommend" />
      <VoucherList />
    </Box>
  );
};
