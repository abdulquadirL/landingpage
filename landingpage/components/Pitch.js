import React from 'react'
import { SimpleGrid, Box, Text } from '@chakra-ui/react'

const Pitch = () => {
  return (
    <Box >
    <SimpleGrid  spacing="10px" templateColumns='repeat(auto-fill, minmax(300px, 2fr))' >
        <Box>
            <Text>20X Faster</Text>
            <p></p>
        </Box>
        <Box>
            <Text>2 Months</Text>
            <p></p>
        </Box>
        <Box>
            <Text>100+ hrs</Text>
            <p></p>
        </Box>
        <Box>
            <Text>30%</Text>
        </Box>
    </SimpleGrid>
    <Box>
        <Text>50+ hrs</Text>
        <p></p>
    </Box>
    </Box>
  )
}

export default Pitch