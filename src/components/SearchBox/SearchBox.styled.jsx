import styled from '@emotion/styled';

export const Form = styled.form``;

export const SearchTitle = styled.h1`
  margin-bottom: 10px;
  font-size: 30px;
`;

export const FormWrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 4px;
  font-size: 16px;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  width: 130px;
  height: 30px;
  border-radius: 4px;
  background-color: rgb(63, 81, 181);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: gray;
  }
`;
