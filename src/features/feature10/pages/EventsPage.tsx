import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Stack,
    Heading,
    Text,
    Divider,
    ButtonGroup,
    Button,
    Flex
} from "@chakra-ui/react";

export const EventsPage = () => {
    return (
        <Card maxW='sm' backgroundColor="#A533C8" borderRadius={"6px"} width={"348px"} height={"222px"}>
            <CardBody>
                <Image
                    bgColor={'white'}
                    borderRadius='lg'
                    width={"319.14px"}
                    height={"118.62px"}
                    src=""
                />
                <Stack spacing={'0px'} marginTop={'2px'}>
                    <Heading style={{ fontSize: '10px', fontWeight: 'normal', color: '#C5C4C7'}}>
                        29th November, 2023
                    </Heading>
                    <Text style={{ fontSize: '14px', fontWeight: 'bold', color: 'white'}}>
                        Event Name
                    </Text>
                    <Text style={{ color: '#C5C4C7', fontSize: '10px', fontWeight: 'normal', marginBottom:'2px', marginTop:'-3px'}}>
                        Smth Smth Place
                    </Text>
                </Stack>
            </CardBody>
            <CardFooter>
                <ButtonGroup spacing='6' marginTop={'-10'}>
                    <Button
                        variant='outline'
                        width='131.46px'
                        height='27.5px'
                        color='#DEBEF6'
                        borderRadius='3px'
                        style={{ fontSize: '10px' }}
                    >
                        More Info
                    </Button>

                    <Button
                        variant='ghost' bgColor={'#DEBEF6'} width={'131.46px'} height={'27.5px'} color='#F6F6F6' borderRadius={'3px'} style={{ fontSize: '10px' }}>
                        Reserve For
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
};