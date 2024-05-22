import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './Containers';
function App() {
  return (
    <div className='ServerByte_APP'>
        <BrowserRouter>
            <Routes>
                <Route exact path = '/' element = {<HomePage/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
