import { Box , Divider, ButtonGroup,Drawer, DrawerContent, AbsoluteCenter, Stack, Center, Button, Input} from "@chakra-ui/react"
import { useLocation } from "react-router-dom"
import { TextStyle } from "../../../theme/TextStyle";
import { useDisclosure } from "@chakra-ui/hooks";
import { useState } from "react";
import { Axios } from "../../../AxiosInstance";
export const BusinessAddCard = () => { 
  // interface CreditCard {
  //   card_holder_name: string;
  //   card_number: string;
  //   country: string;
  //   bank: string;
  //   cvc: number;
  //   exp: string;
  // }
    const location = useLocation();
     const cardInfo = location.state; //will be creditcardid
     const { isOpen, onOpen, onClose } = useDisclosure();
     const [cardName, setCardName] = useState('');
     const [cardNumber, setCardNumber] = useState('');
     const [cardExpDate, setCardExpDate] = useState('');
     const [cardCVC, setCardCVC] = useState<number>();
     const [isValid, setIsValid] = useState(false);
     const [is16, setIs16] = useState(false);
      const [is3, setIs3] = useState(false);
     console.log(cardInfo);
     const handleCardNumberChange = (
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        const inputCardNumber = event.target.value;
        console.log(inputCardNumber);
        
        // Remove non-digit characters
        const nonDigitRegex = new RegExp(/[^\d]/g);
        if (nonDigitRegex.test(inputCardNumber)) {
          // Input contains non-digits, handle accordingly
          console.log("Input includes non-digit characters.");
          alert("Input includes non-digit characters.");
        }
        if(inputCardNumber.length > 16){
          console.log("not 16");
          alert("Input is not 16 digits");
        }
        if(inputCardNumber.length === 16){
          console.log("16");
          setIs16(true);
          setCardNumber(inputCardNumber);
        }    
      };
      const handleCvcChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputCvc = event.target.value;
        
        // Remove non-digit characters
       // Remove non-digit characters
       const nonDigitRegex = new RegExp(/[^\d]/g);
       if (nonDigitRegex.test(inputCvc)) {
         // Input contains non-digits, handle accordingly
         console.log("Input includes non-digit characters.");
         alert("Input includes non-digit characters.");
       }
    
       if(inputCvc.length > 3){
        console.log("not 3");
        alert("Input is not 3 digits");
      }
      if(inputCvc.length === 3){
        console.log("3");
        setIs3(true);
      }  
    
        setCardCVC(parseInt(inputCvc));
    
      };

      const handleExpiryDateChange = (
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        const inputExpiryDate = event.target.value;
        console.log(inputExpiryDate, 'expri');
        setCardExpDate(inputExpiryDate);
        const expiryDate = inputExpiryDate ;
        console.log(expiryDate);
        const parts = expiryDate.split("-");
        console.log(parts);
        const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);
    const expiryDateObj = new Date(year, month - 1, day || 1);
    const returnVal = expiryDateObj >= new Date();
    console.log(returnVal, 'return val');
    if(!returnVal){
      console.log("not valid");
      setIsValid(false);
    }
    else{
      console.log("valid");
      setIsValid(true);
    }
       
        
  };
  
  

  
  // Example usage:

   const handleCardNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
    ) => {
    let inputCardName = event.target.value;
    // Remove non-letter characters
    inputCardName = inputCardName.replace(/[^A-Za-z\s]/g, "");
    setCardName(inputCardName);
    };

    const AddCardHandle = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
     // if(cardNumber.length != 16 && cardCVC.length != 3){alert("Please enter valid card details"); console.log(cardNumber+cardCVC); return;}
      if(isValid && is16 && is3){
        const url = `/feature1/venue/credit_card`;        
        Axios.post(url,{
          card_holder_name: cardName,
          card_number: cardNumber,
          country: "",
          bank: " ",
          cvc: cardCVC,
          expiration_date: cardExpDate+'T00:00:00Z',
        } ,{withCredentials: true})
        .then((res) => {
            if(res.status === 200){
                console.log(res.data);
                console.log(cardName);
            }
        }).catch((err) => {
            console.log(err);
        });
      }
     
    }
        
      
    return (
        <Box>
            {/* card background */}
            {/* {cardInfo} */}
            <Box overflow={'hidden'} position={'relative'} mx={{sm:'20'}} borderRadius={25} height={{base:'20vh',sm:'30vh'}} bgGradient={'linear( #9C2CF3, #3A49F9)'}>
                {/* circle1 */}
            <Box  position={'absolute'} top={{base:'90px',lg:'140px'}} left={{base:'-70px'}} bg={'black'} width={300} height={200} opacity={0.1} borderRadius={'50%'}></Box>
            {/* circle2 */}
            <Box position={'absolute'} top={{base:'-115px'}} left={{base:'130px', lg:'80%'}} bg={'black'} width={300} height={200} opacity={0.1} borderRadius={'50%'}></Box>
            {/* Card Holder Name */}
            <Box position={'absolute'} top={{base:'100px', lg:'70px'}} left={{base:'30px', lg:'4%'}} color={'white'} fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h1.fontWeight}>{cardName}</Box>
            {/* card number */}
            <Box position={'absolute'} top={{base:'140px', lg:'160px'}} left={{base:'30px', lg:'4%'}} color={'white'} fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h1.fontWeight}>{cardNumber}</Box>
            {/* card expire date */}
            <Box position={'absolute'} top={{base:'140px', lg:'160px'}} left={{base:'260px', lg:'88%'}} color={'white'} fontSize={TextStyle.h2.fontSize} fontWeight={TextStyle.h1.fontWeight}>{cardExpDate}</Box>
            {/* master img*/}
            {(cardInfo === 'master') ? (
            <Box position={'absolute'}  top={{base:'30px'}} left={{base:'280px', lg:'90%'}}>
            <svg width="65" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.19121 35.8409V33.5234C8.19121 32.6348 7.65032 32.0556 6.72322 32.0556C6.25976 32.0556 5.75758 32.2101 5.4099 32.7123C5.13963 32.2873 4.75341 32.0556 4.17399 32.0556C3.7876 32.0556 3.40155 32.1714 3.0924 32.5963V32.1328H2.28125V35.8409H3.0924V33.7937C3.0924 33.1372 3.44009 32.828 3.98097 32.828C4.5215 32.828 4.79212 33.1757 4.79212 33.7937V35.8409H5.60327V33.7937C5.60327 33.1372 5.98931 32.828 6.49149 32.828C7.03237 32.828 7.30264 33.1757 7.30264 33.7937V35.8409H8.19121ZM20.2038 32.1328H18.8906V31.0127H18.0795V32.1328H17.3456V32.8666H18.0793V34.5663C18.0793 35.4162 18.427 35.9182 19.3541 35.9182C19.7018 35.9182 20.0878 35.8024 20.3585 35.6479L20.1265 34.9525C19.8948 35.107 19.6245 35.1457 19.4314 35.1457C19.0451 35.1457 18.8906 34.914 18.8906 34.5276V32.8666H20.2038V32.1328ZM27.0794 32.0554C26.6159 32.0554 26.3069 32.2873 26.1137 32.5963V32.1328H25.3026V35.8409H26.1137V33.7551C26.1137 33.1372 26.384 32.7895 26.8862 32.7895C27.0407 32.7895 27.2339 32.8282 27.3884 32.8668L27.6201 32.0943C27.4656 32.0556 27.2339 32.0556 27.0794 32.0556V32.0554ZM16.6889 32.4418C16.3025 32.1714 15.7618 32.0556 15.1824 32.0556C14.2555 32.0556 13.6375 32.5191 13.6375 33.253C13.6375 33.8711 14.101 34.2186 14.9121 34.3346L15.2984 34.3733C15.7233 34.4503 15.955 34.5663 15.955 34.7595C15.955 35.0298 15.646 35.223 15.1052 35.223C14.5645 35.223 14.1395 35.0298 13.8691 34.8367L13.4829 35.4547C13.9078 35.7637 14.4872 35.9182 15.0665 35.9182C16.148 35.9182 16.7662 35.4162 16.7662 34.7208C16.7662 34.0641 16.264 33.7164 15.4914 33.6007L15.1052 33.562C14.7575 33.5232 14.4872 33.4462 14.4872 33.2144C14.4872 32.944 14.7575 32.7895 15.1824 32.7895C15.646 32.7895 16.1095 32.9825 16.3412 33.0985L16.6889 32.4418ZM38.2425 32.0556C37.7788 32.0556 37.4698 32.2873 37.2766 32.5963V32.1328H36.4655V35.8409H37.2766V33.7551C37.2766 33.1372 37.5471 32.7895 38.0491 32.7895C38.2038 32.7895 38.3969 32.8282 38.5514 32.8668L38.7832 32.0943C38.6287 32.0556 38.3969 32.0556 38.2425 32.0556ZM27.8905 33.9869C27.8905 35.107 28.663 35.9182 29.8605 35.9182C30.4012 35.9182 30.7875 35.8024 31.1737 35.4934L30.7874 34.8367C30.4785 35.0685 30.1695 35.1843 29.8218 35.1843C29.1652 35.1843 28.7017 34.7208 28.7017 33.9869C28.7017 33.2917 29.1652 32.828 29.8218 32.7895C30.1695 32.7895 30.4785 32.9053 30.7874 33.1372L31.1737 32.4805C30.7875 32.1714 30.4012 32.0556 29.8605 32.0556C28.663 32.0556 27.8905 32.8668 27.8905 33.9869ZM35.3841 33.9869V32.1328H34.5729V32.5963C34.3025 32.2488 33.9163 32.0556 33.4141 32.0556C32.3712 32.0556 31.5601 32.8668 31.5601 33.9869C31.5601 35.107 32.3712 35.9182 33.4141 35.9182C33.9548 35.9182 34.3412 35.7251 34.5729 35.3774V35.8409H35.3841V33.9869ZM32.4097 33.9869C32.4097 33.3302 32.8347 32.7895 33.5299 32.7895C34.1865 32.7895 34.6502 33.2917 34.6502 33.9869C34.6502 34.6435 34.1865 35.1843 33.5299 35.1843C32.8347 35.1455 32.4097 34.6435 32.4097 33.9869ZM22.7147 32.0556C21.6331 32.0556 20.8605 32.828 20.8605 33.9869C20.8605 35.1457 21.6329 35.9182 22.7532 35.9182C23.2939 35.9182 23.8348 35.7637 24.2597 35.4162L23.8733 34.8367C23.5643 35.0685 23.1781 35.223 22.7919 35.223C22.2897 35.223 21.7876 34.9912 21.6716 34.3344H24.4142V34.0256C24.4529 32.828 23.7575 32.0556 22.7145 32.0556H22.7147ZM22.7147 32.7508C23.2167 32.7508 23.5645 33.06 23.6416 33.6394H21.7103C21.7876 33.1372 22.1352 32.7508 22.7147 32.7508ZM42.8389 33.9869V30.665H42.0278V32.5963C41.7573 32.2488 41.3711 32.0556 40.8689 32.0556C39.8261 32.0556 39.0149 32.8668 39.0149 33.9869C39.0149 35.107 39.8261 35.9182 40.8689 35.9182C41.4098 35.9182 41.796 35.7251 42.0278 35.3774V35.8409H42.8389V33.9869ZM39.8648 33.9869C39.8648 33.3302 40.2895 32.7895 40.9849 32.7895C41.6415 32.7895 42.105 33.2917 42.105 33.9869C42.105 34.6435 41.6415 35.1843 40.9849 35.1843C40.2895 35.1455 39.8648 34.6435 39.8648 33.9869ZM12.749 33.9869V32.1328H11.9378V32.5963C11.6674 32.2488 11.2811 32.0556 10.779 32.0556C9.73609 32.0556 8.92494 32.8668 8.92494 33.9869C8.92494 35.107 9.73609 35.9182 10.779 35.9182C11.3199 35.9182 11.7061 35.7251 11.9378 35.3774V35.8409H12.749V33.9869ZM9.73609 33.9869C9.73609 33.3302 10.161 32.7895 10.8562 32.7895C11.5129 32.7895 11.9765 33.2917 11.9765 33.9869C11.9765 34.6435 11.5129 35.1843 10.8562 35.1843C10.161 35.1455 9.73609 34.6435 9.73609 33.9869Z" fill="white"/>
            <path d="M17.1888 13.9055C17.1888 9.46353 19.2746 5.52356 22.4805 2.97416C20.1244 1.12013 17.1503 0 13.9057 0C6.21876 0 0 6.21876 0 13.9055C0 21.5921 6.21876 27.811 13.9055 27.811C17.1501 27.811 20.1243 26.6909 22.4805 24.8367C19.2746 22.326 17.1888 18.3475 17.1888 13.9055Z" fill="#EB001B"/>
            <path d="M45 13.9055C45 21.5921 38.7812 27.811 31.0945 27.811C27.8499 27.811 24.8757 26.6909 22.5195 24.8367C25.7641 22.2874 27.8114 18.3475 27.8114 13.9055C27.8114 9.46353 25.7254 5.52356 22.5195 2.97416C24.8756 1.12013 27.8499 0 31.0945 0C38.7812 0 45.0002 6.25747 45.0002 13.9055H45Z" fill="#F79E1B"/>
            </svg>
            </Box>
             ) : (
            <Box position={'absolute'}  top={{base:'30px'}} left={{base:'280px', lg:'90%'}}>
            <svg width="55" height="36" viewBox="0 0 52 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="51" height="35" rx="3.5" fill="white" stroke="#F3F3F3"/>
            <path d="M23.087 24.6899H19.625L21.7904 12.0893H25.2522L23.087 24.6899Z" fill="#15195A"/>
            <path d="M35.639 12.3973C34.9562 12.1423 33.8731 11.8608 32.5339 11.8608C29.115 11.8608 26.7075 13.5766 26.6927 16.0296C26.6643 17.8394 28.4164 18.8446 29.7269 19.4481C31.0663 20.0647 31.5216 20.4672 31.5216 21.0168C31.508 21.861 30.4393 22.2501 29.4425 22.2501C28.0603 22.2501 27.3197 22.0495 26.1942 21.5798L25.7384 21.3785L25.2539 24.2071C26.0659 24.5552 27.5619 24.8641 29.115 24.8777C32.7476 24.8777 35.1125 23.1885 35.1406 20.5744C35.1544 19.14 34.2292 18.0409 32.2346 17.1428C31.0237 16.5662 30.2821 16.1775 30.2821 15.5875C30.2963 15.0513 30.9093 14.502 32.2762 14.502C33.4017 14.4751 34.2286 14.7297 34.8551 14.9845L35.1682 15.1183L35.639 12.3973Z" fill="#15195A"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M41.8347 12.0893H44.5126L47.3055 24.6898H44.1C44.1 24.6898 43.7863 23.242 43.687 22.7996H39.242C39.1135 23.1345 38.5154 24.6898 38.5154 24.6898H34.8828L40.0252 13.1348C40.3815 12.317 41.0089 12.0893 41.8347 12.0893ZM41.6214 16.7004C41.6214 16.7004 40.5243 19.5021 40.2392 20.226H43.1168C42.9744 19.596 42.3188 16.5798 42.3188 16.5798L42.0769 15.4941C41.975 15.7736 41.8277 16.158 41.7283 16.4173C41.6609 16.593 41.6156 16.7113 41.6214 16.7004Z" fill="#15195A"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.62339 12.0893H10.1934C10.9484 12.1158 11.5611 12.3437 11.7604 13.1485L12.9708 18.9374C12.971 18.9379 12.9712 18.9385 12.9713 18.9391L13.3418 20.6817L16.7323 12.0893H20.3931L14.9514 24.6766H11.2904L8.20471 13.7278C7.14005 13.142 5.92495 12.6708 4.56641 12.3439L4.62339 12.0893Z" fill="#15195A"/>
            </svg>

            </Box>
             )}
            <Box>

            </Box>
            </Box>
              {/* Card Details */}
              <Box position='relative' padding='10'>
                <Divider />
                <AbsoluteCenter fontSize={TextStyle.body3} bg={'brand.400'} px='4'>
                   Card Details 
                </AbsoluteCenter>
              </Box>
                {/* card number */}
                <Box>
                    <Input  onChange={handleCardNumberChange} type="text" my={2} id="card_number" placeholder='5282 3456 7890 1289' size='md' borderColor={'brand.100'}/>
                    <Input  onChange={handleCardNameChange} my={2} id="card_holderName" placeholder='Card Holder Name' size='md' borderColor={'brand.100'} />
                    <Stack direction={'row'} mt={2}>
                        <Input onChange={handleExpiryDateChange} id="exp_date" type="date"  placeholder='Exp. Date' size='md' borderColor={'brand.100'}/>
                        <Input id="cvc" onChange={handleCvcChange}  placeholder='CVC' size='md' borderColor={'brand.100'}/>  
                    </Stack>
                </Box>
                <Center mt={{base:'150', lg:'50'}} onClick={onOpen}>
                    <Button _hover={{background:'brand.100', color:'brand.300'}} color={'white'} px={10} py={5} background={'brand.200'}>Apply</Button>
                </Center>
                {/* Drawer */}
                <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
                  <DrawerContent mt={-15} 
                    bg={"brand.100"}
                    px={4}
                    pt={4}
                    pb={5}
                    transition="all 0.1s ease"
                  >
                    <Center
                      color={"black"}
                      fontWeight={TextStyle.h1.fontWeight}
                      fontSize={TextStyle.h1.fontSize}
                    >
                      Add Card 
                    </Center>
                    <Center pt={1} color={"black"} fontSize={TextStyle.body2.fontSize}>
                      Tap "Confirm" to add card information
                    </Center>
                    <Center>
                      <ButtonGroup pt={2} spacing="6">
                        <Button px={12} onClick={AddCardHandle} >
                          Confirm
                        </Button>
                        <Button
                          width={"140px"}
                          height={"40px"}
                          onClick={onClose}
                          bg={"brand.200"}
                          color={"white"}
                          _hover={{ bg: "brand.300" }}
                        >
                          Later
                        </Button>
                      </ButtonGroup>
                    </Center>
                  </DrawerContent>
                </Drawer>
             </Box>
    )
} 

