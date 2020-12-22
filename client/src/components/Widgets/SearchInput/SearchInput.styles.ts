import styled from 'styled-components';

export const Container = styled.div`
	height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const Input = styled.input`
	height: 45px;
  width: calc(80% - 16px - 16px);
  max-width: 960px;
  padding: 0 16px;
  border: 1px solid black;
  border-radius: 4px;
  outline: none;
`;
