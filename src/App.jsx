import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout/Layout';
import './assets/css/vendor.min.css';
import './assets/css/icons.min.css';
import './assets/css/app.min.css';

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
