import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Allblogs from './components/blogSection/Allblogs';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Contact from './components/Contact';
import Admin from './components/admin/Admin';
// import About from './components/';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/blog" element={<Allblogs />} />
     <Route  path='/singlepage:id' element={<Allblogs/>} />
     <Route path='/login' element={<Login/>}/>
     <Route path='/register' element={<Register/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
