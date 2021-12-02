
import './App.css';
import {BrowserRouter ,Switch, Route } from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Miniblogs from './component/Miniblogs';
import Error from './component/Error'
import Detailchild from './component/Detailchild';
import Addnew from './component/Addnew';
function App() {
  return (
    <BrowserRouter>
    <div>
      <Miniblogs/>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Home" component={Home}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/About" component={About}/>
        <Route path="/Addnew" component={Addnew}/>
        <Route path="/Detail/:id" component={Detailchild}/>
        <Route path="/:somestring" component={Error}/>
        </Switch> 
     </div>
     </BrowserRouter>
  );
}

export default App;
