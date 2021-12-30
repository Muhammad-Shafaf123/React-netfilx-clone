import './RowPost.css'
import React,{useEffect, useState} from 'react'
import axios from '../../axios';
import Youbute from 'react-youtube'
import {API_KEY, ImageUrl} from '../../Constants/Constant';

function RowPost(props) {
	const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },}
	const [movie,setMovie] = useState([]);
	const [urlId,setUrlId] = useState([]);
	useEffect(()=>{
		axios.get(props.url).then(response=>{
			setMovie(response.data.results);
		}).catch(err=>{
			//alert("Net work error");
		})
	},);
	const handleMovie = (id)=>{
		axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
			console.log(response.data);
			if(response.data.results.length !==0){
				setUrlId(response.data.results[0]);
			}else{
				console.log("empty..!");
			}
		})
	}
	return(
		<div className="row">
			<h3>{props.title}</h3>
			<div className="posters">
				{
					movie.map((obj)=>
						<img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'small-poster' : 'poster'} src={`${ImageUrl+obj.backdrop_path}`}/>
					)
				}
			</div>
			{urlId && <Youbute opts={opts} videoId={urlId.key} /> }
		</div>
		)
}

export default RowPost;

// 