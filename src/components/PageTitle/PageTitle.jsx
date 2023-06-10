import React from 'react';
import PropTypes from 'prop-types';
import { PageTitleStyled } from './PageTitle.styled';

const PageTitle = ({ title }) => <PageTitleStyled>{title}</PageTitleStyled>;

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
