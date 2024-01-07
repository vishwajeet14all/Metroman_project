import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import Stages from "./pages/Stages";
import Calculator from "./pages/Calculator";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/aboutus", element: <AboutUs /> },
        { path: "/stages", element: <Stages /> },
        { path: "/calculator", element: <Calculator /> },
        { path: "/products", element: <Products /> },        
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <Signup /> },
      ],
    },
    
  ]);

  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  );
}

export default App;
