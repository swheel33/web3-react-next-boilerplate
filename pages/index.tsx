import Provider from '../components/Provider'
import { ChakraProvider } from '@chakra-ui/react';
import App from '../components/App'

export default function Home() {
  return (
    <div>
      <ChakraProvider>
        <Provider>
          <App />
        </Provider>
      </ChakraProvider>
    </div>
  )
}
