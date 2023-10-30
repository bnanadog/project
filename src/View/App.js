import NavBar from "./Pages/NavBar/NavBar";
import Contain from "./Pages/Contain/Contain";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/NavBar/Header";
import Banner from "./Pages/Contain/Banner";
import Info from "./Pages/Contain/Info";
import Login from "./Pages/NavBar/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Router>
        <Routes>
          <Route path="/Info" element={<Info />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/' element={<Contain />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
