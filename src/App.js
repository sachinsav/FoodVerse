import Layout from "./page/Layout";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./page/AboutUs";
import Home from "./page/Home";
import Cart from "./page/Cart";
import Login from "./page/Login";

const App = () => {
    return (
        <>
        <Layout />
        </>
    )
}
const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path:"about",
                element: <AboutUs />
            },
            {
                path:"cart",
                element: <Cart />
            },
            {
                path: "login",
                element: <Login />
            }
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);



