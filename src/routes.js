import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import Blog from "./views/Blog";
import SignUp from "./views/SignUp";
import ContactMe from "./views/ContactMe";
import PostID from "./views/PostID";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:id" component={PostID} />
        <Route path="/signup" component={SignUp} />
        <Route path="/contactme" component={ContactMe} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
