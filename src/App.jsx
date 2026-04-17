import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import UserList from "./components/UserList/UserList";
import Project from "./components/Project/Project";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

export default function App() {
  return (
    <>
      <nav style={{ padding: "20px", background: "#eee" }}>
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
        <Link to="/about" style={{ marginRight: "10px" }}>
          About
        </Link>
        <Link to="/contact" style={{ marginRight: "10px" }}>
          Contact
        </Link>
        <Link to="/project" style={{ marginRight: "10px" }}>
          Project
        </Link>
        <Link to="/user" style={{ marginRight: "10px" }}>
          UserList
        </Link>
        <Link to="/shopping" style={{ marginRight: "10px" }}>
          ShoppingCart
        </Link>
      </nav>
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user" element={<UserList />} />
          <Route path="/project" element={<Project />} />
          <Route path="/shopping" element={<ShoppingCart />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </div>
    </>
  );
}
