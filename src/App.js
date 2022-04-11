import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}> 
			<Navigation/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/movie_detail" element={<Detail />} />
			</Routes>
		</BrowserRouter>
	)
	//BrowserRouter router를 감싸는 부분, BrowserRouter가 전체를 감싸야 한다. 
	//Route는 반드시 Routes로 묶어줘야 한다. 
	//path는 URL을 의미하며, /는 home을 의미한다. 
	//router 라우터라는 것은 특정한 것만 보이게 하는것 
	//<Route path="/movie_detail"이 주소로 이동하면 element={<Detail />} />이 컴포넌트를 불러와라
}

export default App