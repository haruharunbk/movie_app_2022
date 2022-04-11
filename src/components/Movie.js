import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; //Link를 사용하려면 이걸 항상 import해줘야 한다.

import './Movie.css';

function Movie({id,year,title,summary,poster,genres}) {
	return (
		<div className='movie'>
			<Link to={'/movie_detail'} state={{year,title,summary,poster,genres}}>
				<img src={poster} alt={title} title={title} />
				<div className='movie_data'>
					<h3 className='movie_title' style={{backgroundColor:'#eee'}}>{title}</h3>
					<h4 className='movie_year'>{year}</h4>
					<ul className='movie_genres'>
						{genres.map((genre,index) => {
														return(//이때 return을 써주지 않으면 값이 반환이 되지 않는다.
															<li key={index} className="movie_genres">{genre}</li>
														)
				
													}
									)
						}
				
					</ul>
					<p className='movie_summary'>{summary.slice(0,180)} ...</p>
				</div>
			</Link>
		</div>
		//.slice(0,180)메소드를 사용하여 0~180글자만 나오고 나머지는 ...으로 나와라
		//home 컴퍼넌트에서 받은 prop들을 그대로 state 키값 상태로 Link를 눌러서 detail에 전달해줘라
	)
}

Movie.prototypes = {
	id : PropTypes.number.isRequired,
	year : PropTypes.number.isRequired,
	title : PropTypes.string.isRequired,
	summary : PropTypes.string.isRequired,
	poster : PropTypes.string.isRequired,
	genres : PropTypes.arrayOf(PropTypes.string).isRequired //장르는 배열로 되어있고, 그안에서 string으로 되어있으니깐
}

export default Movie