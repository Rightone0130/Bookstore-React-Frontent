import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Flex,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  HStack,
  Divider,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import DeleteBookButton from "./DeleteBookButton";

interface CardProps {
  id: string;
  name: string;
  description: string;
}

function Cards({ id, name, description }: CardProps) {
  const handleUpdateClick = () => {
    // Construct the URL with parameters and navigate
    const url = `/updateBook?id=${id}&name=${encodeURIComponent(
      name
    )}&description=${encodeURIComponent(description)}`;
    window.location.href = url;
  };

  return (
    <Card key={id} borderTop="8px" borderColor="purple.400" bg="white">
      <CardHeader color="gray.700">
        <Flex gap={5}>
          <Box w="50px" h="50px">
            <Avatar name={""} src={""} />
          </Box>
          <Box>
            <Heading as="h3" size="sm">
              {name}
            </Heading>
            <Text>by {"author"}</Text>
          </Box>
        </Flex>
      </CardHeader>

      <CardBody color="gray.500">
        <Text>{description}</Text>
      </CardBody>

      <Divider borderColor="gray.200" />

      <CardFooter>
        <HStack>
          <Button variant="ghost" leftIcon={<ViewIcon />}>
            View
          </Button>
          <Link
            to={`/updateBook?id=${id}&name=${encodeURIComponent(
              name
            )}&description=${encodeURIComponent(description)}`}
          >
            <Button variant="ghost" leftIcon={<EditIcon />}>
              Update
            </Button>
          </Link>
          <DeleteBookButton id={id} />
        </HStack>
      </CardFooter>
    </Card>
  );
}

export default Cards;
