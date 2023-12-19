import { Box, Button, Flex, Text } from "@chakra-ui/react";

export const QRScanner = () => {
    return (
        <Box>
            <Box>
                {/* camera */}
            </Box>
            <Box w={50} bg={'brand.300'}>
                <Box>
                    <Flex>
                        <Box>
                            {/* button */}
                            <Button>
                                <Box>

                                </Box>
                                <Box>
                                    <Text>My QR code</Text>
                                </Box>
                            </Button>
                        </Box>
                        <Box>
                            Scan QR Code To Add Friends
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
    };