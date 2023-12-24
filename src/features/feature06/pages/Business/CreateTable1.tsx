import { Box, Text, Input, Textarea, Button } from "@chakra-ui/react";
import { FormControl, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../../../AxiosInstance";
import { getAllTableTypeByVenueId } from "../../../../api/Reservation/getAllTableTypeByVenueId";

interface create1 {
  tabletype: string;
  tablenumber: number;
  information: string;
}

interface TableType {
  capacity: number;
  detail: string;
  name: string;
  tableTypeDetailId: number;
  venueId: number;
  image_url: string;
}

export const CreateTable1 = () => {
  const [tabletypeId, setTabletypeId] = useState<number>();
  const [tablenumber, setTablenumber] = useState<number>();
  const [information, setInformation] = useState("");
  const [tabletype, setTabletype] = useState<TableType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response: TableType[] = await getAllTableTypeByVenueId();
    setTabletype(response);
  };

  const tocreatetable2 = () => {
    const path = `/business/createtable2/${tabletype[0].venueId}`;
    navigate(path);
  };

  const handleCreate = async () => {
    try {
      const response: create1 = await Axios.post(`/feature6/createTable`, {
        tableTypeDetailId: tabletypeId,
        tablenumber: tablenumber,
        information: information,
      });
      console.log(response);
      navigate("/business/tablelist");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box justifyContent={"center"} alignItems={"center"} display={"flex"}>
      <Box ml={"-20px"}>
        <Text fontSize={"16px"} fontWeight={"600"} ml={"32px"}>
          Table type
        </Text>
        <Box display={"flex"} alignContent={"center"}>
          <FormControl
            w={"235px"}
            ml={"27px"}
            mt={"5px"}
            backgroundColor={"#5F0DBB66"}
            borderRadius={"6px"}
          >
            <Select
              isRequired
              placeholder="select your table type"
             
              onChange={(e) => {
                setTabletypeId(Number(e.target.value));
              }}
              borderWidth="0" // Remove border from Select component
              focusBorderColor="none"
            >
              {tabletype?.map((tabletype) => (
                <option
                  key={tabletype.tableTypeDetailId}
                  value={tabletype.tableTypeDetailId}
                  style={{ color:"#000000", 
                background: "#FFFFFF"}}
                >
                  {tabletype.name}
                </option>
              ))}
            </Select>
          </FormControl>

          <Button
            backgroundColor="#A533C8"
            textColor={"white"}
            w={"57px"}
            fontSize={"25px"}
            mt={"5px"}
            ml={"11px"}
            onClick={tocreatetable2}
          >
            +
          </Button>
        </Box>
        <Text fontSize={"16px"} fontWeight={"600"} ml={"32px"} mt={"17px"}>
          Table number
        </Text>
        <Input
          isRequired
          placeholder="put your table number "
          htmlSize={4}
          backgroundColor={"#5F0DBB66"}
          borderStyle={"none"}
          ml={"27px"}
          mt={"5px"}
          width="307px"
          onChange={(e) => {
            setTablenumber(Number(e.target.value));
          }}
        />
        <Text fontSize={"16px"} fontWeight={"600"} ml={"32px"} mt={"17px"}>
          Information
        </Text>

        <Textarea
          isRequired
          placeholder="put your information"
          backgroundColor={"#5F0DBB66"}
          borderStyle={"none"}
          ml={"27px"}
          mt={"5px"}
          width="307px"
          height={"100px"}
          onChange={(e) => {
            setInformation(e.target.value);
          }}
        />
        <Box
          justifyContent={"center"}
          alignItems={"center"}
          display={"flex"}
          mt={"100px"}
          ml={"20px"}
        >
          <Button
            bgColor={"#A533C8"}
            textColor={"white"}
            fontSize={"16px"}
            w={"322px"}
            onClick={handleCreate}
          >
            Create
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
