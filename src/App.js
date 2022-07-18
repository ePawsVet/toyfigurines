import React, { useState, useEffect  } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//components
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Toys from './components/Toys';

//style
import 'antd/dist/antd.css';
import './style.css'

function App() {
  const [users, setUsers] = useState([])
  const [toys, setToys] = useState([])


  //toys
  useEffect(() => {
    const getToys = async () => {
      const toysFromServer = await fetchToys()
      setToys(toysFromServer)
    }

    getToys()
  }, [])

  // Fetch toys
  const fetchToys = async () => {
    const res = await fetch('http://localhost:5000/toyfigurines')
    const data = await res.json()
   console.log(data)
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
          <Route path='/signup' element={<SignUp onAdd={onSignUp}/>} />
          <Route path='/toys' element={<Toys toylist={toys} onAddToy={onAddToy}/>} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
