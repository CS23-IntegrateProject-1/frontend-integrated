import {
    Box,
    Tab,
    Tabs,
    TabList,
    Stack,
  } from "@chakra-ui/react";
  import { ComplainDetailCard } from "../../components/complainCom/ComplainDetailCard";
  import { ComplainCard } from "../../components/complainCom/ComplainCard";
  import { useEffect, useState, FC } from "react";
  import IReportApprove  from "../../../../interfaces/ComplainTicket/IReportApprove"
  import { GetAllComplain } from "../../../../api/ComplainTicket/GetAllComplain"
  
  export const ReportListPage: FC = () => {
    const [datas, setDatas] = useState<IReportApprove[]>([]);
    const [selector, setSelector] = useState<
      "Pending" | "Completed"
    >("Pending");
    const [currentTab, setCurrentTab] = useState(0);
    const fetchReport = async () => {
      try {
        const res = await GetAllComplain();
        // Assuming GetAllComplain returns an array
        setDatas(res);
        console.log(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    useEffect(() => {
      fetchReport();
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
                onClick={() => setSelector("Pending")}
              >
                Pending
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
                Fixed
              </Tab>
            </Stack>
          </TabList>
        </Tabs>
        {Array.isArray(datas) && datas
        .filter((data) => data.status === selector)
          .map((data: IReportApprove) => {
            if (selector === "Pending") {
              return (
                data.status === "Pending" && (
                    <ComplainCard
                        ComplainTicketId={data.ComplainTicketId}
                        topic={data.topic}
                        status={data.status}
                        complaint={data.complaint}
                        key={data.ComplainTicketId}
                    />
                )
              );
            } else if (selector === "Completed") {
              return (
                data.status === "Completed" && (
                    <ComplainDetailCard
                        ComplainTicketId={data.ComplainTicketId}
                        topic={data.topic}
                        status={data.status}
                        complaint={data.complaint}
                        key={data.ComplainTicketId}
                    />
                )
              );
            } 
          })}
      </Box>
    );
  };
  