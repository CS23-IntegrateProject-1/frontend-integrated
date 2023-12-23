import { Box, Flex, Text, IconButton } from "@chakra-ui/react";
import index from "../../../../theme/foundations/index";
import { MdKeyboardArrowRight } from "react-icons/md";

export const CanceledDeliveryCard = () => {
  
  return (
    <Flex justifyContent={"center"}>
      <Box
        border={"solid 1.5px"}
        borderColor={index.colors.brand[100]}
        p={2}
        borderRadius={5}
        m={10}
        width={"auto"}
        maxWidth={500}
        minHeight={200}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <img
          src="https://www.mkrestaurant.com/public/uploads/mk_menu/images/33e10dd680609fd2de8cc182fd51f644.jpg"
          width="30%"
          height="30%"
          style={{ borderRadius: "5%", margin: 0 }}
          alt="Menu Item"
        />
        <Box flexDir={"row"}>
          <Text
            fontSize={index.textStyles.h1.fontSize}
            fontWeight={index.textStyles.h1.fontWeight}
          >
            MK Roast Duck
          </Text>
          <Text
            fontSize={index.textStyles.body2.fontSize}
            fontWeight={index.textStyles.body2.fontWeight}
          >
            Date: 05/11/23
          </Text>
          <Flex alignItems={"flex-end"} justifyContent={"flex-end"} mt={5}>
            <Text borderRadius={10} minWidth={100}>
              Canceled
            </Text>
          </Flex>
        </Box>
        <IconButton
          size="sm"
          aria-label="Next"
          fontSize="1.5rem"
          variant={"unstyle"}
        >
          <MdKeyboardArrowRight />
        </IconButton>
      </Box>
    </Flex>
  );
};
