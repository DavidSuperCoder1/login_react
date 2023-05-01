import React, { useState } from 'react'

export default function LoginForm({Login, error}) {

    const [details, setDetails] = useState({name: '', email:'', password:''});
    const submitHandler = e=>{
        e.preventDefault();
        Login(details);
    }
    return (
    <form onSubmit={submitHandler}>
    <h2>Login Form</h2>
    <div className='inpt'>
        {error !== "" ? (<p>{error}</p>) : "" }
        <label>Username : </label><br/>
        <input type='text' placeholder='Username' onChange={e=>setDetails({...details, name : e.target.value})}/>
    </div>
    <div className='inpt'>
        <label>Email : </label><br/>
        <input type='email' placeholder='Email' onChange={e=>setDetails({...details, email : e.target.value})}/>
    </div>
    <div className='inpt'>
        <label>Password : </label><br/>
        <input type='password' placeholder='Password' onChange={e=>setDetails({...details, password : e.target.value})}/><br/><br/>
        <button>Log in</button>
    </div>           
</form>
  )
}
