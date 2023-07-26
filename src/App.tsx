import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "./container/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <h1>Little Lemon</h1>
      </Layout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
