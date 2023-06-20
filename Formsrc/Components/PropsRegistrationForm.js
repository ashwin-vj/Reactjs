import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PropsRegistrationForm = (props) => {
 
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation here
    if (props.name === '') {
      alert('Please enter your name');
      return;
    }

    if (props.address === '') {
      alert('Please enter your address');
      return;
    }

    if (props.email === '') {
      alert('Please enter your email');
      return;
    }

    if (props.password === '') {
      alert('Please enter your password');
      return;
    }

    if (props.phoneNumber === '') {
      alert('Please enter your phone number');
      return;
    }

    if (props.gender === '') {
      alert('Please select your gender');
      return;
    }

    // If all fields are valid, add the user to the table
    const newUser = {
      name: props.name,
      address: props.address,
      email: props.email,
      password: props.password,
      phoneNumber: props.phoneNumber,
      gender: props.gender,
    };

    setUsers([...users, newUser]);
    clearForm();
  };

  const handleUpdate = (event) => {
    event.preventDefault();

    if (!selectedUser) {
      alert('Please select a user to update');
      return;
    }

    // Perform update validation here
    if (props.name === '') {
      alert('Please enter your name');
      return;
    }

    if (props.address === '') {
      alert('Please enter your address');
      return;
    }

    if (props.email === '') {
      alert('Please enter your email');
      return;
    }

    if (props.password === '') {
      alert('Please enter your password');
      return;
    }

    if (props.phoneNumber === '') {
      alert('Please enter your phone number');
      return;
    }

    if (props.gender === '') {
      alert('Please select your gender');
      return;
    }

    // If all fields are valid, update the user in the table
    const updatedUser = {
      ...selectedUser,
      name: props.name,
      address: props.address,
      email: props.email,
      password: props.password,
      phoneNumber: props.phoneNumber,
      gender: props.gender,
    };

    const updatedUsers = users.map((user) => (user === selectedUser ? updatedUser : user));
    setUsers(updatedUsers);
    clearForm();
  };

  const handleDelete = (event) => {
    event.preventDefault();

    if (!selectedUser) {
      alert('Please select a user to delete');
      return;
    }

    // Delete the selected user from the table
    const updatedUsers = users.filter((user) => user !== selectedUser);
    setUsers(updatedUsers);
    clearForm();
  };

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    props.handleNameChange({ target: { value: user.name } });
    props.handleAddressChange({ target: { value: user.address } });
    props.handleEmailChange({ target: { value: user.email } });
    props.handlePasswordChange({ target: { value: user.password } });
    props.handlePhoneNumberChange({ target: { value: user.phoneNumber } });
    props.handleGenderChange({ target: { value: user.gender } });
  };

  const clearForm = () => {
    setSelectedUser(null);
    props.handleNameChange({ target: { value: '' } });
    props.handleAddressChange({ target: { value: '' } });
    props.handleEmailChange({ target: { value: '' } });
    props.handlePasswordChange({ target: { value: '' } });
    props.handlePhoneNumberChange({ target: { value: '' } });
    props.handleGenderChange({ target: { value: '' } });
  };
  const navigate = useNavigate();
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h2>Props</h2> 
      <div class="footer">
        <button onClick={()=>navigate('/props/useContext')}>Reg using useContext</button>
        </div>
        &nbsp;<label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Name:
          &nbsp;&nbsp;&nbsp;&nbsp;<input type="text" value={props.name} onChange={props.handleNameChange} />
        </label>
        <br />
        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Address:
          &nbsp;&nbsp;&nbsp;&nbsp;<input type="text" value={props.address} onChange={props.handleAddressChange} />
        </label>
        <br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
        <label>&nbsp;&nbsp;&nbsp; &nbsp;
          Email:
          &nbsp;&nbsp;&nbsp; <input type="email" value={props.email} onChange={props.handleEmailChange} />
        </label>
        <br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
        <label>
          Password:
          &nbsp;&nbsp;&nbsp; <input type="password" value={props.password} onChange={props.handlePasswordChange} />
        </label>
        <br />
        <label>
          Phone Number:
          &nbsp;&nbsp;&nbsp; <input type="tel" value={props.phoneNumber} onChange={props.handlePhoneNumberChange} />
        </label>
        <br />
        <label>
          Gender:
          <label>&nbsp;&nbsp;&nbsp; 
            <input
              type="radio"
              value="male"
              checked={props.gender === 'male'}
              onChange={props.handleGenderChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              value="female"
              checked={props.gender === 'female'}
              onChange={props.handleGenderChange}
            />
            Female
          </label>
        </label>
        <br />
        <button type="submit">Register</button>&nbsp;&nbsp;&nbsp; 
        <button onClick={handleUpdate}>Update</button>&nbsp;&nbsp;&nbsp; 
        <button onClick={handleDelete}>Delete</button>
      </form>
      <br />
      <center>
      <table>
        <thead>
        <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Address</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Phone Number</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Gender</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
           <tr
           key={index}
           style={{ cursor: 'pointer', backgroundColor: selectedUser === user ? 'lightblue' : 'white' }}
           onClick={() => handleSelectUser(user)}
         >
           <td style={{ border: '1px solid black', padding: '8px' }}>{user.name}</td>
           <td style={{ border: '1px solid black', padding: '8px' }}>{user.address}</td>
           <td style={{ border: '1px solid black', padding: '8px' }}>{user.email}</td>
           <td style={{ border: '1px solid black', padding: '8px' }}>{user.phoneNumber}</td>
           <td style={{ border: '1px solid black', padding: '8px' }}>{user.gender}</td>
         </tr>
          ))}
        </tbody>
      </table>
      </center>
    </div>
  );
};

export default PropsRegistrationForm;



