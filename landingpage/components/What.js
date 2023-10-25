import React from 'react'
import styles from '@/styles/page.module.css'
import { Box, Card, Image, SimpleGrid, Text } from '@chakra-ui/react'

export const What = () => {
  return (
    <Box >
        <h4>What do you get from Amplication ?</h4>
        <SimpleGrid >
            <Card >
                <Image src='https://amplication.com/_next/static/media/feature-icon-1.1e82ce1b.svg' alt=''/>
                <Text>Production Ready APIs</Text>
                <p >Full featured GraphQL and REST APIs</p>
            </Card>
            <Card >
                
                <Image src='https://amplication.com/_next/static/media/feature-icon-2.b06adf33.svg' alt=''/>
                <Text>Data Model</Text>
                <p >Simple definition of entities & database schema</p>
            </Card>
            <Card >
                <Image src='https://amplication.com/_next/static/media/feature-icon-3.299d8e9a.svg' alt=''/>
                <Text>Role-based Acces Control</Text>
                <p >Automatically generated identity & permision models</p>
            </Card>
            <Card >
                <Image src='https://amplication.com/_next/static/media/feature-icon-4.6e77bda4.svg' alt=''/>
                <Text>Microservices Support</Text>
                <p >Any architecture, synchronous or asynchronous communication</p>
            </Card>
            <Card >
                <Image src='https://amplication.com/_next/static/media/feature-icon-4.6e77bda4.svg' alt=''/>
                <Text>Continous Git Async</Text>
                <p >Automated sync with private or public GitHub repos</p>
            </Card>
            <Card >
                <Image src='https://amplication.com/_next/static/media/feature-icon-1.1e82ce1b.svg' alt=''/>
                <Text>Typescript Node.js source code</Text>
                <p >Automatically generated human-readable and human-editable Node.js code</p>
            </Card>
            <Card >
                <Image src='https://amplication.com/_next/static/media/feature-icon-2.b06adf33.svg' alt=''/>
                <Text>Plugin system</Text>
                <p>Use community-built plugins or create your own</p>
            </Card>
            <Card >
                <Image src='https://amplication.com/_next/static/media/feature-icon-3.299d8e9a.svg' alt=''/>
                <Text>Monorepo or polyrepo</Text>
                <p>use Amplication with a monorepo, polyrepo, or both</p>   
            </Card>
            <Card >
                <Image src='https://amplication.com/_next/static/media/feature-icon-4.6e77bda4.svg' alt=''/>
                <Text >Custom code</Text>
                <p>Easy customization & modification of generated code</p>
            </Card>    
            <Card >
                <Image src='https://amplication.com/_next/static/media/feature-icon-4.6e77bda4.svg' alt=''/>
                <Text >Ready to deploy app</Text>
                <p>Generate Docker container or use plugins to connect to CI/CD tools & cloud providers</p>
            </Card>   
            <Card >
                <Image src='https://amplication.com/_next/static/media/feature-icon-4.6e77bda4.svg' alt=''/>
                <Text >Admin UI</Text>
                <p>Automatically generated React Admin UI to create & edit your data models</p>
            
            </Card>  
            <Card >
                <Image src='https://amplication.com/_next/static/media/feature-icon-4.6e77bda4.svg' alt=''/>
                <Text >Amplication console & CLI</Text>
                <p>Fast app generation using Amplication console or Command Line Interface (CLI)</p>
            </Card>   
        </SimpleGrid>
    </Box>
  )
}
