import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Card,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  Box,
  Text,
  Center
} from "@chakra-ui/react";

import { ButtonComponent } from "../../../../components/buttons/ButtonComponent";
import { useEffect, useState } from "react";
import axios from "axios";
// import { AdvertisementID } from "../../../feature05/pages/AdvertisementID";

type AdvertiseNoti = {
  advertisementId: string;
  name: string;
  description: string;
  image_url: string;
  start_date: string;
  end_date: string;
  cost: string;
  isApprove: string;
  customer_type: string;
  target_group: string;
  businessId: string;
}



export const AdvertiseNoti = () => {

  const [advertiseNotified, setAdvertiseNotified] = useState<AdvertiseNoti[]>([]);

  useEffect(() =>{
    axios
        .get(`http://localhost:8080/feature8/advertisements`)
        .then((res) =>{
          // console.log(res.data)
          setAdvertiseNotified(res.data)
        })
  })
  




  return (
    <Center>
      <Box
        display={"flex"}
        flexDirection={"column"}
        margin={[3, 5, 7]} // Responsive margin for different screen sizes
        width={["100%", "80%", "70%"]} // Responsive width for different screen sizes
      >
        {advertiseNotified.map((advertise) => (
          
            <Card key={advertise.advertisementId} 
                  width={"100%"} 
                  backgroundColor={""} 
                  color={"white"} 
                  border={"1px solid #DEBEF6"}
                  marginBottom={5}> 
            <CardBody>
              <Stack divider={<StackDivider />} spacing={[2, 4]}>
                <Box>
                  <Heading size="md" marginBottom={3}>
                    {/* Title: Advertisement approved */}
                    Title: Advertisement {advertise.isApprove === "Completed" ? "approved" : (advertise.isApprove === "In_progress" ? "in_progress" : (advertise.isApprove === "Rejected" ? "Rejected" : "other status"))}

                  </Heading>
                  <Text marginBottom={5}>
                    This email is to notify you that your advertisement has been {advertise.isApprove === "Completed" ? "approved and this is the total amount that you have to pay." 
                                                                                : (advertise.isApprove === "In_progress" ? "in_progress and this is the estimated total amount that you have to pay." 
                                                                                : (advertise.isApprove === "Rejected" ? "Rejected." : "other status."))}
                  </Text>
                  <Heading size="md" marginBottom={2}>
                    Payment Information
                  </Heading>
                  <TableContainer>
                    <Table
                      className="striped-table"
                      variant={'striped'}
                      colorScheme=""
                      width="100%"
                    >
                      <Tbody>
                        <Tr backgroundColor={"#A533C8"}>
                          <Td>Discription</Td>
                          <Td textAlign={"right"}>Amount</Td>
                        </Tr>
                        <Tr>
                          <Td>Advertisement</Td>
                          <Td textAlign={"right"}>
                            {/* 1000 baht */}
                            {advertise.isApprove === "Completed" ? advertise.cost + " baht"
                                                                                : (advertise.isApprove === "In_progress" ? advertise.cost+" baht" 
                                                                                : (advertise.isApprove === "Rejected" ? "0 baht" : "other status."))}
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                  <Text marginTop={2} textAlign={"right"}>
                               {advertise.isApprove === "Completed" ? "Total cost: "+advertise.cost + " baht"
                              : (advertise.isApprove === "In_progress" ? "Total cost: "+advertise.cost+" baht" 
                              : (advertise.isApprove === "Rejected"))}
                  </Text>
                  <Text marginTop={5} textAlign={"center"}>
                    {advertise.isApprove === "Completed" ? <ButtonComponent text="Pay now" />
                    : (advertise.isApprove === "In_progress" ? <ButtonComponent text="Pay now" />
                    : (advertise.isApprove === "Rejected" ))}
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Box>
    </Center>
  );
};
