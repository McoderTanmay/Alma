import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import MainLanding from "./pages/Landing/MainLanding";
import Feed from "./pages/feed/Feed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLanding/>
  },{
    path: "/home",
    element: <Feed/>
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
