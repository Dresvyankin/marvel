import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ComicsPage } from './ComicsPage/ComicsPage';
import { PageNotFound } from './PageNotFound/PageNotFound';
import { SearchPage } from './SearchPage/SearchPage';

const App = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/:query?" component={SearchPage} />
      <Route exact path="/comics/:heroId" component={ComicsPage} />
      <Route exact component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
