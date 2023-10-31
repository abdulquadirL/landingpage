
import { Box, Center, Image, SimpleGrid, Text } from '@chakra-ui/react'

const How = () => {
  return (
    <Box p="4rem" bg="aqua">
        <Text fontSize='2rem' fontFamily="roboto">How Amplication backend development platform works?</Text>
        
        <SimpleGrid spacing="2rem" templateColumns='repeat(auto-fill, minmax(300px, 2fr))'>
            <Box >
                <Image src='' alt=''/>
                <Text fontFamily="roboto">Readily available across all platforms at a very affordable fee</Text>
            </Box>
            <Box >
                <Image src='https://amplication.com/_next/static/media/feature3.411e37f0.svg' alt=''/>
                <Text fontSize='1rem' fontFamily="roboto">Simply configure your architecture, with APIs, data models, database, and more</Text>
            </Box>
            <Box >
                <Image src='https://amplication.com/_next/static/media/feature1.23243c65.svg' alt=''/>
                <Text fontSize='1rem' fontFamily="roboto">Automatically generate all boilerplate and infrastructure code</Text>
            </Box>
            <Box >
                <Image src='https://amplication.com/_next/static/media/feature2.851c50c1.svg' alt=''/>
                <Text fontSize='1rem' fontFamily="roboto">Continually get Pull Requests with generated code to your Git repositries</Text>
            </Box>
            <Box >
                <Image src='https://amplication.com/_next/static/media/feature4.98e66faf.svg' alt=''/>
                <Text fontSize='1rem' fontFamily="roboto">Freely customize and extend the generated code</Text>
            </Box>
            
        </SimpleGrid>
        
        
    </Box>
  )
}

export default How