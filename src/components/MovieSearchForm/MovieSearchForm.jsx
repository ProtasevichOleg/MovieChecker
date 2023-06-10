import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { StyledMovieForm, Input, SubmitButton } from './MovieSearchForm.styled';

const MovieSearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get('query') || '');

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const nextParams = inputValue !== '' ? { query: inputValue } : {};
    setSearchParams(nextParams);
  };

  return (
    <StyledMovieForm onSubmit={handleSubmit}>
      <Input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search..."
        autoFocus={true}
      />
      <SubmitButton type="submit">Search</SubmitButton>
    </StyledMovieForm>
  );
};

export default MovieSearchForm;
