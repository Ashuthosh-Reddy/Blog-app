
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from './api';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostDetail from './components/PostDetail';

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