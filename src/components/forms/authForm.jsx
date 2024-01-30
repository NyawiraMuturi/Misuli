import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom'
import {
    FormControl,
    FormLabel,
    Box,
    Heading,
    Input, 
    Text,
    Button,
    VStack
  } from '@chakra-ui/react'

const AuthForm = ({inputFields, onSubmit, link, text, linkText, heading}) => {

    const { register, handleSubmit,formState: { errors } } = useForm();

  return (
    <Box>
        <Heading textAlign={'center'}>{heading}</Heading>
        
        <form onSubmit={handleSubmit(onSubmit)}>
            {inputFields.map((inputField)=> (
                <FormControl key={inputField.name} py={2}>
                    <FormLabel>{inputField.label}</FormLabel>
                    <Input 
                        type={inputField.type || 'text'}
                        name={inputField.name}
                        {...register(inputField.name, inputField.validation)}
                    />
                    {errors[inputField.name] && (
                        <Text className="error-message" color='red.500'>{errors[inputField.name].message}</Text>
                    )}
                </FormControl>
            ))}

            <VStack alignItems='start' gap={3} pt={3}>
                <Text color='primary.medium'>
                    <Link to={link}>{linkText}</Link>
                </Text>
                
                <Button 
                w='100%'
                bg='primary.medium'
                _hover={{ bg: 'white', color: 'primary.medium', border:'1px' }}
                color='white'
                type='submit'>{text}</Button>
            </VStack>

        </form>
        
    </Box>
  )
}

export default AuthForm