import { HStack, Image, Box, Heading, Text,  Icon, Flex, Divider, useMediaQuery} from "@chakra-ui/react"
import hero from '../assets/img/hero.jpg'
import Navbar from "../components/Navbar"
import HeroCard from "../components/cards/HeroCard"
import { CgGym } from "react-icons/cg";
import { GiRunningShoe } from "react-icons/gi";
import { PiCircleDashedThin } from "react-icons/pi"; 
import { CiInstagram } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";

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
    <Box  p={10} bgGradient='linear(to-r, gray.900, gray.900, primary.accent)'  >
      <Navbar />
      <HStack spacing='10px'>
        <Box color="white">
          <Text color='secondary.light' >WORK HARD</Text>
          <Heading fontSize='7xl'>GET YOUR BODY MOVING</Heading>
          <Text fontSize='xl'>Leave the comfort zone and get to know all of our programs personalized especially for you</Text> <br />
          <Flex gap={30}>
            <Text color='secondary.light'>Personal Trainers</Text> <Divider orientation='vertical' color='tomato' />
            <Text color='secondary.light'>Meal Plans</Text> <Divider orientation='vertical' />
            <Text color='secondary.light'>Custom Plans</Text> <Divider orientation='vertical' />
            <Text color='secondary.light'>Free Consultation</Text>
          </Flex>
            <br /> <br /><br /> <br />
          <Text>Follow Us on Our Socials</Text>
          <br /> 
          <Flex gap={5}>
            <Icon as={CiInstagram} boxSize={5}/>
            <Icon as={RiTwitterXLine} boxSize={5}/>
            <Icon as={CiFacebook} boxSize={5}/>
            <Icon as={CiYoutube} boxSize={5}/>
          </Flex>
        </Box>
        
        <Box position='relative'>
          <Icon as={PiCircleDashedThin} boxSize={450} color='primary.medium' position='absolute' right={180} top={150} zIndex={0}/>
        <Image src={hero} h={'800'} position='relative'/>
            {heroCardData.map((card, index)=>(
              <HeroCard key={index} {...card}/>
            ))}
        </Box>
        
      </HStack>
    </Box>
  )
}

export default Landing