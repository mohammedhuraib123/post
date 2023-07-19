import logo from './logo.svg';
import './App.css';
import Newsitem from './component/Newsitem';
import Navbar from './component/Navbar';
import Nicomponent from './component/Nicomponent';



//import {Switch} from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      
      <Navbar/>

  <Newsitem pagesize={9}  />
         
    </div>
  );
}

export default App;
