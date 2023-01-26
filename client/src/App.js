import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />]
      <div style={{paddingTop:"300px", paddingBottom:"300px"}}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
