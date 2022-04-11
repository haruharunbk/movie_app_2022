import React from 'react'; //'react'는 node_moudules안에 있는 react를 React로 사용하겠다.
import ReactDOM from 'react-dom';
import App from './App'; //같은 src안에 있는 App.js도 App으로 사용하겠다

ReactDOM.render( //ReactDom에다가 render(그려라)
  <App />, //App컴포넌트를 
  document.getElementById('root') //여기에다가 그려라
);

//App.js 는 하나하나의 컴포넌트를 의미
//index.js는 하나하나를 전체로 묶어주는 wrap같은 역할


