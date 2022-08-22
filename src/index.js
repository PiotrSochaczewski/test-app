import React, { Component } from 'react';
import { createRoot }from 'react-dom';
import AppFooter from './AppFooter';
import './index.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Hello, world!</h1>
        </div>
        <AppFooter />
      </div>
    );
  }
}

const root= createRoot(document.getElementById('root'))
root.render(<App />)
