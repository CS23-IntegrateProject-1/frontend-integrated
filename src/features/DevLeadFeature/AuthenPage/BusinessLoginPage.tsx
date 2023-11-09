import { Box, Image, Button, Checkbox, Heading, Input, Text } from "@chakra-ui/react";
import { TextStyle } from "../../../theme/TextStyle";
import LogoLoginPage from "./img/LogoLoginPage.png"
import textStyles from "../../../theme/foundations/textStyles";
import google from "./img/google.png";


export const BusinessLoginPage = () => {
  return (
    <Box>
      <Image
        boxSize="150px"
        display="block"
        margin="auto"
        borderRadius="10px"
        src={LogoLoginPage}
        alt="Logo"
        marginBottom={"8vh"}
      />
      {/* Back ground shadow*/}
      <Box w="100%" height="100vh" borderRadius={"125px 0 0 0 "} position="absolute" left="-2px" boxShadow={"0px 0px 20px 10px rgba(95, 13, 187, 1) "}>
        <Box as="form" w="70%" m="auto" mt="7vh">
          {/* Headings for the form*/}
          <Heading
            style={TextStyle.h1}
            color={"white"}
            fontFamily={"Matiott Elegant"}
            textAlign={"center"}
            marginBottom={"5vh"}
          >
            LOGIN
          </Heading>

          <Box>
            {/* Username*/}
            <Input
              w="100%"
              borderRadius="7px"
              p="7px 15px"
              boxSizing="border-box"
              mb="5vh"
              bg="brand.100"
              type="text"
              placeholder="Username"
              _placeholder={{ color: 'white' }}
              style={textStyles.h4}
            />
            {/* Password*/}
            <Input
              w="100%"
              borderRadius="7px"
              p="7px 15px"
              boxSizing="border-box"
              mb="3vh"
              bg="brand.100"
              type="password"
              placeholder="Password"
              _placeholder={{ color: 'white' }}
              style={textStyles.h4}
            />

            <Box textStyle={"h4"}>
              <Checkbox>Remember me</Checkbox>
            </Box>
            {/* Button*/}
            <Button
              type="submit"
              bg="brand.200"
              color="white"
              width="30vw"
              display="block"
              margin="auto"
              marginTop="5vh"
              style={textStyles.h2}
            >
              Login
            </Button>
            <br />
            <Text textAlign="center" style={textStyles.h4} >Sign up with</Text>
            <Image src={google} alt="google" boxSize="24px" margin="auto" marginBottom="3vh" marginTop="3vh"/>
            <Text textAlign="center" style={textStyles.h4}>
              Don't have any account?{" "}
              <a href="#" style={{ textDecoration: "underline" }}>
                Sign up
              </a>
            </Text>
          </Box>
          
        </Box>
      </Box>
    </Box>
  );
};
