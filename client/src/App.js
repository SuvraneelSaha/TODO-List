import AddUser from "./addUser/AddUser";
import "./App.css";
import User from "./getUser/User";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path:"/add",
      element:<AddUser/>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;

// we dont need App.test.js - so deleting it
// also logo.svg
// reportWeb , setupVItals also
// we dont need index.css also

// all the dependencies can be found from npmJS website
