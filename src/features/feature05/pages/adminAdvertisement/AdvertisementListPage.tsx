import {
  Box,
  Tab,
  Tabs,
  TabList,
  Stack,
} from "@chakra-ui/react";
import { AdvertisementCard } from "../../components/adminAdvertisementCom/AdvertisementCard";
import { useEffect, useState, FC } from "react";
import IAdvertisementCardProp from "../../../../interfaces/Advertisement/IAdvertisementCardProp.interface";
import { GetAllAds } from "../../../../api/Advertisement/GetAllAdvertisement";

export const AdvertisementListPage: FC = () => {
  const [datas, setDatas] = useState<IAdvertisementCardProp[]>([]);
  const [selector, setSelector] = useState<
    "In_progress" | "Awaiting_payment" | "Completed" | "Rejected"
  >("In_progress");
  const [currentTab, setCurrentTab] = useState(0);

  const fetchBusinessAds = async () => {
    const res = await GetAllAds();
    setDatas(res);
    console.log(res);
  };

  useEffect(() => {
    fetchBusinessAds();
  }, []);

  const handleTabChange = (index: number) => {
    setCurrentTab(index);
    console.log(currentTab);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Tabs
        variant={"soft-rounded"}
        colorScheme={"brand"}
        index={currentTab}
        onChange={handleTabChange}
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
        mb="1em"
      >
        <TabList>
          <Stack spacing={10} flexDirection={"row"}>
            <Tab
              border="1px solid white"
              color="#FFFFFF"
              whiteSpace={"nowrap"}
              _selected={{
                color: "#FFFFFF",
                borderColor: "#A533C8",
                bgColor: "#A533C8",
              }}
              onClick={() => setSelector("In_progress")}
            >
              In Progress
            </Tab>
            <Tab
              border="1px solid white"
              color="#FFFFFF"
              whiteSpace={"nowrap"}
              _selected={{
                color: "#FFFFFF",
                borderColor: "#A533C8",
                bgColor: "#A533C8",
              }}
              onClick={() => setSelector("Awaiting_payment")}
            >
              Awaiting Payment
            </Tab>
            <Tab
              border="1px solid white"
              color="#FFFFFF"
              whiteSpace={"nowrap"}
              _selected={{
                color: "#FFFFFF",
                borderColor: "#A533C8",
                bgColor: "#A533C8",
              }}
              onClick={() => setSelector("Completed")}
            >
              Completed
            </Tab>

            <Tab
              border="1px solid white"
              color="#FFFFFF"
              whiteSpace={"nowrap"}
              _selected={{
                color: "#FFFFFF",
                borderColor: "#A533C8",
                bgColor: "#A533C8",
              }}
              onClick={() => setSelector("Rejected")}
            >
              Rejected
            </Tab>
          </Stack>
        </TabList>
      </Tabs>
      {datas
        ?.filter((data) => data.isApprove === selector)
        .map((data: IAdvertisementCardProp) => {
          if (selector === "In_progress") {
            return (
              data.isApprove === "In_progress" && (
                <AdvertisementCard
                  name={data.name}
                  description={data.description}
                  advertisementId={data.advertisementId}
                  isApprove={data.isApprove}
                  key={data.advertisementId}
                />
              )
            );
          } else if (selector === "Awaiting_payment") {
            return (
              data.isApprove === "Awaiting_payment" && (
                <AdvertisementCard
                  name={data.name}
                  description={data.description}
                  advertisementId={data.advertisementId}
                  isApprove={data.isApprove}
                  key={data.advertisementId}
                />
              )
            );
          } else if (selector === "Completed") {
            return (
              data.isApprove === "Completed" && (
                <AdvertisementCard
                  name={data.name}
                  description={data.description}
                  advertisementId={data.advertisementId}
                  isApprove={data.isApprove}
                  key={data.advertisementId}
                />
              )
            );
          } else if (selector === "Rejected") {
            return (
              data.isApprove === "Rejected" && (
                <AdvertisementCard
                  name={data.name}
                  description={data.description}
                  advertisementId={data.advertisementId}
                  isApprove={data.isApprove}
                  key={data.advertisementId}
                />
              )
            );
          }
        })}
    </Box>
  );
};
