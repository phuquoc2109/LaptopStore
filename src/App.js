import './App.css';
import Navbar from './component/Navbar';
import Slideshow from './component/Slideshow';
import Products from './component/Products';
import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';  

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Slideshow />
        <Products />
        <Switch>
           <Route path='/' exact ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
