import './App.css';
import SignUp from './components/auth/signUp';
import MainColumn from './components/main';
import AddBill from './components/addBill';
import ViewReport from './components/viewReports';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SignUp />} />
                <Route path='viewReport' element={<ViewReport />} />
                <Route path="addbill" element={<AddBill />} />
            </Routes>
          </BrowserRouter>

    </div>
  );
}

export default App;
