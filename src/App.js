import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      
      
      <div style={{ display: 'flex-container' }}>
        <Sidebar />
        {/* Your main content goes here */}
        <main>  
        <h1>Main Content</h1>
        <p>..........................</p>
        <img className="image" src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=600&h=400&fit=crop&dpr=1" alt="main" />
      </main>
        
      </div>
    </div>
  );
}

export default App;
