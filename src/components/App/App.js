import React from 'react';
import styles from './App.module.css';
import Todo from '../Todo/todo';
import Contacts from '../Contacts/contacts';
import About from '../About/about';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => (
  <Router>
  <div className={styles.content}>
    <div className={styles.sidebar}>
        <Link to='/'><a>ABOUT</a></Link>
        <Link to='/todo'><a>TASKS</a></Link>
        <Link to='/contacts'><a>CONTACTS</a></Link>
    </div>
    <div>
    <Route path='/' exact component={About} />
    <Route path='/todo' component={Todo} />
    <Route path='/contacts' component={Contacts} />
    </div>
  </div>
  </Router>
)

export default App;
