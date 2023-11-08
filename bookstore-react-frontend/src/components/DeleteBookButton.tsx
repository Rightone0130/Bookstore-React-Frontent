import React from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_BOOK_MUTATION } from "../GraphQl/Mutations"; // Import the mutation you defined earlier
import { DeleteIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";


interface props{
    id: string
}

const DeleteBookButton = ({ id :bookId }: props) => {
  const [removeBook] = useMutation(REMOVE_BOOK_MUTATION, {
    onError: (error) => {
      // Handle any errors that occur during the mutation
      console.error("Error deleting book:", error);
    },
    onCompleted: () => {
      // Handle the successful deletion of the book, e.g., update the UI
      alert("Book deleted successfully");
    },
  });

  const handleDelete = () => {
    removeBook({
      variables: {
        id: bookId,
      },
    });
  };

  return (
    <Button onClick={handleDelete} variant="ghost" leftIcon={<DeleteIcon />}>Delete</Button>
  );
};

export default DeleteBookButton;
