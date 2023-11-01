import { Route, Routes} from 'react-router-dom'
import './App.css';
import Homepage from './Components/Homepage';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import SignIn from './Components/SignIn';
import Register from './Components/Register';
import Video from './Components/Video';

// import Subnav from './Components/Subnav';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/'element={<Homepage/>} />
      <Route path='/header'element={<Header/>} />
      <Route path='/side'element={<Sidebar/>} />
      <Route path='/signin'element={<SignIn/>} />
      <Route path='/register'element={<Register/>} />
      <Route path='/video'element={<Video/>} />
      </Routes>
    
    </div>
  );
}

export default App;
