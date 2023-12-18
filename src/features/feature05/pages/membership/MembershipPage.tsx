import { Box, Button, Stack } from "@chakra-ui/react";
import { MemberShipCard } from "../../components/membership/MembershipCard";
import Tags from "../../components/membership/Tags";
import { useNavigate } from "react-router-dom";
import MembershipRedeemList from "../../components/membership/MembershipRedeemList";
import MembershipMyprivilegeList from "../../components/membership/MembershipMyprivilegeList";

export const MemberShipPage = () => {
  const navigate = useNavigate();
  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box position="absolute" top="15vh">
          <MemberShipCard />
        </Box>

        <Box
          backgroundColor="#DEBEF6"
          w="100vw"
          h="auto"
          position="absolute"
          top="30vh"
        >
          <Stack direction={["column"]} spacing="0px">
            //Box one
            <Box className="BoxOne">
              <Box
                w="100vw"
                h="15vh"
                // backgroundColor="blue"
              ></Box>
              <Box
                w="100vw"
                h="fit-content"
                // backgroundColor="red"
                display="flex"
                flexDirection="row"
              >
                <Tags tag_text="Voucher" />
                <Box
                  display="flex"
                  flexDirection="row"
                  position="absolute"
                  right="0"
                  margin="5px"
                  marginRight="20px"
                  // backgroundColor="blue"
                  w="60px"
                  h="fit-content"
                  justifyContent="center"
                >
                  <Button
                    variant="link"
                    color="black"
                    textDecoration="underline"
                    fontWeight="regular"
                    onClick={() => handleClick("/redeem")}
                  >
                    See all
                  </Button>
                </Box>
              </Box>
              <Box
                overflowX="auto"
                maxH="250px"
                gap="20px"
                padding="15px"
                paddingTop="25px"
              >
                <MembershipRedeemList />
              </Box>
            </Box>
            {/* End of Recently */}
            {/* Today section */}
            <Box className="BoxTwo">
              <Box
                w="100vw"
                h="1vh"
                // backgroundColor="blue"
              ></Box>
              <Box
                w="100vw"
                h="fit-content"
                // backgroundColor="red"
                display="flex"
                flexDirection="row"
              >
                <Tags tag_text="My Privileges" />
                <Box
                  display="flex"
                  flexDirection="row"
                  position="absolute"
                  right="0"
                  // margin="5px"
                  marginRight="20px"
                  // backgroundColor="blue"
                  w="60px"
                  h="fit-content"
                  justifyContent="center"
                >
                  <Button
                    variant="link"
                    color="black"
                    textDecoration="underline"
                    fontWeight="regular"
                    onClick={() => handleClick("/my-privilege")}
                  >
                    See all
                  </Button>
                </Box>
              </Box>
              <Box
                overflowX="auto"
                maxH="250px"
                gap="20px"
                padding="15px"
                paddingTop="25px"
              >
                <MembershipMyprivilegeList />
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};
