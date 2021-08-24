import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';

// get our fontawesome imports
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

ReactDOM.render(<App />, document.getElementById('root'));
