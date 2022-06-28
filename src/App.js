import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import AboutMe from './components/Pages/AboutMe/AboutMe';
import Blog from './components/Pages/Blog/Blog';
import Contact from './components/Pages/Contact/Contact';
import Nav from './components/Pages/Nav/Nav';
import Footer from './components/Pages/Shared/Footer/Footer';
import Registration from './components/Pages/Registration/Registration';

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path='/aboutme' element={<AboutMe/>}></Route>
        <Route path='/blog' element={<Blog/>}> </Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
