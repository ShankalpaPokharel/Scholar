import React, { useState } from 'react'
import axios from 'axios'
import { apiUrl } from '../../constant/variables'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [formErrors, setFormErrors] = useState({username:null,password:null})
    const [msg, setMsg] = useState("")
    const [msg1, setMsg1] = useState("")

    const navigate = useNavigate()


    const handleSubmit=(e)=>{
        e.preventDefault()
        setMsg("")
        setMsg1("")
        const username = e.target.username.value
        const password = e.target.password.value
        if (!username) {
            setFormErrors((prevFormErrors) => ({
              ...prevFormErrors,
              username: "Username is required",
            }));
            return;
          } else {
            setFormErrors((prevFormErrors) => ({ ...prevFormErrors, username: "" }));
          }
      
          if (!password) {
            setFormErrors((prevFormErrors) => ({
              ...prevFormErrors,
              password: "Password is required",
            }));
            return;
          } else {
            setFormErrors((prevFormErrors) => ({ ...prevFormErrors, password: "" }));
          }

          axios.post(`${apiUrl}/admin/login`, { username, password })
          .then(response => {
              console.log("Login successful", response.data);
              setMsg1(response?.data.msg)
              localStorage.setItem('jwt', response.data.jwt);
              navigate("/admin")

          })
          .catch(error => {
              setMsg(error.response?.data.msg)
              console.error("Login error", error);
          });
          
    }
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
     {/* Left: Image  */}
<div className="w-1/2 h-screen hidden lg:block">
  <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Placeholder Image" className="object-cover w-full h-full"/>
</div>
{/* Right: Login Form */}
<div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
  <h1 className="text-2xl font-semibold mb-4">Login</h1>
  <form onSubmit={handleSubmit}>
    {/* Username Input */}
    <div className="mb-4">
      <label htmlFor="username" className="block text-gray-600">Username</label>
      <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" required/>
      {formErrors.username && <p className='mt-2 text-sm text-red-500'>field shouldn't be empty</p>}
    </div>
    {/* Password Input */}
    <div className="mb-8">
      <label htmlFor="password" className="block text-gray-600">Password</label>
      <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" required/>
     {formErrors.password && <p className='mt-2 text-sm text-red-500'>field shouldn't be empty</p>}
    </div>
    
    
  
    {/* Login Button */}
    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
    {msg && <p className='mt-2 text-sm text-red-500 text-center'>invalid credentials</p>}
    {msg1 && <p className='mt-2 text-sm text-green-500 text-center'>{msg1}</p>}
  </form>

</div>
</div>
  )
}
