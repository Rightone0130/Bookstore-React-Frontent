import React from "react";
import { useQuery } from "@apollo/client";
import { LOAD_BOOKS } from "../GraphQl/Queries";
import { Data } from "./types"; 

function GetBooks() {
  const { loading, error, data } = useQuery<Data>(LOAD_BOOKS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      {data?.books.map((book) => (
        <h1 key={book.id}>{book.name}</h1>
      ))}
    </div>
  );
}

export default GetBooks;
