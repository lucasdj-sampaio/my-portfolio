import styled, { css } from "styled-components";

interface TextProps {
  active: boolean;
}

export const CostumLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #2c3e50;
    transition: 0.3s;
    border-radius: 30px;
  }

  span:before {
    position: absolute;
    content: "";
    height: 25px;
    width: 25px;
    left: 3px;
    bottom: 2.6px;
    background-color: #fff;
    border-radius: 50%;
    transition: 0.3s;
  }

  input:checked + span {
    background-color: #00c853;
  }

  input:checked + span:before {
    transform: translateX(29px);
  }
`
export const CostumInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`

export const StrongText = styled.strong<TextProps>`
  position: absolute;
  ${props => props.active && 'left: 10px;'}
  ${props => props.active === false && 'right: 10px;'}
  top: 50%;
  transform: translateY(-50%);
`