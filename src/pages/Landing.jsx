import { HStack, Image, Box, Heading, Text,  Icon, Flex, Divider, useMediaQuery, Stack} from "@chakra-ui/react"
import hero from '../assets/img/hero.jpg'
import Navbar from "../components/Navbar"
import HeroCard from "../components/cards/HeroCard"
import { PiCircleDashedThin } from "react-icons/pi"; 
import { CiInstagram } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import Services from "../components/cards/Services";
import {heroCardData, mobileCard} from '../data/data'

const Landing = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  return (
    <Box  p={[5,10]} bgGradient='linear(to-r, gray.900, gray.900, primary.accent)' w={{base:'100vw'}} h={'100vh'} >
      <Navbar />
      <HStack spacing='10px'>
        <Box color="white">
          <Text color='secondary.light' my={[5,2]} >WORK HARD</Text>
          <Heading fontSize={[25,75]} my={[5]}>GET YOUR BODY MOVING</Heading>
          <Text fontSize={[15, 25]}>Leave the comfort zone and get to know all of our programs personalized especially for you</Text> <br />
          {isLargerThan768 && 
                  <Flex gap={[15,30]}>
                    <Text color='secondary.light'>Personal Trainers</Text> <Divider orientation='vertical' color='tomato' />
                    <Text color='secondary.light'>Meal Plans</Text> <Divider orientation='vertical' />
                    <Text color='secondary.light'>Custom Plans</Text> <Divider orientation='vertical' />
                    <Text color='secondary.light'>Free Consultation</Text>
                    <br /> <br /><br /> <br />
                  </Flex>
                  

          }
          <Stack spacing={'6'} mb={'5'}>
            {mobileCard.map((item, index)=>(
                <Services key={index} {...item} />
            ))
            }
           

          </Stack>

            
          <Text>Follow Us on Our Socials</Text>
          <br /> 
          <Flex gap={5}>
            <Icon as={CiInstagram} boxSize={5}/>
            <Icon as={RiTwitterXLine} boxSize={5}/>
            <Icon as={CiFacebook} boxSize={5}/>
            <Icon as={CiYoutube} boxSize={5}/>
          </Flex>
        </Box>

        {isLargerThan768 &&
                <Box position='relative'>
                <Icon as={PiCircleDashedThin} boxSize={450} color='primary.medium' position='absolute' right={180} top={150} zIndex={0}/>
              <Image src={hero} h={'800'} position='relative'/>
                  {heroCardData.map((card, index)=>(
                    <HeroCard key={index} {...card}/>
                  ))}
              </Box>

        }
        

        
      </HStack>
    </Box>
  )
}

export default Landing