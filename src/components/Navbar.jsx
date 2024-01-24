import {Link} from 'react-router-dom'
import { Button, HStack, Spacer, Text, Flex} from '@chakra-ui/react'

const Navbar = () => {
  return (
    <HStack color="white">
        <Text mr={5}>MISULI</Text>
        <Link>PROGRAMS</Link> <br /><br />
        <Link>CONTACT US</Link>
        
        <Spacer />
        <Flex gap='24px' align="center" justify="center">
            <Link>LOGIN </Link>
            <Button 
            type='submit' 
            bg='primary.medium' 
            _hover={{bg:'white', color:'primary.medium'}}
            color='white' 
            borderRadius={1.5} 
            width='110%' h='9' 
            boxShadow='base'  >
                REGISTER
            </Button>
        </Flex>
    </HStack>
  )
}

export default Navbar