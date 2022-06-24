import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Nav from './components/Pages/Nav/Nav';
import Footer from './components/Pages/Shared/Footer/Footer';

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
