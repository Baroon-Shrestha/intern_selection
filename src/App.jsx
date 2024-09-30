import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import AddMem from "./Components/AddMem";

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <div className="ml-[20%]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addmem" element={<AddMem />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
