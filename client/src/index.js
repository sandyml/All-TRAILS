import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
  );
  
  // ReactDOM.render(
  //   <React.StrictMode>
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/" element={ <App /> }>
  //         </Route>
  //       </Routes>
  //     </BrowserRouter>
  //   </React.StrictMode>,
  //   document.getElementById('root')
  //   );