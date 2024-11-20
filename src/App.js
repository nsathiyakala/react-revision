import './App.css';
import { BrowserRouter,Route, Routes }  from "react-router-dom"
import Home from './pages/home';
import Components from './pages/components';
import Hooks from './pages/hooks';
import Header from "./components/header"
import {ThemeProvider} from './theme-context';


function App() {


  return (
    <BrowserRouter>
    <ThemeProvider>
    <Header/>
      <div className='App'>
     
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/components' element={<Components/>}/>
      <Route path='/hooks' element={<Hooks/>}/>
      </Routes>
      </div>
    </ThemeProvider>
     
      
    </BrowserRouter>
    
  );
}

export default App;
