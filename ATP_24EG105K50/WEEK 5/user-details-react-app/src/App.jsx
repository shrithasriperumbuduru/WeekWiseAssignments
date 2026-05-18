import './App.css'
import User from './components/user';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import Footer from './components/Footer';
function App(){
  
  //return react element
  return(
    <div>
      <Navbar/>
    <div className='p-16 min-h-screen bg-blue-200'>
      <UserList/>
    </div>
    <Footer/>
    </div>
  );
}
export default App;
