import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  const adminUser = {
    email: "admin@adminmail.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email: ""})
  const [error, setError] = useState("")

  const Login = details => {
    console.log(details)
  }

  const Logout = () => {
    console.log("logout")
  }

  return (
    <div className="App">
      {(user.email != "") ? (
        <div className="Welcome!">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button>Logout</button>
        </div>
      ) : (
        
      )}
    </div>
  );
}

export default App;
