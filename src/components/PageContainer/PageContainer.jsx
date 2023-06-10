import { StyledPageContainer } from './PageContainer.styled';
import PropTypes from 'prop-types';

const PageContainer = ({ children }) => (
  <StyledPageContainer>{children}</StyledPageContainer>
);

PageContainer.propTypes = {
  children: PropTypes.node,
};

export default PageContainer;
