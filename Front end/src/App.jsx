import { Route, Routes } from "react-router-dom";
import Nav from "./components/Navbar/nav";
import Task from "./components/Tasks/tasks";
import Profile from "./components/Profile/profile";
import Login from "./components/Login/login";
import SignUp from "./components/Signup/signup";
import Category from "./components/Features/category";
import Home from "./components/Home/home";
import IsAuth from "./auth";
import NotFound from "./components/NotFound/not-found";


function App() {

  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="category" element={<Category />} />
      <Route path="/task/:id" element={<Task />} />
      <Route element={<IsAuth />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>

    </>
  )
}

export default App;
