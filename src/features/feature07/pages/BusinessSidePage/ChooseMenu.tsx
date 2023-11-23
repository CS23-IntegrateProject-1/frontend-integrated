import {Box,Text, VStack,Center} from "@chakra-ui/react"
import textStyles from "../../../../theme/foundations/textStyles"
import { AddCard } from "../../component/AddCard"
import { ButtonComponent } from "../../../../components/buttons/ButtonComponent"
import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import { Axios } from "../../../../AxiosInstance"
import { useQuery } from "@tanstack/react-query"

interface Menu {
  id: number;
  foodName: string;
  description: string;
  price: number;
  imageUrl: string;
  }
  
  export const ChooseMenu: React.FC = () => {
    const [selectedMenuIds, setSelectedMenuIds] = useState<number[]>([]);
    const navigate = useNavigate();
    const { venueId } = useParams();

    const getMenu = async () => {
        const response = await Axios.get(`/feature7/getMenusByVenueId/${venueId}`);
        const menuData = response.data;
        //console.log(menuData);
        return menuData;
      }

    const { data : menus, isLoading, isError } = useQuery(["menuData"], () => getMenu());
  
    const handleAddMenuClick = async () => {
      try {
        // Send selectedMenus to the backend to store in cookies
        await Axios.post('/feature7/addMenuItemsToSetsInCookies', { menuIds: selectedMenuIds });
        // Navigate to the next page or perform other actions as needed
        navigate(`/venue/${venueId}/addsetmenu`, { state: { selectedMenuIds } });
      } catch (error) {
        // Handle error
        console.error("Error adding menu items to cookies", error);
      }
    };

    const handleMenuSelect = (menuId: number) => {
      setSelectedMenuIds(prevSelectedMenuIds => {
        if (prevSelectedMenuIds.includes(menuId)) {
          return prevSelectedMenuIds.filter(id => id !== menuId); // Deselect if already selected
        } else {
          return [...prevSelectedMenuIds, menuId]; // Select if not selected
        }
      });
    };
  

    const renderMenuCards = () => {
      if (isLoading) {
        return <p>Loading...</p>;
      }
  
      if (isError) {
        return <p>Error loading data</p>;
      }

      if (menus && menus.length > 0) {
        return menus.map((menu) => (
          <AddCard
            key={menu.menuId}
            id={menu.menuId}
            foodName={menu.name}
            description={menu.description}
            price={menu.price}
            imageUrl={menu.image}
            // onSelect={(menu) => setSelectedMenus((prevMenus) => [...prevMenus, menu])}
            onSelect={handleMenuSelect}
          />
        ));
      }
    };
  
    return(
      <Box>
        <Box mt={4} p={1} marginLeft={0} borderColor="brand.200" borderWidth="1px" width='115px' height='30px' rounded="md" textAlign="center" bgColor="brand.200">
            <Text {...textStyles.h3}>All</Text>
        </Box>
        <Center>
        <VStack mt={4} overflowY="auto" maxHeight="400px">
          {renderMenuCards()}
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