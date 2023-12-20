import {
	Card,
	CardBody,
	Stack,
	Heading,
	Text,
	ButtonGroup,
	Button,
	Box,
} from "@chakra-ui/react";

import { Progress } from "@chakra-ui/react";
import { RepeatClockIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import IMember_tier from "../../../../interfaces/Redeem/IMember_tier";
import { GetTierNameByTierId } from "../../../../api/Membership/GetTierNameByTierId";
import { GetPoint } from "../../../../api/Membership/GetPoint";
import { GetExpire } from "../../../../api/Membership/GetExpire";
import { formatDate1 } from "../../../../functions/formatDatetime";

export const MemberShipCard =() =>{
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  const [data, setData] = useState<IMember_tier>();
  const [points, setPoints] = useState<number>();
  // const [expireDate, setExpireDate] = useState<Date>();
  const [expireDate, setExpireDate] = useState("");

  const fetchDatas = async () => {
    try {
      // Call the function to get the data
      const result = await GetTierNameByTierId();
       const resultPoint = await GetPoint();
       const resultExpire = await GetExpire();

      // Access the data property from the AxiosResponse
      setData(result?.data);
      setPoints(resultPoint?.data);
      setExpireDate(resultExpire?.data.currentDate);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  useEffect(() => {
    fetchDatas();
  }, []); // Add an empty dependency array to run the effect only once

  return (
    <>
      <Card
        w="329px"
        h="205px"
        maxW="sm"
        display="flex"
        padding="13px"
        flexDirection="column"
        backgroundColor="#BD8FF3"
        borderRadius="20px"
        zIndex="2"
      >
        <Card
          maxW="sm"
          w="301px"
          h="177px"
          backgroundColor="#BD8FF3"
          boxShadow="inset 0em 0em 0.5em rgba(0, 0, 0, 0.5)"
          borderRadius="15px"
        >
          <CardBody padding="0px 30px" h="10px">
            <Stack mt="6" spacing="3">
              <Box
                padding="10px"
                position="absolute"
                right="0"
                top="0 "
                color="white"
              >
                <button onClick={() => handleClick("/my-privilege")}>
                  <RepeatClockIcon />
                </button>
              </Box>
              <Box display="flex" flexDirection="row" columnGap="5px">
                <Heading size="md" fontFamily="heading">
                  {data || ""}
                </Heading>
                <button>
                  <InfoOutlineIcon w="9px" h="9px" />
                </button>
              </Box>
              {/* Progress bar can't change color */}
              <Progress
                value={50}
                size="md"
                borderRadius="20px"
                colorScheme="purple"
              />
              <Box display="flex" flexDirection="column" rowGap="1px">
                <Text fontSize="12px">Remaining "{points}" points</Text>
                {/* <Text fontSize="12px">
                  Points will expire on {expireDate?.toDateString()}
                </Text> */}
                {expireDate ? (
                  <Text fontSize="12px">
                    {/* Points will expire on {new Date(expireDate).toDateString()} */}
                    Points will expire on {formatDate1(expireDate)}
                  </Text>
                ) : (
                  <Text fontSize="12px">Expiration date not available</Text>
                )}
              </Box>
              <ButtonGroup
                spacing="2"
                display="flex"
                flexDirection="row"
                justifyContent="end"
              >
                <Button
                  variant="solid"
                  backgroundColor="#5F0DBB"
                  colorScheme="red"
                  boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
                  w="92px"
                  h="30px"
                  fontSize="12px"
                  fontWeight="regular"
                  onClick={() => handleClick("/redeem")}
                >
                  Redeem
                </Button>
              </ButtonGroup>
            </Stack>
          </CardBody>
        </Card>
      </Card>
    </>
  );
}


