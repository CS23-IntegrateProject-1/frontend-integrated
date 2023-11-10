import { Box, Divider, Flex, Grid, GridItem, Heading, Text, VStack, HStack, Container } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { ButtonComponent } from "../../../../components/buttons/ButtonComponent";
import harmoni_logo from "../../../../assets/logo/harmoni_logo.png";
import textStyles from "../../../../theme/foundations/textStyles";
import colors from "../../../../theme/foundations/colors";


export const About = () => {
  return (

    <Grid>
      <GridItem width={"25%"} margin={"auto"}>
           <img src = {harmoni_logo} alt = {"logo"}/>
      </GridItem>
      <GridItem style={{textAlign: "center"}}>
      <Text
      fontSize={[textStyles.h2.fontSize]}
      fontWeight={[textStyles.h2.fontWeight]}
      color={"brand.100"}>
        {" "}
        V1.0.0.0
      </Text>
      </GridItem>
      <GridItem>     
      <HStack>
        <Heading 
        fontSize={[textStyles.h1.fontSize]}
        fontWeight={[textStyles.h1.fontWeight]}>
        Harmoni
      </Heading>
      <Divider border={"2px"} color={"brand.100"} />
      </HStack> 
      </GridItem>
      <GridItem 
      fontSize={[textStyles.body1.fontSize]}
      fontWeight={[textStyles.body1.fontWeight]}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio repudiandae ipsa molestiae neque iure eius ratione illum reprehenderit autem eaque. Atque exercitationem officia, sapiente numquam error libero corrupti aspernatur dolore eligendi maiores maxime necessitatibus laborum nostrum laboriosam consectetur at facere sit unde ullam nemo incidunt veniam temporibus. Deserunt, soluta doloribus.
      </GridItem>
    </Grid>

  )
}