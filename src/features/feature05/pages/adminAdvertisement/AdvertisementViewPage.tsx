3;
import {
  Box,
  FormControl,
  FormLabel,
  Text,
} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { GetBusinessAdsById } from "../../../../api/Advertisement/GetBusinessAdsById";
import IAd_business from "../../../../interfaces/Advertisement/IAd_business.interface";

export const AdvertisementViewPage = () => {
  const [data, setData] = useState<IAd_business>();
  const id = Number(useParams<{ id: string }>().id);
  const fetchDatas = async () => {
    const result = await GetBusinessAdsById(id);
    setData(result?.data);
  };
  useEffect(() => {
    fetchDatas();
  });

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
    >
      {/* Name * */}
      <Box
        paddingBottom={3}
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
      >
        <Text style={TextStyle.h2} color={"white"}>
          {" "}
          Name *
        </Text>
        <Box bgColor={"white"} padding={"5px"} borderRadius={"5px"}>
          <Text color={"#000000"} paddingLeft={"5px"}>
            {data?.name}
          </Text>
        </Box>
      </Box>

      {/* Description * */}
      <Box
        paddingBottom={3}
        width={"50%"}
        minWidth={"250px"}
        maxWidth={"400px"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Text style={TextStyle.h2} color={"white"}>
          {" "}
          Description *
        </Text>
        <Box bgColor={"white"} padding={"5px"} borderRadius={"5px"}>
          <Text color={"#000000"} paddingLeft={"5px"}>
            {data?.description}
          </Text>
        </Box>
      </Box>

      {/* Starting Date * & Ending Date * */}
      <Box
        paddingBottom={3}
        width={"50%"}
        minWidth={"250px"}
        maxWidth={"400px"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
      >
        <Box mr={"20px"} flex={"1"}>
          <Text style={TextStyle.h2} color={"white"}>
            {" "}
            Starting Date *
          </Text>
          {/* <Input size={"xs"} type="date" color="black" bg={"white"}></Input> */}
          <Box bgColor={"white"} padding={"5px"} borderRadius={"5px"}>
            <Text color={"#000000"} paddingLeft={"5px"}>
              {data?.start_date.substring(0, 10)}
            </Text>
          </Box>
        </Box>
        <Box flex={"1"}>
          <Text style={TextStyle.h2} color={"white"}>
            {" "}
            Ending Date *
          </Text>
          {/* <Input size={"xs"} type="date" color="black" bg={"white"}></Input> */}
          <Box bgColor={"white"} padding={"5px"} borderRadius={"5px"}>
            <Text color={"#000000"} paddingLeft={"5px"}>
              {data?.end_date.substring(0, 10)}
            </Text>
          </Box>
        </Box>
      </Box>

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
        <Image
          src={import.meta.env.VITE_BACKEND_URL + data?.image_url}
          alt="image"
        />
      </FormControl>
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
        <FormLabel style={TextStyle.h2} color={"white"}>
          {" "}
          Target customer
        </FormLabel>
        <Box bgColor={"white"} padding={"5px"} borderRadius={"5px"}>
          <Text color={"#000000"} paddingLeft={"5px"}>
            {data?.customer_type}
          </Text>
        </Box>
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
        <FormLabel style={TextStyle.h2} color={"white"}>
          {" "}
          Target group
        </FormLabel>
        <Box bgColor={"white"} padding={"5px"} borderRadius={"5px"}>
          <Text color={"#000000"} paddingLeft={"5px"}>
            {data?.target_group}
          </Text>
        </Box>
      </FormControl>

      <Box
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
        paddingBottom={5}
      >
        <Text style={TextStyle.h2} color={"white"}>
          {" "}
          Advertisement plan
        </Text>
        <Box bgColor={"white"} padding={"5px"} borderRadius={"5px"}>
          <Text color={"#000000"} paddingLeft={"5px"}>
            {data?.cost}
          </Text>
        </Box>
      </Box>

    </Box>
  );
};
