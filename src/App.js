import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Loginpage from './Components/Loginpage';
import Homepage from './Components/Homepage';
import Historypapers from './Papers/Historypapers';
import AboutUs from './Components/AboutUs';
import Contentscreen from './Components/Contentscreen';
import Fetchdata from './Components/Fetchdata';
import Blogs from './Components/Blogs';
import ImageDetail from './Components/ImageDetail';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Loginpage />} />
        <Route path='/history-and-political-science-question-papers' element={<Historypapers />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/content' element={<Contentscreen />} />
        <Route path='/test' element={<Fetchdata />} />

        <Route path='/blogs' element={<Blogs />} />
        <Route path='/image-detail/:id' element={<ImageDetail />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
