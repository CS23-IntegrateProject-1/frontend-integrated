import {
     Box,
     Button,
     Center,
     FormControl,
     FormLabel,
     Icon,
     Select,
     Stack,
     Image,
     IconButton,
     useDisclosure,
     Modal,
     ModalCloseButton,
     ModalContent,
     ModalFooter,
     ModalHeader,
     ModalOverlay,
   } from "@chakra-ui/react";
   import { TextStyle } from "../../../../theme/TextStyle";
   import { Input } from "@chakra-ui/react";
   import { Radio, RadioGroup } from "@chakra-ui/react";
   import { useNavigate } from "react-router-dom";
   import { ChangeEvent, useEffect, useState } from "react";
   import { BiImageAdd } from "react-icons/bi";
   import { AiOutlineClose } from "react-icons/ai";
   import { Axios } from "../../../../AxiosInstance";
     
   interface AdvertisementProps {
     name: string;
     description: string;
     startingDate: Date | null;
     endingDate: Date | null;
     images: string;
     targetCustomer: string;
     targetGroup: string;
     advertisementPlan: number;
   }
   export const AdvertisementIDEditPage = () => {
     const navigate = useNavigate();
     const { isOpen, onOpen, onClose } = useDisclosure()
     const handleClickSubmit = () => {
          navigate("/advertisement/status");
        };
     const [file, setFile] = useState<File | null>(null);
     const [imagePreview, setImagePreview] = useState<string | null>(null);
     const [advertise, setAdvertise] = useState<AdvertisementProps>({
       name: "",
       description: "",
       images: "",
       startingDate: null,
       endingDate: null,
       targetCustomer: "",
       targetGroup: "",
       advertisementPlan: 0,
     });
     const handleClick = () => {
       navigate("/advertisement/status");
     };
     const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
       if (e.target.files && e.target.files.length > 0) {
         setFile(e.target.files[0]);
         const previewURL = URL.createObjectURL(e.target.files[0]);
         setImagePreview(previewURL);
       }
     };
     const handleCloseImage = () => {
       setImagePreview(null);
     };
     useEffect(() => {
       return () => {
         if (imagePreview) {
           URL.revokeObjectURL(imagePreview);
         }
       };
     }, [imagePreview]);
   
     const handleSubmit = async () => {
       try {
         await Axios.post;
       } catch (err) {
         console.error(err);
       }
     };
   
     return (
       <Box
         display={"flex"}
         flexDirection={"column"}
         justifyContent={"center"}
         alignItems={"center"}
         width={"100%"}
       >
         {/* Name * */}
         <FormControl
           isRequired
           paddingBottom={3}
           width="50%"
           minWidth="250px"
           maxWidth="400px"
           display="flex"
           flexDirection={"column"}
         >
           <FormLabel style={TextStyle.h2} color={"white"}>
             {" "}
             Name
           </FormLabel>
           <Input
             variant="name"
             style={{ width: "auto" }}
             color={"white"}
             bgColor={"#5F0DBB"}
             borderColor={"#5F0DBB"}
             type="email"
           />
         </FormControl>
   
         {/* Description * */}
         <FormControl
           isRequired
           paddingBottom={3}
           width="50%"
           minWidth="250px"
           maxWidth="400px"
           display="flex"
           flexDirection={"column"}
         >
           <FormLabel style={TextStyle.h2} color={"white"}>
             {" "}
             Description
           </FormLabel>
           <Input
             variant="name"
             style={{ width: "auto" }}
             color={"white"}
             bgColor={"#5F0DBB"}
             borderColor={"#5F0DBB"}
             type="email"
           />
         </FormControl>
   
         {/* Starting Date * & Ending Date * */}
         <FormControl
           isRequired
           paddingBottom={3}
           width={"50%"}
           minWidth={"250px"}
           maxWidth={"400px"}
           display={"flex"}
           flexDirection={"row"}
           justifyContent={"center"}
         >
           <Box mr={"20px"} flex={"1"}>
             <FormLabel style={TextStyle.h2} color={"white"}>
               {" "}
               Starting Date
             </FormLabel>
             <Input
               size={"xs"}
               type="date"
               color="white"
               bgColor={"#5F0DBB"}
               borderRadius={5}
               borderColor={"#5F0DBB"}
             />
           </Box>
   
           <Box flex={"1"}>
             <FormLabel style={TextStyle.h2} color={"white"}>
               {" "}
               Ending Date
             </FormLabel>
             <Input
               id="fileInput"
               size={"xs"}
               type="date"
               color="white"
               bgColor={"#5F0DBB"}
               borderRadius={5}
               borderColor={"#5F0DBB"}
             />
           </Box>
         </FormControl>
   
         {/* Image */}
         <FormControl
           isRequired
           width="50%"
           minWidth="250px"
           maxWidth="400px"
           display="flex"
           flexDirection={"column"}
           paddingBottom={3}
         >
           <FormLabel style={TextStyle.h2} color={"white"} paddingBottom={1}>
             {" "}
             Images
           </FormLabel>
           <Stack spacing={2} direction="column">
             <Center
               width={"auto"}
               height={"100"}
               bg={"#5F0DBB"}
               borderRadius={5}
               cursor={"pointer"}
             >
               <Input
                 onChange={handleFileChange}
                 type="file"
                 opacity={0}
                 height={"100%"}
                 w={"100%"}
                 pos={"absolute"}
               ></Input>
               <Icon
                 as={BiImageAdd}
                 color={"#FFFFFF"}
                 width={"auto"}
                 height={"8"}
               ></Icon>
             </Center>
           </Stack>
         </FormControl>
         {imagePreview ? (
           <Box
             position={"relative"}
             overflow={"hidden"}
             minWidth={"50%"}
             maxWidth={"50%"}
             height={"auto"}
           >
             <IconButton
               aria-label="close"
               minWidth={"15px"}
               height={"15px"}
               position={"absolute"}
               top={0}
               right={0}
               as={AiOutlineClose}
               onClick={handleCloseImage}
             ></IconButton>
             <Image src={imagePreview} alt={"image"} width={"100%"}></Image>
           </Box>
         ) : (
           <></>
         )}
   
         {/* Target customer */}
         <FormControl
           isRequired
           width="50%"
           minWidth="250px"
           maxWidth="400px"
           display="flex"
           flexDirection={"column"}
           paddingBottom={3}
         >
           <FormLabel style={TextStyle.h2} color={"white"} paddingBottom={1}>
             {" "}
             Target customer
           </FormLabel>
           <Select bgColor={"#5F0DBB"} borderColor={"#5F0DBB"} placeholder=" ">
             <option value="option1">All</option>
             <option value="option2">Member</option>
           </Select>
         </FormControl>
   
         {/* Target group */}
         <FormControl
           isRequired
           width="50%"
           minWidth="250px"
           maxWidth="400px"
           display="flex"
           flexDirection={"column"}
           paddingBottom={3}
         >
           <FormLabel style={TextStyle.h2} color={"white"} paddingBottom={1}>
             {" "}
             Target group
           </FormLabel>
           <Select bgColor={"#5F0DBB"} borderColor={"#5F0DBB"} placeholder=" ">
             <option value="option1">Teen</option>
             <option value="option2">young Adult</option>
             <option value="option3">adult</option>
             <option value="option4">elder</option>
           </Select>
         </FormControl>
   
         {/* Advertisement plan */}
         <FormControl
           isRequired
           width="50%"
           minWidth="250px"
           maxWidth="400px"
           display="flex"
           flexDirection={"column"}
           paddingBottom={6}
         >
           <FormLabel style={TextStyle.h2} color={"white"}>
             {" "}
             Advertisement plan
           </FormLabel>
           <RadioGroup defaultValue="2">
             <Stack spacing={1} direction="column">
               <Radio value="1">100 Baht/Week</Radio>
               <Radio value="2">300 Baht/Month</Radio>
               <Radio value="3">3600 Baht/Year</Radio>
             </Stack>
           </RadioGroup>
         </FormControl>
   
         {/* Submit */}
         <Box
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"row"}
        paddingBottom={3}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button
          h={"40px"}
          colorScheme="gray"
          variant="solid"
          width="50%"
          color="#A533C8"
          onClick={onOpen}
          marginRight={3}
        >
          Delete
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bgColor={"#DEBEF6"} color={"#200944"}>
            <ModalHeader mt={3}>Delete advertisement</ModalHeader>
            <ModalCloseButton />
            <ModalFooter>
              <Button
                bgColor={"white"}
                color={"#200944"}
                mr={5}
                width="30%"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                bgColor={"#A533C8"}
                mr={3}
                onClick={handleClickSubmit}
                color={"white"}
                width="30%"
              >
                Delete
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Button
          h={"40px"}
          backgroundColor="#A533C8"
          variant="solid"
          width="50%"
          color="white"
          onClick={handleClickSubmit}
        >
          Submit
        </Button>
        </Box>

       </Box>
     );
   };
   