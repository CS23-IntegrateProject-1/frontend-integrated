import {
  Box,
  Tab,
  Tabs,
  TabList,
  Stack,
} from "@chakra-ui/react";
import { VoucherCard } from "../../components/VoucherCom/VoucherCard";
import { useEffect, useState, FC } from "react";
import IVoucherCardProp from "../../../../interfaces/Voucher/IVoucherCardProp";
import { GetVoucherByBusinessId } from "../../../../api/Voucher/GetVoucherByBusinessId";

export const VoucherListPage: FC = () => {
  const [datas, setDatas] = useState<IVoucherCardProp[]>([]);
  const [selector, setSelector] = useState<
    "In_progress" | "Completed" | "Rejected"
  >("In_progress");
  const [currentTab, setCurrentTab] = useState(0);

  const fetchVoucher = async () => {
    const res = await GetVoucherByBusinessId();
    setDatas(res);
    console.log(res);
  };

  useEffect(() => {
    fetchVoucher();
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
        .map((data: IVoucherCardProp) => {
          if (selector === "In_progress") {
            return (
              data.isApprove === "In_progress" && (
                <VoucherCard
                  voucher_name={data.voucher_name}
                  voucherId={data.voucherId}
                  isApprove={data.isApprove}
                  key={data.voucherId}
                />
              )
            );
          } else if (selector === "Completed") {
            return (
              data.isApprove === "Completed" && (
                <VoucherCard
                  voucher_name={data.voucher_name}
                  voucherId={data.voucherId}
                  isApprove={data.isApprove}
                  key={data.voucherId}
                />
              )
            );
          } else if (selector === "Rejected") {
            return (
              data.isApprove === "Rejected" && (
                <VoucherCard
                  voucher_name={data.voucher_name}
                  voucherId={data.voucherId}
                  isApprove={data.isApprove}
                  key={data.voucherId}
                />
              )
            );
          }
        })}
    </Box>
  );
};
