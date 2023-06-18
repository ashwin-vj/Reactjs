
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate=useNavigate();
  return (
    <div>Home
        <Link to='/User'>User</Link>
        <button onClick={()=>navigate('/user')}>go to user</button>
    </div>
  )
}
