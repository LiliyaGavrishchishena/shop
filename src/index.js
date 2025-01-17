import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { render } from 'react-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import App from './components/App';

render(
  <BrowserRouter>
    <Route component={App} />
  </BrowserRouter>,

  document.getElementById('root'),
);
