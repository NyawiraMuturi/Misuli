import React from 'react'
import './App.jsx'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { router } from './routes/index.jsx'
import { RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from './styles/theme.js'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
