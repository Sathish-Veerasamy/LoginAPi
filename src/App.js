
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import { useEffect } from 'react';



function App() {
  //using navigate to route to the login page initialy
  const navigate=useNavigate();
  useEffect(()=>{
navigate("/login")
console.log("use effect worked")
  },[])
  return (
    <div className="App">
      
      {/* using routes to route over the pages in the app */}
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/profile" element={<ProfilePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
