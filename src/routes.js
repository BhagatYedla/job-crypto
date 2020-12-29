import React from 'react';
import { Route , Switch} from "react-router-dom";
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