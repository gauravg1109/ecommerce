
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CustomerRoute from './Routers/CustomerRoute';
import AdminRouters from './Routers/AdminRouters';




function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRoute/>}></Route>
        <Route path='/admin/*' element={<AdminRouters/>}></Route>
      </Routes>
     
     
    </div>
  );
}

export default App;
