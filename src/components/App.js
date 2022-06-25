// sca - remove
//import logo from './logo.svg';

import React from 'react';
import './App.css';

// sca - Adding my components
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  return (
    <div>
      <Header />
      {/* <AddContact />
      <ContactList /> */}
    </div>

    //<div>Hello World</div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
