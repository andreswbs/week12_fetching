import React, {useState, useEffect} from 'react'

function Users({url}) {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
  
    useEffect(() => {readUsers()}, [])
  
    const readUsers = async () => {
      setIsLoading(true)
      let response = await fetch(url)
      let result = await response.json()
      console.log(result.results)
      setIsLoading(false)
      setUsers(()=> result.results)
    }

    let usersList = users.map((user, index) => {
        return (
          <li key={index}>
            <div>
            {user.name.first} {user.name.last}
            <div>
              <img src={user.picture.large} alt="user" />
            </div>
            <div>
              email: {user.email}
            </div>
            </div>
          </li>
        )
      })
    
      if (isLoading) {
        usersList = (<div>Loading ...</div>)
      }
    
      return (
        <>
            <button onClick={readUsers}>
                Load users
            </button>
            <ul>
              {usersList}
            </ul>
        </>
      )
    
    }

export default Users