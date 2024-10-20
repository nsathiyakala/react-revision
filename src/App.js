import './App.css';
import { BrowserRouter,Route, Routes }  from "react-router-dom"
import Home from './pages/home';
import Components from './pages/components';
import Hooks from './pages/hooks';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/components' element={<Components/>}/>
      <Route path='/hooks' element={<Hooks/>}/>
      </Routes>
      </div>
      
    </BrowserRouter>
    
  );
}

export default App;