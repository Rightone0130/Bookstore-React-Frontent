import { SimpleGrid } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { LOAD_BOOKS } from "../GraphQl/Queries";
import { Data } from "../components/types";
import Cards from "../components/Cards";

function Dashboard() {
  const { loading, error, data } = useQuery<Data>(LOAD_BOOKS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <SimpleGrid spacing={10} minChildWidth={300}>
      {data?.books.map((book) => (
        <Cards
          key={book.id}
          id={book.id}
          name={book.name}
          description={book.description}
        />
      ))}
    </SimpleGrid>
  );
}

export default Dashboard;
