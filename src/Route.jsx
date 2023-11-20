import { createBrowserRouter } from "react-router-dom";
import DrawerAppBar from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import App from "./App";
import ResponsiveDrawer from "./HomePage/Sideclicks";

const router=createBrowserRouter([


    {path:"/",element:<App />},
    {path:"/login",element:<LoginPage />},
    {path: "/dashboard", element: <ResponsiveDrawer />}
]);
export default router;