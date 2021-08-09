import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Wellcome from './componnents/wellcome'
import Header from './componnents/header'
function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="wrapper">
        <BrowserRouter><Header />

          <Switch>
            <Route path="/manatee">
              <Wellcome name="manatee" />
            </Route>
            <Route path="/narwhal">
              <Wellcome name="narwhal" />
            </Route>
            <Route path="/whale">
              <Wellcome name="whale" />
            </Route>
          </Switch>
        </BrowserRouter>

      </div>
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
