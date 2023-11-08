import { Grid, GridItem, Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

// components
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import LandingPage from "./pages/LandingPage"
import { useAuth0 } from "@auth0/auth0-react"

export default function RootLayout() {


  const { isAuthenticated } = useAuth0();


  return (<>


   <Grid display={isAuthenticated ? "none" : "grid"} >
   <LandingPage />

   </Grid>
    <Grid display={isAuthenticated ? "grid" : "none"} templateColumns="repeat(6, 1fr)" bg="gray.50">
      {/* sidebar */}
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 2, xl: 1 }} 
        bg="purple.400"
        minHeight={{ lg: '100vh' }}
        p={{ base: '20px', lg: '30px' }}
      >
        <Sidebar />
      </GridItem>

      {/* main content & navbar */}
      <GridItem
        as="main"
        colSpan={{ base: 6, lg: 4, xl: 5 }} 
        p="40px"
      >
        <Navbar loggedIn={isAuthenticated} />
        <Outlet />
      </GridItem>
    </Grid>
    </>
  )
}
