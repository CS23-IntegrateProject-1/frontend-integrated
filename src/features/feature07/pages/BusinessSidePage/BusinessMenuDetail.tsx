import {Box,Image,Text,VStack,HStack,Center,Switch} from "@chakra-ui/react";
import {FC,useEffect,useState} from "react";
import textStyles from "../../../../theme/foundations/textStyles";
import { AddIcon,MinusIcon} from '@chakra-ui/icons'
import { ButtonComponent } from "../../../../components/buttons/ButtonComponent";
import {useNavigate} from "react-router-dom";
import { Axios } from "../../../../AxiosInstance";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const getMenuItem = async (type: string, menuid: string) => {
    const response = await Axios.get(`/feature7/get${type}ById/${menuid}`);
    return response.data;
};

interface BusMenuDetailProps {
    id: number;
    name: string;
    price: number;
    description: string;
    image_url: string;
}

export const BusinessMenuDetail: FC = () => {
    const {type, menuid, venueId} = useParams();
    //console.log(menuid);
    const navigate = useNavigate();
    // const [branchAvailability, setBranchAvailability] = useState([]);
    const { data: menuItem, isLoading, isError } = useQuery([type, menuid], () => getMenuItem(type, menuid));
    //console.log(menuItem);

    const handleMenuEdit = () => {
        navigate(`/venue/${venueId}/editmenu/${menuid}`);     
    }

    const handleDelete = async() => {
        try{
          const response = await Axios.delete(`/feature7/deleteMenu/${menuid}`);
          console.log('Menu deleted:', response.data);
          const targetPath = `/venue/${venueId}/menubusiness?section=allmenu`;
          console.log('Navigating to:', targetPath);
          navigate(targetPath);
        } catch (error) {
          console.error('Error deleting menu:', error);
        }
        
      };

    const getBranchAvailability = async (menuid: string) => {
        const response = await Axios.get(`/feature7/checkMenuAvailabilityOfAllBranches/${menuid}/${venueId}`);
        //console.log("BranchAva",response.data);
        return response.data;
    };

    const {data: branchAvailabilityData, refetch: branchAvailabilityRefetch } = useQuery(["branchAvailability", menuid], () => getBranchAvailability(menuid));
    //console.log("BranchAva2",branchAvailabilityData);

    const handleBranchSwitch = async (branchId: number) => {
        try{
            const response = await Axios.post(`/feature7/changeMenuAvailability/${menuid}/${venueId}/${branchId}`);
            branchAvailabilityRefetch();
            //console.log("SetBranchAva",response);
        } catch (error) {
            console.error('Error setting availability:', error); // Log any errors for debugging
            console.log('Error response:'); // Log the error response for debugging
        }
        // setBranchAvailability(prevState => ({
        //     ...prevState,
        //     [branchId]: !prevState[branchId],
        // }));
    }
   
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching {type} details</div>;
    }

    return(
        <Box>
            <Center>
            <Image 
                // src="/src/features/feature07/assets/test.jpg" 
                src={type == "Set" ? `http://localhost:8080/uploads/${menuItem.image_url}`: `http://localhost:8080/uploads/${menuItem.image}`}
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
                {branchAvailabilityData?.map(branch => (
                    <HStack key={branch.branchId} alignItems="center">
                        <Text {...textStyles.h3} mr={2}> {branch.branchName}</Text>
                        <Switch
                            colorScheme="brand"
                            size="md"
                            isChecked={branch.availability}
                            onChange={() => handleBranchSwitch(branch.branchId)}
                        />
                    </HStack>
                ))}
            </VStack>
            </Center>
            <Center>
            <HStack marginTop="2" bottom="4" position="fixed">
            <Box marginRight="4">
            <ButtonComponent
              width={"150px"}
              text="Delete"
              onClick={handleDelete}
            />
            </Box>
            <Box
            textAlign="center"
            borderRadius="5px">
            <ButtonComponent 
            width={"150px"}
            text="Edit Menu" 
            onClick={handleMenuEdit}
            />
            </Box>
            </HStack>
            </Center>
        </Box>
    )
}