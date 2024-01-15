import { BrowserRouter, Routes, Route } from "react-router-dom";
import './app.css'
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import NotFound from "./pages/notFound/NotFound";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<List/>}/>
      <Route path="/hotels/123" element={<Hotel/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
