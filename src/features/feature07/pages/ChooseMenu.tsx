import {Box,Text, VStack,Center} from "@chakra-ui/react"
import textStyles from "../../../theme/foundations/textStyles"
import { AddCard } from "../component/AddCard"
import { ButtonComponent } from "../../../components/buttons/ButtonComponent"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

interface Menu {
    name: string;
  }
  
  export const ChooseMenu: React.FC = () => {
    const [selectedMenus, setSelectedMenus] = useState<Menu[]>([]);
    const navigate = useNavigate();
  
    const handleAddMenuClick = () => {
      navigate('/venue/:venueId/addsetmenu', { state: { selectedMenus } });
    };
  
    return(
      <Box>
        <Box mt={4} p={1} marginLeft={0} borderColor="brand.200" borderWidth="1px" width='115px' height='30px' rounded="md" textAlign="center" bgColor="brand.200">
            <Text {...textStyles.h3}>All</Text>
        </Box>
        <Center>
        <VStack mt={4} overflowY="auto" maxHeight="400px">
            <AddCard onSelect={(menu) => setSelectedMenus((prevMenus) => [...prevMenus, menu])} />
            <AddCard onSelect={(menu) => setSelectedMenus((prevMenus) => [...prevMenus, menu])} />
        </VStack>
        </Center>
        <Center>
      <Box
        position="fixed"
        bottom="4"
        width="109px"
        height="29px"
        textAlign="center"
        borderRadius="5px">
            
        <ButtonComponent text="Add"
        onClick={handleAddMenuClick}
         />
         
      </Box>
      </Center>
    
      </Box>
    )
}