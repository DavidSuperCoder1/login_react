import react, { useState } from 'react';
import LoginForm from './LoginForm';

function App(){
  const adminUser = {
    email : 'mg@admin.com',
    password : 'mg123'
  }

  const[user ,setUser] =useState({name:'' , email:''});
  const[error, setError]=useState('');

  const Login = details =>{
    console.log(details);
    if(details.email === adminUser.email && details.password===adminUser.password){
        console.log("match");
        setUser({name:details.name, email:details.email})
        
    }else{
         setError('Do not Match');
    }
  }

  const Logout = ()=>{
    console.log("Logout");
    setUser({name:"", email:"", password:''})
  }

    return(
      <div className='App'>
        {(user.email != '') ? 
        <div className='hello'>
          <h2>Welcome "{user.name}"</h2>
          <button onClick={Logout}>Log out</button>
        </div> :
          <LoginForm Login={Login} error={error}/>
        }
       
     
      </div>
    )
}
export default App;

