import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import MainLanding from "./pages/Landing/MainLanding";
import Feed from "./pages/feed/Feed";
import DiscussForum from "./pages/Discussion/DiscussionForum"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLanding/>
  },{
    path: "/home",
    element: <Feed/>
  },
  {
    path:"/discussionforum",
    element: <DiscussForum/>
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
