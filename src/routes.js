import React from 'react';
import { BrowserRouter as Router  ,Route , Switch} from "react-router-dom";
import App from './containers/App/App';
import NotFound from './containers/ErrorPages/NotFound';
import Category from './containers/Category/category';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Category} />
      {/* <Route exact path="/category" component={Category}/> */}


      {/* If none of the above is found then display this */}
      <Route path="*" component={NotFound} status={404}/>
    </Switch>
  );
};