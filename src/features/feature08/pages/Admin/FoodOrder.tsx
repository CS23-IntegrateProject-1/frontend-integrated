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

import { useEffect, useState } from "react";
import { ButtonComponent } from "../../../../components/buttons/ButtonComponent";
import { Bar } from "react-chartjs-2";
import { TextStyle } from "../../../../theme/TextStyle";
import { Link, useParams } from "react-router-dom";
import { Axios } from "../../../../AxiosInstance";
import { useQuery } from "@tanstack/react-query";
import { formatDate1 } from "../../../../functions/formatDatetime";

interface transaction {
  // Define the properties of the business insight here
  transactionId: number;
  userId: number;
  venueId: number;
  reserveId: number;
}
interface transaction_detail {
  // Define the properties of the business insight here
  transactionDetailId: number;
  detail: string;
  timestamp: Date;
  status: string;
  total_amount: number;
  transactionId: number;
}


export const FoodOrder = () => {
  const [selectedDayFrom, setSelectedDayFrom] = useState<number | string>("");
  const [selectedDayTo, setSelectedDayTo] = useState<number | string>("");
  const [selectedMonthFrom, setSelectedMonthFrom] = useState<number | string>(
    ""
  );
  const [selectedMonthTo, setSelectedMonthTo] = useState<number | string>("");
  const [selectedYearFrom, setSelectedYearFrom] = useState<number | string>("");
  const [selectedYearTo, setSelectedYearTo] = useState<number | string>("");
  const {venueId} = useParams();
  const [selectedFromDate, setSelectedFromDate] = useState<string>();
  const [selectedToDate, setSelectedToDate] = useState<string>();
  const [isFiltered, setIsFiltered] = useState<boolean>(false);


  const fetchBusinessInsightData = async () => {

    const [transactionResponse, transactionDetailResponse] = await Promise.all([
      Axios.get<transaction[]>(`/feature8/transactionsbyvenueid/${venueId}`),
      Axios.get<transaction_detail[]>(`/feature8/checkTransactionDetailForOrder/${venueId}`),
    ]);

    const transactionData = transactionResponse.data;
    const tDetailData = transactionDetailResponse.data;

    return { transactionData, tDetailData };
  
}

const handleFilterDone = () => {
  
  if (selectedDayFrom && selectedMonthFrom && selectedYearFrom &&
      selectedDayTo && selectedMonthTo && selectedYearTo) {

        const fromDate = new Date(Number(selectedYearFrom), Number(selectedMonthFrom) - 1, Number(selectedDayFrom));
        const toDate = new Date(Number(selectedYearTo), Number(selectedMonthTo) - 1, Number(selectedDayTo));
        toDate.setHours(23, 59, 59);

        const timezoneOffsetMinutes = toDate.getTimezoneOffset();

        // Subtract the timezone offset from the toDate
        toDate.setMinutes(toDate.getMinutes() - timezoneOffsetMinutes);

        const timezoneOffsetMinutesForFromDate = fromDate.getTimezoneOffset();

        // Subtract the timezone offset from the fromDate
        fromDate.setMinutes(fromDate.getMinutes() - timezoneOffsetMinutesForFromDate);
        
        const fromDateISO = fromDate.toISOString();
        const toDateISO = toDate.toISOString();
        


    setSelectedFromDate(fromDateISO);
    setSelectedToDate(toDateISO);
    
  }
};

const fetchBusinessInsightTimeFilterData = async () => {
  const transactionDetailResponseFilter = await Axios.get<transaction_detail[]>(`/feature8/getTransactionDetailsByVenueAndDateForOrder/${venueId}`, {
    params: {
      fromTime: selectedFromDate,
      toTime: selectedToDate,
    },
  });

  const tDetailFilterData = transactionDetailResponseFilter.data;

  return { tDetailFilterData };
};


const { data, isLoading, isError } = useQuery(["transactionAndtransactionDetail", venueId || ""], () => fetchBusinessInsightData());
console.log(data)



// Declare state and effect hooks at the top level of your component
const [dataFilted, setData] = useState<transaction_detail[]>([]);

useEffect(() => {
// Only fetch data if both dates are selected
if (selectedFromDate !== undefined && selectedToDate !== undefined) {
  fetchBusinessInsightTimeFilterData()
    .then(response => {
      setData(response.tDetailFilterData);
      setIsFiltered(true);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
// Add dependencies to the dependency array if needed
}, [selectedFromDate, selectedToDate]);


if(selectedFromDate !== undefined){
  console.log(dataFilted)
}

// Step 1: Convert the timestamp to a date string
const convertToDateString = (timestamp: Date) => {
  const date = new Date(timestamp);
  return `${date.getUTCFullYear()}/${date.getUTCMonth() + 1}/${date.getUTCDate()}`;
};

// Step 2: Group the transaction details by date
const groupByDate = (transactionDetails: transaction_detail[]) => {
  return transactionDetails.reduce((grouped, detail) => {
    const dateString = convertToDateString(detail.timestamp);
    if (!grouped[dateString]) {
      grouped[dateString] = [];
    }
    grouped[dateString].push(detail);
    return grouped;
  }, {} as Record<string, transaction_detail[]>);
};

// Step 3: Count the number of unique dates
const countUniqueDates = (groupedTransactionDetails: Record<string, transaction_detail[]>) => {
  return Object.keys(groupedTransactionDetails).length;
};

// Modify the groupByDate function to return an array of dates
const getDates = (transactionDetails: transaction_detail[]) => {
  const grouped = groupByDate(transactionDetails);
  return Object.keys(grouped);
};

// Modify the getNumberOfReservation function to return an array of transaction counts
const getNumberOfOrder = (groupedTransactionDetails: Record<string, transaction_detail[]>) => {
  return Object.entries(groupedTransactionDetails).map(([date, details]) => 
    ({ date, count: details.length })
  );
};

// Modify the countUniqueDates function to return an array of revenue
const getRevenueFiltered = (groupedTransactionDetails: Record<string, transaction_detail[]>) => {
  return Object.values(groupedTransactionDetails).map(details => 
    details.reduce((totalRevenue, detail) => totalRevenue + parseFloat(detail.total_amount.toString()), 0)
  );
};

const getfilteredCommision = (groupedTransactionDetails: Record<string, transaction_detail[]>) => {
  return Object.values(groupedTransactionDetails).map(details => {
    const totalRevenue = details.reduce((total, detail) => total + parseFloat(detail.total_amount.toString()), 0);
    const netProfit = (totalRevenue / 100) * 10;
    return parseFloat(netProfit.toFixed(3));
  });
};

const getfilteredNetProfit = (groupedTransactionDetails: Record<string, transaction_detail[]>) => {
  return Object.values(groupedTransactionDetails).map(details => {
    const totalRevenue = details.reduce((total, detail) => total + parseFloat(detail.total_amount.toString()), 0);
    const netProfit = totalRevenue - (totalRevenue / 100) * 10;
    return parseFloat(netProfit.toFixed(3));
  });
};

// Use these functions with your data
let dates: string[] = [];

let revenueNormal: number[] = [];
let comissionNormal: number[] = [];
let netProfitNormal: number[] = [];
let orderNormal: number[] = [];

if(data){
  const groupedTDetailData = groupByDate(data.tDetailData.flat());
  dates = getDates(data.tDetailData.flat());
  revenueNormal = getRevenueFiltered(groupedTDetailData);
  comissionNormal = getfilteredCommision(groupedTDetailData);
  netProfitNormal = getfilteredNetProfit(groupedTDetailData);
  orderNormal = getNumberOfOrder(groupedTDetailData).map(({ count }) => count);
}

const groupedFilteredTDetailData = groupByDate(dataFilted);
const filteredDates = getDates(dataFilted);
const filteredRevenue = getRevenueFiltered(groupedFilteredTDetailData);
const filteredCommision = getfilteredCommision(groupedFilteredTDetailData);
const filteredNetProfit = getfilteredNetProfit(groupedFilteredTDetailData);
const filteredOrder = getNumberOfOrder(groupedFilteredTDetailData).map(({ count }) => count);


console.log('Dates:', dates);
console.log('Revenue:', revenueNormal);
console.log('Net Profit:', comissionNormal);
console.log('Filtered Dates:', filteredDates);
console.log('Filtered Revenue:', filteredRevenue);
console.log('Filtered Net Profit:', filteredCommision);
console.log('Filtered Reservation:', filteredOrder);
console.log('reservationNormal:', orderNormal);

console.log(selectedFromDate)
console.log(selectedToDate)





















  const generateArray = (start: number, end: number): number[] => {
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  const days = generateArray(1, 31);
  const months = generateArray(1, 12);
  const years = generateArray(2000, new Date().getFullYear());


  const order = {
    labels: isFiltered ? filteredDates : dates,
    datasets: [
      {
        label: "Number of Orders",
        data: isFiltered ? filteredOrder : orderNormal,
        backgroundColor: ["#D9D9D980", "#D9D9D980", "#D9D9D980", "#D9D9D980"], // You can customize colors
      },
    ],
  };

  const revenue = {
    labels: isFiltered ? filteredDates : dates,
    datasets: [
      {
        label: "Revenue",
        data: isFiltered ? filteredRevenue : revenueNormal,
        backgroundColor: ["#D9D9D980", "#D9D9D980", "#D9D9D980", "#D9D9D980"], // You can customize colors
      },
    ],
  };

  const profit = {
    labels: isFiltered ? filteredDates : dates,
    datasets: [
      {
        label: "Profit",
        data: isFiltered ? filteredNetProfit : netProfitNormal,
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
          <Text style={TextStyle.h3}>{selectedFromDate && selectedToDate ? `From ${formatDate1(selectedFromDate ?? "")} To ${formatDate1(selectedToDate ?? "")}` : 'All time'}</Text>
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
                  <Link to={`/venue/${venueId}/admin/insight`}>
                    <Text style={TextStyle.h2} textColor={"#5F0DBB"}>
                      Insight
                    </Text>
                  </Link>
                </PopoverBody>
                <PopoverBody>
                  <Link to={`/venue/${venueId}/admin/dashboard`}>
                    <Text style={TextStyle.h2} textColor={"#5F0DBB"}>
                      Total
                    </Text>
                  </Link>
                </PopoverBody>
                <PopoverBody>
                  <Link to={`/venue/${venueId}/admin/reservation`}>
                    <Text style={TextStyle.h2} textColor={"#5F0DBB"}>
                      Reservation
                    </Text>
                  </Link>
                </PopoverBody>
                <PopoverBody>
                  <Link to={`/venue/${venueId}/admin/FoodDelivery`}>
                    <Text style={TextStyle.h2} textColor={"#5F0DBB"}>
                      Food Delivery
                    </Text>
                  </Link>
                </PopoverBody>
                <PopoverFooter textAlign={"center"}>
                  <ButtonComponent text="Done" 
                  onClick={handleFilterDone} />
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
            <Text style={TextStyle.h3}>{isFiltered ?  
                    filteredOrder.reduce((total, count) => total + count, 0) : 
                    orderNormal.reduce((total, count) => total + count, 0)
                  }</Text>
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
            <Text style={TextStyle.h3}>{isFiltered ?  
                    filteredRevenue.reduce((total, count) => total + count, 0) : 
                    revenueNormal.reduce((total, count) => total + count, 0) 
                  }{" "} Baht</Text>
          </Box>
          <Bar data={revenue} options={chartOptionsK as any} />
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
            <Text style={TextStyle.h3}>{isFiltered ? 
                  filteredNetProfit.reduce((total, count) => total + count, 0) :
                  netProfitNormal.reduce((total, count) => total + count, 0)
                  }{" "} Baht</Text>
          </Box>
          <Bar data={profit} options={chartOptionsK as any} />
        </Card>
      </Box>
    </Center>
  );
};
