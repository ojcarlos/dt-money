import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {createServer} from 'miragejs';

createServer({
  routes(){
    this.namespace = 'api';
    this.get('/transactions', () => {
      return[
        {
          id:1,
          title:'transaction',
          amount:400,
          type: 'deposit',
          category: 'food',
          createdAt: new Date()
        }
      ]
    }  )

  }
})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

