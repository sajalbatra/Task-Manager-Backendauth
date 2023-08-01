import './App.css';
import {Home,Login, Signin,Task} from "./components/component";
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import bgImage from './assests/bgimg.png'
function App() {
  return (
    <Router>
    <img className='bgdeskimage' src={bgImage} alt=''/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/daytask' element={<Task/>}/>
    </Routes>
    </Router>
    
  );
}

export default App;
