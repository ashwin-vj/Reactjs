
import React from 'react'
import {  useNavigate } from 'react-router-dom'


export default function Home() {
    const navigate=useNavigate();
  return (
    <div>
      <h2>Home</h2> 
      <div class="footer">
        <button onClick={()=>navigate('/props')}>Reg using Props</button>
        </div>
    </div>
  )
}

