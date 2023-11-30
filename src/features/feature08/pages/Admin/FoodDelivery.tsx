import {
    Box,
    Center,
    Text,
    Card,
    Stack,
    StackDivider,
    CardBody,
  } from "@chakra-ui/react";
  
  import { ButtonComponent } from "../../../../components/buttons/ButtonComponent";
  import { Bar } from "react-chartjs-2";
  import { TextStyle } from "../../../../theme/TextStyle";
  
  export const FoodDelivery = () => {
    const delivery = {
      labels: ["5May", "10May", "15May", "20May", "25May", "30May", "5June"],
      datasets: [
        {
          label: "Number of Delivery",
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
            <Text fontSize={"sm"}>Delivery</Text>
          </Box>
          <Card
            marginTop={10}
            padding={5}
            width={"100%"}
            backgroundColor={"#A533C8"}
            color={"#FFFFFF"}
          >
            <Box display={"flex"} justifyContent={"space-between"} ml={3}>
              <Text style={TextStyle.h3}>Number of Delivery</Text>
              <Text style={TextStyle.h3}>1056</Text>
            </Box>
            <Bar data={delivery} options={chartOptions} />
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
  