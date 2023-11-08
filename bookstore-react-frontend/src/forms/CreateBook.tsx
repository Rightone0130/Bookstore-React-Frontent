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
import { Form, redirect } from "react-router-dom";
import { CREATE_BOOK_MUTATION } from "../GraphQl/Mutations";

export default function CreateBook() {
  const [name, setBookName] = useState("");
  const [description, setDescription] = useState("");

  const [createBook, { error }] = useMutation(CREATE_BOOK_MUTATION);

  const addBook = () => {
    // setUserId(1)
    createBook({
      variables: {
        name: name,
        description: description,
        userId: 1,
      },
    });

    redirect("/");

    if (error) {
      console.log(error);
    }
  };

  return (
    <Box maxW="480px">
      <Form method="post" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel>Book name:</FormLabel>
          <Input
            type="text"
            name="title"
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
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </FormControl>
        <Button onClick={addBook} type="submit">
          submit
        </Button>
      </Form>
    </Box>
  );
}

export const createAction = async () => {
  return redirect("/");
};
