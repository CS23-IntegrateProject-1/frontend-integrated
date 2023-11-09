import { Box, Flex, Switch, Spacer, Divider, Text, useBoolean, cookieStorageManager } from "@chakra-ui/react";
cookieStorageManager
import { Axios } from "../../../../AxiosInstance";
import { useEffect } from "react";
export const EmailNoti = () => {
  
  const [emailNoti, setEmailNoti] = useBoolean();
  const [emailUpdates, setEmailUpdates] = useBoolean();
  const [emailOffers, setEmailOffers] = useBoolean();
  const [emailFeedback, setEmailFeedback] = useBoolean();

  //data to send to the backend
  const EmailNotiData = {
    emailNoti: emailNoti,
    emailUpdates: emailUpdates,
    emailOffers: emailOffers,
    emailFeedback: emailFeedback,
  };
  //url to send a request
  const url = `feature1/settings/notification?email_noti=${emailNoti}&email_update=${emailUpdates}&email_offer=${emailOffers}&email_feedback=${emailFeedback}`;
  Axios.get(url, {
    params: EmailNotiData,
  }).then((res) => {
    if(res.status===200){
      console.log("EmailNotiData sent");
      //store noti setting on local storage
      localStorage.setItem("emailNoti", emailNoti.toString());
      localStorage.setItem("emailUpdates", emailUpdates.toString());
      localStorage.setItem("emailOffers", emailOffers.toString());
      localStorage.setItem("emailFeedback", emailFeedback.toString());
    }
    else{
      console.log("EmailNotiData not sent");
    }
  }).catch((err) => {
    console.log(err);
  }
  );
  
  
  useEffect(() => {
    //get user noti setting value from local storage to assign to the switch
    const emailNotiValue = localStorage.getItem("emailNoti");
    const emailUpdatesValue = localStorage.getItem("emailUpdates");
    const emailOffersValue = localStorage.getItem("emailOffers");
    const emailFeedbackValue = localStorage.getItem("emailFeedback");
    //assign value to the switch
    (emailNotiValue === "true") ? setEmailNoti.on() : setEmailNoti.off();
    (emailUpdatesValue === "true") ? setEmailUpdates.on() : setEmailUpdates.off();
    (emailOffersValue === "true") ? setEmailOffers.on() : setEmailOffers.off();
    (emailFeedbackValue === "true") ? setEmailFeedback.on() : setEmailFeedback.off();
  },[])

  return (
    <Box>
    <Flex>
        <Text>Email Notifications</Text>
        <Spacer/>
        <Switch id='emailNoti'
        checked={emailNoti}
        onChange={setEmailNoti.toggle}/>
    </Flex>
    <Divider py={2}/>
    <Flex pt={4}>
        <Text>Updates</Text>
        <Spacer/>
        <Switch id='emailUpdates'  
        checked={emailUpdates}
        onChange={setEmailUpdates.toggle}/>
    </Flex>
    <Divider py={2}/>
    <Flex pt={4}>
        <Text>Offers</Text>
        <Spacer/>
        <Switch id='emailOffers'
        checked={emailOffers}
        onChange={setEmailOffers.toggle}/>
    </Flex>
    <Divider py={2}/>
    <Flex pt={4}>
        <Text>Feedback</Text>
        <Spacer/>
        <Switch id='emailFeedback'
        checked={emailFeedback}
        onChange={setEmailFeedback.toggle}/>
    </Flex>
    <Divider py={2}/>
  </Box>
  )
}