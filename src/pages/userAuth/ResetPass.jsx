import { HStack , Box, Image} from '@chakra-ui/react'
import hero from '../../assets/img/heroLogin.png'
import AuthForm from '../../components/forms/authForm'

const ResetPass = () => {

  const passwordFields = [
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      validation: {
        required: 'Password is required',
      },
    },

    {
      name: 'confirmPassword',
      label: 'Confirm Password',
      type: 'password',
      validation: {
        required: 'New Password is required',
      },
    },
  ];

  const onSubmit =(data) => console.log(data)

  return (
    <HStack h='100vh' >
      <Box  w='50%' px={40} >
        <AuthForm heading='Set new password' onSubmit={onSubmit} inputFields={passwordFields} text='RESET PASSWORD' linkText='Back to login' link='/login'/>
      </Box>

      <Box w='50%' h='100%' bgGradient='linear(to-r, gray.900, primary.accent)'>
        <Image src={hero}/>
      </Box>
    </HStack>
  )
}

export default ResetPass