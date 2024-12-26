import { BrowserRouter, Routes, Route } from "react-router-dom";
import './app.css'
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import NotFound from "./pages/notFound/NotFound";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Rooms from "./pages/roomsList/Rooms";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<List/>}/>
      <Route path="/rooms/:hotelId" element={<Rooms/>}/>
      <Route path="/hotels/:id" element={<Hotel />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
