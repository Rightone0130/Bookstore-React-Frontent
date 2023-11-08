import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// Apollo Client

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

// layouts and pages
import RootLayout from './RootLayout'
import Create, { createAction } from './forms/CreateBook'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashbord';
import UpdateBook from './forms/UpdateBook';




const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message}) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://abc-1y41.onrender.com/graphql/" }),
]);


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<RootLayout />}>
      
      <Route index element={<Dashboard />}/>
      <Route path="create" element={<Create />} action={createAction}/>
      <Route path="profile" element={<Profile />} />
      <Route path="/updateBook" Component={UpdateBook} />
      
    </Route>
  )
)

function App() {
  return (
    <ApolloProvider client={client}>
    <RouterProvider router={router} />
    </ApolloProvider>
  );

}

export default App
