import { Divider, Grid, GridItem, Heading, Text, HStack} from "@chakra-ui/react";
import harmoni_logo from "../../../../assets/logo/harmoni_logo.png";
import textStyles from "../../../../theme/foundations/textStyles";
import { Axios } from "../../../../AxiosInstance";

export const About = () => {
  //integration edit
  //const url = '/feature1/about';
  //send a post request to create 
  // Axios.post(url, {
  //   //data to be sent
  // }, {withCredentials: true})
  // .then((response) => {
  //   //handle response
  //   if (response.status === 200) {
  //       console.log("Success");
  //   }
  // })  
  //get response to assign the value below design
  //const response = Axios.get(url, {withCredentials: true});

  return (

    <Grid>
      <GridItem width={"25%"} margin={"auto"}>
           <img src = {harmoni_logo} alt = {"logo"}/>
      </GridItem>
      <GridItem style={{textAlign: "center"}}>
      <Text py={4}
      fontSize={[textStyles.h2.fontSize]}
      fontWeight={[textStyles.h2.fontWeight]}
      color={"brand.100"}>
        {" "}
        V1.0.0.0
      </Text>
      </GridItem>
      <GridItem>     
      <HStack pb={4}>
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