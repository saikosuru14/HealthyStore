import './App.css';
import Home from './components/Home'
import Shop from './components/Shop'
import AboutUs from './components/AboutUs'
import Cart from './components/Cart'
import {Route,Routes} from 'react-router-dom'
import Purchase from './components/Purchase'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'

function App() {

  return (
    <div className="App">
     <Routes>
        <Route path="/login" element={<LogIn/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/purchase" element={<Purchase/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/cart" element={<Cart/>} />

      </Routes>
    </div>
  );
}

export default App;
