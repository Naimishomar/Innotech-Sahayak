import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import Home from "./screens/Home";
import Layout from "./screens/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="/" element={<Home />} />
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
