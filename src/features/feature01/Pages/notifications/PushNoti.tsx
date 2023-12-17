/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Flex, Text, Spacer, Switch, Divider, useBoolean} from "@chakra-ui/react";
import { Axios } from "../../../../AxiosInstance";
import { useEffect } from "react";
export const PushNoti = () => {
    const [pushNoti, setPushNoti] = useBoolean();
    const [pushUpdate, setPushUpdate] = useBoolean();
    const [pushOffer, setPushOffer] = useBoolean();
    const [pushFeedback, setPushFeedback] = useBoolean();
    
    //data to send to the backend
    const PushNotiData = {
      pushNoti: pushNoti,
      pushUpdate: pushUpdate,
      pushOffer: pushOffer,
      pushFeedback: pushFeedback,
    };
    //url to send a request
    const url = `feature1/settings/notification?push_noti=${pushNoti}&push_update=${pushUpdate}&push_offer=${pushOffer}&push_feedback=${pushFeedback}`;
    Axios.get(url, {
      params: PushNotiData,
    }).then((res) => {
      if(res.status===200){
        console.log("PushNotiData sent");
        //store noti setting on local storage
        localStorage.setItem("pushNoti", pushNoti.toString());
        localStorage.setItem("pushUpdate", pushUpdate.toString());
        localStorage.setItem("pushOffer", pushOffer.toString());
        localStorage.setItem("pushFeedback", pushFeedback.toString());
      }
      else{
        console.log("PushNotiData not sent");
      }
    }).catch((err) => {
      console.log(err);
    }
    );

    //get user noti setting value from local storage to assign to the switch
    useEffect(() => {
        const pushNotiValue = localStorage.getItem("pushNoti");
        const pushUpdateValue = localStorage.getItem("pushUpdate");
        const pushOfferValue = localStorage.getItem("pushOffer");
        const pushFeedbackValue = localStorage.getItem("pushFeedback");
        //assign value to the switch
        (pushNotiValue === "true") ? setPushNoti.on() : setPushNoti.off();
        (pushUpdateValue === "true") ? setPushUpdate.on() : setPushUpdate.off();
        (pushOfferValue === "true") ? setPushOffer.on() : setPushOffer.off();
        (pushFeedbackValue === "true") ? setPushFeedback.on() : setPushFeedback.off();
        },[])

  return (
      <Box>
        <Flex>
            <Text>Push Notifications</Text>
            <Spacer/>
            <Switch 
            id='pushNoti'
            checked={pushNoti}
            onChange={setPushNoti.toggle}/>
        </Flex>
        <Divider py={2}/>
        <Flex pt={4}>
            <Text>Updates</Text>
            <Spacer/>
            <Switch id='pushUpdates'
            checked={pushUpdate}
            onChange={setPushUpdate.toggle}/>
        </Flex>
        <Divider py={2}/>
        <Flex pt={4}>
            <Text>Offers</Text>
            <Spacer/>
            <Switch id='pushOffers'
            checked={pushOffer}
            onChange={setPushOffer.toggle}/>
        </Flex>
        <Divider py={2}/>
        <Flex pt={4}>
            <Text>Feedback</Text>
            <Spacer/>
            <Switch id='pushFeedback'
            checked={pushFeedback}
            onChange={setPushFeedback.toggle}/>
        </Flex>
        <Divider py={2}/>
      </Box>
  )
}