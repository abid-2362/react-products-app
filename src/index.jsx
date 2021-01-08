import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CustomRoutes from './routs';
// Components

// Load CSS
import './css/bootstrap-darkly.min.css'; // bootstrap 4 dark theme
import './css/bootstrap-theme.min.css'; // bootstrap-theme style
import '../node_modules/toastr/build/toastr.min.css';
import './css/style.css';
// Load Js
// copy images from src to dist folder
require.context('../src', true, /^\.\//);

// Load JS
import './js/jquery-global.js'; // to point jQuery in global scope, it is necessary in ES6 to load it in this way.
import './js/bootstrap.bundle.min.js';

// class App extends Component{
//   render() {
//     return(
//       <CustomRoutes />
//     );
//   }
// }

/*
const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)
export default BasicExample
*/

ReactDOM.render(
  <CustomRoutes />,
  document.getElementById('app')
)
