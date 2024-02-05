import {useState} from 'react'
import {Box, HStack, VStack, Heading, Text} from '@chakra-ui/react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import '../../styles/App.css'
import ScheduleCard from '../cards/ScheduleCard';
import Biometrics from '../cards/Biometrics';

const RightSideNav = () => {
    const [date, setDate]= useState(new Date())
    const changeDate =(e)=>  setDate(e)

  return (
    <Box>

      <Biometrics/>
        <Calendar onChange={changeDate} value={date} />

        <HStack>
          <Heading>Scheduled</Heading>
          <Text>View All</Text>
        </HStack>

        <VStack alignItems={"flex-start"}>
          <ScheduleCard/>
        </VStack>
    </Box>
  )
}

export default RightSideNav