import './App.css';
import { Routes, Route } from 'react-router-dom';
import EmployeePage from './components/EmployeePage';
import Homepage from './components/Homepage';
import Employee from "./components/Employee";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/employees:id" element={<Employee />} />
        <Route path="/employee" element={<EmployeePage />} />
      </Routes>
    </div>
  );
}

export default App;
