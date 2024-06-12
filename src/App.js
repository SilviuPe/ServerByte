import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, Register, Login, FAQ } from './Containers';
function App() {
  return (
    <div className='ServerByte_APP'>
        <BrowserRouter>
            <Routes>
                <Route exact path = '/' element = {<HomePage/>} />
                <Route exact path = '/register' element = {<Register/>} />
                <Route exact path = '/login' element = {<Login/>} />
                <Route exact path = '/faq_page' element = {<FAQ/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
