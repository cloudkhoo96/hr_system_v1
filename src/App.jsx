import { Card, Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TheNavbar from "./components/TheNavbar";
import EmployeesList from "./pages/EmployeesList";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewEmployeeForm from "./pages/NewEmployeeForm";

function App() {
  return (
    <Card>
    <BrowserRouter>
      <Header />
      <TheNavbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employeeslist" element={<EmployeesList />} />
        <Route path="/newemployeeform" element={<NewEmployeeForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </Card>
  );
}

export default App;
