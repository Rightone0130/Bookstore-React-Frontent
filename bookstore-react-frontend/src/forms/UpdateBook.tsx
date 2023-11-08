import { useMutation } from "@apollo/client";
import {
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { Form, useLocation, useNavigate } from "react-router-dom";
import { UPDATE_BOOK_MUTATION } from "../GraphQl/Mutations";

export default function UpdateBook() {
  //transfers object from from last use location
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const ids = params.get("id");
  const names = params.get("name");
  const descriptions = params.get("description");

  //maps the input value to be updated
  const [name, setBookName] = useState(names || ""); // Use the provided names or initialize as an empty string
  const [description, setDescription] = useState(descriptions || ""); // Use the provided descriptions or initialize as an empty string

  const [updateBook, { error }] = useMutation(UPDATE_BOOK_MUTATION);
  const navigate = useNavigate();

  const update = () => {
    updateBook({
      variables: {
        name: name,
        description: description,
        userId: 1,
        id: parseInt(ids || ""),
      },
    });
    navigate("/");
    if (error) {
      console.log(error);
    }
  };

  return (
    <Box maxW="480px">
      <h1>Update Book</h1>

      <Form method="post" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel>Book name:</FormLabel>
          <Input
            type="text"
            name="title"
            value={name || ""} // Set the input value to the "name" state
            onChange={(e) => {
              setBookName(e.target.value);
            }}
          />
          <FormHelperText>Enter a descriptive book name.</FormHelperText>
        </FormControl>

        <FormControl mb="40px">
          <FormLabel>Book description:</FormLabel>
          <Textarea
            placeholder="Enter a detailed description for your book.."
            name="description"
            value={description || ""} // Set the input value to the "description" state
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </FormControl>
        <Button onClick={update} type="submit">
          submit
        </Button>
      </Form>
    </Box>
  );
}
