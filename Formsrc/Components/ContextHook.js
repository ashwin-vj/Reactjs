import React from "react";
import {  useNavigate } from 'react-router-dom'


export default function ContextHook() {
  const navigate=useNavigate();
return (
  <div>
    <h2>Hey I,m Ashwin</h2> 
    <div class="footer">
      <button onClick={()=>navigate('/')}>Back To Home</button>
      </div>
  </div>
);
};

/* 
import React, { useState, useContext, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom'                                                                                                                                                                                                         
import { ConRegistrationForm } from './ConRegistrationForm';

const ContextHook = () => {
  const { addUser, updateUser, editingUser, setEditingUser } = useContext(ConRegistrationForm);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setAddress(editingUser.address);
      setEmail(editingUser.email);
      setPassword(editingUser.password);
      setPhone(editingUser.phone);
      setGender(editingUser.gender);
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !email || !password || !phone || !gender) {
      alert('Please fill in all fields');
      return;
    }
    const newUser = {
      name,
      address,
      email,
      password,
      phone,
      gender,
    };
    if (editingUser) {
      updateUser(newUser);
    } else {
      addUser(newUser);
    }
    setName('');
    setAddress('');
    setEmail('');
    setPassword('');
    setPhone('');
    setGender('');
    setEditingUser(null);
  };
  const navigate=useNavigate();
  return (
    <center>
    <h2>UseContext</h2> 
    <div class="footer">
      <button onClick={()=>navigate('/')}>Back To Home</button>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label class='lbl'>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label class='lbl'>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div>
          <label class='lbl'>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label class='lbl'>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label class='lbl'>Phone Number:</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <label class='lbl'>Gender:</label>
          <label class='lbl'>
            <input type="radio" value="male" checked={gender === 'male'} onChange={() => setGender('male')} />
            Male
          </label>
          <label class='lbl'>
            <input type="radio" value="female" checked={gender === 'female'} onChange={() => setGender('female')} />
            Female
          </label>
        </div>
        <button type="submit">{editingUser ? 'Update' : 'Register'}</button>
      </form>
    </center>
    
  );
};

export default ContextHook; */


/* import React from "react";
import {  useNavigate } from 'react-router-dom'

export default function ContextHook() {
  const navigate=useNavigate();
return (
  <div>
    <h2>UseContext</h2> 
    <div class="footer">
      <button onClick={()=>navigate('/')}>Back To Home</button>
      </div>
  </div>
);
}; */




// export default function UseContext() {
//     const navigate=useNavigate();
//   return (
//     <div>
//       <h2>UseContext</h2> 
//       <div class="footer">
//         <button onClick={()=>navigate('/')}>Back To Home</button>
//         </div>
//     </div>
//   )
// }