
import './App.css';
import { Navbar } from './componants/Header/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from './componants/Body/About';
import { Home } from './componants/Home';

import Ask from './componants/Body/Ask';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Ask" element={<Ask/>} />
        {/* <Route path="*" element={<NoPage />} /> */}

      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
