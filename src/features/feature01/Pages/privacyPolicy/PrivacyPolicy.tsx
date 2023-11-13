import { Box, Heading, Text, Stack, UnorderedList, ListItem, Divider , Show,Spacer, Flex, Checkbox,Button} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Axios } from "../../../../AxiosInstance";
//function to scroll to the section
function scrollToSection(sectionId : string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export const PrivacyPolicy = ()  => {
 
  //function to handle continue button
  const handleContinue = () =>   {
      const check = document.querySelector('.check input') as HTMLInputElement;
      const text = document.querySelector('.checkText') as HTMLInputElement; 
        console.log("checked");
          text.hidden=true;
          if(check.checked){
          //go back to home
          window.history.replaceState({}, '', '/');
          window.history.go(0);
          //set local storage for mock testing , have to del real integration
          localStorage.setItem("privacyPolicy", "true");
          //send a get request to backend
          //get user token from other team
          useEffect(() => {
               if ("userToken") {
                 const url = 'feature01/privacyPolicy?consent=true';
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
                       localStorage.setItem("privacyPolicy", "true");
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
     <Heading style={TextStyle.h1}>{" "}Privacy Policy</Heading>
     <Stack spacing={5} mt={2}>
      <Text style={TextStyle.body1} color={"white"}>
        {" "}
        Last Updated: October 1, 2023
      </Text>
      <Text style={TextStyle.body1} color={"white"}>
        {" "}
        Welcome to Harmoni Bar and Restaurant Reservation Website (
        "Harmoni," "we," "us," or "our"). At Harmoni, we are committed
         to protecting your privacy and ensuring the security of your personal 
        information. This Privacy Policy explains how we collect, use, disclose, a
        nd protect your information when you use our website, mobile application,
        or any of our services (collectively referred to as the "Services").
        </Text>
      <Text style={TextStyle.body1} color={"white"}>
        {" "}
        By accessing or using Harmoni, you consent to the practices described in 
        this Privacy Policy. Please read this Privacy Policy carefully to understand 
        our policies and practices regarding your personal information.
      </Text>
      {/* --------------------------------------- */}
      {/* to ask about opacity & bg color & padding default 16px*/}
      <Box bgColor="#6B37BC22" m={-4}>
        <Text style={TextStyle.body1} p={5}>
          <UnorderedList spacing={2} color="brand.200">
            <ListItem><Link to={""} onClick={() => scrollToSection("firstPart")}><Text as='b'>What information we collect</Text></Link></ListItem>
            <ListItem><Link to={""} onClick={() => scrollToSection("secondPart")}><Text as='b'>How we use your information</Text></Link></ListItem>
            <ListItem><Link to={""} onClick={() => scrollToSection("thirdPart")}><Text as='b'>How we share your information</Text></Link></ListItem>
            <ListItem><Link to={""} onClick={() => scrollToSection("fourthPart")}><Text as='b'>Your Choices</Text></Link></ListItem>
            <ListItem><Link to={""} onClick={() => scrollToSection("fifthPart")}><Text as='b'>The security of your information</Text></Link></ListItem>
            <ListItem><Link to={""} onClick={() => scrollToSection("sixthPart")}><Text as='b'>Privacy Policy Update</Text></Link></ListItem>
            <ListItem><Link to={""} onClick={() => scrollToSection("seventhPart")}><Text as='b'>Contact</Text></Link></ListItem>
          </UnorderedList>
        </Text>
      </Box>
        <Heading style={TextStyle.h1} id="firstPart">What information we collect</Heading>
        <Text style={TextStyle.body2}>We may collect the following information about you</Text>
        <Heading style={TextStyle.h1}>Information You Provide to Us</Heading>
        <Text style={TextStyle.body2}>
          {" "}
          <UnorderedList spacing={4}>
            <ListItem>
                <Text as='b'>Registration Information: </Text>
                When you create an account on Harmoni, we may collect
                information such as your name, email address, phone number,
                and password.
            </ListItem>
            <ListItem>
                <Text as='b'>Profile Information: </Text>
                You may choose to provide additional information to personalize
                your account, such as profile picture, dietary preferences, and
                special requests.
            </ListItem>
            <ListItem>
                <Text as='b'>Reservation Information: </Text>
                When you make a reservation thoubh Harmoni, we collect details such
                as the date and time of your resercation, the number of guests, and 
                any special instructions or requests.
            </ListItem>
            <ListItem>
                <Text as='b'>Payment Information: </Text>
                  To process reservations, we collect payment information, including
                  credit card details or payment methods.
            </ListItem>
          </UnorderedList>
        </Text>
        <Heading id="" style={TextStyle.h1}>Information We Automatically Collect</Heading>
        <Text style={TextStyle.body2}>
          {" "}
          <UnorderedList spacing={4}>
            <ListItem>
                <Text as='b'>Usage Information: </Text>
                We may collect information about how you use our Services, such
                as the pages you visit, your search queries, and the date and time of
                your visits.
            </ListItem>
            <ListItem>
                <Text as='b'>Device Information: </Text>
                We may collect information about
                the device you use to access Harmoni, including your
                device type, operating system, and browser type.
            </ListItem>
            <ListItem>
                <Text as='b'>Location Information: </Text>
                With your permission, we may collect precise location information
                from your device to provide location-based services, such as finding
                nearby restaurants.
            </ListItem>
          </UnorderedList>
        </Text>
        <Heading style={TextStyle.h1}>Information We Receive from Third Parties</Heading>
        <Text style={TextStyle.body2}>
          We may receive information about you from third parties, such as
          social media platforms, business partners, and advertising networks.
          This information may include demographic and interest-based information.
        </Text>
        <Heading id="secondPart" style={TextStyle.h1}>How we use your information</Heading>
        <Text style={TextStyle.body2}>
          We may use the information we collect for various purposes, including:
        </Text>
        <Text style={TextStyle.body2}>
          {" "}
          <UnorderedList spacing={4}>
            <ListItem>
                <Text as='b'>Reservation and Booking: </Text>
                To facilitate your restaturant reservation and bookings.
            </ListItem>
            <ListItem>
                <Text as='b'>Customer Support: </Text>
                To provide customer support and respond to your
                inquries and requests.
            </ListItem>
            <ListItem>
                <Text as='b'>Improvement of Services: </Text>
                To analyze and imporve our Services, including enchancing the user
                experience and adding new features.
            </ListItem>
            <ListItem>
                <Text as='b'>Marketing and Communcations: </Text>
                To send you promotional emails, newsletters, and updates about Harmoni,
                with the option to opt out at any time.
            </ListItem>
            <ListItem>
                <Text as='b'>Legal Compliance: </Text>
                To comply with legal requirements and protect
                our rights and rights of others.
            </ListItem>
          </UnorderedList>
        </Text>
        <Heading id="thirdPart" style={TextStyle.h1}>Sharing Your Information</Heading>
        <Text style={TextStyle.body2}>
          We may share your information in the following ways:
        </Text>
        <Text style={TextStyle.body2}>
          {" "}
          <UnorderedList spacing={4}>
            <ListItem>
                <Text as='b'>With Restaurants: </Text>
                We share your reservation information
                with the restaurants you choose to book.
            </ListItem>
            <ListItem>
                <Text as='b'>With Service Providers: </Text>
                We may share your information with
                third-party service providers who help
                us operate and imporve our Services.
            </ListItem>
            <ListItem>
                <Text as='b'>For Legal Reasons: </Text>
                We may disclose your infomration when required by law or
                to protect our rights and the rights of others.
            </ListItem>
          </UnorderedList>
        </Text>
        <Heading style={TextStyle.h1} id="fourthPart">Your Choices</Heading>
        <Text style={TextStyle.body2}>
          You can control your information in the following ways:
        </Text>
        <Text style={TextStyle.body2}>
          <UnorderedList spacing={2}>
          <ListItem>
                <Text as='b'>Account Settings: </Text>
                 You can review and updaate your account
                 information in your account settings.
            </ListItem>
            <ListItem>
                <Text as='b'>Marketing Communications: </Text>
                You can opt out of receving marketing communications
                by following the instructions in our emails or contacting us.
            </ListItem>
            <ListItem>
                <Text as='b'>Phone: </Text>
                +66 25 255 255
            </ListItem>
          </UnorderedList>
        </Text>
        <Heading style={TextStyle.h1} id="fifthPart">The security of your infomration</Heading>
        <Text style={TextStyle.body2}>
          We take the security of your information seriously and 
          have implemented appropriate measures to protect it.
          However, no data transmission over the Internet or
          storage system can be guaranteed to be 100% secure.
        </Text>
        <Heading style={TextStyle.h1} id="sixthPart">Privacy Policy Update</Heading>
        <Text style={TextStyle.body2}>
          We may update this Privacy Policy to reflect changes in
          our practices or for other operational, legal, or regulatory reasons.
          We will notify you of any material changes by posting the updated Privacy Policy 
          on our website or through other communication channels.
        </Text>
        <Heading style={TextStyle.h1} id="seventhPart">Contact</Heading>
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
        {(localStorage.getItem("privacyPolicy") === null) && (
            <Show below='sm'>
              <Checkbox className='check' size='sm'checked={false}  colorScheme='green'>You have read & accepted the privacy and policy</Checkbox>
              <Box>
                <Text size={'sm'} color={'red'} className="checkText" hidden={true}> You must agree Privacy and Policy</Text>
              </Box>
              <Button className="button" bg={"brand.200"} onClick={handleContinue} color={'white'} _hover={{bg:"brand.300"}}>Continue</Button>
            </Show>
         )}
         {(localStorage.getItem("privacyPolicy") != null) && (
            <Text className="already">
            You already accepted the privacy and policy
          </Text>
         )}
        
    </Stack>
    {(localStorage.getItem("privacyPolicy") === null) && (
            <Show above='sm'>
            <Flex>
              <Checkbox  className='check' checked={false}  size='md' colorScheme='green' >You have read & accepted the privacy and policy
              </Checkbox>
              <Box mt={5} ml={3}>
                <Text size={'sm'} color={'red'} className="checkText" hidden={true}> You must agree Privacy and Policy</Text>
              </Box>
              <Spacer/>
              <Button px={20} mt={5} bg={"brand.200"} color={'white'} _hover={{bg:"brand.300"}} onClick={handleContinue}>Continue</Button>
            </Flex>
          </Show>
         )}
    </Box>
        
  );
};