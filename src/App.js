import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Content from "./components/Content";
import About from "./components/About";
import Summary from "./components/Summary";

function App() {
  return (
    <>
    <Navbar title="Mycart" home="Home" about="Summary" />
    <Content/>
    
    <div className="container my-5" >
    <Textform heading="Enter the text:"/>
  </div>
  
    {<About/>}
    {/* <Summary/> */}

    </>
  );
}
export default App;
