
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Miniblogs from './component/Miniblogs';
import Error from './component/Error'
import Detailchild from './component/Detailchild';
import Addnew from './component/Addnew';
function App() {
  return (
    <Router>
      <Miniblogs/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Addnew" element={<Addnew/>}/>
        <Route path="/Detail/:id" element={<Detailchild/>}/>
        <Route path="/:somestring" element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
