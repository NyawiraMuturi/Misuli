import { Card, CardBody, HStack, Circle, Text, Icon, Box, Heading } from '@chakra-ui/react'

const Services = ({ heading, text, icon, }) => {
    return (
        <Card
            bg='rgba(0,0,0,0.3)'
            backdropFilter='blur(10px)'
            color={'white'}

            >
            <CardBody>
                <HStack spacing={'5'}>
                    <Box w={'20%'}>
                        <Circle
                            rounded='full'
                            bg='rgba(225,225,225,0.2)'
                            backdropFilter='blur(5px)'
                            h={14}
                            w={14}

                        >
                            <Icon as={icon} color='secondary.light' boxSize={6} />
                        </Circle>
                    </Box>

                    <Box>
                        <Heading fontSize={'xl'}>{heading}</Heading>
                        <Text>{text}</Text>
                    </Box>

                </HStack>

            </CardBody>
        </Card>
    )
}

export default Services