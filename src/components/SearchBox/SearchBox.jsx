import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Input,
  FormButton,
  SearchTitle,
  FormWrapper,
} from './SearchBox.styled';

const SearchBox = ({ onFormSubmit, startValue }) => {
  const [inputValue, setInputValue] = useState(startValue);

  const onChangeValue = e => {
    const value = e.target.value;

    setInputValue(value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    const normalizedInputValue = inputValue.trim().toLowerCase();

    onFormSubmit(normalizedInputValue);
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <SearchTitle>Search Movies</SearchTitle>
      <FormWrapper>
        <Input
          placeholder="Search movies..."
          autoFocus
          type="text"
          value={inputValue}
          onChange={onChangeValue}
        />
        <FormButton type="submit" disabled={!inputValue}>
          Search
        </FormButton>
      </FormWrapper>
    </Form>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  startValue: PropTypes.string.isRequired,
};
