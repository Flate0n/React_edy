import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { dialogDate, massegeDate } from './componentsDate/DialogsDate';
import {postsDate} from './componentsDate/PostsDate'
import {navBarDate} from './componentsDate/NavBarDate'

console.log(postsDate)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dateD = {dialogDate} dateM = {massegeDate} dateP = {postsDate} dateN = {navBarDate}  />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
