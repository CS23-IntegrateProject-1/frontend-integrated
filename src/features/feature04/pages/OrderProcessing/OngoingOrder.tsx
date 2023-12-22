import { Box, Text, Flex, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
    import { YourOrderStatusComp } from "../../components/FoodDeliveryComp/YourOrderStatus/YourOrderStatusComp";
    import index from "../../../../theme/foundations/index"
    import { useNavigate, useParams } from "react-router-dom";
    import { Axios } from "../../../../AxiosInstance";
    import { useEffect, useState} from "react";
    import { useQuery } from "@tanstack/react-query";
    



    export const OngoingOrder=()=>{
      const navigate = useNavigate();
        const {onlineOrderId} = useParams();
        const [isCancelModalOpen, setCancelModalOpen] = useState(false);

        const CancelOrder = () => {
          setCancelModalOpen(true);
        };
        const handleCancel = async () => {
          setCancelModalOpen(false);
      
          try {
            // Call your backend API to change the order status to "Canceled"
            await Axios.patch(`/feature4/changeOrderStatusCanceled/${onlineOrderId}`);
            // Redirect to the canceled page or perform any other action
            navigate("/map/food-delivery/canceled");
          } catch (error) {
            console.error("Error canceling order:", error);
            // Handle the error, e.g., show an error message to the user
          }
        };
        
        const handleCloseModal = () => {
          setCancelModalOpen(false);
        };
        const CompleteOrder = () => {
          navigate(`/venue/paymentDe/${onlineOrderId}`);
        };
        
        // Define a function to fetch data from the backend

        const fetchOrderData = async () => {
            const response = await Axios.get(`/feature4/showOnGoingOrderDetail/${onlineOrderId}`);
            return response.data;
          };
        
          // Use useQuery to fetch and manage the data
          const { data: orderData,isLoading,isError } = useQuery(["ongoingOrder", onlineOrderId], fetchOrderData);
        
          // Use useEffect to log the data
          useEffect(() => {
            console.log(orderData);
          }, [orderData]);

          if (isLoading) {
            return <p>Loading...</p>;
          }
        
          if (isError || !orderData) {
            return <p>Error fetching data or data is undefined</p>;
          }
    
        console.log(orderData);
    return(
        <Box>
            <Flex flexDirection={"column"} alignItems={"center"}>
            {orderData && ( // Render YourOrderStatusComp only if orderData is available
          <YourOrderStatusComp
            amount={orderData.total_amount}
            cardNo={1234567890987123}
            cardType="Visa"
            cardTypeImg="="
            mainAddress={orderData.address}
            price={210}
            restaurant="MK Roasted Duck"
            size="small"
            DriverName={orderData.Driver_list.driver_first_name}
            DriverLicensePlate={orderData.Driver_list.driver_license_plate}
            orderData={orderData.Online_orders_detail }
            // onlineOrderId={orderData.onlineOrderId}
          />
        )}
          <Box display={"flex"} gap={5} marginBottom={2}>
              <Button
                variant={"unstyle"}
                backgroundColor={index.colors.brand[200]}
                onClick={CancelOrder}
              >
                Cancel
              </Button>
              <Button
                variant={"unstyle"}
                backgroundColor={index.colors.brand[200]}
                onClick={CompleteOrder}
              >
                Complete
              </Button>
            </Box>
            <Modal isOpen={isCancelModalOpen} onClose={handleCloseModal} size="md">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Confirmation</ModalHeader>
              <ModalCloseButton />
              <ModalBody
                color={"black"}
              >
                Are you sure you want to cancel the order?
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleCloseModal}>
                  No, Go Back
                </Button>
                <Button colorScheme="red" onClick={handleCancel}>
                  Yes, Cancel
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
            <Text color={"white"} fontSize={index.textStyles.h1.fontSize} fontWeight={index.textStyles.h1.fontWeight}
              marginTop={5}
            >
                On going
            </Text>
            <br/>
            </Flex>
        </Box>
    )
    }