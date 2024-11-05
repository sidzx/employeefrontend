import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css';
import Employee from './Components/Employee';
import Employeelist from './Components/Employeelist';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <>
    <Routes>
   <Route path='/' element={<Employee/>}/>
   <Route path='/list' element={<Employeelist/>}/>
    </Routes>
    <ToastContainer/>
    
     

    </>

    </div>
   
  );
}

export default App;
