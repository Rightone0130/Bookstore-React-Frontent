import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'



const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
    domain="rightone.us.auth0.com"
    clientId="NWLM6hRG5rSPQub4SD0RyjmhZlgKuMpG"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <ChakraProvider  theme={theme}>
    <App/>
    </ChakraProvider>
    </Auth0Provider>
  </React.StrictMode>,
)
