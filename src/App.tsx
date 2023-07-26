import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout, Home } from "./container/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
