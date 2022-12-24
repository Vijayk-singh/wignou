
import './App.css';
// import { Navbar } from './componants/Header/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from './componants/Body/About';
import { Home } from './componants/Home';
import Ask from './componants/Body/Ask';
import Nav from './componants/minicomp/Nav'
import { Login } from './componants/Login/Login';
import { Signup } from './componants/Login/Signup';
import { Community } from './componants/minicomp/Community';


function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Nav/>}>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Ask" element={<Ask/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/community" element={<Community/>} />
        {/* <Route path="*" element={<NoPage />} /> */}

      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
