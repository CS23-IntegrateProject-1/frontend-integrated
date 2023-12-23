import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { AdvertisementCard } from "../../components/adminAdvertisementCom/AdvertisementCard";
import { Search2Icon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { GetInProgressBusinessAds } from "../../../../api/Advertisement/GetInProgressBusinessAds";
import IAdvertisementCardProp from "../../../../interfaces/Advertisement/IAdvertisementCardProp.interface";

export const AdvertisementListPage = () => {
  const [datas, setDatas] = useState([]);


  const fetchBusinessAds = async () => {
    const res = await GetInProgressBusinessAds();
    setDatas(res);
  };

  useEffect(() => {
    fetchBusinessAds();
  }, []);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
    >
      {/* Search */}
      <Box
        width="90%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
        paddingBottom={5}
      >
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.600" />}
            bgColor={"white"}
            borderRadius={10}
          />
          <Input
            type="text"
            placeholder="Search..."
            border="1px solid white"
            bgColor={"white"}
            color={"black"}
            borderRadius={10}
          />
          {/* <InputRightElement p={0} borderRadius={10}></InputRightElement> */}

        </InputGroup>
      </Box>


      {datas?.map((data: IAdvertisementCardProp) => (
        <AdvertisementCard
          key={data?.advertisementId}
          name={data?.name}
          description={data?.description}
          advertisementId={data?.advertisementId}
        />
      ))}
    </Box>
  );
};
