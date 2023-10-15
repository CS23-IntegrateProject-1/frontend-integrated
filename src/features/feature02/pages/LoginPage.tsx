import { Box } from "@chakra-ui/react";
import { Image, Button, Checkbox, Heading, Input } from "@chakra-ui/react";
import { TextStyle } from "../../../theme/TextStyle";

export const LoginPage = () => {
  return (
    <>
      <Image
        boxSize="150px"
        display="block"
        margin="auto"
        borderRadius="10px"
        src="https://bit.ly/dan-abramov"
        alt="Image"
        marginBottom={"9vh"}
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
              bg="#BD8FF3"
              type="text"
              placeholder="Username"
              _placeholder={{ color: 'white' }}
            />
            {/* Password*/}
            <Input
              w="100%"
              borderRadius="7px"
              p="7px 15px"
              boxSizing="border-box"
              mb="3vh"
              bg="#BD8FF3"
              type="password"
              placeholder="Password"
              _placeholder={{ color: 'white' }}
            />

            <Box>
              <Checkbox>Remember me</Checkbox>
            </Box>
            {/* Button*/}
            <Button
              type="submit"
              bg="#763FAF"
              color="white"
              width="30vw"
              display="block"
              margin="auto"
              marginTop="5vh"
            >
              Login
            </Button>
            <br />
            <p style={{ textAlign: "center" }}>Sign up with</p>
            <p style={{ textAlign: "center" }}>
              Don't have any account?{" "}
              <a href="#" style={{ textDecoration: "underline" }}>
                Sign up
              </a>
            </p>
          </Box>
          
        </Box>
      </Box>
    </>
  );
};
