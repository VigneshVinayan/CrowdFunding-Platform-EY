import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import LandingPage from "./Components/landingPage";
import AboutUs from "./Components/Routes/AboutUs";
import AdminDashboard from "./Components/Routes/adminDashboard";
import NotFound from "./Components/Routes/PageNotFound";

function App() {
  return (
    <Router>
      <div id="page-container">
        <div id="content-wrap">
          {/* <ToastContainer /> */}
          <Switch>
          <Route path="/" exact component={LandingPage} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/admin/dashboard" component={AdminDashboard} />
            <Route component={NotFound} /> 
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
