import React, { useState, useEffect } from "react";
import { Tabs, TabList, Tab, Box, Stack, Icon } from "@chakra-ui/react";
import { AdvertisementStatusCard } from "../../components/businessAdvertisementCom/AdvertisementStatusCard";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { GetAllAdsBusiness } from "../../../../api/Advertisement/GetAllAdsBusiness";
import IAd_business from "../../../../interfaces/Advertisement/IAd_business.interface";

// const fetchData = async (status: string): Promise<string[]> => {
//   // Assume this is your backend API endpoint to fetch data based on the status
//   const response = await fetch(/api/data?status=${status});
//   const data = await response.json();
//   return data;
// };

export const AdvertisementStatusPage: React.FC = () => {
	const [currentTab, setCurrentTab] = useState(0);
	const [data, setData] = useState<IAd_business[]>([]);
	const [selector, setSelector] = useState<"ongoing" | "complete">("ongoing");
	const navigate = useNavigate();
	const handleClickCreate = () => {
		navigate("/business/advertisement/create");
	};
	// const businessId = 2;

	const fetchBusinessAds = async () => {
		const res = await GetAllAdsBusiness();
		setData(res);
	};

	useEffect(() => {
		fetchBusinessAds();
		// console.log(data);
	});

	const handleTabChange = (index: number) => {
		setCurrentTab(index);
	};

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

				{/* <TabPanels>
          {data.map((item, index) => (
            <TabPanel key={index}>
              <p>{item}</p>
            </TabPanel>
          ))}
        </TabPanels> */}
			</Tabs>

			{data?.map((data, index: number) => {
				if (selector === "ongoing") {
					return (
						(data.isApprove === "Rejected" ||
							data.isApprove === "In_progress") && (
							<AdvertisementStatusCard key={index} data={data} />
						)
					);
				} else
					return (
						data.isApprove === "Completed" && (
							<AdvertisementStatusCard key={index} data={data} />
						)
					);
			})}

			<Box pos={"fixed"} bottom={6} right={6} zIndex={999}>
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
