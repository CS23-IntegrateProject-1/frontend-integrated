import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Box,
} from "@chakra-ui/react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";

import { Progress } from "@chakra-ui/react";
import { RepeatClockIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import theme from "../../../../theme/theme";
function MemberShipCard() {
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
                <button>
                  <RepeatClockIcon />
                </button>
              </Box>
              <Box display="flex" flexDirection="row" columnGap="5px">
                <Heading size="md" fontFamily="heading">
                  REGULAR
                </Heading>
                <button>
                  <InfoOutlineIcon w="9px" h="9px" />
                </button>
              </Box>
              {/* Progress bar can't change color */}
              <Progress
                value={30}
                size="md"
                borderRadius="20px"
                colorScheme="purple"
              />
              <Box display="flex" flexDirection="column" rowGap="1px">
                <Text fontSize="12px" marginLeft="15px">
                  500/1000 points
                </Text>
                <Text fontSize="12px">Points will expire on 31 Oct 2023</Text>
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

export default MemberShipCard;
