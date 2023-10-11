import { Box , Card , Image , Stack , CardBody , Heading , Text , CardFooter , Button} from "@chakra-ui/react"

export const ReservationCards = () => {
    return (
        <Card
      width="320px"  // Set the width to 320px
      height="129px" // Set the height to 129px
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      background={"none"}
    >
  <Image
        objectFit='cover'
        width="100px" // Set the width to 100px
        height="100px" // Set the height to 100px
        borderRadius="10px"
        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
        alt='Caffe Latte'
      />


</Card>
    )
}