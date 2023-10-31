import React from 'react'

import { Text, Box, Image } from '@chakra-ui/react'

export const Security = () => {
  return (
    <Box bg="teal"p="4rem" >
        <Box>
            <Text size="18px">Secured and compliant, because your data matters</Text>
            <Text>Amplication is SOC-2 certified. We meet highest standard for data security, accesibility, processing, integrity and privacy.</Text>
        </Box >
        <Box>
            <Image src='https://amplication.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsoc2.c5c53dd0.png&w=256&q=75'/>
            <Box margin-left="10px" padding>
            <Text>SOC 2 Type II </Text> 
            <Text size="24px">CERTIFIED</Text> 
            </Box>
             
        </Box>
    </Box>
  )
}
