import axios from 'axios';
import NProgress from 'nprogress';

import { API_KEY } from './constants.js';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchTrendMovies() {
  try {
    NProgress.start();
    const res = await axios.get(`trending/all/day?api_key=${API_KEY}`);
    NProgress.done();
    return res.data.results;
  } catch (error) {
    NProgress.done();
    throw error;
  }
}

export async function fetchQueryMovies(query) {
  try {
    NProgress.start();
    const res = await axios.get(
      `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
    );
    NProgress.done();
    return res.data.results;
  } catch (error) {
    NProgress.done();
    throw error;
  }
}

export async function fetchDetailsMovie(movieId) {
  try {
    NProgress.start();
    const res = await axios.get(
      `movie/${movieId}?api_key=${API_KEY}&language=en-US&external_source=imdb_id`
    );
    NProgress.done();
    return res.data;
  } catch (error) {
    NProgress.done();
    throw error;
  }
}

export async function fetchCastMovie(movieId) {
  try {
    NProgress.start();
    const res = await axios.get(
      `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    NProgress.done();
    return res.data.cast;
  } catch (error) {
    NProgress.done();
    throw error;
  }
}

export async function fetchReviewMovie(movieId) {
  try {
    NProgress.start();
    const res = await axios.get(
      `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
    );
    NProgress.done();
    return res.data.results;
  } catch (error) {
    NProgress.done();
    throw error;
  }
}
