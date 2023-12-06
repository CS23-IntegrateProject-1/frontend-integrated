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

export const FoodOrder = () => {
  const [selectedDayFrom, setSelectedDayFrom] = useState<number | string>("");
  const [selectedDayTo, setSelectedDayTo] = useState<number | string>("");
  const [selectedMonthFrom, setSelectedMonthFrom] = useState<number | string>(
    ""
  );
  const [selectedMonthTo, setSelectedMonthTo] = useState<number | string>("");
  const [selectedYearFrom, setSelectedYearFrom] = useState<number | string>("");
  const [selectedYearTo, setSelectedYearTo] = useState<number | string>("");

  const generateArray = (start: number, end: number): number[] => {
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  const days = generateArray(1, 31);
  const months = generateArray(1, 12);
  const years = generateArray(2000, new Date().getFullYear());

  const {userId} = useParams();

  const order = {
    labels: ["5May", "10May", "15May", "20May", "25May", "30May", "5June"],
    datasets: [
      {
        label: "Number of Orders",
        data: [700, 500, 250, 450, 150, 400, 650],
        backgroundColor: ["#D9D9D980", "#D9D9D980", "#D9D9D980", "#D9D9D980"], // You can customize colors
      },
    ],
  };

  const revenue = {
    labels: ["5May", "10May", "15May", "20May", "25May", "30May", "5June"],
    datasets: [
      {
        label: "Revenue",
        data: [550000, 350000, 100000, 350000, 200000, 400000, 550000],
        backgroundColor: ["#D9D9D980", "#D9D9D980", "#D9D9D980", "#D9D9D980"], // You can customize colors
      },
    ],
  };

  const profit = {
    labels: ["5May", "10May", "15May", "20May", "25May", "30May", "5June"],
    datasets: [
      {
        label: "Profit",
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
                <Text fontSize={"sm"}>Order</Text>
              </Link>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverHeader textAlign={"center"}>
                  <Text style={TextStyle.h1} textColor={"#242325"}>
                    <Link to={""}>Filter By</Link>
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
                  <Link to={`/venue/${userId}/admin/insight`}>
                    <Text style={TextStyle.h2} textColor={"#5F0DBB"}>
                      Insight
                    </Text>
                  </Link>
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
        <Card
          marginTop={10}
          padding={5}
          width={"100%"}
          backgroundColor={"#A533C8"}
          color={"#FFFFFF"}
        >
          <Box display={"flex"} justifyContent={"space-between"} ml={3}>
            <Text style={TextStyle.h3}>Number of Orders</Text>
            <Text style={TextStyle.h3}>2200</Text>
          </Box>
          <Bar data={order} options={chartOptions} />
        </Card>
        <Card
          marginTop={10}
          padding={5}
          width={"100%"}
          backgroundColor={"#A533C8"}
          color={"#FFFFFF"}
        >
          <Box display={"flex"} justifyContent={"space-between"} ml={3}>
            <Text style={TextStyle.h3}>Revenue</Text>
            <Text style={TextStyle.h3}>1305k Baht</Text>
          </Box>
          <Bar data={revenue} options={chartOptionsK} />
        </Card>
        <Card
          marginTop={10}
          padding={5}
          width={"100%"}
          backgroundColor={"#A533C8"}
          color={"#FFFFFF"}
        >
          <Box display={"flex"} justifyContent={"space-between"} ml={3}>
            <Text style={TextStyle.h3}>Profit</Text>
            <Text style={TextStyle.h3}>783k Baht</Text>
          </Box>
          <Bar data={profit} options={chartOptionsK} />
        </Card>
      </Box>
    </Center>
  );
};
