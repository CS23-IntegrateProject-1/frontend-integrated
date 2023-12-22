import { Box, Text, Flex } from "@chakra-ui/react";
import { CartDetailNavbar } from "../../components/FoodDeliveryComp/CartDetail/CartDetailNavbar";
import { FoodStatus } from "../../components/FoodDeliveryComp/OrderProcessingComp/FoodStatus";
import { SelectLocation } from "../../components/FoodDeliveryComp/OrderProcessingComp/SelectLocation";
import { PaymentMethod } from "../../components/FoodDeliveryComp/OrderProcessingComp/PaymentMethod";
import index from "../../../../theme/foundations/index";
// import SavedLocationItem from "../../components/FoodDeliveryComp/OrderProcessingComp/SelectLocation"
import { SavedLocationItem } from "../../components/FoodDeliveryComp/OrderProcessingComp/SelectLocation";
// import { OrderSummary } from "../../components/FoodDeliveryComp/OrderProcessingComp/OrderSummary";
import { PlaceOrder } from "../../components/FoodDeliveryComp/OrderProcessingComp/PlaceOrder";
import { useEffect, useState } from "react";
import { Axios } from "../../../../AxiosInstance";
import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// interface Order {
//   amount: number;
//   restaurant: string;
//   size: string;
//   price: number;
// }
export const Checkout = () => {
  const { venueId, branchId } = useParams();

  const [venue, setVenue] = useState<string>(""); // Define total state
  const [branchName, setBranchName] = useState<string>(""); // Define total state
  const [location, setLocation] = useState<string>(""); // Define total state
  const [deliveryInstruction, setDeliveryInstruction] = useState<string>(""); // Define total state
  useEffect(() => {
    const fetchBranchName = async () => {
      try {
        const response = await Axios.get(`/feature4/branch/${venueId}/${branchId}`)
        console.log(response.data);
        setBranchName(response.data.branch.branch_name);
        setVenue(response.data.venue.name);
      } catch (error) {
        console.log("Error fetching branch name: ", error);
      }
    }
    fetchBranchName();
  }, [branchId, venueId]);

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("");
  console.log(selectedPaymentMethod)

  const handlePaymentMethodSelect = (paymentMethod: string) => {
    // Set the selected payment method to state or perform any other actions here
    setSelectedPaymentMethod(paymentMethod);
  };

  const handleLocationSelect = (selectedLocation: SavedLocationItem | undefined,deliveryInstruction: string) => {
    if (selectedLocation) {
      // Do something with the selected location data
      console.log("Selected Location:", selectedLocation.province);
      console.log("Delivery Instruction",deliveryInstruction)
      const locally = selectedLocation.name + " " + selectedLocation.address + " " + selectedLocation.district + " " + selectedLocation.sub_district + " "+ selectedLocation.province + " " +selectedLocation.postcode
      setLocation(locally);
      setDeliveryInstruction(deliveryInstruction);
      // You can set the location data to state or perform any other actions here
    } else {
      // Handle the case where selectedLocation is undefined
      console.error("No location selected");
    }
  };
  return (
    
    <Box>
      <FoodStatus venueId={venueId} branchId={branchId}/>
<br/>
      <Flex justifyContent={"center"}>
        <Text
          textAlign={"center"}
          fontSize={index.textStyles.h1.fontSize}
          fontWeight={index.textStyles.h1.fontWeight}
          color={index.colors.white}
        >
          Checkout
        </Text>
      </Flex>
      <CartDetailNavbar RestaurantName={venue} BranchName={branchName} />
      <SelectLocation onLocationSelect={handleLocationSelect} />
      <br />
      <PaymentMethod onPaymentMethodSelect={handlePaymentMethodSelect}/> 
      <br />

      <br/>
      <PlaceOrder venueId={venueId} branchId={branchId} address= {location} driverNote={deliveryInstruction}/>
    </Box>
  );
};
