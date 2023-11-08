import { useAuth0 } from "@auth0/auth0-react";
import { UnlockIcon } from "@chakra-ui/icons";
import { 
  Flex, 
  Heading, 
  Text, 
  Button, 
  Spacer, 
  HStack, 
  useToast, 
  AvatarBadge,
  Avatar
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom"

interface LoggedIn {
  loggedIn: boolean;
}

export default function Navbar({ loggedIn }: LoggedIn) {
  const toast = useToast();
  const { loginWithRedirect, logout } = useAuth0();

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
    toast({
      title: 'Logged out.',
      description: "Successfully logged out",
      duration: 10000,
      isClosable: true,
      position: 'top',
      status: 'success',
      icon: <UnlockIcon />,
    });
  };
  const navigate = useNavigate();

  const handleLogin = () => {
    loginWithRedirect()
    // Perform your login logic here, and when successful, navigate to the RootLayout
    // Example: You can check user credentials, and if they are valid, navigate to the RootLayout
    if (true) {
      // navigate('/layout');
    }
  }
  

  return (
    <Flex as="nav" p="10px" mb="60px" alignItems="center">
      <Heading as="h1" fontSize="1.5em">Book shelf</Heading>
      <Spacer />
      <HStack spacing="20px"> 
        {loggedIn ? (
          <>
            <Avatar name="Admin" src="/img/admin.png">
              <AvatarBadge width="1.3em" bg="teal.500">
                <Text fontSize="xs" color="white">3</Text>
              </AvatarBadge>
            </Avatar>
            <Text>admin@example.com</Text>
            <Button
              colorScheme="purple"
              onClick={handleLogout} 
            >
              Logout
            </Button>
          </>
        ) : (
          <Button
            colorScheme="purple"
            onClick={handleLogin}
          >
            Login
          </Button>
        )}
      </HStack>
    </Flex>
  );
}
