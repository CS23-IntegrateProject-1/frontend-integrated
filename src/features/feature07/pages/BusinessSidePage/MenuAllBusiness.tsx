import { Box, HStack, Button,Text, Center, Icon, VStack,Flex} from "@chakra-ui/react";
import { useState,useEffect } from "react";
import textStyles from "../../../../theme/foundations/textStyles";
import { BusMenucard } from "../../component/BusMenucard";
import { BusSetMenuCard } from "../../component/BusSetMenuCard";
import { ButtonComponent } from "../../../../components/buttons/ButtonComponent";
import { CustomCartIcon } from "../../component/CartIcon/createIcon";
import { useNavigate } from "react-router-dom";
import { RButton } from "../../component/RButton";
import { Axios } from "../../../../AxiosInstance";
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

const fetchMenuAndSetData = async (venueId: string) => {
    const [menuResponse, setResponse] = await Promise.all([
      Axios.get<Menu[]>(`/feature7/getMenusByVenueId/${venueId}`),
      Axios.get<SetMenu[]>(`/feature7/getSetsByVenueId/${venueId}`),
    ]);

    const menuData = menuResponse.data;
    const setMenuData = setResponse.data;
    console.log(menuData);

    return { menuData, setMenuData };
};

export const MenuAllBusiness = () => {
  
  const [allMenuButtonColor, setAllMenuButtonColor] = useState("brand.200");
  const [setMenuButtonColor, setSetMenuButtonColor] = useState("brand.400");
  const [borderColor, setBorderColor] = useState("brand.200");
  const [subtitle, setSubtitle] = useState<string>("Substitle");
  const navigate= useNavigate();
  const { venueId } = useParams();
  const venueIdNum: number = +venueId!;
  //console.log(venueId);

  const { data, isLoading, isError } = useQuery(["menuAndSetData", venueIdNum], () => fetchMenuAndSetData(venueIdNum.toString()));

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
    navigate(`/venue/${venueId}/bmenudetail/${type}/${menuid}`);
    console.log("Clicked menu. Menu ID:", menuid);
  }  

  const handleAddMenuClick = () => {
    const route = subtitle === "All Menu" ? "addmenu" : "addsetmenu";
    navigate(`/venue/${venueId}/${route}`);
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
              <BusMenucard
                key={menu.menuId}
                id={menu.menuId}
                foodName={menu.name}
                description={menu.description}
                price={menu.price}
                imageUrl={menu.image}
                onClick={() => handleMenuClick("Menu", `${menu.menuId}`)} amount={0}            />
            ))}
          </VStack>
        );
      }
    } else if (subtitle === "Set Menu") {
      if (setMenuData && setMenuData.length > 0) {
        return (
          <VStack mt={4} overflowY="auto" maxHeight="calc(100vh - 100px)">
            {setMenuData.map((set) => (
              <BusSetMenuCard
                key={set.setId}
                id={set.setId}
                foodName={set.name}
                description={set.description}
                price={set.price}
                imageUrl={set.image_url}
                onClick={() => handleMenuClick("Set", `${set.setId}`)} amount={0} type={""}            />
            ))}
          </VStack>
        );
      }
    }
  };
  
  return (
    <Box>
    <Flex direction="column" align="center" justify="center">
    <Center>
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
      </Center>
      </Flex>
      <Center >
      <Box mt={4} p={1} marginRight="220px" borderColor="brand.200" borderWidth="1px" width='115px' height='30px' rounded="md" textAlign="center" bgColor="brand.200">
       <Text {...textStyles.h3}>{subtitle}</Text>
      </Box>
      </Center>
      <Center >
      {renderMenuCards()}
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
        onClick={handleAddMenuClick} />
         
      </Box>
      </Center>
    
      </Box>
   
  );
};
