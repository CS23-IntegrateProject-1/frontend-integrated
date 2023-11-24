import { Box, Flex,Button,Text } from "@chakra-ui/react"
import index from "../../../../theme/foundations/index"
function FoodStatus(){
    return(
        <Box>
            <Flex justifyContent={"space-between"}>
            <Button variant="unstyle"
        borderRadius={50}
        backgroundColor={index.colors.brand[200]}>
          <Text
            fontSize={index.textStyles.h1.fontSize}
            fontWeight={index.textStyles.h1.fontWeight}
            color={index.colors.white}

          >
            On going
          </Text>
        </Button>

        <Button variant="unstyle"
        borderRadius={50}
        backgroundColor={index.colors.brand[200]}>
        
          <Text
            fontSize={index.textStyles.h1.fontSize}
            fontWeight={index.textStyles.h1.fontWeight}
            color={index.colors.white}

          >
            Completed
          </Text>
        </Button>

        <Button variant="unstyle"
        borderRadius={50} 
        backgroundColor={index.colors.brand[200]}>
          <Text
            fontSize={index.textStyles.h1.fontSize}
            fontWeight={index.textStyles.h1.fontWeight}
            color={index.colors.white}

          >
            Cancled
          </Text>
        </Button>
            </Flex>
        </Box>
    )
}
export default FoodStatus;