import {Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Homepage from './Components/Homepage';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
// import Subnav from './Components/Subnav';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/'element={<Homepage/>} />
      <Route path='/header'element={<Header/>} />
      <Route path='/side'element={<Sidebar/>} />
      </Routes>
    
    </div>
  );
}

export default App;
