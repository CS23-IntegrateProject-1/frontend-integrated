import { Box , Card , Image , Stack , CardBody , Heading , Text , CardFooter , Button} from "@chakra-ui/react"
import { TextStyle } from "../../../theme/TextStyle"

export const ReservationCard = () => {
    return (
      
        <Card
      width="320px"
      height="130px" 
      flexDirection={"row"}
      overflow='hidden'
      variant='outline'
      background={"none"}
      alignContent={"center"}
      style={{ borderColor: "#DEBEF6"}}
    >
        <Image
        objectFit='cover'
        width="100px"
        height="100px"
        borderRadius="10px"
        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
        alt='Caffe Latte'
        margin={"15px"}
      />
        <Box className="info"
        display={"flex"}
        flexDirection={"column"}
        columnGap={"10px"}
        alignItems={"space-between"}
        justifyContent={"center"}
        marginLeft={"20px"}
        >
        <Heading style={TextStyle.h1} color={"white"} fontWeight={"700px"} marginLeft={"-15px"} >
            CS SIP
        </Heading>
        <Box className="star"
        display={"flex"}
        flexDirection={"row"}
        marginLeft={-15}
        marginTop={0}
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
<path d="M8.5 12.4479L12.517 15L11.451 10.19L15 6.95368L10.3265 6.53632L8.5 2L6.6735 6.53632L2 6.95368L5.549 10.19L4.483 15L8.5 12.4479Z" fill="#F6F6F6" stroke="#F6F6F6"/>
</svg>
        <Text color={"white"} marginTop={0.5} marginLeft={"10px"} fontWeight={700} fontSize={10} >
            4.7
        </Text>
        </Box>
        <Box className="info"
        display={"flex"}
        flexDirection={"row"}>
        
        <Text color={"white"} marginTop={1} marginLeft={"-15px"} fontWeight={400} fontSize={10} style={{width: "165px", height: "23px"}} flexShrink={0}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </Text>
        </Box>
        <Box className="size"
        display={"flex"}
        flexDirection={"row"}>
        
        <Text color={"white"} marginLeft={"-15px"} fontWeight={400} fontSize={10} marginTop={2}>
          Start : 300 baht
        </Text>
        </Box>
        </Box>
        <Box className="NextIcon" 
        display={"flex"}
        flexDirection={"column"}
        alignContent={"center"}
        justifyContent={"center"}
        marginLeft={"-12px"}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z" fill="#F6F6F6"/>
            </svg>
        </Box>
</Card>
    )
}