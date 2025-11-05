import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import Home from "./screens/Home";
import Layout from "./screens/Layout";
import Sports from "./screens/Sports";
import Cafe from "./screens/Cafe";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="/" element={<Home />} />
      <Route path="games" element={<Sports />} />
      <Route path="order" element={<Cafe/>} />
    </Route>
  )
);

function App() {
  return (
    <div className="bg-[#F7F7F7]">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
