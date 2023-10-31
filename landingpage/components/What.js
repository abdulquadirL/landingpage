import React from 'react'
import { Box, Card, CardBody, CardFooter, CardHeader, Image, SimpleGrid, Text } from '@chakra-ui/react'

export const What = () => {
  return (
    <Box id='features' bg="aqua" p="4rem">
        <Text>What do you get from Amplication ?</Text>
        <SimpleGrid spacing="15px" templateColumns='repeat(auto-fill, minmax(250px, 3fr))'>
            <Card >
                <CardHeader>
                    <Image src='https://amplication.com/_next/static/media/feature-icon-1.1e82ce1b.svg' alt=''/>
                    <Text>Production Ready APIs</Text>
                </CardHeader>
                <CardBody>
                    <Text>Full featured GraphQL and REST APIs</Text>
                </CardBody>
                <CardFooter></CardFooter>  
            </Card>

            <Card >
                <CardHeader>
                    <Image src='https://amplication.com/_next/static/media/feature-icon-2.b06adf33.svg' alt=''/>
                    <Text>Data Model</Text>
                </CardHeader>
                <CardBody>
                    <Text>Simple definition of entities & database schema</Text>
                </CardBody>
                <CardFooter></CardFooter>   
            </Card>
            <Card >
                <Image src='https://amplication.com/_next/static/media/feature-icon-3.299d8e9a.svg' alt=''/>
                <Text>Role-based Acces Control</Text>
                <Text>Automatically generated identity & permision models</Text>
            </Card>
            <Card >
                <CardHeader>
                <Image src='https://amplication.com/_next/static/media/feature-icon-4.6e77bda4.svg' alt=''/>
                <Text>Microservices Support</Text>
                </CardHeader>
                <CardBody>
                <Text>Any architecture, synchronous or asynchronous communication</Text>
                </CardBody>
                <CardFooter></CardFooter>
            </Card>
            <Card >
                <CardHeader>
                <Image src='https://amplication.com/_next/static/media/feature-icon-4.6e77bda4.svg' alt=''/>
                <Text>Continous Git Async</Text>
                </CardHeader>
               <CardBody>
               <Text>Automated sync with private or public GitHub repos</Text>
               </CardBody>
               <CardFooter></CardFooter>
            </Card>
            <Card >
                <CardHeader>
                <Image src='https://amplication.com/_next/static/media/feature-icon-1.1e82ce1b.svg' alt=''/>
                <Text>Typescript Node.js source code</Text>
                </CardHeader>
                <CardBody>
                <Text>Automatically generated human-readable and human-editable Node.js code</Text>
                </CardBody>
                <CardFooter></CardFooter>
            </Card>
            <Card >
                <CardHeader>
                <Image src='https://amplication.com/_next/static/media/feature-icon-2.b06adf33.svg' alt=''/>
                <Text>Plugin system</Text>
                </CardHeader>
                <CardBody>
                <Text>Use community-built plugins or create your own</Text>
                </CardBody>
                
            </Card>
            <Card >
                <Image src='https://amplication.com/_next/static/media/feature-icon-3.299d8e9a.svg' alt=''/>
                <Text>Monorepo or polyrepo</Text>
                <Text>use Amplication with a monorepo, polyrepo, or both</Text>   
            </Card>
            <Card >
                <Image src='https://amplication.com/_next/static/media/feature-icon-4.6e77bda4.svg' alt=''/>
                <Text >Custom code</Text>
                <Text>Easy customization & modification of generated code</Text>
            </Card>    
            <Card >
                <Image src='https://amplication.com/_next/static/media/feature-icon-4.6e77bda4.svg' alt=''/>
                <Text >Ready to deploy app</Text>
                <Text>Generate Docker container or use plugins to connect to CI/CD tools & cloud providers</Text>
            </Card>   
            <Card >
                <Image src='https://amplication.com/_next/static/media/feature-icon-4.6e77bda4.svg' alt=''/>
                <Text >Admin UI</Text>
                <Text>Automatically generated React Admin UI to create & edit your data models</Text>
            
            </Card>  
            <Card >
                <Image src='https://amplication.com/_next/static/media/feature-icon-4.6e77bda4.svg' alt=''/>
                <Text >Amplication console & CLI</Text>
                <Text>Fast apTextgeneration using Amplication console or Command Line Interface (CLI)</Text>
            </Card>   
           
        </SimpleGrid>
            
    </Box>
  )
}
