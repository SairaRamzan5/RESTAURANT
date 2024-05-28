import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home";
import Success from "./Pages/Success";
import NotFound from "./Pages/NotFound";
import LoginRegistration from "./components/LoginRegistration";
import Registration from "./components/Registration";

const App = () => {
  return (
    <Router>
     <Routes>
     <Route path = "/register" element={<Registration/>} />
     <Route path = "/login" element={<LoginRegistration/>} />
    <Route path = "/" element={<Home/>} />
    <Route path = "/success" element={<Success/>} />
    <Route path = "*" element={<NotFound/>} />

     </Routes>
     <Toaster/>
    </Router>);
  
};

export default App;