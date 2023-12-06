import {
  Box,
  Select,
  Flex,
  Center,
  Text,
  Card,
  Stack,
  StackDivider,
  CardBody,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
} from "@chakra-ui/react";

import { useState } from "react";
import { ButtonComponent } from "../../../../components/buttons/ButtonComponent";
import { Bar } from "react-chartjs-2";
import { TextStyle } from "../../../../theme/TextStyle";
import { Link, useParams } from "react-router-dom";

export const BusinessInsight = () => {
  const [selectedDayFrom, setSelectedDayFrom] = useState<number | string>("");
  const [selectedDayTo, setSelectedDayTo] = useState<number | string>("");
  const [selectedMonthFrom, setSelectedMonthFrom] = useState<number | string>("");
  const [selectedMonthTo, setSelectedMonthTo] = useState<number | string>("");
  const [selectedYearFrom, setSelectedYearFrom] = useState<number | string>("");
  const [selectedYearTo, setSelectedYearTo] = useState<number | string>("");
  const {userId} = useParams();

  // Function to generate an array of numbers for days, months, and years
  const generateArray = (start: number, end: number): number[] => {
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  const days = generateArray(1, 31);
  const months = generateArray(1, 12);
  const years = generateArray(2000, new Date().getFullYear());

  const receipts = {
    labels: ["5May", "10May", "15May", "20May", "25May", "30May", "5June"],
    datasets: [
      {
        label: "Number of Receipts",
        data: [700, 500, 250, 450, 150, 400, 650],
        backgroundColor: ["#D9D9D980", "#D9D9D980", "#D9D9D980", "#D9D9D980"], // You can customize colors
      },
    ],
  };

  const revenue = {
    labels: ["5May", "10May", "15May", "20May", "25May", "30May", "5June"],
    datasets: [
      {
        label: "Total Revenue",
        data: [550000, 350000, 100000, 350000, 200000, 400000, 550000],
        backgroundColor: ["#D9D9D980", "#D9D9D980", "#D9D9D980", "#D9D9D980"], // You can customize colors
      },
    ],
  };

  const netProfit = {
    labels: ["5May", "10May", "15May", "20May", "25May", "30May", "5June"],
    datasets: [
      {
        label: "Net Profit",
        data: [350000, 300000, 350000, 450000, 500000, 350000, 250000],
        backgroundColor: ["#D9D9D980", "#D9D9D980", "#D9D9D980", "#D9D9D980"], // You can customize colors
      },
    ],
  };
  const chartOptions = {
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: "white", // Set x-axis label color to white
        },
      },
      y: {
        stacked: true,
        ticks: {
          color: "white", // Set x-axis label color to white
        },
      },
    },
  };

  const chartOptionsK = {
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: "white", // Set x-axis label color to white
        },
      },
      y: {
        stacked: true,
        ticks: {
          color: "white", // Set x-axis label color to white
          callback: function (value: number) {
            // Format numbers in thousands (K)
            return value / 1000 + "k";
          },
        },
      },
    },
  };
  return (
    <Center>
      <Box
        display={"flex"}
        flexDirection={"column"}
        margin={[3, 5, 7]}
        width={["100%", "80%", "70%"]}
        fontWeight={"bold"}
        justifyContent={"space-between"}
      >
        <Text
          style={TextStyle.h1}
          fontSize={"lg"}
          fontWeight={"bold"}
          marginBottom={3}
        >
          Shop name - Green Food
        </Text>
        <Box
          display="flex"
          justifyContent={"space-between"}
          alignItems="baseline"
          ml={3}
        >
          <Text style={TextStyle.h3}>From 5/5/2023 to 6/5/2023</Text>
          <Popover colorScheme="#D9D9D9">
            <PopoverTrigger>
              <Link to={""}>
                <Text fontSize={"sm"}>Filter</Text>
              </Link>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverHeader textAlign={"center"}>
                  <Text style={TextStyle.h1} textColor={"#242325"}>
                    <Link to={""}>
                      Filter By
                    </Link>
                  </Text>
                </PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  <Text style={TextStyle.h2} textColor={"#5F0DBB"}>
                    From:
                  </Text>
                  <Select
                    placeholder="Select day"
                    value={selectedDayFrom}
                    variant="outline"
                    color={"#2D3748"}
                    onChange={(e) => setSelectedDayFrom(e.target.value)}
                    marginBottom={"3"}
                  >
                    {days.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </Select>
                  <Select
                    placeholder="Select month"
                    value={selectedMonthFrom}
                    variant="outline"
                    color={"#2D3748"}
                    onChange={(e) => setSelectedMonthFrom(e.target.value)}
                    marginBottom={"3"}
                  >
                    {months.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </Select>
                  <Select
                    placeholder="Select year"
                    value={selectedYearFrom}
                    variant="outline"
                    color={"#2D3748"}
                    onChange={(e) => setSelectedYearFrom(e.target.value)}
                  >
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </Select>
                </PopoverBody>
                <PopoverBody>
                  <Text style={TextStyle.h2} textColor={"#5F0DBB"}>
                    To:
                  </Text>
                  <Select
                    placeholder="Select day"
                    value={selectedDayTo}
                    variant="outline"
                    color={"#2D3748"}
                    onChange={(e) => setSelectedDayTo(e.target.value)}
                    marginBottom={"3"}
                  >
                    {days.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </Select>
                  <Select
                    placeholder="Select month"
                    value={selectedMonthTo}
                    variant="outline"
                    color={"#2D3748"}
                    onChange={(e) => setSelectedMonthTo(e.target.value)}
                    marginBottom={"3"}
                  >
                    {months.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </Select>
                  <Select
                    placeholder="Select year"
                    value={selectedYearTo}
                    variant="outline"
                    color={"#2D3748"}
                    onChange={(e) => setSelectedYearTo(e.target.value)}
                  >
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </Select>
                </PopoverBody>
                <PopoverBody>
                  <Link to={`/venue/${userId}/admin/dashboard`}>
                    <Text style={TextStyle.h2} textColor={"#5F0DBB"}>
                      Total
                    </Text>
                  </Link>
                </PopoverBody>
                <PopoverBody>
                  <Link to={`/venue/${userId}/admin/reservation`}>
                    <Text style={TextStyle.h2} textColor={"#5F0DBB"}>
                      Reservation
                    </Text>
                  </Link>
                </PopoverBody>
                <PopoverBody>
                  <Link to={`/venue/${userId}/admin/FoodOrder`}>
                    <Text style={TextStyle.h2} textColor={"#5F0DBB"}>
                      Food Order
                    </Text>
                  </Link>
                </PopoverBody>
                <PopoverBody>
                  <Link to={`/venue/${userId}/admin/FoodDelivery`}>
                    <Text style={TextStyle.h2} textColor={"#5F0DBB"}>
                      Food Delivery
                    </Text>
                  </Link>
                </PopoverBody>
                <PopoverFooter textAlign={"center"}>
                  <ButtonComponent text="Done" />
                </PopoverFooter>
              </PopoverContent>
            </Portal>
          </Popover>
        </Box>
        <Card width={"100%"} backgroundColor={"#A533C8"} color={"#FFFFFF"}>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box
                display="flex"
                justifyContent={"space-between"}
                alignItems="baseline"
                ml={3}
              >
                <Text fontSize={"sm"}>Number of Receipts</Text>
                <Text fontSize={"sm"}>3256</Text>
              </Box>
              <Box
                display="flex"
                justifyContent={"space-between"}
                alignItems="baseline"
                ml={3}
              >
                <Text fontSize={"sm"}>Revenue</Text>
                <Text fontSize={"sm"}>4356k Baht</Text>
              </Box>
              <Box
                display="flex"
                justifyContent={"space-between"}
                alignItems="baseline"
                ml={3}
              >
                <Text fontSize={"sm"}>Commission fee to Harmoni (10%)</Text>
                <Text fontSize={"sm"}>2614k Baht</Text>
              </Box>
              <Box
                display="flex"
                justifyContent={"space-between"}
                alignItems="baseline"
                ml={3}
              >
                <Text fontSize={"sm"}>Net Profit</Text>
                <Text fontSize={"sm"}>1742k Baht</Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <Card
          marginTop={10}
          padding={5}
          width={"100%"}
          backgroundColor={"#A533C8"}
          color={"#FFFFFF"}
        >
          <Box display={"flex"} justifyContent={"space-between"} ml={3}>
            <Text style={TextStyle.h3}>Number of Receipts</Text>
            <Text style={TextStyle.h3}>3256</Text>
          </Box>
          <Bar data={receipts} options={chartOptions} />
        </Card>
        <Card
          marginTop={10}
          padding={5}
          width={"100%"}
          backgroundColor={"#A533C8"}
          color={"#FFFFFF"}
        >
          <Box display={"flex"} justifyContent={"space-between"} ml={3}>
            <Text style={TextStyle.h3}>Total Revenue</Text>
            <Text style={TextStyle.h3}>4356k Baht</Text>
          </Box>
          <Bar data={revenue} options={chartOptionsK} />
        </Card>
        <ButtonComponent
          text="See All Receipts"
          bgColor="#F6F6F6"
          textColor="#A533C8"
          width="100%"
          bgColorHover="#A533C8"
          textColorHover="#FFFFFF"
        />
        <Card
          marginTop={10}
          padding={5}
          width={"100%"}
          backgroundColor={"#A533C8"}
          color={"#FFFFFF"}
        >
          <Box display={"flex"} justifyContent={"space-between"} ml={3}>
            <Text style={TextStyle.h3}>Net Profit</Text>
            <Text style={TextStyle.h3}>1742k Baht</Text>
          </Box>
          <Bar data={netProfit} options={chartOptionsK} />
        </Card>
      </Box>
    </Center>
  );
};
