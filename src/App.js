import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import {HashRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './componant/Home';
import SignUP from './componant/SignUP';
import Error from './componant/Error';
import Signin from './componant/Signin';
import ContactUs from './componant/ContactUs';
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    document.title='Life App'
  },[])
  return (
  <HashRouter>
  <Routes>
    {["/",'h',"H","Home","home"].map((path,index)=>{
    return  <Route path={path} element={<Home/>} key={index}/>
    })}
    <Route path="/signin" element={<Signin/>}/>
    <Route path="/signup" element={<SignUP/>}/>
   <Route path="/contactus" element={<ContactUs/>}/>
    <Route path='*' element={<Error/>}/>
  </Routes>
  </HashRouter>
  
     
  );
}

export default App;
