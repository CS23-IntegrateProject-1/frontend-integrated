import { Box, Heading, Stack,Button, Show, Checkbox, UnorderedList, ListItem, Spacer, Flex, Divider, Text } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Axios } from "../../../../AxiosInstance";
//function to scroll to the section
function scrollToSection(sectionId : string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export const TermOfService = () => {
   //function to handle continue button
   const handleContinue = () =>   {
    const check = document.querySelector('.check input') as HTMLInputElement;
    const text = document.querySelector('.checkText') as HTMLInputElement;

    if(check.checked){
      console.log("checked");
      text.hidden=true;
      //go back to home
      window.history.replaceState({}, '', '/');
      window.history.go(0);
      //set local storage for mock have to delete later***
      localStorage.setItem("terms&service", "true");
      useEffect(() => {
        if ("userToken") {
          const url = 'feature01/terms&service?consent=true';
          const config = {
            headers: {
              'Authorization': `Bearer ${"userToken"}`,
            },
          };
          //send a get request to the backend
          Axios.get(url, config)
            .then((response) => {
              if (response.status === 200) {
                //store consent in local storage
                localStorage.setItem("terms&service", "true");
                console.log("consent saved");
              }
            })
            .catch((error) => {
              console.error('Error saving consent:', error);
            });
        }
     }, ["userToken"]);

    }else{
      text.hidden=false;
    }
  
  }
  return(
    <Box>
        <Heading style={TextStyle.h1}>Terms of Services</Heading>
        <Stack spacing={5} mt={2}>
          <Text style={TextStyle.body1} color={"white"}>Last Updated: October 1, 2023</Text>
          <Text>
            Welcome to Harmoni Bar and Restaurant Reservation Website ("Harmoni," "we," "us," or "our").
             At Harmoni, we are committed to providing you with exceptional service and ensuring your 
             experience is as smooth and secure as possible. These Terms of Service outline the terms 
             and conditions that govern your use of our website, mobile application, and all the services 
             offered by Harmoni, which are collectively referred to as the "Services."
          </Text>
          <Text>
            Please read these Terms of Service carefully as they set forth the rules and guidelines for 
            using our platform. By using our Services, you agree to be bound by these terms and conditions.
             If you do not agree to these terms, please do not use our Services. Your continued use of our Services 
             constitutes your acceptance of these Terms of Service.
          </Text>
          {/* --------------------------------------- */}
          {/* to ask about opacity & bg color */}
            <Text style={TextStyle.body1}  bgColor="#6B37BC22" p={5} m={-4}>
              <UnorderedList spacing={2} color="brand.200">
                <ListItem><Link to={""} onClick={() => scrollToSection("firstPart")}><Text as='b'>Accpetance of Terms</Text></Link></ListItem>
                <ListItem><Link to={""} onClick={() => scrollToSection("secondPart")}><Text as='b'>User Eligibility</Text></Link></ListItem>
                <ListItem><Link to={""} onClick={() => scrollToSection("thirdPart")}><Text as='b'>User Registration</Text></Link></ListItem>
                <ListItem><Link to={""} onClick={() => scrollToSection("fourthPart")}><Text as='b'>User Content</Text></Link></ListItem>
                <ListItem><Link to={""} onClick={() => scrollToSection("fifthPart")}><Text as='b'>Privacy and Policy</Text></Link></ListItem>
                <ListItem><Link to={""} onClick={() => scrollToSection("sixthPart")}><Text as='b'>Termination</Text></Link></ListItem>
                <ListItem><Link to={""} onClick={() => scrollToSection("seventhPart")}><Text as='b'>Disclaimers and Limitations of Liability</Text></Link></ListItem>
                <ListItem><Link to={""} onClick={() => scrollToSection("eightPart")}><Text as='b'>Changes to Terms</Text></Link></ListItem>
                <ListItem><Link to={""} onClick={() => scrollToSection("ninthPart")}><Text as='b'>Governing Law</Text></Link></ListItem>
              </UnorderedList>
            </Text>
            <Heading style={TextStyle.h1} id="firstPart">Acceptance of Terms</Heading>
            <Text style={TextStyle.body2}>
              By accessing or using our Services, you agree to be bound by these Terms of Service and by our Privacy Policy.
               If you do not agree to these Terms of Service and our Privacy Policy, please do not access or use our Services.
            </Text>
            <Heading style={TextStyle.h1} id="secondPart">User Eligibility</Heading>
            <Text style={TextStyle.body2}>
              You must be at least 18 years old to use our Services. By agreeing to these Terms of Service, you represent and warrant to us that:
              you are of legal age and have the authority to enter into this agreement.
            </Text>
            <Heading style={TextStyle.h1} id="thirdPart">User Registration</Heading>
            <Text style={TextStyle.body2}>
              To access certain features of the Service, you may be required to register for an account. You agree to provide accurate and complete information during the registration process and to update such information to keep it accurate and curren
            </Text>
            <Heading style={TextStyle.h1} id="fourthPart">User Content</Heading>
            <Text style={TextStyle.body2}>
              You are responsible for any content you post or share on the Service. You agree not to post content that is illegal, obscene, defamatory, or infringes on the rights of others. Harmoni reserves the right to remove or disable content that violates these terms.
            </Text>
            <Heading style={TextStyle.h1} id="fifthPart">Privacy Policy</Heading>
            <Text style={TextStyle.body2}>
              Your use of the Service is also governed by our Privacy Policy, which can be found at [Link to Privacy Policy]. By using the Service, you consent to the collection and use of your personal information in accordance with our Privacy Policy.
            </Text>
            <Heading style={TextStyle.h1} id="sixthPart">Termination</Heading>
            <Text style={TextStyle.body2}>
              Harmoni may terminate or suspend your account and access to the Service at its discretion, with or without cause and with or without notice. You may also terminate your account at any time by following the instructions on the Service.
            </Text>
            <Heading style={TextStyle.h1} id="seventhPart">Disclaimers and Limitations of Liability</Heading>
            <Text style={TextStyle.body2}>
              The Service is provided "as is" without any warranties, and Harmoni is not liable for any damages resulting from the use of the Service. In no event shall Harmoni be liable for any indirect, incidental, special, or consequential damages.
            </Text>
            <Heading style={TextStyle.h1} id="eightPart">Changes to Terms</Heading>
            <Text style={TextStyle.body2}>
              Harmoni reserves the right to modify these Terms of Service at any time. You will be notified of changes, and it is your responsibility to review the updated terms. Your continued use of the Service after such changes constitutes your acceptance of the new terms.
            </Text>
            <Heading style={TextStyle.h1} id="ninthPart">Governing Law</Heading>
            <Text style={TextStyle.body2}>
              These Terms of Service are governed by the laws of [Your Jurisdiction]. Any legal action or proceeding arising out of these terms shall be brought in the state or federal courts located in [Your Jurisdiction].
            </Text>
            <Heading style={TextStyle.h1}>Contact</Heading>
            <Text style={TextStyle.body2}>
              If you have any questions or concerns about our Privacy Policy or our data practices, please contact us at:
            </Text>
            <Text style={TextStyle.body2}>
              <UnorderedList spacing={2}>
              <ListItem>
                    <Text as='b'>Email: </Text>
                     Harmoni.biz@gmail.com
                </ListItem>
                <ListItem>
                    <Text as='b'>Address: </Text>
                    126 Pracha Uthit Rd, Khwaeng Bang Mot, Khet 
                    Thung Khru, Krung Thep Maha Nakhon 10140
                </ListItem>
                <ListItem>
                    <Text as='b'>Phone: </Text>
                    +66 25 255 255
                </ListItem>
              </UnorderedList>
            </Text>
            <Text style={TextStyle.body2}>
              Thank you for chossing Harmoni for your bar and restaturant
              reservations. We appreciate your trust in us and are committed to safeguarding
              your privacy.
            </Text>
            <Divider/>
            {(localStorage.getItem("terms&service") === null) && (
              <Show below='sm'>
                <Checkbox className='check' size='sm'checked={false}  colorScheme='green'>You have read & accepted the terms of service</Checkbox>
                <Box>
                  <Text size={'sm'} color={'red'} className="checkText" hidden={true}> You must agree Terms of Service</Text>
                </Box>
                <Button bg={"brand.200"} onClick={handleContinue} color={'white'} _hover={{bg:"brand.300"}}>Register</Button>
              </Show>
            )}
              {(localStorage.getItem("terms&service") != null) && (
                <Text className="already">
                You already accepted Terms of Services
                </Text>
              )}
        </Stack>
        {(localStorage.getItem("terms&service") === null) && (
            <Show above='sm'>
            <Flex>
              <Checkbox className='check' checked={false}  size='md' colorScheme='green'>You have read & accepted the terms of service
              </Checkbox>
              <Box mt={5} ml={3}>
                <Text size={'sm'} color={'red'} className="checkText" hidden={true}> You must agree Terms of Service</Text>
              </Box>
              <Spacer/>
              <Button px={20} mt={5} bg={"brand.200"} color={'white'} _hover={{bg:"brand.300"}} onClick={handleContinue}>Register</Button>
            </Flex>
          </Show>
        )}
        
    </Box>
  );
}