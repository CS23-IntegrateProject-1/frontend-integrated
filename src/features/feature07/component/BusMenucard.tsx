import { Box, Flex, Image, Text,  VStack} from "@chakra-ui/react";
import { FC} from "react";
import textStyles from "../../../theme/foundations/textStyles";
// import { ButtonComponent } from "../../../components/buttons/ButtonComponent";
import { useNavigate, useParams } from "react-router-dom";
// import { EditIcon } from '@chakra-ui/icons'
interface BusMenuCardProps {
  id:number;
  foodName: string;
  description: string;
  price: number;
  imageUrl: string;
  amount: number;
  // type: string;
  onClick?: () => void;
}

export const BusMenucard: FC<BusMenuCardProps>= ({foodName,description,price,imageUrl,onClick}) => {
    // const [isAvailable, setIsAvailable] = useState(true);

  //   const handleMenuEdit = () => {
  //         navigate(`/venue/${venueId}/bmenudetail`);
  //         console.log("Clicked menu. Menu ID:", id);
  // }

  return (
    <Flex 
    borderWidth="1px" 
    borderRadius="md" 
    width="340px" 
    height="130px" 
    p={1} 
    borderColor={"brand.100"}
    onClick={onClick}
    >
      
    <Flex justifyContent="center" width="140px" height="105px" >
      <Image 
      // src="/src/features/feature07/assets/test.jpg"
      src={`http://localhost:8080/uploads/${imageUrl}`}
      alt="integrate" 
      objectFit="cover" 
      mt={0.5}
      width="140px" 
      height="102px"
      borderRadius="5px"
      position="relative"
      />
    </Flex>
   
    <VStack alignItems="left" mt={1} ml={2} flex="1">
      <Box>
        {/* <HStack spacing={2} align="center"> */}
        <Text {...textStyles.h3} color="white" 
        lineHeight="1.5" >
            
           {/* Prepare food Name  */}
          {foodName}
        </Text>
        {/* <EditIcon color="white" boxSize={4} ml="auto" onClick={() => handleMenuEdit()}/> */}
        {/* </HStack> */}
        <Text {...textStyles.body2} color="white"
         lineHeight="1.5" >
          {/* Description Integrate kasjfakldf
          asflkajsflk 
          dkASJDH */}
          {description}
        </Text>
        <Text {...textStyles.body3} color="white"
         lineHeight="2" >
          {/* Price Integrate */}
          {`${price} baht`}
        </Text>
        {/* <ButtonComponent 
        text={isAvailable ? "Available" : "Out of Stock"}
        textStyle="body2"
        width={isAvailable ? "70px" : "90px"}
        height={"30px"} 
        bgColor={isAvailable ? "green" : "red"} 
        bgColorHover={isAvailable ? "green" : "red"}
        /> */}
      </Box>
    </VStack>
    </Flex>
  );
};


