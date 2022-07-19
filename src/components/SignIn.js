import React, { useState } from 'react'
import { Link ,useNavigate } from 'react-router-dom'


const SignIn = () => {

  
    const navigate  = useNavigate();
    const [users, setUsers] = useState([]);

  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

   
    React.useEffect(() => {
      const getToys = async () => {
        const usersFromServer = await fetchUsers()
        setUsers(usersFromServer)
      }

      getToys()
    }, [])

    
    const fetchUsers = async () => {
      const res = await fetch('http://localhost:5000/users')
      const data = await res.json()
      
      return data
    }
  
    const onSubmit = (e) => {
      e.preventDefault()
  
      let userCredentials  = users.filter((user)=> user.email === email && user.password=== password)
      if(userCredentials.length > 0){
        navigate ("/toys",{ state: { userCredentials: userCredentials } })
        localStorage.setItem("user", JSON.stringify(userCredentials[0]));
        
      }else{
        alert("Invalid username/password.")
      }
      setEmail('')
      setPassword('')

      users.filter()
      
    }

  return (
    <div className='form-content'>
        <form className='form' onSubmit={onSubmit}>
            <h1 className='form-header'>SIGN IN</h1>
            <div className='form-inputs'>
                <label className='form-label'>Email<span>*</span></label>
                <input
                        required
                        type='email'
                        className='form-input'
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                >
                </input>
            </div>
            <div className='form-inputs'>
                <label className='form-label'>Password<span>*</span></label>
                <input
                        required
                        type='password'
                        className='form-input'
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                >
                </input>
            </div>
            {/* <Button color="blue" text="Sign In" className="form-input-btn" onClick={onSignIn}/> */}
            <input type='submit' value='Sign In' className='form-input-btn' onClick={onSubmit}/>
            <span className='form-input-login'>
            Don't have an account? Sign up <Link to='/signup'>here</Link>
            </span>
        </form>
    </div>
  )
}

export default SignIn