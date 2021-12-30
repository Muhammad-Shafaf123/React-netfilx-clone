import './Banner.css';
import React,{useEffect, useState} from 'react'
import axios from '../../axios';
import {API_KEY} from '../../Constants/Constant';
import {ImageUrl} from '../../Constants/Constant';

function Banner() {
	const [movie,setMovie] = useState();
	useEffect(()=>{
		axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
			
			var random_movie = Math.floor((Math.random() * 19) + 1);
			setMovie(response.data.results[random_movie]);
		})
	}, []);
	return (
		<div 
			style={{backgroundImage:`url(${movie ? ImageUrl+movie.backdrop_path : ""})`}}	
			className="banner">
			<div className="content">
				<h1 className="title">
					{movie ? movie.title : ""}
				</h1>
				<div className="banner_button"> 
					<button className="button">Play</button>
					<button className="button">My List</button>
				</div>
				<h1 className="description">
					{movie ? movie.overview : ""}
				</h1>
			</div>
			<div className="fade_bottom"></div>
		</div>
		)
}

export default Banner
