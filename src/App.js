import { useState, useEffect } from 'react'
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { app } from './firebase-config.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import {Routes , Route,  useNavigate } from 'react-router-dom';


function App() {

  const [email , setEmail] = useState('');
  const [password, setPassword]  = useState('');
  const navigate = useNavigate();
  const handleAction = (e,id) => {
    e.preventDefault();
    const authentication = getAuth();
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          alert('Signed-In successfully!')
          navigate('/home')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
          
      })
      .catch((error) => {
        alert('Please try again')
})
    }
    if (id===1) {
      signInWithEmailAndPassword(authentication, email, password)
      .then((response)=>{
        alert('Log-In successfully!')
        navigate('/home')
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
      })
      .catch((error) => {
        alert('Please try again')
})
    }
   
   
}
    useEffect(() => {
      let authToken = sessionStorage.getItem('Auth Token')

      if (authToken) {
        navigate('/home')
      }
    }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login 
        title='Login'
        setEmail={setEmail}
        setPassword={setPassword}
        handleAction={(e)=>handleAction(e,1)}
        
        />} />
        
        <Route path='/' element={<Login 
        title='Register'
        setEmail={setEmail}
        setPassword={setPassword}
        handleAction={(e)=>handleAction(e,2)}

        />} />
        

        <Route path='/home' element={ <Home /> }></Route>
      </Routes>
         
    </div>
  );
}

export default App;
