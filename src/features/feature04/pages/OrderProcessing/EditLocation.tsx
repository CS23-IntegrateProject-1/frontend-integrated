import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Divider,
  Button,
} from "@chakra-ui/react";
import index from "../../../../theme/foundations/index";
import { useNavigate } from "react-router-dom";
// interface location {
//   address: string;
//   subaddress: string;
// }
export const EditLocation = () => {
  const PinIcon: React.FC = () => {
    return (
      <svg
        width="30"
        height="25"
        viewBox="0 0 19 17"
        fill={index.colors.brand[200]}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 0C2.68286 0 0 2.504 0 5.6C0 9.8 6 16 6 16C6 16 12 9.8 12 5.6C12 2.504 9.31714 0 6 0ZM6 7.6C5.43168 7.6 4.88663 7.38929 4.48477 7.01421C4.08291 6.63914 3.85714 6.13043 3.85714 5.6C3.85714 5.06957 4.08291 4.56086 4.48477 4.18579C4.88663 3.81071 5.43168 3.6 6 3.6C6.56832 3.6 7.11337 3.81071 7.51523 4.18579C7.91709 4.56086 8.14286 5.06957 8.14286 5.6C8.14286 6.13043 7.91709 6.63914 7.51523 7.01421C7.11337 7.38929 6.56832 7.6 6 7.6Z" />
      </svg>
    );
  };
  const navigate = useNavigate();
  const SaveLoc = () => {
    navigate("/map/food-delivery/checkout");
  };
  return (
    <Box>
      <Box display={"flex"} flexDirection={"column"}>
        <Text
          fontSize={index.textStyles.h1.fontSize}
          fontWeight={index.textStyles.h1.fontWeight}
        >
          Delivery address
        </Text>
        <br />
        <Box display={"flex"} flexDirection={"row"}>
          <PinIcon />
          <Box display={"flex"} flexDirection={"column"}>
            <Text
              fontSize={index.textStyles.h1.fontSize}
              fontWeight={index.textStyles.h1.fontWeight}
            >
              69 Soi Chemchon Wat Khlong Toei Nai 1 Yaek 2
            </Text>
            <Text
              fontSize={index.textStyles.h3.fontSize}
              fontWeight={index.textStyles.body1.fontWeight}
              color={index.colors.brand[100]}
            >
              Khlong Toei, Bangkok
            </Text>
          </Box>
        </Box>
        <FormControl>
          <FormLabel>We’re missing your building name</FormLabel>
          <Input type="text" placeholder="Building name" />
        </FormControl>
        <Divider pt={5} />
        <br />
        <Box display={"flex"} flexDirection={"row"} gap={2}>
          <FormControl width={"50%"}>
            <Input type="text" placeholder="Floor" />
          </FormControl>
          <FormControl width={"50%"}>
            <Input type="text" placeholder="Company Name" />
          </FormControl>
        </Box>
        <br />
        <FormControl>
          <Input type="text" placeholder="Delivery instruction" />
        </FormControl>
        <br />
        <Button
          variant={"unstyle"}
          backgroundColor={index.colors.brand[200]}
          color={"white"}
          borderRadius={10}
          onClick={SaveLoc}
        >
          Save and continue
        </Button>
      </Box>
    </Box>
  );
};
