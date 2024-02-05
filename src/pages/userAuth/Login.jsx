import { HStack , Box, Image} from '@chakra-ui/react'
import hero from '../../assets/img/heroLogin.png'
import AuthForm from '../../components/forms/authForm'
import { useLoginUser } from '../../hooks/unauthenticatedReq'

const Login = () => {

  const {mutate} = useLoginUser()

  const loginFields = [
    {
      name: 'email',
      label: 'Email',
      validation: {
        required: 'Email is required',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message: 'Invalid email address',
        },
      },
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      validation: {
        required: 'Password is required',
      },
    },
  ];

  const onSubmit =() => {
    mutate(loginFields.name)
  }

  return (
    <HStack h='100vh' >
      <Box  w='50%' px={40} >
        <AuthForm heading='LOGIN' onSubmit={onSubmit} inputFields={loginFields} text='LOGIN' linkText='Forgot Password?' link='/forgot-password'/>
      </Box>

      <Box w='50%' h='100%' bgGradient='linear(to-r, gray.900, primary.accent)'>
        <Image src={hero}/>
      </Box>
    </HStack>
  )
}

export default Login