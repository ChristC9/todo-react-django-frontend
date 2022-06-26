// import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/todo/:id'>
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
