
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from './api';
import PostList from './components/post';
import PostForm from './components/form';
import PostDetail from './components/details';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route path="/posts/new" component={PostForm} />
          <Route path="/posts/:id" component={PostDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
