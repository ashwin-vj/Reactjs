import React from 'react';
import './App.css';

/* function App() {
    sessionStorage.setItem('id', 8);
    return (
        <div className="App">
            <h1> Session Storage</h1>
            <div>Id from Session Storage :{sessionStorage.getItem('id')}</div>
        </div>
    );
}
export default App;
 */

// ----->LOCAL STORAGE<-------//
function App() {
    localStorage.setItem('id', 33);
    return (
        <div className="App">
            <h1> Local Storage</h1>
            <div>Id from local Storage{localStorage.getItem('id')}</div>
        </div>
    );
}
export default App;
