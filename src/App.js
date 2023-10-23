import './App.css';
import Home from './components/Home';
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import Profile from './components/Profile/Profile'
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/signin' element={<SignIn/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
        <ToastContainer
        theme='dark' />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
