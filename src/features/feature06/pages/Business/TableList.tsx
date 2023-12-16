import { Box, Button, Checkbox, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { TableCard } from "../../components/TableCard";
import { getAllTableByVenue } from "../../../../api/Reservation/getAllTableByVenueId";

interface IData {
  venueId?: number;
  information?: string;
  tableId?: number;
  tableTypeDetailId?: number;
  table_no?: number;
  branchId?: number;
  status?: string;
  table_type?: {
    capacity?: number;
    detail?: string;
    name?: string;
    tableTypeDetailId?: number;
    venueId?: number;
    image_url?: string;
  };
}

export const TableList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState<IData[]>([]);
  const [filterOptions, setFilterOptions] = useState({
    unavailable: true,
    available: true,
  });

  useEffect(() => {
    fetchData();
  }, [filterOptions]);

  const fetchData = async () => {
    const response = await getAllTableByVenue();
    setData(response);
  };

  const renderCards = () => {
    return data.map((table, index: number) => {
      const shouldRender =
        (filterOptions.unavailable && table.status === "Unavailable") ||
        (filterOptions.available && table.status === "Available");

      return shouldRender ? (
        <Box key={index} marginBottom={"20px"}>
          <Link to={`/business/viewtable/${table.tableId}`}>
            <TableCard
              image={table.table_type?.image_url}
              tableno={table.table_no}
              type={table.table_type?.name}
              status={table.status}
            />
          </Link>
        </Box>
      ) : null;
    });
  };
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Box
        display={"flex"}
        flexDirection={"row"}
        width={"319px"}
        justifyContent={"end"} // Aligns buttons at both ends
      >
        <Button
          background={"none"}
          color={"F6F6F6"}
          textDecoration={"underline"}
          fontWeight={"400"}
          _hover={{ background: "none" }}
          onClick={onOpen}
        >
          Filter
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="19"
            viewBox="0 0 22 19"
            fill="none"
          >
            <path
              d="M3.89714 4.35828C3.9888 4.45838 9.1588 10.0024 9.1588 10.0024V14.6301C9.1588 15.0536 9.5713 15.4001 10.0846 15.4001H11.9271C12.4313 15.4001 12.853 15.0536 12.853 14.6301V9.99468C12.853 9.99468 17.8855 4.58928 18.1238 4.34288C18.3621 4.09648 18.3346 3.85008 18.3346 3.85008C18.3346 3.42658 17.9221 3.08008 17.4088 3.08008H4.5938C4.03464 3.08008 3.66797 3.44968 3.66797 3.85008C3.66797 4.00408 3.72297 4.18888 3.89714 4.35828Z"
              fill="#F6F6F6"
            />
          </svg>
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent backgroundColor={"#D9D9D9"}>
            <ModalHeader
              color={"black"}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
            >
              Filter By
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody color={"black"}>
              <Checkbox
                defaultChecked={filterOptions.unavailable}
                onChange={() =>
                  setFilterOptions((prev) => ({
                    ...prev,
                    unavailable: !prev.unavailable,
                  }))
                }
              >
                Booked
              </Checkbox>
              <br />
              <Checkbox
                defaultChecked={filterOptions.available}
                onChange={() =>
                  setFilterOptions((prev) => ({
                    ...prev,
                    available: !prev.available,
                  }))
                }
              >
                Available
              </Checkbox>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Done
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
      <Link to={"/business/createtable1"}>
        <Button
          zIndex={1}
          position={"fixed"}
          width={"62px"}
          h={"62px"}
          borderRadius={"100px"}
          fontSize={"54px"}
          bottom={"36px"}
          right={"36px"}
        >
          +
        </Button>
      </Link>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        marginTop={"8px"}
      >
        {renderCards()}
      </Box>
    </Box>
  );
};
