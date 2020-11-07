import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from "react-redux";
import {createStore} from "redux";
import PostList from "./components/PostList"

import App from "./components/App"
import reducers from "./reducers"

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <PostList />
  </Provider>,
  document.getElementById('root')
);
