import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login";
import Create from "./Components/Create";
import Edit from "./Components/Edit";
import Details from "./Components/Details";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Routes>
          <Route index element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/deatils" element={<Details/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/edit" element={<Edit/>}/>

        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
