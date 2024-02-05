import {Outlet} from 'react-router-dom'
import LeftSideNav from '../Navigation/leftSideNav'
import TopNavBar from '../Navigation/topNavBar'
import RightSideNav from '../Navigation/rightSideNav'
import { HStack, Box } from '@chakra-ui/react'

const Layout = () => {
  return (
    <Box p={5}>
          <TopNavBar/>
    <HStack> 
      <Box w='20%'>
      <LeftSideNav/>
      </Box>
        
        <Box w='60%'>
           <Outlet/>
        </Box>
        <Box w='20%'>
        <RightSideNav/>
        </Box>
       
    </HStack>
      
    </Box>

  )
}

export default Layout