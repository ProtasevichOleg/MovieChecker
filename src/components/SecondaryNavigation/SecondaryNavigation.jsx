import { SecondaryNavigationStyled } from './SecondaryNavigation.styled';
import PropTypes from 'prop-types';

const SecondaryNavigation = ({ children }) => (
  <SecondaryNavigationStyled>{children}</SecondaryNavigationStyled>
);

SecondaryNavigation.propTypes = {
  children: PropTypes.node,
};

export default SecondaryNavigation;
