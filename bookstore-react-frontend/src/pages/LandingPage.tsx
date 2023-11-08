import { Box, Container, Grid, SimpleGrid } from "@chakra-ui/react";
import Navbar from "../components/Navbar"




function LandingPage() {
    const basicBoxStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        boxSize: '100%',
        minHeight:'90vh',
        color: 'white',
        textShadow: '0 0 20px black',
        fontWeight: 'bold',
        fontSize: '20px',
        px: 4,
        marginTop:"-50px",
        background:
          'url(https://res.cloudinary.com/dcntmhgwf/image/upload/v1699371096/bookstore/old-globe-bookshelf-background-selective-focus-retro-style-science-education-travel-vintage-history-geography-team-121970774-transformed_tr2rbb.webp) center/cover no-repeat',
      }


  return (


    <Box display={"none"}> 
        <Grid as="main"
        p="10px" mb="0" pl="60px" pr="60px">
        <Navbar loggedIn ={false} />
        </Grid>                       

        <Box   sx={basicBoxStyles} filter='auto' blur='2px'>
            <Box   >

            </Box>
        
      </Box>

    </Box>
  )
}

export default LandingPage

