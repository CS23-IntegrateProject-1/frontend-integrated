import { useState, useEffect, FC } from "react";
import { Tabs, TabList, Tab, Box, Stack, Icon } from "@chakra-ui/react";
import { VoucherStatusCard } from "../../components/businessVoucherCom/VoucherStatusCard";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { GetVoucherByBusinessId } from "../../../../api/Voucher/GetVoucherByBusinessId";
import IVoucher_Business from "../../../../interfaces/Voucher/IVoucher_Business.interface";

export const VoucherStatusPage: FC = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [data, setData] = useState<IVoucher_Business[]>([]);
  const [selector, setSelector] = useState<"ongoing" | "complete">("ongoing");
  const navigate = useNavigate();
  const handleClickCreate = () => {
    navigate("/business/voucher/create");
  };

  const handleTabChange = (index: number) => {
    setCurrentTab(index);
  };

  const fetchVoucherStatusPage = async () => {
    const res = await GetVoucherByBusinessId();

    setData(res);
  };

  useEffect(() => {
    fetchVoucherStatusPage();
  }, []);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
    >
      <Tabs
        variant={"soft-rounded"}
        colorScheme={"brand"}
        index={currentTab}
        onChange={handleTabChange}
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
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
              onClick={() => setSelector("ongoing")}
            >
              On going
            </Tab>
            <Tab
              border="1px solid white"
              color="#FFFFFF"
              _selected={{
                color: "#FFFFFF",
                borderColor: "#A533C8",
                bgColor: "#A533C8",
              }}
              onClick={() => setSelector("complete")}
            >
              Complete
            </Tab>
          </Stack>
        </TabList>
      </Tabs>

      {data?.map((data: IVoucher_Business, index: number) => {
        if (selector === "ongoing") {
          return (
            (data.isApprove === "Rejected" ||
              data.isApprove === "In_progress") && (
              <VoucherStatusCard
                key={index}
                data={data}
          
              />
            )
          );
        } else
          return (
            data.isApprove === "Completed" && (
              <VoucherStatusCard key={index} data={data} />
            )
          );
      })}

      <Box pos={"fixed"} bottom={10} right={6}>
        <Icon
          as={FaPlusCircle}
          w={"50px"}
          h={"50px"}
          color={"#5F0DBB"}
          onClick={handleClickCreate}
        ></Icon>
      </Box>
    </Box>
  );
};
