import { Card, Stack, CardBody, Text, Heading, Icon, Circle } from '@chakra-ui/react'


const HeroCard = ({ icon, heading, description, top, right }) => {
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            position='absolute'
            top={top}
            right={right}
            color='white'
            bg='rgba(0,0,0,0.7)'
            backdropFilter='blur(10px)'
            alignItems='center'
            px={2}
            height='70'
            zIndex={2}

        >
            <Circle
                rounded='full'
                bg='rgba(225,225,225,0.2)'
                backdropFilter='blur(5px)'
                h={10}
                w={10}
            >
                <Icon as={icon} color='secondary.light' boxSize={6} />
            </Circle>


            <Stack>
                <CardBody>
                    <Heading size='xs'>{heading}</Heading>
                    <Text fontSize='xs' py='2'>
                        {description}
                    </Text>
                </CardBody>
            </Stack>
        </Card>
    )
}

export default HeroCard