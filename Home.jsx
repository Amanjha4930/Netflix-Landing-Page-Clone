import React, { useEffect, useState } from 'react'
import './Home.scss'
import axios from 'axios'
import {BiPlay} from "react-icons/bi"
import {AiOutlinePlus} from "react-icons/ai"
import poster from './poster.jpg'


const apiKey = "40a0d1988dcf1374778f8694c9c75e7e"
const url = "https://api.themoviedb.org/3"
const upcoming = "upcoming"
const nowPlaying = "now_playing"
const popular = "popular"
const topRated = "top_rated"
const imgUrl = "https://image.tmdb.org/t/p/original"


const Card = ({img}) =>(
    <img className='card' src={img} alt="cover" />
)

const Row = ({title, arr=[{
    img: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810"
}]}) =>(
    <div className='row'>
        <h2>{title}</h2>

        <div>
            
            {
                arr.map((item,index)=>(
                    <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
                ))
            }
        </div>   
    
    </div>
)


const Home = () => {

    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);

    useEffect(()=>{
        const fetchUpcoming = async()=>{
            const {data} = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
            setUpcomingMovies(data.results);
        };

        const fetchNowPlaying = async()=>{
            const {data} = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
            setNowPlayingMovies(data.results);
        };

        const fetchPopular = async()=>{
            const {data} = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
            setPopularMovies(data.results);
        };

        const fetchTopRated = async()=>{
            const {data} = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
            setTopRatedMovies(data.results);
        };

        fetchUpcoming();
        fetchNowPlaying();
        fetchPopular();
        fetchTopRated();
    },[])


  return (
    <section className="home">
        <div className="banner" style={{
            backgroundImage: popularMovies[4]? `url(${poster})` :"rgb(16,16,16)"
        }}>

            <h1>Avengers: Endgame</h1>

            <p>After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.</p>

            <div>
                <button> <BiPlay /> Play </button>
                <button> My List <AiOutlinePlus /> </button>
            </div>

        </div>

        <Row className="row" title={"Upcoming Movies"} arr={upcomingMovies} />
        <Row className="row" title={"Now Playing Movies"} arr={nowPlayingMovies} />
        <Row className="row" title={"Popular Movies"} arr={popularMovies} />
        <Row className="row" title={"Top Rated Movies"} arr={topRatedMovies} />
    </section>
  )
}

export default Home
