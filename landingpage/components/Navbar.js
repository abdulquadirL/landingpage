// import React from 'react'
// //import { useState } from "react";
// import Box from '@chakra-ui/next-js'
// import { Button, Link } from '@chakra-ui/react'
// //import Link from 'next/link';

// const Navbar = () => {
 
//   return (
//     <Box  as="nav">
//       <ul>
//       <li >
//           <Link href='/'>Home</Link>
//       </li>
//       <li>
//         <Link href='/docs'>DOCS</Link>
//       </li>
//       <li>
//         <Link href='#enterprise'>Enterprise</Link>
//       </li>
//       <li>
//         <Link href='#developers'>Developers</Link>
//       </li>
//       <li>
//         <Link href='#roadmap'>Roadmap</Link>
//       </li>
//       <li>
//         <Link href='#pricing'>Pricing</Link>
//       </li>
//       <li>
//         <Link href='#company'>Company</Link>
//       </li>
//       <li>
//         <Link href='/login'>Login</Link>
//       </li>
//       <Button/>
//       </ul>
      
     
//     </Box>
//       )
// }

// export default Navbar

//const later = {show ? <favicon />  : <HamburgerIcon />}
  
import { Box, Flex, Spacer, Heading, Image, useColorMode, Link, Button, Center } from "@chakra-ui/react";
//import { HamburgerIcon, CloseIcon } from "@chakra-ui/react"
import { useEffect, useState } from "react";


function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const [ show, setShow ] = useState(false)
  const handleToggle = () => {
    setShow(!show);
  }
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0)
       {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    
    <Flex
      as="nav"
      position={isScrolled ? "fixed" : "static"}
      top={0}
      left={0}
      right={0}
      alignItems="center"
      py={4}
      px={8}
      zIndex={10}
      wrap='wrap'
      padding='1rem'
      bg="black"
      onClick={toggleColorMode}
      color={colorMode === "light" ? "Dark" : "teal"}
      
    
    >
    <Flex align="center"
          mr={5}>
        {/* <Image  height={["10px", "30px", "30px"]}  objectFit='cover' src="./iconShago.png"
        /> */}
      <Heading as="h1" size="lg" fontFamily="inter" fontWeight="extrabold" letterSpacing={"-0.3px"} color="blue.300">
          Amplication
      </Heading>
    
    </Flex>
    <Spacer />
      {/* <Box  display={{ base: "block", md: "none" }} onClick={handleToggle}>
        {show ? <CloseIcon />  : <HamburgerIcon />}
      </Box> */}
      <Box 
       
        maxW="300px"
        pr={10}
        textAlign="right"
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        flexGrow={1} 
        fontFamily="inter"
        fontWeight="semibold"
        
      >
        <Link color="teal.100"   href="/">  Home </Link>
        <Link color="teal.100" href="#features" >Features</Link>
        <Link color="teal.100"   href='#pitch'>About</Link>
        <Link color="teal.100"  href='#company'>Company</Link> 
        <Link color="teal.100" target="_blank" href='https://satisfying-drifter-fa6.notion.site/Shago-User-s-guide-4442ba7c507c4b99a0fb44f224604a8e?pvs=4'>
          Learn
        </Link>
      </Box>
      
    </Flex>
    
  );
};

 export default Navbar