import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout, Home, Booking } from "./container/index";
import AuthcontextProvider from "./components/context/auth.context";

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
  return (
    <AuthcontextProvider>
      <RouterProvider router={router} />
    </AuthcontextProvider>
  );
}

export default App;
