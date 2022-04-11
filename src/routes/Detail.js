import React from 'react';
import { useLocation } from 'react-router-dom'; //useLocation 함수를 불러와서 사용하겠다.
//hook 훅 중에 하나인 useLocation

import './Detail.css';

function Detail() {
	const location = useLocation();
	console.log(location);
	const {year,title,summary,poster,genres} = location.state; //구조분해 할당으로 각각 가져와서 지정
	//이런 식으로 데이터를 전달해준다. prop값들을 가져오는 방법

	return (
		<div className='detail'>
			<img src={poster} alt={title} title={title} />
			<div className='detail_data'>
				<h3 className='detail_title' style={{backgroundColor:'#eee'}}>{title}</h3>
				<h4 className='detail_year'>{year}</h4>
				<ul className='detail_genres'>
					{genres.map((genre,index) => {
						return(//이때 return을 써주지 않으면 값이 반환이 되지 않는다.
							<li key={index} className="detail_genre">{genre}</li>
						)
					})}
				</ul>
				<p className='detail_summary'>{summary.slice(0,180)} ...</p>
			</div>
		</div>
	)
}

export default Detail