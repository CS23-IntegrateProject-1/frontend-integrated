import {
  Table,
  Thead,
  Tr,
  Th,
  TableContainer,
  Card,
  CardBody,
  Stack,
  StackDivider,
  Box,
  Center,
  Text,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Axios } from "../../../../AxiosInstance";
import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import { parseISO } from "date-fns";
import textStyles from "../../../../theme/foundations/textStyles";
import { TextStyle } from "../../../../theme/TextStyle";

interface appTransaction {
  appTransactionId: number;
  venueId: number;
  transactionId: number;
}
interface appTransactionDetail {
  appTransactionDetailId: number;
  detail: string;
  monthly: Date;
  total_amount: number;
  timestamp: Date;
  appTransactionId: number;
}

export const Accounting = () => {
  const [appTrans, setAppTrans] = useState();
  appTrans;
  const { venueId, month } = useParams();
  const urlMonth = decodeURIComponent(month || "").split(" ")[0];
  const [allTransactionIds, setAllTransactionIds] = useState([]);
  const [appTransactionByMonth, setAppTransactionByMonth] = useState<
    Record<string, unknown[]>
  >({});

  const formatDate12 = (datetime: string) => {
    const originalISO = parseISO(datetime);
    const utcDate = utcToZonedTime(originalISO, "UTC");
    const formattedDate = format(utcDate, "dd MMMM yyyy", {
      timeZone: "UTC",
    } as any).toUpperCase();
    return formattedDate;
  };

  useEffect(() => {
    const fetchTableNumber = async () => {
      try {
        const response = await Axios.get(
          `/feature8/apptransactions/${venueId}`
        );
        const tableData = response.data;
        setAppTrans(tableData);

        const transactionIds = tableData.map(
          (transaction: appTransaction) => transaction.appTransactionId
        );
        setAllTransactionIds(transactionIds);
      } catch (error) {
        console.error("Error fetching table number:", error);
      }
    };

    fetchTableNumber();
  }, [venueId]);

  useEffect(() => {
    const fetchData = async (transactionId: number) => {
      try {
        const response = await Axios.get(
          `/feature8/apptransaction_details/bytransactionId/${transactionId}`
        );
        const appTransactionDetails = response.data;

        const detailsArray = Array.isArray(appTransactionDetails)
          ? appTransactionDetails
          : [appTransactionDetails];

        detailsArray.forEach((detail) => {
          const monthKey = format(
            utcToZonedTime(new Date(detail.monthly), ThailandTimeZone),
            "MMMM yyyy"
          );

          setAppTransactionByMonth((prevData) => {
            const existingDetails = prevData[monthKey] || [];
            const isDuplicate = existingDetails.some(
              (existingDetail) =>
                (existingDetail as appTransactionDetail)
                  .appTransactionDetailId === detail.appTransactionDetailId
            );

            if (!isDuplicate) {
              return {
                ...prevData,
                [monthKey]: [...existingDetails, detail],
              };
            }

            return prevData;
          });
        });
      } catch (error) {
        console.error(
          `Error fetching apptransaction details for id ${transactionId}:`,
          error
        );
      }
    };

    allTransactionIds.forEach(fetchData);
  }, [allTransactionIds]);

  const ThailandTimeZone = "Asia/Bangkok";

  const aggregateAmountsByDate = () => {
    const aggregatedData: Record<
      string,
      { total: number; details: unknown[] }
    > = {};

    Object.entries(appTransactionByMonth).forEach(([, detailsArray]) => {
      detailsArray.forEach((details) => {
        const formattedDate = new Date(
          utcToZonedTime(
            new Date((details as appTransactionDetail).monthly),
            ThailandTimeZone
          )
        ).toISOString();

        if (aggregatedData[formatDate12(formattedDate)]) {
          aggregatedData[formatDate12(formattedDate)].total += Number(
            (details as appTransactionDetail).total_amount
          );
          aggregatedData[formatDate12(formattedDate)].details.push(details);
        } else {
          aggregatedData[formatDate12(formattedDate)] = {
            total: Number((details as appTransactionDetail).total_amount),
            details: [details],
          };
        }
      });
    });

    return aggregatedData;
  };

  const aggregatedAmountsByDate = aggregateAmountsByDate();

  const filteredData = Object.fromEntries(
    Object.entries(aggregatedAmountsByDate).filter(([formattedDate]) =>
      formattedDate.toLowerCase().includes(urlMonth.toLowerCase())
    )
  );

  const todayString = () => {
    // Display today's date
    const today = new Date();
    const todayString = today.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return todayString;
  };

  return (
    <Center>
      <Box
        display={"flex"}
        flexDirection={"column"}
        margin={[3, 5, 7]}
        width={["100%", "80%", "70%"]}
        gap={4}
      >
        <Card
          width="337px"
          backgroundColor="#5F0DBB66"
          color="#C5C4C7"
          rounded="lg"
          padding={6}
          marginBottom={5}
        >
          <Text style={textStyles.h3} color={"white"}>
            Latest transfer amount
          </Text>
          <Text style={textStyles.h1} color={"white"}>
            THB
          </Text>
          <Text style={textStyles.h4}>{todayString()}</Text>
        </Card>
        <Text style={TextStyle.h1} fontWeight={"bold"}>
          Accounting information
        </Text>
        <Card
          width={"100%"}
          backgroundColor={"#5F0DBB"}
          color={"#C5C4C7"}
          marginBottom={[4, 6, 8]}
        >
          <CardBody textAlign={"center"}>
            <Stack
              divider={<StackDivider />}
              color={"#C5C4C7"}
              spacing={[2, 4]}
            >
              <Box>
                <TableContainer>
                  <Table variant="unstyled">
                    <Thead>
                      <Tr borderBottom="none">
                        <Th
                          textAlign="center"
                          borderRight="1px solid white"
                          style={TextStyle.h4}
                          color="white"
                        >
                          Date
                        </Th>
                        <Th
                          textAlign="center"
                          style={TextStyle.h4}
                          color="white"
                        >
                          Amount
                        </Th>
                      </Tr>
                    </Thead>
                  </Table>
                </TableContainer>
              </Box>
            </Stack>
          </CardBody>
        </Card>

        {Object.entries(filteredData).map(
          ([formattedDate, aggregatedAmount], index) => {
            const details = aggregatedAmount.details[0]; // Assuming details array is not empty
            const year = new Date(
              (details as appTransactionDetail).monthly
            ).getFullYear();
            const month = new Date((details as appTransactionDetail).monthly)
              .toLocaleDateString("en-US", { month: "long" })
              .toLowerCase();
            const day = new Date(
              (details as appTransactionDetail).monthly
            ).getDate();

            return (
              <Link
                key={index}
                to={`/business/Account/datexpand/${venueId}/${year}/${month}/${day}`}
              >
                <Card width="100%" backgroundColor="#D9D9D9" color="black">
                  <CardBody textAlign="center">
                    <Stack divider={<StackDivider />} color="#C5C4C7">
                      <Box>
                        <TableContainer>
                          <Table width="100%" variant="unstyled">
                            <Thead>
                              <Tr borderBottom="none">
                                <Th
                                  textAlign="center"
                                  borderRight="1px solid white"
                                  style={TextStyle.h4}
                                  color="black"
                                >
                                  {formattedDate}
                                </Th>
                                <Th
                                  textAlign="center"
                                  style={TextStyle.h1}
                                  color="black"
                                >
                                  {`${aggregatedAmount.total} Baht`}
                                </Th>
                              </Tr>
                            </Thead>
                          </Table>
                        </TableContainer>
                      </Box>
                    </Stack>
                  </CardBody>
                </Card>
              </Link>
            );
          }
        )}
      </Box>
    </Center>
  );
};
