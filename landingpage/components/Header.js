
//import { ButtonHero } from './ButtonHero'
//import { Buttin } from './Buttin'

import {Box, Heading, Text } from '@chakra-ui/react'

const Header = () => {
  return (
   
    <Box p="4rem" bg="teal">
     
      <Box >
      <Heading fontSize="4rem" >Generate Production-Ready Backend Services.</Heading>
      <Text fontSize="2rem" color="white">Reliably . Securely . Consistently</Text>
      <Text fontFamily="baskerville" fontSize="1rem" color='wheat'> Automatically generate backend services with the highest standards, consistency and scalability. Accelerate your development 20X. Never waste time on boilerplate and repetitive coding again. </Text>
      </Box>
    </Box>
  )
}

export default Header