import React, { useState, useEffect  } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//components
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Toys from './components/Toys';
import Header from './components/Header';

//style
import 'antd/dist/antd.css';
import './style.css'

function App() {

  const [users, setUsers] = useState([])
  const [toys, setToys] = useState([])

  const [credential, setCredential] = useState([])


  //toys
  useEffect(() => {
    const getToys = async () => {
      const toysFromServer = await fetchToys()
      setToys(toysFromServer)
    }

    const getUserCred = () => {
      setCredential([...credential, JSON.parse(localStorage.getItem('user'))])
     // return JSON.parse(localStorage.getItem('user'))
     console.log(credential)
    }

    getToys()
    getUserCred()
  }, [])

  // Fetch toys
  const fetchToys = async () => {
    const res = await fetch('http://localhost:5000/toyfigurines')
    const data = await res.json()
   
    return data
  }

  //Add toy figurines
  const onAddToy = async (toy) => {
    const res = await fetch('http://localhost:5000/toyfigurines', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(toy),
    })

    const data = await res.json()

    setToys([...toys, data])

    
  }

  // Delete Toy
  const deleteToy = async (id) => {
    const res = await fetch(`http://localhost:5000/toyfigurines/${id}`, {
      method: 'DELETE',
    })
    
    res.status === 200
      ? setToys(toys.filter((toy) => toy.id !== id))
      : alert('Error Deleting This Toy')
  }




  //users
  const onSignUp = async (user) => {
    const res = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })

    const data = await res.json()

    setUsers([...users, data])

    
  }


  // Fetch Users
  // const fetchUsers = async (user) => {
  //   const res = await fetch('http://localhost:5000/users')
  //   const data = await res.json()
    
  //   const userExists = data.filter((acct) => acct.email === user.email && acct.password === user.password).length > 0 ? true : false
    
  //   if(userExists) {
  //     localStorage.setItem("email", JSON.stringify(user.email));
  //     localStorage.setItem(
  //       "password",
  //       JSON.stringify(user.password)
  //     );
  //   }
  //   return data
  // }
  

  return (
    <Router>
      <div className="App">

        <Routes>
          <Route
            path='/'
            element={
              <>
                <SignIn/>
              </>
            }
          />
          <Route path='/signup' element={
              <>
                <SignUp onAdd={onSignUp}/>
              </>
            } />
          <Route path='/toys' element={
              <>
                <Toys toylist={toys} onAddToy={onAddToy} deleteToy={deleteToy} cred={credential}/>
              </>
            } 
          />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
