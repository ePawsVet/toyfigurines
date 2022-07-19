import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react';


const SignUp = ({ onAdd }) => {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
    
  
    const onSubmit = (e) => {
      e.preventDefault()
  
    
  
      onAdd({ firstname, lastname, username,email,password })
  
      setFirstname('')
      setLastname('')
      setUsername('')
      setEmail('')
      setPassword('')
      
    }
    
  return (
    <div className='form-content'>
        <form className='form' onSubmit={onSubmit}>
            <h1 className='form-header'>SIGN UP</h1>
            <div className='form-inputs'>
                <label className='form-label'>First Name<span>*</span></label>
                <input
                        required
                        type='text'
                        className='form-input'
                        name="firstname"
                        placeholder="Enter your first name"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                >
                </input>
            </div>
            <div className='form-inputs'>
                <label className='form-label'>Last Name<span>*</span></label>
                <input  
                        required
                        type='text'
                        className='form-input'
                        name="lastname"
                        placeholder="Enter your last name"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                >
                </input>
            </div>
            <div className='form-inputs'>
                <label className='form-label'>Username<span>*</span></label>
                <input
                        required
                        type='text'
                        className='form-input'
                        name="username"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                >
                </input>
            </div>
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
            {/* <div className='form-inputs'>
                <label className='form-label'>Confirm Password</label>
                <input
                        type='password'
                        className='form-input'
                        name="confirmpassword"
                        placeholder="Enter your password"
                >
                </input>
            </div> */}

            {/* <Button color="blue" text="Sign Up" className="form-input-btn" onClick={onSignUp}/> */}
            <input type='submit' value='Sign Up' className='form-input-btn' />

            <span className='form-input-login'>
                Already have an account? Login <Link to='/'>here</Link>
            </span>
        </form>
    </div>
  )
}

export default SignUp