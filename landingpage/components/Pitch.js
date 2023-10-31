import React from 'react'
import { SimpleGrid, Card, CardHeader, CardBody, Box, Text } from '@chakra-ui/react'


const Pitch = () => {
  return (
    <Box p="4rem" id='pitch' bg="aquamarine">
    <SimpleGrid  spacing="10px" templateColumns='repeat(auto-fill, minmax(300px, 2fr))' >
        <Card>
            <CardHeader>
                <Text fontSize='1.5rem' fontFamily="roboto">20X Faster</Text>
            </CardHeader>
            <CardBody>
                <Text></Text>
            </CardBody>
            
        </Card>
        <Card>
            <CardHeader>
                <Text fontSize='1.5rem' fontFamily="roboto">2 Months</Text>
            </CardHeader>
            <CardBody>
                <Text></Text>
            </CardBody>

        </Card>
        <Card>
            <CardHeader>
                <Text fontSize='1.5rem' fontFamily="roboto">100+ hrs</Text>
            </CardHeader>
            <CardBody>
                <Text></Text>
            </CardBody>
            
        </Card>

        <Card>
            <CardHeader>
                <Text fontSize='1.5rem' fontFamily="roboto">30%</Text>
            </CardHeader>
            
            <CardBody>
                <Text></Text>
            </CardBody>
        </Card>
    
    <Card>
        <CardHeader>
            <Text fontSize='1.5rem' fontFamily="roboto">50+ hrs</Text>
        </CardHeader>
        <CardBody>
            <Text></Text>
        </CardBody>

    </Card>
    </SimpleGrid>
    </Box>
  )
}

export default Pitch