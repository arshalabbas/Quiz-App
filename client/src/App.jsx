import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Utitlies
import Layout from "./layout";
import Error from "./Error";

//Routes components
import { Root, Host, Quiz, Game } from "./routes";

const router = createBrowserRouter([
  { path: "/", element: <Root />, errorElement: <Error /> },
  { path: "/host", element: <Host /> },
  { path: "/quiz", element: <Quiz /> },
  { path: "/host/game", element: <Game /> },
]);

const App = () => {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
};

export default App;
