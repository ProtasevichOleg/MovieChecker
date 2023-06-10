import PropTypes from 'prop-types';
import { MessageContainer } from './CenteredMessage.styled';

const CenteredMessage = ({ message }) => {
  return <MessageContainer>{message}</MessageContainer>;
};

CenteredMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default CenteredMessage;
