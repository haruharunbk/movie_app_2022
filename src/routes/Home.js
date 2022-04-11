import axios from 'axios';
import React, { Component } from 'react';
import Movie from '../components/Movie';
import './Home.css';

export class Home extends Component {
	state = {
		isLoding : true,
		movies: [] //비어있는 배열
	}
	
	//axios는 네트워크를 사용함으로 느리다. 그래서 axios를 별도의 함수로 만들어서 사용해야 한다.
	getMovies = async () => { //async는 비동기
		//배열에 저장
		//await는 시간이 필요해 이함수는 영화데이터를 가져올때까지
		//const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
		//console.log(movies.data.data.movies); //전체에서 movies에 해당하는 key값에 파고든거
		
		//이렇게 바꿔쓸 수 있다.
		const {
			data: { 
				data: {
					movies
				}
			}
		} = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count');
		//get방식 ? 뒤에는 조건이 나오고 장르는 애니메이션 //정렬은 좋아요가 많은 순으로
		console.log(movies); 
		this.setState({isLoding : false, movies }); //키와 키값이 동일하면 movies : movies => movies 이렇게 하나로 쓸수 있다.
	}
	componentDidMount(){//화면에 부착되고 나서 실행되는 함수는 여기에다가 넣어주면 된다.
		// setTimeout(() => {//setTimeont은 한번실행해라
		// 	this.setState({isLoding : false}); //setState값으로 바껴라
		// },6000) //6000은 6초뒤에
		//axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count'); //여기 주소의 json파일을 가지고 오겠다라는 뜻
		this.getMovies();//함수 호출
	}

	render() {
		const {isLoding, movies} = this.state; //구조 분해 할당
		return (
			<section className='container'>
				{isLoding ? 
				(<div className='loader'>
					<span className='loader_text'>'Loading...'</span>
				</div>) : 
				(<div className='movies'>
					{movies.map( (movie,index) => (<Movie
														key = {index}
														id = {movie.id}
														year = {movie.year}
														title = {movie.title}
														summary = {movie.summary}
														poster = {movie.medium_cover_image}
														genres = {movie.genres}
													/>)
								)
					}
				</div>)
				}
			</section>
			// 삼항연산자이기 때문에 isLoading이 true이기 때문에 'Loading...'이게 나온다.
			//<Movie/>라는 자식컴포넌트를 만들어준다.
			//movie배열의 안의 객체 하나하나를 map이란 메소드를 가지고 값을 가지고 온다.
			//props와 키값으로 전달이 된다.
			//(movie,index) =>할때 (movie,index)는 매개변수다 매개변수 2개사용
		)
	}
}

export default Home;