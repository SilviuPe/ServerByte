import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, Register, Login } from './Containers';
function App() {
  return (
    <div className='ServerByte_APP'>
        <BrowserRouter>
            <Routes>
                <Route exact path = '/' element = {<HomePage/>} />
                <Route exact path = '/register' element = {<Register/>} />
                <Route exact path = '/login' element = {<Login/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
