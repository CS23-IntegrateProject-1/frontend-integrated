import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  Tabs,
  TabList,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { AdvertisementCard } from "../../components/adminAdvertisementCom/AdvertisementCard";
import { Search2Icon } from "@chakra-ui/icons";
import { useEffect, useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import IAdvertisementCardProp from "../../../../interfaces/Advertisement/IAdvertisementCardProp.interface";
import { GetAllAds } from "../../../../api/Advertisement/GetAllAdvertisement";
// interface IAdCard {
//   advertisementId: number;
//   naem: string;
//   description: string;
//   isApprove: approve;
// }
// enum approve {
//   Rejected = "Rejected",
//   In_progress = "In_progress",
//   Completed = "Completed"
// }

export const AdvertisementListPage: FC = () => {
  const [datas, setDatas] = useState<IAdvertisementCardProp[]>([]);
  const [selector, setSelector] = useState<
    "In_progress" | "Awaiting_payment" | "Completed" | "Rejected"
  >("In_progress");
  const [currentTab, setCurrentTab] = useState(0);
  const navigate = useNavigate();
  const handleClickCreate = () => {
    navigate("/admin/advertisement/status");
  };

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
    // <Box
    //   display={"flex"}
    //   flexDirection={"column"}
    //   justifyContent={"center"}
    //   alignItems={"center"}
    //   width={"100%"}
    // >
    //   {/* Search */}
    //   <Box
    //     width="90%"
    //     minWidth="250px"
    //     maxWidth="400px"
    //     display="flex"
    //     flexDirection={"column"}
    //     paddingBottom={5}
    //   >
    //     <InputGroup>
    //       <InputLeftElement
    //         pointerEvents="none"
    //         children={<Search2Icon color="gray.600" />}
    //         bgColor={"white"}
    //         borderRadius={10}
    //       />
    //       <Input
    //         type="text"
    //         placeholder="Search..."
    //         border="1px solid white"
    //         bgColor={"white"}
    //         color={"black"}
    //         borderRadius={10}
    //       />
    //       {/* <InputRightElement p={0} borderRadius={10}></InputRightElement> */}

    //     </InputGroup>
    //   </Box>

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
