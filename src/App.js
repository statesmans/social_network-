
import Navbar from './components/Navbar';
import Header from './components/Header';
import Profile from './components/Profile';
import './main.css';


const App = () => {
    return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <Profile/>
      </div>
    );
} 
            
export default App;


