import {Box,Image,Text,VStack,HStack,Flex,IconButton,Button} from "@chakra-ui/react";
import {FC,useState} from "react";
import textStyles from "../../../theme/foundations/textStyles";
import { AddIcon,MinusIcon} from '@chakra-ui/icons'
import { ButtonComponent } from "../../../components/buttons/ButtonComponent";

interface MenuDetailProps {
    id:number;
    name:string;
    price:number;
    description:string;
    imageUrl:string;
}
export const MenuDetail: FC = () => {

    const [amount, setAmount] = useState(0);

    const increaseAmount = () => {
      setAmount(amount + 1);
    };
  
    const decreaseAmount = () => {
      if (amount > 0) {
        setAmount(amount - 1);
      }
    };

    const buttonBgColor = amount > 0 ? "brand.200" : "gray.300";

    return(
        <Box>
            {/* integrate src={MenuDetail.imageUrl} */}
            <Image src="/src/features/feature07/assets/test.jpg" width="350px" height="250px" objectFit="cover"/>
            <VStack p={1.5} textAlign="start" alignItems="start">
                <HStack>
                <Text {...textStyles.h1} color="white" lineHeight="1.5">Food Name Integrate</Text>
                <Text {...textStyles.h3} color="white" lineHeight="1.5" marginLeft="70px">8000 baht</Text>
                </HStack>
                <Text {...textStyles.body2}>description hlsajfakjfklajflaflasjdf</Text>
            </VStack>
            <HStack  p={2} position="absolute" bottom="0" width="100%" spacing={15}>
            <HStack>
            <Box border="solid" 
            bgColor="white" 
            width="116px" 
            height="30px"
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
                    width="30px"
                    height="28px"
                    borderRadius="5px 0 0 5px"
                />
                    <Text {...textStyles.h2} marginX={2} color="black">
                    {amount}
                    </Text>
                <IconButton
                    icon={<AddIcon/>}
                    onClick={increaseAmount}
                    aria-label="Increase Amount"
                    width="30px"
                    height="28px"
                    borderRadius="0 5px 5px 0"
                    marginRight={0}
                />
                </Flex>
            </Box>
            </HStack>
            <ButtonComponent 
            width="200px"
            text="Add To Cart" 
            bgColor={buttonBgColor}
            isDisabled={amount === 0}/>
            </HStack>
        </Box>
    )
}