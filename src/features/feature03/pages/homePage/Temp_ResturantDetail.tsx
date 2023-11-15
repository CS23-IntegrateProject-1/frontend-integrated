import { NavLink } from "react-router-dom";
import {
  Box,
  Text,
  Card,
  CardBody,
  Heading,
  Image,
  Button,
  Flex,
  Divider,
} from "@chakra-ui/react";
import { StarIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { FaMapMarkerAlt } from "react-icons/fa";

export const Temp_ResturantDetail = () => {
  return (
    <Box width={"100%"}>
      <Image
        src="https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg"
        alt="Pic not load"
        borderRadius="2xl"
        w="100%"
        h="300px"
        maxH="300px"
        minH="300px"
        objectFit={"cover"}
        mb="5"
      />
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Box display={"flex"} alignItems={"center"}>
        <Text fontSize={"3xl"} fontWeight={"bold"}>
          Restuant Lorem by by NENE
        </Text>
        {/* ******************* If have time ************************ */}
        <Box ml="auto">
          <Flex
            direction="column"
            alignItems="center"
            _hover={{ color: "brand.100" }}
          >
            <FaMapMarkerAlt fontSize="25px" />
            <Text fontSize="15px">Location</Text>
          </Flex>
        </Box>
        {/* ******************************************************** */}
      </Box>
      <Box display={"flex"} pb={5}>
        <StarIcon color={"brand.100"} fontSize="20px" mr="2" />
        <Text color={"brand.100"} fontSize="15px">
          4.7 (2934 ratings)
        </Text>

        <Text
          textDecoration={"underline"}
          fontSize="12.5px"
          ml={"auto"}
          mt={"3px"}
          color={"grey.200"}
          _hover={{ color: "white" }}
        >
          View all ratings & reviews
        </Text>
      </Box>

      <Box bgColor={"brand.200"} borderRadius="xl">
        <Text p={3}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </Box>

      <Divider
        py={4}
        borderBottomWidth="5px"
        borderColor={"brand.100"}
        opacity={"100%"}
      />

      <Box display={"flex"} pt={4}>
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Avaliable Vouchers
        </Text>
        <ChevronRightIcon fontSize="4xl" ml={"auto"} />
      </Box>

      <Flex>
        <Box
          border="2px solid white"
          borderRadius="xl"
          mt={2}
          p={3}
          alignItems={"center"}
          display={"flex"}
        >
          <Image
            src="https://pione.co.th/wp-content/uploads/2017/07/slider-bg-black.jpg"
            alt="Pic not load"
            borderRadius="full"
            w="40px"
            h="40px"
            maxH="40px"
            minH="40px"
            objectFit={"cover"}
            ml={1}
          />
          <Box pl={4} justifyItems={"center"} alignItems={"center"}>
            <Text fontWeight={"semibold"} fontSize={"sm"} textColor={"white"}>
              VoucherNameLorem
            </Text>
            <Text fontWeight={"normal"} fontSize={"xs"} textColor={"grey.200"}>
              Discound 50%
            </Text>
          </Box>
          <Divider
            py={3}
            borderColor={"white"}
            opacity={"100%"}
            orientation="vertical"
            mx={3}
            border="1px solid white"
          />
          <Button
            variant="solid"
            textColor="white"
            bgColor="brand.300"
            _hover={{ bgColor: "brand.100", textColor: "black" }}
            minW="60px"
            minH="30px"
            w="60px"
            h="30px"
            fontSize={"xs"}
            p={1}
          >
            Unapply
          </Button>
        </Box>
      </Flex>

      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Text fontSize={"2xl"} fontWeight={"bold"} pt={4}>
        Menu list
      </Text>

      <Flex
        display="grid"
        gridTemplateColumns={{ lg: "repeat(3, 1fr)", base: "repeat(1, 1fr)" }}
      >
        <Box
          bgColor={"brand.200"}
          borderRadius="xl"
          mt={2}
          p={4}
          display={"flex"}
          alignItems={"center"}
          maxW={"450px"}
        >
          <Image
            src="https://natashaskitchen.com/wp-content/uploads/2020/03/Pan-Seared-Steak-4.jpg"
            alt="Pic not load"
            borderRadius="lg"
            w="100px"
            h="100px"
            minW="100px"
            minH="100px"
            objectFit={"cover"}
            ml={1}
          />
          <Box
            pl={4}
            justifyItems={"center"}
            alignItems={"center"}
            maxW={"350px"}
          >
            <Text fontWeight={"bold"} fontSize={"xl"} textColor={"white"}>
              Steak
            </Text>
            <Text fontWeight={"semibold"} fontSize={"md"} textColor={"white"}>
              Price: 1200 THB
            </Text>
            <Text
              fontWeight={"semibold"}
              fontSize={"xs"}
              textColor={"grey.200"}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has
            </Text>
          </Box>
        </Box>

        <Box
          bgColor={"brand.200"}
          borderRadius="xl"
          mt={2}
          p={4}
          display={"flex"}
          alignItems={"center"}
          maxW={"450px"}
        >
          <Image
            src="https://natashaskitchen.com/wp-content/uploads/2020/03/Pan-Seared-Steak-4.jpg"
            alt="Pic not load"
            borderRadius="lg"
            w="100px"
            h="100px"
            minW="100px"
            minH="100px"
            objectFit={"cover"}
            ml={1}
          />
          <Box
            pl={4}
            justifyItems={"center"}
            alignItems={"center"}
            maxW={"350px"}
          >
            <Text fontWeight={"bold"} fontSize={"xl"} textColor={"white"}>
              Steak
            </Text>
            <Text fontWeight={"semibold"} fontSize={"md"} textColor={"white"}>
              Price: 1200 THB
            </Text>
            <Text
              fontWeight={"semibold"}
              fontSize={"xs"}
              textColor={"grey.200"}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has
            </Text>
          </Box>
        </Box>

        <Box
          bgColor={"brand.200"}
          borderRadius="xl"
          mt={2}
          p={4}
          display={"flex"}
          alignItems={"center"}
          maxW={"450px"}
        >
          <Image
            src="https://natashaskitchen.com/wp-content/uploads/2020/03/Pan-Seared-Steak-4.jpg"
            alt="Pic not load"
            borderRadius="lg"
            w="100px"
            h="100px"
            minW="100px"
            minH="100px"
            objectFit={"cover"}
            ml={1}
          />
          <Box
            pl={4}
            justifyItems={"center"}
            alignItems={"center"}
            maxW={"350px"}
          >
            <Text fontWeight={"bold"} fontSize={"xl"} textColor={"white"}>
              Steak
            </Text>
            <Text fontWeight={"semibold"} fontSize={"md"} textColor={"white"}>
              Price: 1200 THB
            </Text>
            <Text
              fontWeight={"semibold"}
              fontSize={"xs"}
              textColor={"grey.200"}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has
            </Text>
          </Box>
        </Box>

        <Box
          bgColor={"brand.200"}
          borderRadius="xl"
          mt={2}
          p={4}
          display={"flex"}
          alignItems={"center"}
          maxW={"450px"}
        >
          <Image
            src="https://natashaskitchen.com/wp-content/uploads/2020/03/Pan-Seared-Steak-4.jpg"
            alt="Pic not load"
            borderRadius="lg"
            w="100px"
            h="100px"
            minW="100px"
            minH="100px"
            objectFit={"cover"}
            ml={1}
          />
          <Box
            pl={4}
            justifyItems={"center"}
            alignItems={"center"}
            maxW={"350px"}
          >
            <Text fontWeight={"bold"} fontSize={"xl"} textColor={"white"}>
              Steak
            </Text>
            <Text fontWeight={"semibold"} fontSize={"md"} textColor={"white"}>
              Price: 1200 THB
            </Text>
            <Text
              fontWeight={"semibold"}
              fontSize={"xs"}
              textColor={"grey.200"}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
