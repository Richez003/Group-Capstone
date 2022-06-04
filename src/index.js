import './style.css';
import Movies from './modules/displayUrl.js';
import fetchApi from './modules/fetchApi.js';

Movies.displayMovies();
fetchApi.getLikes();
Movies.counterMovies();