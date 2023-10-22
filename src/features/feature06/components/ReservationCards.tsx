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
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Barbieri_-_ViaSophia25668.jpg/1200px-Barbieri_-_ViaSophia25668.jpg'
        alt='Caffe Latte'
      />


</Card>
    )
}