import { HStack , Box, Image} from '@chakra-ui/react'
import hero from '../../assets/img/heroLogin.png'
import AuthForm from '../../components/forms/authForm'

const ForgotPass = () => {

  const registerFields = [
    {
      name: 'email',
      label: 'Email',
      type: 'password',
      validation: {
        required: 'Email is required',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message: 'Invalid email address',
        },
      },
    },
  ];

  const onSubmit =(data) => console.log(data)

  return (
    <HStack h='100vh' >
      <Box  w='50%' px={40} >
        <AuthForm heading='Forgot Password?' onSubmit={onSubmit} inputFields={registerFields} text='RESET PASSWORD' linkText='Back to Login' link='/reset-password'/>
      </Box>

      <Box w='50%' h='100%' bgGradient='linear(to-r, gray.900, primary.accent)'>
        <Image src={hero}/>
      </Box>
    </HStack>
  )
}

export default ForgotPass