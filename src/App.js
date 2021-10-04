import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './components/pages/Home';
import About from './components/pages/aboutUs';
import Contact from './components/pages/Contacts';
import Navbar from './components/layout/navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AddUser from "./components/pages/users/AddUser";
import EditUser from "./components/pages/users/EditUser";
import User from "./components/pages/users/user";

function App() {
  return (
    <>
      {/* <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
      </Router> */}
      <Router>
      <Navbar/>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/users/add" component={AddUser}/>
          <Route exact path="/users/edit/:id" component={EditUser}/>
          <Route exact path="/users/:id" component={User}/>
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
