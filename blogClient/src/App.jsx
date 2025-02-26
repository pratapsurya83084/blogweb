import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Allblogs from "./components/blogSection/Allblogs";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
// import Contact from "./components/Contact";
import Admin from "./components/admin/Admin";
import SinglePageBlog from "./components/blogSection/SinglePageBlog";
import ProtectAdmin from "./components/protectedRoute/ProtectAdmin";
import ShowError from './components/ShowError'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Allblogs />} />
        <Route path="/singlepage/:id" element={<SinglePageBlog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="*" element={<ShowError />} />
        {/* Protect the /admin route */}
        <Route element={<ProtectAdmin />}>
          <Route path="/admin" element={<Admin />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
