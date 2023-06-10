import { GoBackButtonStyled } from './GoBackButton.styled';
import { IoIosArrowBack } from 'react-icons/io';

const GoBackButton = ({ prevLocation }) => (
  <GoBackButtonStyled to={prevLocation}>
    <IoIosArrowBack />
    Go Back
  </GoBackButtonStyled>
);

export default GoBackButton;
