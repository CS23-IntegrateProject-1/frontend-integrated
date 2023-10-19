import React from "react";
import { FaFacebookSquare, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Grid, Icon } from "@chakra-ui/react";

function Footer() {
  return (
    <Box as="footer" bg="#7E38B7" textAlign="center" justifyContent="center" color="white" p="1rem">
      <Flex direction="column" alignItems="center">
        <Text fontWeight="bold" fontSize="4xl">KitsuNe</Text>
        <Grid templateColumns="repeat(2, 1fr)" gap="2rem" mt="2rem">
          <Link to="/" className="hover:text-orange-400 text-2xl">Home</Link>
          <Link to="/ProjectPage" className="hover:text-orange-400 text-2xl">Project</Link>
        </Grid>
        <Grid templateColumns="repeat(4, 1fr)" gap="2rem" mt="2rem">
          <a href="https://www.facebook.com/xXNekoLordXx/" target="_blank" className="text-4xl hover:text-orange-400">
            <Icon as={FaFacebookSquare} />
          </a>
          <a href="https://www.instagram.com/kitsune_ne_cs/" target="_blank" className="text-4xl hover:text-orange-400">
            <Icon as={FaInstagram} />
          </a>
          <a href="https://github.com/xXNeonKitsuneXx" target="_blank" className="text-4xl hover:text-orange-400">
            <Icon as={FaGithub} />
          </a>
          <a href="https://www.linkedin.com/in/nithit-lertcharoensombat-722855264/" target="_blank" className="text-4xl hover:text-orange-400">
            <Icon as={FaLinkedin} />
          </a>
        </Grid>
        <Text mt="2rem">© Copyright all rights reserved - KitsuNe.com</Text>
      </Flex>
    </Box>
  );
}

export default Footer;
