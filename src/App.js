import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import './App.css';
import Search from "./components/Search";
/* import  Search  from "./components/Search"; */
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <div className="nav-brand">WEATHER APP</div>
        
      </nav>
        <Router>
        <Search></Search>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/:cityId" component={HomePage}></Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
