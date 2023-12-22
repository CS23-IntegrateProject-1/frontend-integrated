import { Box, Flex, Button } from "@chakra-ui/react";
import index from "../../../../../theme/foundations/index";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Axios } from "../../../../../AxiosInstance";
import { useCustomToast } from "../../../../../components/useCustomToast";


interface Order {
  venueId: string | undefined;
  branchId: string | undefined;
  address: string;
  driverNote: string;
}

export const PlaceOrder = (props: Order) => {
  const toast = useCustomToast();
  const navigate = useNavigate();

  const handlePlaceOrderClick = () => {
    // Call the postData function when the button is clicked
    postData();
  };

  useEffect(() => {
    // The useEffect will run when the component mounts
    // No need to duplicate the postData logic here
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const postData = async () => {
    try {
      if (props.venueId === undefined || props.branchId === undefined) {
        console.error("VenueId or BranchId is undefined");
        return;
      }
      if (props.address.trim() === "") {
        toast.error("Fill in your address");
        return;
      }

      const response = await Axios.post("feature4/createOnlineOrder", {
        venueId: parseInt(props.venueId),
        branchId: parseInt(props.branchId),
        address: props.address,
        driverNote: props.driverNote,
      });

      if (response.status === 200 || response.status === 201) {
        toast.success("Order placed successfully");
        // Handle success, e.g., redirect to a new page
        navigate(`/map/food-delivery/your-order/${props.venueId}/${props.branchId}`);
      } else {
        // Handle error
        const errorString = response.statusText || "Unknown error";
        console.error("Error placing order:", errorString);
      }
    } catch (error) {
      const errorString = (error as Error).message || "Unknown error";
      console.error("Error placing order:", errorString);
    }
  };

  return (
    <Box>
      <Flex flexDirection={"column"} alignItems={"center"} gap={2}>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-around"}
          gap={2}
        ></Box>
        <Button
          variant={"unstyle"}
          backgroundColor={index.colors.brand[200]}
          maxWidth={500}
          minWidth={100}
          maxHeight={100}
          width={500}
          mb={2}
          onClick={handlePlaceOrderClick} // Attach the click handler to the button
        >
          Place Order
        </Button>
      </Flex>
    </Box>
  );
};
