import React from 'react';
import styled from 'styled-components';

function Button (props) {
  return (
    <ButtonContainer as={props.as} to={props.to} className={props.className}>
      {props.children}
    </ButtonContainer>
  )
}

export default Button;

const ButtonContainer = styled.a`
  color: var(--white);
  border: 1px solid var(--white);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
`;
