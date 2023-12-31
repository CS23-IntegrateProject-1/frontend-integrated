import {
  Box,
  Image,
  Text,
  VStack,
  HStack,
  Center,
  Switch,
  Flex,
} from "@chakra-ui/react";
import { FC } from "react";
import textStyles from "../../../../theme/foundations/textStyles";
import { ButtonComponent } from "../../../../components/buttons/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../../../AxiosInstance";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useCustomToast } from "../../../../components/useCustomToast";

interface branchAvailabilityProps {
  branchId: number;
  branchName: string;
  availability: boolean;
}

const getMenuItem = async (type: string, menuid: string) => {
  const response = await Axios.get(`/feature7/get${type}ById/${menuid}`);
  return response.data;
};

export const BusinessMenuDetail: FC = () => {
  const { type, menuid } = useParams();
  const toast = useCustomToast();
  //console.log(menuid);
  const navigate = useNavigate();
  // const [branchAvailability, setBranchAvailability] = useState([]);
  const {
    data: menuItem,
    isLoading,
    isError,
  } = useQuery([type, menuid], () => {
    if (type !== undefined && menuid !== undefined) {
      return getMenuItem(type, menuid);
    }
    return Promise.reject(new Error("type or menuid is undefined"));
  });
  //console.log(menuItem);

  const handleMenuEdit = () => {
    if (type == "Set") {
      navigate(`/business/venue/editsetmenu/${menuid}`);
    } else {
      navigate(`/business/venue/editmenu/${menuid}`);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await Axios.delete(`/feature7/delete${type}/${menuid}`);
      toast.success("Menu Deleted");
      console.log("Menu deleted:", response.data);
      if (type == "Set") {
        navigate(`/business/venue/menubusiness?section=setmenu`);
      } else {
        navigate(`/business/venue/menubusiness?section=allmenu`);
      }
      //   const targetPath = `/venue/${venueId}/menubusiness?section=allmenu`;
      //   //console.log('Navigating to:', targetPath);
      //   navigate(targetPath);
    } catch (error) {
      console.error("Error deleting menu:", error);
    }
  };

  const getBranchAvailability = async (menuid: string) => {
    const response = await Axios.get(
      `/feature7/checkMenuAvailabilityOfAllBranches/${menuid}`
    );
    //console.log("BranchAva",response.data);
    return response.data;
  };

  const { data: branchAvailabilityData, refetch: branchAvailabilityRefetch } =
    useQuery(["branchAvailability", menuid], () => {
      if (menuid !== undefined) {
        return getBranchAvailability(menuid);
      }
      return Promise.reject(new Error("menuid is undefined"));
    });
  //console.log("BranchAva2",branchAvailabilityData);

  const handleBranchSwitch = async (branchId: number) => {
    try {
      const response = await Axios.post(
        `/feature7/changeMenuAvailability/${menuid}/${branchId}`
      );
      branchAvailabilityRefetch();
      console.log("SetBranchAva", response);
    } catch (error) {
      console.error("Error setting availability:", error); // Log any errors for debugging
      console.log("Error response:"); // Log the error response for debugging
    }
    // setBranchAvailability(prevState => ({
    //     ...prevState,
    //     [branchId]: !prevState[branchId],
    // }));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching {type} details</div>;
  }

  return (
    <Flex direction="column" align="center" justify="center">
      <VStack align="start">
        <Center>
          <Image
            // src="/src/features/feature07/assets/test.jpg"
            src={
              type == "Set"
                ? `${import.meta.env.VITE_BACKEND_URL}${menuItem?.image_url}`
                : `${import.meta.env.VITE_BACKEND_URL}${menuItem?.image}`
            }
            width="350px"
            height="250px"
            objectFit="cover"
          />
        </Center>

        <Box width="100%">
          <Flex justifyContent="space-between" alignItems="flex-start">
            <Text {...textStyles.h1} color="white" lineHeight="1.5">
              {menuItem?.name}
            </Text>

            <Text
              {...textStyles.h3}
              color="white"
              lineHeight="1.5"
              marginLeft="auto"
            >
              {`${menuItem?.price} baht`}
            </Text>
          </Flex>
        </Box>

        <Text {...textStyles.body2}>{menuItem?.description}</Text>

        {type == "Menu" && branchAvailabilityData?.length > 0 && (
          <>
            <Text {...textStyles.h2}>Branch Availability</Text>
            {branchAvailabilityData?.map((branch: branchAvailabilityProps) => (
              <Flex
                key={branch.branchId}
                justifyContent="space-between"
                alignItems="center"
                width="100%"
              >
                <Text {...textStyles.body1}> {branch.branchName}</Text>

                <Switch
                  colorScheme="brand"
                  size="md"
                  marginLeft="auto"
                  isChecked={branch.availability}
                  onChange={() => handleBranchSwitch(branch.branchId)}
                />
              </Flex>
            ))}
          </>
        )}

        <HStack marginTop="2" bottom="4" position="fixed">
          <Box marginRight="4">
            <ButtonComponent
              width={"150px"}
              text="Delete"
              onClick={handleDelete}
            />
          </Box>
          <Box textAlign="center" borderRadius="5px">
            <ButtonComponent
              width={"150px"}
              text="Edit Menu"
              onClick={handleMenuEdit}
            />
          </Box>
        </HStack>
      </VStack>
    </Flex>
  );
};
