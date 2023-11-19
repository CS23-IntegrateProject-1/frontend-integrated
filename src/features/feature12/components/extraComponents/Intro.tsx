import {
    Card,
    CardBody,
    Text,
    Image,
  } from "@chakra-ui/react";
  import { TextStyle } from "../../../../theme/TextStyle";
  
  export const Intro = () => {
    return (
    <Card
        direction={"row"}
        // maxW="sm"
        variant="outline"
        alignItems={"center"}
        borderRadius="15px"
    >
        <CardBody>
            <Text style={TextStyle.h1} color="brand.300" textAlign={"center"}>
            Hi! You can ask me anything
            </Text>
        </CardBody>

        <Image
        objectFit="cover"
        width="30%"
        margin="15px"
        borderRadius="15px"
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
        />
    </Card>
    );
  };