
import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react'

const How = () => {
  return (
    <Box >
        <Text size="md">How Amplication backend development platform works?</Text>
        <SimpleGrid  spacing="10px" templateColumns='repeat(auto-fill, minmax(200px, 2fr))'>
            <Box >
                <Image src='' alt=''/>
                <Text></Text>
            </Box>
            <Box >
                <Image src='https://amplication.com/_next/static/media/feature3.411e37f0.svg' alt=''/>
                <Text >Simply configure your architecture, with APIs, data models, database, and more</Text>
            </Box>
            <Box >
                <Image src='https://amplication.com/_next/static/media/feature1.23243c65.svg' alt=''/>
                <Text>Automatically generate all boilerplate and infrastructure code</Text>
            </Box>
            <Box >
                <Image src='https://amplication.com/_next/static/media/feature2.851c50c1.svg' alt=''/>
                <Text>Continually get Pull Requests with generated code to your Git repositries</Text>
            </Box>
            <Box >
                <Image src='https://amplication.com/_next/static/media/feature4.98e66faf.svg' alt=''/>
                <Text>Freely customize and extend the generated code</Text>
            </Box>
            
        </SimpleGrid>
    </Box>
  )
}

export default How