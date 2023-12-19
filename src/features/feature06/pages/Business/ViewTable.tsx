import { Box, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTableByTableId } from "../../../../api/Reservation/getTableByTableId";
import { Image } from "@chakra-ui/react";
import { deleteTableId } from "../../../../api/Reservation/deleteTableId";

interface IViewTable {
  venueId: number;
  information: string;
  tableId: number;
  tableTypeDetailId: number;
  table_no: number;
  branchId: number;
  status: string;
  table_type: {
    capacity: number;
    detail: string;
    name: string;
    tableTypeDetailId: number;
    venueId: number;
    image_url: string;
  };
}
export const ViewTable = () => {
  const { tableId } = useParams();
  const navigate = useNavigate();
  const tableIdNum: number = +tableId!;
  const [data, setData] = useState<IViewTable>({
    venueId: 0,
    information: "",
    tableId: 0,
    tableTypeDetailId: 0,
    table_no: 0,
    branchId: 0,
    status: "",
    table_type: {
      capacity: 0,
      detail: "",
      name: "",
      tableTypeDetailId: 0,
      venueId: 0,
      image_url: "",
    },
  });

  useEffect(() => {
    console.log("tableId: ", tableId);
    fetchData();
  }, []);

  const fetchData = async () => {
    const response: IViewTable = await getTableByTableId(tableIdNum);
    setData(response);
  };

  const deleteTable = async () => {
    const response: IViewTable = await deleteTableId(tableIdNum);
    console.log(response);
    navigate("/business/tablelist");
  };

  console.log(JSON.stringify(data) + "----------- This is data");
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        width={"354px"}
        h={"430px"}
        borderRadius={"20px"}
        background={"rgba(95, 13, 187, 0.40)"}
      >
        <Text
          fontSize={"20px"}
          fontWeight={"700"}
          textAlign={"center"}
          mt={"18px"}
        >
          Table no: {data?.table_no}
        </Text>
        <Image
          src={data?.table_type?.image_url}
          alt="Caffe Latte"
          w={"320px"}
          h={"168px"}
          borderRadius={"15px"}
          background={"#9747FF"}
          ml={"17px"}
          mt={"15px"}
        ></Image>
        <Text
          fontSize={"14px"}
          fontWeight={"700"}
          textAlign={"center"}
          mt={"9px"}
        >
          {data.status === "Available" ? (
            <Text color={"#007E33"}>Available</Text>
          ) : data.status === "Unavailable" ? (
            <Text color={"#C00"}>Booked</Text>
          ) : (
            ""
          )}
        </Text>
        <Text fontSize={"16px"} fontWeight={"600"} ml={"26px"} mt={"15px"}>
          Table type
        </Text>
        <Text fontSize={"16px"} fontWeight={"400"} ml={"139px"} mt={"-24px"}>
          {data?.table_type?.name}
        </Text>
        <Text fontSize={"16px"} fontWeight={"600"} ml={"26px"} mt={"20px"}>
          Capacity
        </Text>
        <Text fontSize={"16px"} fontWeight={"400"} ml={"139px"} mt={"-24px"}>
          {data?.table_type?.capacity} people
        </Text>
        <Text fontSize={"16px"} fontWeight={"600"} ml={"26px"} mt={"20px"}>
          Information
        </Text>
        <Text fontSize={"16px"} fontWeight={"400"} ml={"139px"} mt={"-24px"}>
          {data?.information}
        </Text>
      </Box>
      <Box mt="200px">
        <Button
          borderRadius="10px"
          width="138px"
          height="40px"
          backgroundColor="white"
          textColor="#A533C8"
          fontSize="16px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="24px"
          mr={"17px"}
          onClick={deleteTable}
        >
          Delete
        </Button>
        <Button
          borderRadius="10px"
          width="138px"
          height="40px"
          backgroundColor="#A533C8"
          textColor="white"
          fontSize="16px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="24px"
          onClick={() => navigate("/business/tablelist")}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
};
