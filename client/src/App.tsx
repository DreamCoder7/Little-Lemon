import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout, Home, Booking } from "./container/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/reservation",
    element: (
      <Layout>
        <Booking />
      </Layout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
