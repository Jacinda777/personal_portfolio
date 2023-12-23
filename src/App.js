import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Switch  } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './pages/Home';

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
