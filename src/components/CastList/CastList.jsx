import PropTypes from 'prop-types';
import {
  CastListStyled,
  Actor,
  ActorName,
  ActorImage,
} from './CastList.styled';
import AvatarImage from 'images/missing-actor.png';
import { IMAGE_BASE_URL } from 'utils/constants';

const CastList = ({ cast }) => (
  <CastListStyled>
    {cast.map(({ id, profile_path, name }) => (
      <Actor key={id}>
        <ActorImage
          src={profile_path ? IMAGE_BASE_URL + profile_path : AvatarImage}
          alt={name}
          width={150}
          height={225}
        />
        <ActorName>{name}</ActorName>
      </Actor>
    ))}
  </CastListStyled>
);

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CastList;
