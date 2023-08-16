import { useEffect, useState } from 'react'
import './App.css'
//import { UsersList} from './components/UsersList'
import { type User } from'./types.d'



function App() {

  const [users, setUsers] = useState<User[]>([])


  useEffect(() => {
    fetch('https://randomuser.me/api?results=1')
      .then(async res => await res.json())
      .then(res => {
        setUsers(res.results)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <div className='App'>
        <h1>Prueba tecnica
        {/* // <UsersList users = {users} */}
{JSON.stringify(users)}
        </h1>
      </div>
    </>
  )
}

export default App
