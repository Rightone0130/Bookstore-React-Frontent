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
  Avatar,
  CircularProgress,
} from "@chakra-ui/react";

interface LoggedIn {
  loggedIn: boolean;
}

export default function Navbar({ loggedIn }: LoggedIn) {
  const toast = useToast();
  const { loginWithRedirect, logout, user } = useAuth0(); // Add 'user' from Auth0

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
    toast({
      title: "Logged out.",
      description: "Successfully logged out",
      duration: 10000,
      isClosable: true,
      position: "top",
      status: "success",
      icon: <UnlockIcon />,
    });
    stat();
  };


  const handleLogin = () => {
    loginWithRedirect();
  };

  return (
    <Flex as="nav" p="10px" mb="60px" alignItems="center">
      <Heading as="h1" fontSize="1.5em">
        Book shelf
      </Heading>
      <Spacer />
      <HStack spacing="20px">
        {loggedIn ? (
          <>
            <Avatar
              name={user?.name || "User"}
              src={user?.picture || "/img/default-avatar.png"}
            >
              {/* You can replace "/img/default-avatar.png" with a default avatar image */}
              <AvatarBadge width="1.3em" bg="teal.500">
                <Text fontSize="xs" color="white">
                  3
                </Text>
              </AvatarBadge>
            </Avatar>
            <Text>{user?.email || "N/A"}</Text>
            <Button colorScheme="purple" onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <Button colorScheme="purple" onClick={handleLogin}>
            Login
          </Button>
        )}
      </HStack>
    </Flex>
  );
}
function stat() {
  return (
    <CircularProgress
      isIndeterminate
      color="green.300"
      size="160px"
      thickness="5px"
    />
  );
}
