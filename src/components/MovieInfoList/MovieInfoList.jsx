import {
  MovieInfoContainer,
  MovieInfoStyled,
  MovieInfoItem,
  MovieInfoLabel,
  MovieInfoValue,
  MovieOverview,
  MoviePoster,
} from './MovieInfoList.styled';
import defaultPoster from '../../images/missing-film.jpg';
import { IMAGE_BASE_URL } from 'utils/constants';

const MovieInfo = ({
  movie: {
    release_date,
    runtime,
    genres,
    tagline,
    overview,
    poster_path,
    title,
  },
}) => (
  <MovieInfoContainer>
    <MoviePoster
      height={450}
      src={poster_path ? `${IMAGE_BASE_URL}${poster_path}` : defaultPoster}
      alt={title}
    />
    <MovieInfoStyled>
      <MovieInfoItem>
        <MovieInfoLabel>Release Date:</MovieInfoLabel>
        <MovieInfoValue>{release_date}</MovieInfoValue>
      </MovieInfoItem>
      <MovieInfoItem>
        <MovieInfoLabel>Runtime:</MovieInfoLabel>
        <MovieInfoValue>{runtime} minutes</MovieInfoValue>
      </MovieInfoItem>
      <MovieInfoItem>
        <MovieInfoLabel>Genres:</MovieInfoLabel>
        <MovieInfoValue>
          {genres.map(genre => genre.name).join(', ')}
        </MovieInfoValue>
      </MovieInfoItem>
      <MovieInfoItem>
        <MovieInfoLabel>Tagline:</MovieInfoLabel>
        <MovieInfoValue>{tagline}</MovieInfoValue>
      </MovieInfoItem>
      <MovieOverview>{overview}</MovieOverview>
    </MovieInfoStyled>
  </MovieInfoContainer>
);

export default MovieInfo;
