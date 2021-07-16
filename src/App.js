import './App.css';
import FilterPage from './pages/filterPage/filterPage';
import MainPage from './pages/mainPage/mainPage';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Filter , Game } from './routes/routes';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={Filter} component={FilterPage} />
        <Route exact path={Game} component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
