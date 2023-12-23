import {
  Box,
  Flex,
  IconButton,
  Text,
  Textarea,
  Modal,
  ModalOverlay,
  useDisclosure,
  ModalContent,
  ModalHeader,
  Radio,
  RadioGroup,
  ModalBody,
  Button,
  Divider,
} from "@chakra-ui/react";
import index from "../../../../../theme/foundations/index";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../../../../AxiosInstance";
import { useQuery } from "@tanstack/react-query";

export interface SavedLocationItem {
  userId:number;
  name:string;
  createdAt:Date;
  address: string;
  province: string;
  district: string;
  sub_district: string;
  postcode: string;
  savedLocId: number;
}

interface SavedLocationInterface{
  message: string;
  location: SavedLocationItem[];
}

// const queryClient = new QueryClient()
interface SelectLocationProps {
  onLocationSelect: (selectedLocation: SavedLocationItem | undefined,deliveryInstruction: string) => void;
}
export const SelectLocation: React.FC<SelectLocationProps>=({onLocationSelect}) => {
  const [value, setValue] = useState("1");
  // const [selectedValue, setSelectedValue] = useState("1");
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const [selectedLocation, setSelectedLocation] = useState<SavedLocationItem | null>(null);
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [districtSubdistrict, setDistrictSubdistrict] = useState<string>("");
  const [deliveryInstruction, setDeliveryInstruction] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { data: dataSaved} = useQuery<SavedLocationInterface>({
    queryKey: ["dataSaved"], 
    queryFn: async () => {
      const result = await Axios.get("/feature4/saved-location");
      return result.data;
    },
  });
  
  const PinIcon: React.FC = () => {
    return (
      <svg
        width="19"
        height="17"
        viewBox="0 0 19 17"
        fill={index.colors.brand[200]}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 0C2.68286 0 0 2.504 0 5.6C0 9.8 6 16 6 16C6 16 12 9.8 12 5.6C12 2.504 9.31714 0 6 0ZM6 7.6C5.43168 7.6 4.88663 7.38929 4.48477 7.01421C4.08291 6.63914 3.85714 6.13043 3.85714 5.6C3.85714 5.06957 4.08291 4.56086 4.48477 4.18579C4.88663 3.81071 5.43168 3.6 6 3.6C6.56832 3.6 7.11337 3.81071 7.51523 4.18579C7.91709 4.56086 8.14286 5.06957 8.14286 5.6C8.14286 6.13043 7.91709 6.63914 7.51523 7.01421C7.11337 7.38929 6.56832 7.6 6 7.6Z" />
      </svg>
    );
  };
  console.log("dataSaved");
  console.log(dataSaved);
  console.log("====");
  console.log(deliveryInstruction)

  const EditIcon: React.FC = () => {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill={index.colors.brand[200]}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 18.0024H3.75L14.81 6.94244L11.06 3.19244L0 14.2524V18.0024ZM2 15.0824L11.06 6.02244L11.98 6.94244L2.92 16.0024H2V15.0824ZM15.37 0.292444C15.2775 0.19974 15.1676 0.126193 15.0466 0.0760114C14.9257 0.02583 14.796 0 14.665 0C14.534 0 14.4043 0.02583 14.2834 0.0760114C14.1624 0.126193 14.0525 0.19974 13.96 0.292444L12.13 2.12244L15.88 5.87244L17.71 4.04244C17.8027 3.94993 17.8762 3.84004 17.9264 3.71907C17.9766 3.59809 18.0024 3.46841 18.0024 3.33744C18.0024 3.20648 17.9766 3.07679 17.9264 2.95582C17.8762 2.83485 17.8027 2.72496 17.71 2.63244L15.37 0.292444Z"
          fill="#A533C8"
        />
      </svg>
    );
  };

  const handleApply = () => {

   
    
    // Find the selected location based on the value
    const selectedLocation = dataSaved?.location.find(
      (loc) => loc.savedLocId.toString() === value
    );
    console.log("selectedLocation")
    console.log(selectedLocation)
    // Update the address and district/subdistrict values
    setName(`${selectedLocation?.name}`);
    setAddress(`${selectedLocation?.address}`);
    setDistrictSubdistrict(`${selectedLocation?.district}, ${selectedLocation?.sub_district}, ${selectedLocation?.province}, ${selectedLocation?.postcode}`);
    const textareaValue = textareaRef.current?.value || "";
    setDeliveryInstruction(textareaValue);
  onLocationSelect(selectedLocation, textareaValue);
    // Close the modal
    onClose();
  };

  const navigate = useNavigate();
  const navigateSavedLocation=()=>{
    navigate('/map/savedlocation')
  }
  return (
    <Box>
      <Flex display={"flex"} justifyContent={"center"}>
        <Box
          borderRadius={10}
          backgroundColor={index.colors.grey[100]}
          width={600}
          minWidth={300}
          height={"auto"}
          p={5}
        >
          <Flex flexDirection={"row"} justifyContent={"space-between"}>
            <Flex flexDirection={"row"}>
              <PinIcon />
              <Text color={index.colors.black}>Delivery address</Text>
            </Flex>

            <IconButton
              icon={<EditIcon />}
              aria-label="Call Segun"
              variant={"unstyled"}
              size={"sm"}
              onClick={onOpen}
            />
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent p={5}>
                <ModalHeader color={index.colors.black}>
                  Delivery address
                </ModalHeader>
                <ModalBody>
                <RadioGroup onChange={setValue} value={value}>
                    <Flex flexDirection="column" gap={3}>
                      {dataSaved?.location.map((savedLocation) => (
                        <Radio key={savedLocation.savedLocId} value={savedLocation.savedLocId.toString()}>
                          <Box
                            display={"flex"}
                            flexDirection={"column"}
                            color={index.colors.black}
                            
                          >
                            <Box
                              display={"flex"}
                              flexDirection={"row"}
                              justifyContent={"space-around"}
                              gap={5}
                            >
                              <Text maxW={300}>
                                <Text fontWeight="bold">{savedLocation.name}</Text>{savedLocation.address}, {savedLocation.sub_district}, {savedLocation.district}, {savedLocation.province}, {savedLocation.postcode}
                              </Text>
                            </Box>
                          </Box>
                        </Radio>
                      ))}
                    </Flex>
                  </RadioGroup>

                  <Button variant={"unstyle"} color={index.colors.brand[200]} onClick={navigateSavedLocation}>
                    + Add new address
                  </Button>
                  <Divider borderColor={index.colors.black} />
                  <Flex flexDirection={"row"} justifyContent={"space-around"} m={3}>
                    <Button
                      variant={"unstyle"}
                      color={index.colors.brand[200]}
                      border={"solid 1px"}
                      borderColor={index.colors.brand[200]}
                      width={150}
                      onClick={onClose}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant={"unstyle"}
                      color={index.colors.white}
                      backgroundColor={index.colors.brand[200]}
                      width={150}
                      onClick={handleApply}
                    >
                      Apply
                    </Button>
                  </Flex>
                </ModalBody>
              </ModalContent>
            </Modal>
          </Flex>

          <Text fontSize="xl" fontWeight="bold" color={index.colors.black}>{name}</Text>
          <Text color={index.colors.black}>{address}</Text>
          <Text color={index.colors.black}>{districtSubdistrict}</Text>

          <br />
          <Textarea
            ref={textareaRef}
            placeholder="Delivery Instruction"
            size="md"
            variant={"unstyle"}
            color={index.colors.black}
          />
        </Box>
      </Flex>
    </Box>
  );
};
