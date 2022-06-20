import styled from "styled-components"

export const Container = styled.div`
  border: 1px solid #eaeaea;
  margin: 15vh auto;
  width: 40%;
  padding: 2em;
  border-radius: 4px;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: flex-nowrap;
  margin-bottom: 1.5rem;
`;

export const TextField = styled.input`
  width: 80%;
  height: 30px;
  border: 1px solid #d8d8d8;
  font-size: 16px;
  padding: 0.5rem;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  outline: none;

  &::placeholder {
    opacity: 0.6;
  }
`;