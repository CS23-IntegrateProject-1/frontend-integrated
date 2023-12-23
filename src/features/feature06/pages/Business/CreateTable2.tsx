import { Box, Text, Input, Button } from "@chakra-ui/react";
import { Axios } from "../../../../AxiosInstance";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface create2 {
  capacity: number;
  detail: string;
  name: string;
  venueId: number;
  image_url: string;
}

export const CreateTable2 = () => {
  const [capacity, setCapacity] = useState("");
  const [detail] = useState("");
  const [name, setName] = useState("");
  const [filesSelection , setFiles] = useState<File>();
  const [image_url, setImage_url] = useState("");
  const navigate = useNavigate();

  const{venueId} = useParams();
  const venueIdInt = parseInt(venueId || "0");

  const handleFileChange = async (event : React.ChangeEvent<HTMLInputElement>) => {
    const taget = event.target as HTMLInputElement;
    if (taget.files && taget.files.length > 0){
      const files = taget.files[0]
      setFiles(files)
      setImage_url(URL.createObjectURL(files));
    }
  }
  
  const handleCreate = async () => {
    try {
      const formData = new FormData();
      if(filesSelection){
        formData.append('file', filesSelection);
      }

		console.log("venueIdInt", venueIdInt);
		console.log("capacity", capacity);
		console.log("detail", detail);
		console.log("name", name);
		console.log("image_url", image_url);
		const capacityNumber = parseInt(capacity, 10);
      // const upload = await Axios.post('/feature6/uploadTableTypeImage')
      const response: create2 = await Axios.post(`/feature6/createTableType`, {
        capacity: capacityNumber,
        detail: detail,
        name: name,
        venueId: venueIdInt,
        image_url: `/upload/${filesSelection?.name}`,
      });
      console.log(response);
      console.log("create table Type success");
      navigate("/business/createTable1");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box justifyContent={"center"} alignItems={"center"} display={"flex"}>
      <Box ml={'-20px'}>
        <Text fontSize={"16px"} fontWeight={"600"} ml={"32px"}>
          Table type
        </Text>
        <Input
          htmlSize={4}
          backgroundColor={"#5F0DBB66"}
          borderStyle={"none"}
          ml={"27px"}
          mt={"5px"}
          width="307px"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Text fontSize={"16px"} fontWeight={"600"} ml={"32px"} mt={"17px"}>
          Capacity
        </Text>
        <Input
          htmlSize={4}
          backgroundColor={"#5F0DBB66"}
          borderStyle={"none"}
          ml={"27px"}
          mt={"5px"}
          width="307px"
          onChange={(e) => {
            setCapacity(e.target.value);
          }}
        />
        <Text fontSize={"16px"} fontWeight={"600"} ml={"32px"} mt={"17px"}>
          Upload image
        </Text>
        <br></br>
        <Box
        ml={'27px'}>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileChange}
        />
        </Box>
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
          mt={"60px"}
          onClick={handleCreate}
        >
          Create
        </Button>
        </Box>
      </Box>
    </Box>
  );
};
// function dataURItoBlob(image_url: string) {
//   throw new Error("Function not implemented.");
// }

