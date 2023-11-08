import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Users from "./pages/users";
import Home from "./pages/home";
import Info from "./pages/info";
import Index from "./pages";


const router = createBrowserRouter([{
},
{
  path: "/",
  element: <Login />
}, {
  path: "/register",
  element: <Register />
}, {
  path: "/users",
  element: <Users />,
},
{
  path: "/home",
  element: <Index />,
  children: [{
    index: true,
    element: <Home />
  },
  {
    path: 'info/:id',
    element: <Info />
  }]
}
])

export default router