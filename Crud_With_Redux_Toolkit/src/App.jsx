import "./App.css";
import Add_Data from "./components/Add_Data";
import Navbar from "./components/Navbar";
import Read_page from "./components/Read_page";
import Update from "./components/Update";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {


  return (
    <>

   <BrowserRouter>
   <Navbar/>
      <Routes>
        
      <Route path="/Read_page" element={<Read_page />} />
          <Route path="/Add_Data" element={<Add_Data />} />
          <Route path="/Update/:id" element={<Update />} />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
