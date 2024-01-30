import { Link, useNavigate } from 'react-router-dom'
import { Button, HStack, Spacer, Flex, Heading, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <>
      <HStack color="white">
        <Heading mr={5}>MISULI</Heading>

        <Spacer />
        <Flex gap='24px' align="center" justify="center">
          <Link to='/login'>LOGIN </Link>
          <Button 
            onClick={()=> navigate('/register')}
            type='submit'
            bg='primary.medium'
            _hover={{ bg: 'white', color: 'primary.medium' }}
            color='white'
            borderRadius={1.5}
            width='110%' h='9'
            boxShadow='base'  >
            REGISTER
          </Button>
        </Flex>
      </HStack>

      <HStack>

        <Heading mr={5}>MISULI</Heading>

        <Spacer />

        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon />}
            variant='outline'
          />
          <MenuList>
            <MenuItem>
              New Tab
            </MenuItem>
            <MenuItem >
              New Window
            </MenuItem>
            <MenuItem>
              Open Closed Tab
            </MenuItem>
            <MenuItem >
              Open File...
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>


    </>

  )
}

export default Navbar