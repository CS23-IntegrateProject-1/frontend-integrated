import { Box, HStack, Button,Text, IconButton, Icon, VStack,Flex,Center} from "@chakra-ui/react";
import { useState,useEffect } from "react";
import textStyles from "../../../theme/foundations/textStyles";
import { MenuCard } from "../component/MenuCard";
import { SetMenuCard } from "../component/SetMenuCard";
import { ButtonComponent } from "../../../components/buttons/ButtonComponent";
import { CustomCartIcon } from "../component/CartIcon/createIcon";
import { useNavigate } from "react-router-dom";
import { RButton } from "../component/RButton";

import { Axios } from "../../../AxiosInstance";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

interface Menu {
  menuId: number;
  name: string;
  description: string;
  price: number;
  image: string;
  onClick?: () => void;
}
interface SetMenu {
  setId: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  onClick?: () => void;
}

// const fetchMenuData =async (venueId: string) => {
//   try {
//     const response = await Axios.get<Menu[]>(`/feature7/getMenusByVenueId/${venueId}`);
//     return response.data;
//   } catch (error) {
//     throw new Error(`Error fetching menu data: ${error.message}`);
//   }
// }

const fetchMenuAndSetData = async (venueId: string) => {
    const [menuResponse, setResponse] = await Promise.all([
      Axios.get<Menu[]>(`/feature7/getMenusByVenueId/${venueId}`),
      Axios.get<SetMenu[]>(`/feature7/getSetsByVenueId/${venueId}`),
    ]);

    const menuData = menuResponse.data;
    const setMenuData = setResponse.data;

    return { menuData, setMenuData };
};

export const MenuAll = () => {
  
  const [allMenuButtonColor, setAllMenuButtonColor] = useState("brand.200");
  const [setMenuButtonColor, setSetMenuButtonColor] = useState("brand.400");
  const [borderColor, setBorderColor] = useState("brand.200");
  const [subtitle, setSubtitle] = useState<string>("Substitle");
  const navigate= useNavigate();
  const { venueId } = useParams();
  //console.log(venueId);

  const { data, isLoading, isError } = useQuery(["menuAndSetData", venueId], () => fetchMenuAndSetData(venueId));

  const handleAllMenuClick = () => {
    if (subtitle !== "All Menu") {
      setSubtitle("All Menu");
      setAllMenuButtonColor("brand.200");
      setSetMenuButtonColor("brand.400");
      setBorderColor("brand.200");
    }
  };

  const handleSetMenuClick = () => {
    if (subtitle !== "Set Menu") {
      setSubtitle("Set Menu");
      setAllMenuButtonColor("brand.400");
      setSetMenuButtonColor("brand.200");
      setBorderColor("brand.200");
    }
  };
  const handleMenuClick = (type: string, menuid: string) => {
    navigate(`/venue/${venueId}/menudetail/${type}/${menuid}`);
    console.log("Clicked menu. Menu ID:", menuid);
  }  
  const handleCartClick = () => {
    navigate(`/venue/${venueId}/cart`); 
  };
  useEffect(() => {
    handleAllMenuClick();
    const params = new URLSearchParams(window.location.search);
    const sectionParam = params.get('section');

  if (sectionParam === 'setmenu') {
    handleSetMenuClick();
  }
  }, []);

  const renderMenuCards = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (isError) {
      return <p>Error loading data</p>;
    }

    const { menuData, setMenuData } = data;

    if (subtitle === "All Menu") {
      if (menuData && menuData.length > 0) {
        return (
          <VStack mt={4} overflowY="auto" maxHeight="calc(100vh - 100px)">
            {menuData.map((menu) => (
              <MenuCard
              key={menu.menuId}
              id={menu.menuId}
              foodName={menu.name}
              description={menu.description}
              price={menu.price}
              imageUrl={menu.image}
              onClick={() => handleMenuClick("Menu", `${menu.menuId}`)}
            />
            ))}
            {/* {menuData.map((menu) => {
          console.log("Rendering menu item:", menu);
          
          if (!menu.menuId) {
            console.error("Menu ID is undefined or null for the following menu item:", menu);
          }

          return (
            <MenuCard
              key={menu.menuId}
              id={menu.menuId}
              foodName={menu.name}
              description={menu.description}
              price={menu.price}
              imageUrl={menu.image}
              onClick={() => handleMenuClick("Menu", `${menu.menuId}`)}
            />
          );
        })} */}
          </VStack>
        );
      }
    } else if (subtitle === "Set Menu") {
      if (setMenuData && setMenuData.length > 0) {
        return (
          <VStack mt={4} overflowY="auto" maxHeight="calc(100vh - 100px)">
            {setMenuData.map((set) => (
              <SetMenuCard
              key={set.setId}
              id={set.setId}
              foodName={set.name}
              description={set.description}
              price={set.price}
              imageUrl={set.image_url}
              onClick={() => handleMenuClick("Set", `${set.setId}`)}
            />
            ))}
          </VStack>
        );
      }
    }
  };
  
  return (
    <Box>
    <Flex direction="column" align="center" justify="center">
      <HStack spacing={4}>
      <RButton 
        bgColor={allMenuButtonColor}
        borderColor={borderColor}
        text={"All Menu"}
        textStyle={"h3"}
        width={"110px"}
        height={"32px"}
        onClick={handleAllMenuClick}
         />
         <RButton 
        bgColor={setMenuButtonColor}
        borderColor={borderColor}
        text={"Set Menu"}
        textStyle={"h3"}
        width={"110px"}
        height={"32px"}
        onClick={handleSetMenuClick}
         />
      </HStack>
      </Flex>
      <Center>
      <Box mt={4} p={1} marginRight="220px" borderColor="brand.200" borderWidth="1px" width='115px' height='30px' rounded="md" textAlign="center" bgColor="brand.200">
       <Text {...textStyles.h3}>{subtitle}</Text>
      </Box>
      </Center>
      {renderMenuCards()}
      <Center>
      <Box
        position="fixed"
        bottom="20"
        marginLeft="300px"
        borderRadius="5px"
        zIndex="1"
      >
        <Icon as={CustomCartIcon}
          color="currentColor"
          aria-label="Open Cart"
          boxSize={20}
          onClick={handleCartClick}
        />
      </Box>
      </Center>
      <Center>
      <Box
        position="fixed"
        bottom="4"
        width="109px"
        height="29px"
        textAlign="center"
        borderRadius="5px">
            
        <ButtonComponent text="Order Status"
        onClick={() => navigate(`/venue/${venueId}/order`)} />
      </Box>
      </Center>
      </Box>
   
  );
};
