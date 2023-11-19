import { Box , Card , Image , Stack , CardBody , Heading , Text , CardFooter , Button} from "@chakra-ui/react"
import { TextStyle } from "../../../theme/TextStyle"

export const TableCard = () => {
    return (
        <Card
      width="320px"  // Set the width to 320px
      height="130px" // Set the height to 129px
      flexDirection={"row"}
      overflow='hidden'
      variant='outline'
      background={"none"}
      alignContent={"center"}
    >
        <Image
        objectFit='cover'
        width="100px" // Set the width to 100px
        height="100px" // Set the height to 100px
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
        <Heading style={TextStyle.h1} color={"white"}>
            Table 1
        </Heading>
        <Box className="seat"
        display={"flex"}
        flexDirection={"row"}
        marginTop={"12px"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
        <path d="M15 6C16.66 6 17.99 4.66 17.99 3C17.99 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 4.66 13.34 6 15 6ZM7 6C8.66 6 9.99 4.66 9.99 3C9.99 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3C4 4.66 5.34 6 7 6ZM7 8C4.67 8 0 9.17 0 11.5V14H14V11.5C14 9.17 9.33 8 7 8ZM15 8C14.71 8 14.38 8.02 14.03 8.05C15.19 8.89 16 10.02 16 11.5V14H22V11.5C22 9.17 17.33 8 15 8Z" fill="#DEBEF6"/>
        </svg>
        <Text color={"white"} marginLeft={"8px"}>
            2 seats
        </Text>
        </Box>
        <Box className="size"
        display={"flex"}
        flexDirection={"row"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
    <path d="M19 5V3C19 1.35 17.65 0 16 0H6C4.35 0 3 1.35 3 3V5C1.35 5 0 6.35 0 8V13C0 14.65 1.35 16 3 16V17C3 17.55 3.45 18 4 18C4.55 18 5 17.55 5 17V16H17V17C17 17.55 17.45 18 18 18C18.55 18 19 17.55 19 17V16C20.65 16 22 14.65 22 13V8C22 6.35 20.65 5 19 5ZM5 3C5 2.45 5.45 2 6 2H16C16.55 2 17 2.45 17 3V5.78C16.39 6.33 16 7.12 16 8V10H6V8C6 7.12 5.61 6.33 5 5.78V3ZM20 13C20 13.55 19.55 14 19 14H3C2.45 14 2 13.55 2 13V8C2 7.45 2.45 7 3 7C3.55 7 4 7.45 4 8V12H18V8C18 7.45 18.45 7 19 7C19.55 7 20 7.45 20 8V13Z" fill="#DEBEF6"/>
    </svg>
        <Text color={"white"} marginLeft={"8px"}>
            medium
        </Text>
        </Box>
        </Box>
        <Box className="NextIcon" 
        display={"flex"}
        flexDirection={"column"}
        alignContent={"center"}
        justifyContent={"center"}
        marginLeft={"42px"}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z" fill="#F6F6F6"/>
            </svg>
        </Box>
</Card>
    )
}