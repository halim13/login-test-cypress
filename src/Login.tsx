import React, {useState} from 'react'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = async () => {
    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address.')
      return
    }

    if (password === 'correctpassword') {
      setMessage('Login successful!')
    } else {
      setMessage('Login failed.')
    }
  }

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
  }

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      {message && <p>{message}</p>}
    </div>
  )
}

export default Login
