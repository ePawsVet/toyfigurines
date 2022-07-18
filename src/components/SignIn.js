import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Button  from './Button'

const SignIn = () => {

    const [users, setUsers] = useState([]);

  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
  
    const onSubmit = (e) => {
      e.preventDefault()
  
     // onAdd({ email,password })
  
  
      setEmail('')
      setPassword('')
      
    }

  return (
    <div className='form-content'>
        <form className='form'>
            <h1 className='form-header'>SIGN IN</h1>
            <div className='form-inputs'>
                <label className='form-label'>Email<span>*</span></label>
                <input
                        required
                        type='email'
                        className='form-input'
                        name="email"
                        placeholder="Enter your email"
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
                >
                </input>
            </div>
            {/* <Button color="blue" text="Sign In" className="form-input-btn" onClick={onSignIn}/> */}
            <input type='submit' value='Sign In' className='form-input-btn' />
            <span className='form-input-login'>
            Don't have an account? Sign up <Link to='/signup'>here</Link>
            </span>
        </form>
    </div>
  )
}

export default SignIn