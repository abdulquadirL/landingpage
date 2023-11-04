import React from 'react'
import { Box, Card, CardBody, CardFooter, CardHeader, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'

export const What = () => {
  return (
    <Box id='features' bg="teal" p="4rem">
        <Heading size="lg">What do you get from Amplication ?</Heading>
        <SimpleGrid spacing="15px" templateColumns='repeat(auto-fill, minmax(250px, 3fr))'>
            <Card >
                <CardHeader>
                    <Image src='https://amplication.com/_next/static/media/feature-icon-1.1e82ce1b.svg' alt=''/>
                    <Heading color="white" fontSize="1.2rem">Production Ready APIs</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Full featured GraphQL and REST APIs</Text>
                </CardBody>
                <CardFooter></CardFooter>  
            </Card>

            <Card >
                <CardHeader>
                    <Image src='https://amplication.com/_next/static/media/feature-icon-2.b06adf33.svg' alt=''/>
                    <Heading color="white" fontSize="1.2rem">Data Model</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Simple definition of entities & database schema</Text>
                </CardBody>
                <CardFooter></CardFooter>   
            </Card>
            <Card >
                <CardHeader>
                <Image src='https://amplication.com/_next/static/media/feature-icon-3.299d8e9a.svg' alt=''/>
                <Heading color="white" fontSize="1.2rem">Role-based Acces Control</Heading>
                </CardHeader>
               
                <Text>Automatically generated identity & permision models</Text>
            </Card>
            <Card >
                <CardHeader>
                <Image src='https://amplication.com/_next/static/media/feature-icon-4.6e77bda4.svg' alt=''/>
                <Heading color="white" fontSize="1.2rem">Microservices Support</Heading>
                </CardHeader>
                <CardBody>
                <Text>Any architecture, synchronous or asynchronous communication</Text>
                </CardBody>
                <CardFooter></CardFooter>
            </Card>
            <Card >
                <CardHeader>
                <Image src='https://amplication.com/_next/static/media/feature-icon-4.6e77bda4.svg' alt=''/>
                <Heading color="white" fontSize="1.2rem">Continous Git Async</Heading>
                </CardHeader>
               <CardBody>
               <Text>Automated sync with private or public GitHub repos</Text>
               </CardBody>
               <CardFooter></CardFooter>
            </Card>
            <Card >
                <CardHeader>
                <Image src='https://amplication.com/_next/static/media/feature-icon-1.1e82ce1b.svg' alt=''/>
                <Heading color="white" fontSize="1.2rem">Typescript Node.js source code</Heading>
                </CardHeader>
                <CardBody>
                <Text>Automatically generated human-readable and human-editable Node.js code</Text>
                </CardBody>
                <CardFooter></CardFooter>
            </Card>
            <Card >
                <CardHeader>
                <Image src='https://amplication.com/_next/static/media/feature-icon-2.b06adf33.svg' alt=''/>
                <Heading color="white" fontSize="1.2rem">Plugin system</Heading>
                </CardHeader>
                <CardBody>
                <Text>Use community-built plugins or create your own</Text>
                </CardBody>
                
            </Card>
            <Card >
                <Image src='https://amplication.com/_next/static/media/feature-icon-3.299d8e9a.svg' alt=''/>
                <Heading color="white" fontSize="1.2rem">Monorepo or polyrepo</Heading>
                <Text>use Amplication with a monorepo, polyrepo, or both</Text>   
            </Card>
            <Card >
                <Image src='https://amplication.com/_next/static/media/feature-icon-4.6e77bda4.svg' alt=''/>
                <Heading color="white" fontSize="1.2rem">Custom code</Heading>
                <Text>Easy customization & modification of generated code</Text>
            </Card>    
            <Card >
                <CardHeader>
                <Image src='https://amplication.com/_next/static/media/feature-icon-4.6e77bda4.svg' alt=''/>
                <Heading color="white" fontSize="1.2rem" >Ready to deploy app</Heading>
                </CardHeader>
                
                <Text >Generate Docker container or use plugins to connect to CI/CD tools & cloud providers</Text>
            </Card>   
            <Card >
                <Image src='https://amplication.com/_next/static/media/feature-icon-4.6e77bda4.svg' alt=''/>
                <Heading color="white" fontSize="1.2rem">Admin UI</Heading>
                <Text >Automatically generated React Admin UI to create & edit your data models</Text>
            
            </Card>  
            <Card >
                <Image src='https://amplication.com/_next/static/media/feature-icon-4.6e77bda4.svg' alt=''/>
                <Heading color="white" fontFamily="roboto"  fontSize="1.2rem">Amplication console & CLI</Heading >
                <Text  fontFamily="roboto"  fontSize="1rem">Fast test generation using Amplication console or Command Line Interface (CLI)</Text>
            </Card>   
           
        </SimpleGrid>
            
    </Box>
  )
}
