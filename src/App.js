import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './all.css';
import Loginform from './components/loginform'
import { BrowserRouter, Route, Link, Switch} from 'react-router';
import Home from './components/Home';
import Navheader from './components/navbar'
import { connect } from "react-redux";
import {loginAction} from "./components/redux/action"

function App() {
  return (
    <div className="App">
      <Navheader/>

    </div>
  );
}
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  loginAction: () => dispatch(loginAction(true))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
