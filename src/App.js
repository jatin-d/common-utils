import React from 'react';
import ToDo from './ToDo/ToDo'
import './App.css';
import { 
  BrowserRouter,
  Switch,
  Route,
  Link,
  // Redirect,
} from 'react-router-dom'

function App() {
  return (
    <main id="mainWrapper">
        <BrowserRouter>
          <Link to="/"><div className="homebtn">Home</div></Link>
          <Switch>
            <Route path="/todo">  
              <ToDo/>
            </Route>
            <Route path="/todo/:id">  
              <ToDo/>
            </Route>
            <Route path="/">
              <section className="home">
                <Link to="/todo"><button className="mainNav">To-Do</button></Link>
                <Link to="/poll"><button className="mainNav">Poll</button></Link>
              </section> 
            </Route>   
          </Switch>
        </BrowserRouter>
    </main>
    
  );
}

export default App;
