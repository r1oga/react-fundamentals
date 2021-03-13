// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({ onSubmitUsername }) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // const [error, setError] = React.useState(false)
  const [username, setUsername] = React.useState('')
  // const usernameRef = React.useRef(null)
  const handleSubmit = event => {
    event.preventDefault()
    alert(`You entered: ${username}`)
  }

  const handleChange = event => {
    const {
      target: { value }
    } = event

    setUsername(value.toLowerCase())
  }
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          // ref={usernameRef}
          onChange={handleChange}
          name="username"
          value={username}
        />
      </div>
      <button type="submit">Submit</button>
      {/* {error && <p>{error}</p>} */}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
