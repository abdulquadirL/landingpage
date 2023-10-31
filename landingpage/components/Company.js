import React from 'react'
import { Box, Text, Image } from '@chakra-ui/react'

const Company = () => {
  return (
    
    <Box id='company' p="4rem" bg="teal">
        <Text fontSize='2rem' fontFamily="roboto">Empowering Developers from leading companies</Text>
        <Box >
            <Box><Image src='https://amplication.com/_next/static/media/logo-2.a9ec4556.svg' alt='inl'/></Box>
            <Box><Image src='https://amplication.com/_next/static/media/logo-1.4ab30fc7.svg' alt='Yahoo'/></Box>
            <Box><Image src='https://amplication.com/_next/static/media/logo-3.5437261c.svg' alt='Huawei'/></Box>
            <Box><Image src='https://amplication.com/_next/static/media/logo-4.52ae660a.svg' alt='Barclays'/></Box>
            <Box><Image src='https://amplication.com/_next/static/media/logo-5.aeb7e633.svg' alt='Nike'/></Box>
            <Box><Image src="https://amplication.com/_next/static/media/logo-6.bd5a0967.svg" alt=''/></Box>
        </Box>
    </Box>
    
    
  )
}

export default Company