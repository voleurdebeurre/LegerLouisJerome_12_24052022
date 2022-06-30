import React from 'react';

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './assets/css/global.css';
import App from './views/App';
import PageNotFound from './views/PageNotFound';
import reportWebVitals from './reportWebVitals';
import SingleUser from './views/SingleUser';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<App />}>
        <Route index element={<App />} />
      </Route>
      <Route path="users/:id" element={<SingleUser />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
