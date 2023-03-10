import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import Marketplace from './pages/Marketplace/Marketplace';
import DigitalWorkers from './pages/DigitalWorkers/DigitalWorkers';
import Layout from './Layout';



function App() {
  return (
    <div className="App" style={{height: "100%"}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>}></Route>
            <Route path='/marketplace' element={<Marketplace/>}></Route>
            <Route path='/digitalworkers' element={<DigitalWorkers/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
