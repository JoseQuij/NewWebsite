import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Pages/About';
import Home from './Pages/Home';
import Youtube from './Pages/Youtube';
import ErrorPage from './Pages/ErrorPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className='w-screen h-screen'>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/youtube' element={<Youtube/>}></Route>
        <Route path='/*' element={<ErrorPage/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
