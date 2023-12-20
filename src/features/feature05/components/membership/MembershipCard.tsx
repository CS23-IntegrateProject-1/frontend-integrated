import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Box,
} from "@chakra-ui/react";

import { Progress } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GetTierNameByTierId } from "../../../../api/Membership/GetTierNameByTierId";
import { GetPoint } from "../../../../api/Membership/GetPoint";
import { GetExpire } from "../../../../api/Membership/GetExpire";
import { formatDate1 } from "../../../../functions/formatDatetime";
import { InfoOutlineIcon } from "@chakra-ui/icons";

export const MemberShipCard = () => {
  const [data, setData] = useState<string>();
  const [points, setPoints] = useState<number>();
  const [expireDate, setExpireDate] = useState("");

  const fetchDatas = async () => {
    try {
      const result = await GetTierNameByTierId();
      const resultPoint = await GetPoint();
      const resultExpire = await GetExpire();
      
      setData(result?.data);
      setPoints(resultPoint?.data);
      setExpireDate(resultExpire?.data.currentDate);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDatas();
  }, []); 

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
            <Stack mt="9" spacing="3">
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
            </Stack>
          </CardBody>
        </Card>
      </Card>
    </>
  );
};
