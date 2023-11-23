import {
  Box,
  Button,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Text,
  Stack,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import { AdvertisementCard } from "../../components/adminAdvertisementCom/AdvertisementCard";
import { Search2Icon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetInProgressBusinessAds } from "../../../../api/Advertisement/GetInProgressBusinessAds";
import { MdSort } from "react-icons/md";

export const AdvertisementListPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  //เอาไว้เปลี่ยน sort
  const [sort, setSort] = useState("");
  const [datas, setDatas] = useState([]);

  const handleChangeSort = (sort: string) => {
    console.log(sort);
    setSort(sort);
  };

  const fetchBusinessAds = async () => {
    const res = await GetInProgressBusinessAds();
    setDatas(res);
  };

  useEffect(() => {
    fetchBusinessAds();
  }, []);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
    >
      {/* Search */}
      <Box
        width="90%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
        paddingBottom={5}
      >
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.600" />}
            bgColor={"white"}
            borderRadius={10}
          />
          <Input
            type="text"
            placeholder="Search..."
            border="1px solid white"
            bgColor={"white"}
            color={"black"}
            borderRadius={10}
          />
          {/* <InputRightElement p={0} borderRadius={10}></InputRightElement> */}

          {/* Sort */}
              <Button variant={"unstyled"} onClick={onOpen} display="flex" alignItems="center" ml={"10px"}>
                <Icon as={MdSort}  />
                <Text ml={"3px"}>Sort</Text>
              </Button>
        </InputGroup>
      </Box>

      {/* Sort */}
      <Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            bgColor={"#FFFFFF"}
            color={"#200944"}
            height={"250px"}
            width={"30%"}
            minWidth={"300px"}
            borderRadius={20}
          >
            <ModalHeader
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              Sort By
            </ModalHeader>
            <ModalCloseButton />
            <Divider />

            {/* Sort-checkbox */}
            <Box
              width="100%"
              minWidth="250px"
              maxWidth="400px"
              display="flex"
              flexDirection={"column"}
              paddingLeft={5}
              paddingTop={5}
              paddingBottom={2}
            >
              <Button
                fontWeight="bold"
                color="black"
                paddingBottom={2}
                variant={"unstyled"}
                // _selected={{ color: "#5F0DBB" }}
                onClick={() => handleChangeSort("AtoZ")}
                textAlign={"start"}
                w={"100%"}
              >
                A to Z
              </Button>
              <Button
                fontWeight="bold"
                color="black"
                paddingBottom={2}
                variant={"unstyled"}
                onClick={() => handleChangeSort("ZtoA")}
                textAlign={"start"}
                w={"100%"}
              >
                Z to A
              </Button>
            </Box>

            {/* Sort-Button */}
            <ModalFooter
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Button
                border="1px solid "
                borderColor={"Red"}
                bgColor={"#FFFFFF"}
                color={"red"}
                width="100px"
                _hover={{
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }} // Add shadow on hover
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.3)" // Add initial shadow
                onClick={() => {
                  setSort("");
                }}
              >
                Reset
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>

      {datas?.map((data: any) => (
        <AdvertisementCard
          key={data?.advertisementId}
          name={data?.name}
          description={data?.description}
        />
      ))}
    </Box>
  );
};
