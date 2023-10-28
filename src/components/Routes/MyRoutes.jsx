import { Route, Routes } from "react-router-dom"
import Favoritos from "../pages/Favoritos/Favoritos";
import Home from "../pages/Home/Home";

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </div>
  );
};

export default MyRoutes;
