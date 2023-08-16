// NavbarComponent.js
import React from 'react';
import { Flex, Spacer, IconButton, useDisclosure, Box,Image } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import "./navbar.css";
const NavbarComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex bg="rgb(36,37,42)" p="4">
      <Box>
        <IconButton
          colorScheme="white"
          icon={<HamburgerIcon />}
          onClick={isOpen ? onClose : onOpen}
          display={{ base: 'block', md: 'none' }}
        />
      </Box>
      <Box><Image width={"50px"} height={"50px"} src={"https://clipart-library.com/img1/174492.jpg"}/></Box>
      <Spacer />
      <Box className='navlink-container' display={"flex"} justifyContent={"space-between"}width={"30%"}>
        <Box >Home</Box>
        <Box>Event Celendar</Box>
        <Box>About</Box>
        <Box>Blogs</Box> 
        </Box>
      <Box>
        {/* Navigation links */}
      </Box>
    </Flex>
  );
};

export default NavbarComponent;
