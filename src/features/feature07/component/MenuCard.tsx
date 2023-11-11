import { Box, Flex, Image, Text, IconButton, VStack } from "@chakra-ui/react";
import { FC,useState } from "react";
import textStyles from "../../../theme/foundations/textStyles";
import { AddIcon,MinusIcon} from '@chakra-ui/icons'

interface MenuCardProps {
  foodName: string;
  description: string;
  price: 900;
  imageUrl: string;
  onClick?: () => void;
};

export const MenuCard: FC<MenuCardProps>= ({foodName,description,price,imageUrl,onClick}) => {
//   const [amount, setAmount] = useState(0);

//   const increaseAmount = () => {
//     setAmount(amount + 1);
//   };

//   const decreaseAmount = () => {
//     if (amount > 0) {
//       setAmount(amount - 1);
//     }
//   };

  return (
    <Flex 
    borderWidth="1px" 
    borderRadius="md" 
    width="319px" 
    height="120px" 
    p={1} 
    borderColor={"brand.100"}
    cursor={onClick ? "pointer" : "default"} 
    onClick={onClick} >
      
    <Flex justifyContent="center" >
      <Image src="/src/features/feature07/assets/test.jpg"
      alt="integrate" 
      objectFit="cover" 
      mt={0.5}
      width="140px" 
      height="105px"
      borderRadius="5px"
      position="relative"
      />
    </Flex>
   
    <VStack alignItems="left" mt={2} ml={2}>
      <Box>
        <Text {...textStyles.h2} color="white" 
        lineHeight="1.5" >
          food Name Integrate
          {/* {foodName} */}
        </Text>
        <Text {...textStyles.body2} color="white"
         lineHeight="1.5" >
          Description Integrate kasjfakldf
          asflkajsflk 
          dkASJDH
          {/* {description} */}
        </Text>
        <Text {...textStyles.body3} color="white"
         lineHeight="1.5" >
          Price Integrate
          {/* {{`${price.toFixed(2)} baht`}} */}
        </Text>
      </Box>
    </VStack>
    </Flex>
  );
};


