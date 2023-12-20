import { Flex, Text, VStack, HStack } from "@chakra-ui/react";
import textStyles from "../../../theme/foundations/textStyles";
import { ButtonComponent } from "../../../components/buttons/ButtonComponent";
import { useNavigate } from "react-router-dom";

export const VoucherCard: React.FC = () => {
  const navigate = useNavigate();
  const mockData = {
    voucherName: "Sample Voucher",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };
  const handleUseNowClick = () => {
    navigate(`/venue/receipt?coupon=${mockData.voucherName}`);
  };

  return (
    <Flex
      borderWidth="1px"
      borderRadius="md"
      width="319px"
      minHeight={"120px"}
      p={1}
      borderColor={"brand.100"}
    >
      <VStack align="start" flex="1">
        <Text {...textStyles.h2} lineHeight="1.5">
          {mockData.voucherName}
        </Text>
        <Text {...textStyles.body2} lineHeight="1.5">
          {mockData.description}
        </Text>
        <HStack
          justifyContent="flex-end"
          alignItems="center"
          width="100%"
          mt={5}
        >
          <ButtonComponent
            text="Use Now"
            width={"100px"}
            height={"30px"}
            onClick={handleUseNowClick}
          />
        </HStack>
      </VStack>
    </Flex>
  );
};
