import { Link, useNavigate } from 'react-router-dom'
import { Button, HStack, Spacer, Flex, Heading, Menu, MenuButton, MenuList, MenuItem, IconButton, useMediaQuery } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const navigate = useNavigate()
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  return (
    <>
      {isLargerThan768 ? (
        <HStack color="white">
          <Heading mr={5}>MISULI</Heading>
          <Spacer />
          <Flex gap='24px' align="center" justify="center">
            <Link to='/login'>LOGIN </Link>
            <Button 
              onClick={() => navigate('/register')}
              type='submit'
              bg='primary.medium'
              _hover={{ bg: 'white', color: 'primary.medium' }}
              color='white'
              borderRadius={1.5}
              width='110%' h='9'
              boxShadow='base'>
              REGISTER
            </Button>
          </Flex>
        </HStack>
      ) : (
        <HStack color='white'>
          <Heading mr={5}>MISULI</Heading>
          <Spacer />
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<HamburgerIcon />}
              variant='outline'
              color={'white'}
              _hover={{ bg: 'white', color: 'primary.medium' }}
            />
            <MenuList color={'black'}>
              <MenuItem>
                Login
              </MenuItem>
              <MenuItem>
                Register
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      )}
    </>

  )
}

export default Navbar