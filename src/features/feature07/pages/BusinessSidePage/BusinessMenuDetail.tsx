import {Box,Image,Text,VStack,HStack,Center,Switch} from "@chakra-ui/react";
import {FC,useState} from "react";
import textStyles from "../../../../theme/foundations/textStyles";
import { AddIcon,MinusIcon} from '@chakra-ui/icons'
import { ButtonComponent } from "../../../../components/buttons/ButtonComponent";
import {useNavigate} from "react-router-dom";
import { Axios } from "../../../../AxiosInstance";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

// const getMenuItem = async (type: string, menuid: string) => {
//     const response = await Axios.get(`/feature7/get${type}ById/${menuid}`);
//     return response.data;
//   };

interface Branch {
    id: number;
    name: string;
    isAvailable: boolean;
}

interface MenuItem {
    id: number;
    name: string;
    price: number;
    description: string;
    image_url: string;
    branches: Branch[];
}

interface BusMenuDetailProps {
    id: number;
    name: string;
    price: number;
    description: string;
    image_url: string;
}

export const BusinessMenuDetail: FC = () => {
    const {type, menuid} = useParams();
    //console.log(menuid);
    const navigate = useNavigate();
    const [branchAvailability, setBranchAvailability] = useState<{ [branchId: number]: boolean }>({});
    const { data: menuItem, isLoading, isError } = useQuery([type, menuid], () => getMenuItem(type, menuid));
    console.log(menuItem);

    const handleMenuEdit = () => {
        navigate(`/venue/:venueId/editmenu`);
        
}
const handleBranchSwitchChange = (branchId: number) => {
        setBranchAvailability(prevState => ({
            ...prevState,
            [branchId]: !prevState[branchId],
        }));
    }

    const getMenuItem = async (type: string, menuid: string): Promise<MenuItem> => {
        return {
            id: 1,
            name: "Sample Menu Item",
            price: 1000,
            description: "Sample Description",
            image_url: "/src/features/feature07/assets/test.jpg",
            branches: [
                { id: 1, name: "Branch 1", isAvailable: false },
                { id: 2, name: "Branch 2", isAvailable: true },
                { id: 3, name: "Branch 3", isAvailable: false },
            ],
        };
    };

   
    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    // if (isError) {
    //     return <div>Error fetching {type} details</div>;
    // }

    return(
        <Box>
            <Center>
            <Image 
                src="/src/features/feature07/assets/test.jpg" 
                // src={type == "Set" ? menuItem.image_url: menuItem.image}
                width="350px" 
                height="250px" 
                objectFit="cover"/>
            </Center>
                <Center>
                 <VStack p={1.5} textAlign="start" alignItems="start">
                <HStack>
                    <Text {...textStyles.h1} color="white" lineHeight="1.5">{menuItem?.name}</Text>
                    <Text {...textStyles.h3} color="white" lineHeight="1.5" marginLeft="70px">{`${menuItem?.price} baht`}</Text>
                </HStack>
                <Text {...textStyles.body2}>{menuItem?.description}</Text>
                {menuItem?.branches.map(branch => (
                    <HStack key={branch.id} alignItems="center">
                        <Text {...textStyles.h3} mr={2}>{branch.name}</Text>
                        <Switch
                            colorScheme="brand"
                            size="md"
                            isChecked={branchAvailability[branch.id]}
                            onChange={() => handleBranchSwitchChange(branch.id)}
                        />
                    </HStack>
                ))}
            </VStack>
            </Center>
            <Center>
            <Box
            position="fixed"
            bottom="4"
            textAlign="center"
            borderRadius="5px">
            <ButtonComponent 
            width="200px"
            text="Edit Menu" 
            onClick={handleMenuEdit}
            />
            </Box>
            </Center>
        </Box>
    )
}