import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import LandingPage from './pages/LandingPage'
import AdminPage from './pages/AdminPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' font-poppins'>
      {/* <LandingPage/> */}
      <AdminPage/>
    </div>
  )
}

export default App
