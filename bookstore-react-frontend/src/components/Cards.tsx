import React, { Key } from "react";
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



interface CardProps {
  id: Key;
  name: string;
  description: string;
}

function Cards({ id, name, description }: CardProps) {
  return (
    <Card key={id} borderTop="8px" borderColor="purple.400" bg="white">
      <CardHeader color="gray.700">
        <Flex gap={5}>
          <Box w="50px" h="50px">
            <Avatar name={""} src={""} />
          </Box>
          <Box>
            <Heading as="h3" size="sm">{name}</Heading>
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
          <Button variant="ghost" leftIcon={<ViewIcon />}>Watch</Button>
          <Button variant="ghost" leftIcon={<EditIcon />}>Comment</Button>
        </HStack>
      </CardFooter>
    </Card>
  );
}

export default Cards;
