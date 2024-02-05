import { Box, Text } from "@chakra-ui/react"
import { sideNavData } from "../../data/data"
import {Link} from 'react-router-dom'

const LeftSideNav = () => {

  return (
    <Box> 
        {sideNavData.map((item)=> (
          <Box key={item.title}> 
            
            <Link to={item.link}> {item.title}</Link>
          </Box>
        ))}
    </Box>
  )
}

export default LeftSideNav