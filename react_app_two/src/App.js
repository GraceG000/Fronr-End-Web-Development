//import logo from './logo.svg';
import React from "react";
import './App.css';

export function App() {
  return (
    <div className="App">
     <form>
      <fieldset>
  <input type ="text" placeholder='first name' className="form-control"/> <input type ="text" placeholder='last name' className="form-control"/> <input type ="email" placeholder='email' className="form-control"/> 
   </fieldset>
   <div>
   <button type="submit" className="btn btn-primary">Subscribe</button>
   </div>
  </form>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
