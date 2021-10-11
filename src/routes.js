import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import Blog from "./views/Blog";
import SignUp from "./views/SignUp";
import PostItem from "./views/PostItem";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/signup" component={SignUp} />
        <Route path="/blog/:id" component={PostItem} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
