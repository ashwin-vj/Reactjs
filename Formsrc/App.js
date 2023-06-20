import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Props from './Components/Props';
import ContextHook from './Components/ContextHook';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/props' element={<Props />} />
          <Route path='/props/useContext' element={<ContextHook />} />
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}
export default App;




