import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import EmployeesList from "./pages/EmployeesList";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewEmployeeForm from "./pages/NewEmployeeForm";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employeeslist" element={<EmployeesList />} />
        <Route path="/newemployeeform" element={<NewEmployeeForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
