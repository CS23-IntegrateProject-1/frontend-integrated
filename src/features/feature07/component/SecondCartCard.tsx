import { Box, Flex, Image, Text,  VStack, HStack } from "@chakra-ui/react";
import { FC,useState } from "react";
import textStyles from "../../../theme/foundations/textStyles";
import { ButtonComponent } from "../../../components/buttons/ButtonComponent";
import { useNavigate } from "react-router-dom";
interface SecondCardProps {
  id:number;
  foodName: string;
  description: string;
  price: number;
  imageUrl: string;
  amount: number;
};

export const SecondCartCard: FC<SecondCardProps>= ({foodName,description,price,imageUrl,amount}) => {
    const navigate = useNavigate();
  return (
    <Flex 
    borderWidth="1px" 
    borderRadius="md" 
    width="319px" 
    height="120px" 
    p={1} 
    borderColor={"brand.100"}
     >
      
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
           Prepare food Name 
          {/* {foodName} */}
        </Text>
        <Text {...textStyles.body3} color="white"
         lineHeight="2" >
          Price Integrate
          {/* {{`${price.toFixed(2)} baht`}} */}
        </Text>
        <HStack justifyContent="space-between" alignItems="center" width="100%" mt={5}>
        <ButtonComponent text="Edit" width={"100px"} height={"30px"} onClick={() => navigate("/venue/:venueId/")}/>
        <Text {...textStyles.h2} color="white" lineHeight="1" justifyContent="flex-end" ml={6} >
              x1
        </Text>
        </HStack>
      </Box>
    </VStack>
    </Flex>
  );
};


