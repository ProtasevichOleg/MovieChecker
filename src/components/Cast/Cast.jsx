// src/components/Cast/Cast.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastMovie } from 'utils/api';
import showMessage from 'utils/swalConfig';
import {
  CastContainer,
  Title,
  CastList,
  CastItem,
  ActorImage,
} from './Cast.styled';
import AvatarImage from '../../images/missing-actor.png';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCastMovie(movieId)
      .then(data => {
        setCast(data);
      })
      .catch(error => {
        showMessage(error.message);
      });
  }, [movieId]);

  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <CastContainer>
      <Title>Cast</Title>
      <CastList>
        {cast.map(actor => (
          <CastItem key={actor.id}>
            <ActorImage
              src={
                actor.profile_path
                  ? IMAGE_BASE_URL + actor.profile_path
                  : AvatarImage
              }
              alt={actor.name}
              height={160}
            />
            <p>{actor.name}</p>
          </CastItem>
        ))}
      </CastList>
    </CastContainer>
  );
};

export default Cast;
