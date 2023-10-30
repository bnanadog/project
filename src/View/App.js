import NavBar from "./Pages/NavBar/NavBar";
import Contain from "./Pages/Contain/Contain";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/NavBar/Header";
import Banner from "./Pages/Contain/Banner"

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Banner />
      <Contain />
      <Footer />
    </div>
  );
}

export default App;
