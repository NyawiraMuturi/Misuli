import { HStack, Heading, Text, Box, Spacer } from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'
import { useState, useEffect} from 'react'

const TopNavBar = () => {
  const [greeting, setGreeting] = useState('');
  
  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []); 
  return (
   <HStack>
    <Heading>MISULI</Heading>
    
    <Text>Hello Mike, {greeting}</Text>
    <Spacer/>
    <Box border='1px' borderColor='red.500' w='15%' px={2} borderRadius='md'>
      <SearchIcon/>
    </Box>
   </HStack>
  )
}

export default TopNavBar