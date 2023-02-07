import React from 'react'
import { serverUrl, headers } from '../../Global'
// import { UserContext } from '../context/UserContext'

const Signup = () => {
  // const [username, setUsername] = useState("") // move to usercontext

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(serverUrl + "/signup", {
      method: "POST",
      headers,
    })
  }

  return (
    <div onClick={handleSubmit}>
      <h2>Please Create An Account</h2>
      <form>

      </form>
    </div>
  )
}

export default Signup