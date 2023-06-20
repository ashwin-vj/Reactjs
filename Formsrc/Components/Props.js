import React, { useState } from 'react';
import PropsRegistrationForm from './PropsRegistrationForm';

const Props = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
    
   
    
  };

  return (
    <div>
      <PropsRegistrationForm
        name={name}
        address={address}
        email={email}
        password={password}
        phoneNumber={phoneNumber}
        gender={gender}
        handleNameChange={handleNameChange}
        handleAddressChange={handleAddressChange}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handlePhoneNumberChange={handlePhoneNumberChange}
        handleGenderChange={handleGenderChange}
      />
    </div>
  );
};

export default Props;







/* import React from 'react';
import {  useNavigate } from 'react-router-dom'

 function Props() {
    const navigate=useNavigate();
  return (
    <div>
      <h2>Props</h2> 
      <div class="footer">
        <button onClick={()=>navigate('/props/useContext')}>Reg using useContext</button>
        </div>
    </div>
  );
  }

  export default Props; */