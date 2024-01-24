import { HStack, Image, Box, Heading, Text, Spacer, Icon} from "@chakra-ui/react"
import hero from '../assets/img/hero.jpg'
import Navbar from "../components/Navbar"
import HeroCard from "../components/cards/HeroCard"
import { CgGym } from "react-icons/cg";
import { GiRunningShoe } from "react-icons/gi";
import { PiCircleDashedThin } from "react-icons/pi"; 

const Landing = () => {

  const heroCardData = [
    {
      heading: 'Hypertrophy training',
      description: 'Growth and strengthening',
      icon: CgGym,
      top: 150,
      right: 150,
    },

    {
      heading: 'Morning cardio',
      description: 'Aerobics to lose weight',
      icon: GiRunningShoe,
      top: 400,
      right: 90,
    },
    
  ];

  return (
    <Box h={'100vh'} p={10} bgGradient='linear(to-r, gray.900, gray.900, primary.accent)'>
      <Navbar />
      <HStack>
        <Box color="white">
          <Text >WORK HARD</Text>
          <Heading>GET YOUR BODY MOVING</Heading>
          <Text>Leave the comfort zone and get to know all of our programs personalized especially for you</Text>
          <Box>
            <Text>Item 1</Text>
            <Text>Item 1</Text>
            <Text>Item 1</Text>
            <Text>Item 1</Text>
          </Box>
        </Box>
        <Spacer />
        <Box position='relative'>
        <Image src={hero} h={'800'} />
            {heroCardData.map((card, index)=>(
              <HeroCard key={index} {...card}/>
            ))}
        </Box>
        
      </HStack>
    </Box>
  )
}

export default Landing