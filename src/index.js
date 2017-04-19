// Libs
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import { HashRouter } from 'react-router-dom';

// CSS
import './css/style.css';

// Components
import App from './components/App';
import Home from './components/Home';
import Courses from './components/Courses';
import About from './components/About';
import Teachers from './components/Teachers'

// Render
render((
    <HashRouter >
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/courses" component={Courses} />
        <Route path="/teachers" component={Teachers} />
      </div>
    </HashRouter>    
), document.getElementById('root'));