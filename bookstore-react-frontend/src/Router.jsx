import { createBrowserRouter, createRoutesFromElements, Routes, Route } from "react-router-dom";

import RootLayout from "./RootLayout.js";
  
  // layouts and pages
  import Dashboard, { tasksLoader } from './pages/Dashbord.js'
  import Create from "./forms/Create.jsx";
  import Profile from "./pages/Profile.js";

  // router and routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} loader={tasksLoader} />
        <Route path="create" element={<Create />} action={createAction} />
        <Route path="profile" element={<Profile />} />
      </Route>
    )
  )
