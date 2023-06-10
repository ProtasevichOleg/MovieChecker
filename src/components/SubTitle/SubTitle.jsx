import { SubTitleStyled } from './SubTitle.styled';
import PropTypes from 'prop-types';

const SubTitle = ({ title }) => <SubTitleStyled>{title}</SubTitleStyled>;

SubTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubTitle;
