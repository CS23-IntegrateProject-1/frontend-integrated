import { Box, Flex, Image, Text, IconButton, VStack } from "@chakra-ui/react";
import { FC,useState } from "react";
import textStyles from "../../../theme/foundations/textStyles";
import { AddIcon,MinusIcon} from '@chakra-ui/icons'

interface MenuCardProps {
  foodName: string;
  description: string;
  price: number;
  imageUrl: string;
};

export const MenuCard: FC = () => {
  const [amount, setAmount] = useState(0);

  const increaseAmount = () => {
    setAmount(amount + 1);
  };

  const decreaseAmount = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  return (
    <Flex 
    borderWidth="1px" 
    borderRadius="md" 
    width="319px" 
    height="129px" 
    p={1} 
    borderColor={"brand.100"}>
    <Flex justifyContent="center" >
      <Image src="/src/features/feature07/assets/test.jpg"
      alt="integrate" 
      objectFit="cover" 
      marginRight={4} 
      mt={1.5}
      width="140px" 
      height="105px"
      borderRadius="5px"
      poaition="absolute"
      />
    </Flex>
   
    <VStack alignItems="left" mt={2}>
      
        <Text {...textStyles.h2} color="white" 
        lineHeight="1" >
          food Name Integrate
        </Text>
        <Text {...textStyles.body2} color="white"
         lineHeight="1" >
          Description Integrate
        </Text>
        <Text {...textStyles.body3} color="white"
         lineHeight="1" >
          Price Integrate
        </Text>
      
      <Box border="solid" 
      bgColor="white" 
      width="121px" 
      height="35px"
      ml = '0'
      borderColor="white"
      borderRadius="5px"
      >
      <Flex justifyContent="space-between">
        <IconButton
          icon={<MinusIcon/>}
          onClick={decreaseAmount}
          isDisabled={amount === 0}
          aria-label="Decrease Amount"
          width="40px"
          height="32px"
          borderRadius="5px 0 0 5px"
        />
        <Text {...textStyles.h1} marginX={2} color="black">
          {amount}
        </Text>
        <IconButton
          icon={<AddIcon/>}
          onClick={increaseAmount}
          aria-label="Increase Amount"
          width="40px"
          height="32px"
          borderRadius="0 5px 5px 0"
          marginRight={0}
        />
      </Flex>
      </Box>
    </VStack>
    </Flex>
  );
};


