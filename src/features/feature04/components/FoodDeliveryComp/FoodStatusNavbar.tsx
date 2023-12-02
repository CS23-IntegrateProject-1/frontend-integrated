import { Box, Flex, Button, Text } from "@chakra-ui/react";
import { useNavigate} from "react-router-dom";
import index from "../../../../theme/foundations/index";




const FoodStatusNavbar = () => {
  const navigate= useNavigate();
const OngoingPage=()=>{
  navigate('/map/food-delivery/ongoing');
}
const CompletedPage=()=>{
  navigate('/map/food-delivery/completed');
}
const CanceledPage=()=>{
  navigate('/map/food-delivery/canceled');
}
const isOngoingActive = location.pathname === '/map/food-delivery/ongoing'
const isCompletedActive = location.pathname === '/map/food-delivery/completed'
const isCanceledActive = location.pathname === '/map/food-delivery/canceled'
const linkStyle = {
  textDecoration: "none",
  color: index.colors.white,
  backgroundColor: index.colors.brand[200],
};

const linkStyleNotActive = {
  backgroundColor: "none",
  border: "1px solid",
  borderColor: index.colors.brand[200],
};


  return (
    <Box>
      <Flex justifyContent={"space-between"}>
        <Button
          variant="unstyle"
          borderRadius={50}
          onClick={OngoingPage}
          style={ isOngoingActive
              ? linkStyle
              : linkStyleNotActive
          }
        >
          <Text
            fontSize={index.textStyles.h1.fontSize}
            fontWeight={index.textStyles.h1.fontWeight}
            color={index.colors.white}
          >
            On going
          </Text>
        </Button>

        <Button
          variant="unstyle"
          borderRadius={50}
          onClick={CompletedPage}
          style={ isCompletedActive
              ? linkStyle
              : linkStyleNotActive
          }
        >
          <Text
            fontSize={index.textStyles.h1.fontSize}
            fontWeight={index.textStyles.h1.fontWeight}
            color={index.colors.white}
          >
            Completed
          </Text>
        </Button>

        <Button
          variant="unstyle"
          borderRadius={50}
          onClick={CanceledPage}
          style={ isCanceledActive
              ? linkStyle
              : linkStyleNotActive
          }
        >
          <Text
            fontSize={index.textStyles.h1.fontSize}
            fontWeight={index.textStyles.h1.fontWeight}
            color={index.colors.white}
          >
            Canceled
          </Text>
        </Button>
      </Flex>
    </Box>
  );
};

export default FoodStatusNavbar;
