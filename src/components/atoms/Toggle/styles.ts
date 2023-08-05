import styled from 'styled-components';

interface TextProps {
  active: boolean;
}

export const CostumLabel = styled.label<TextProps>`
  position: relative;
  display: inline-block;
  width: 47px;
  height: 22px;

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--servicesBackground);
    transition: 0.3s;
    border-radius: 30px;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 20px;
    ${props => props.active && 'left: -5.5px;'}
    ${props => props.active === false && 'left: 3px;'}
    bottom: 2.6px;
    background-color: #fff;
    border-radius: 45%;
    transition: 0.3s;
  }

  input:checked + span {
    background-color: var(--secundColor);
  }

  input:checked + span:before {
    transform: translateX(29px);
  }
`;
export const CostumInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const StrongText = styled.strong<TextProps>`
  font-size: 12.5px;
  position: absolute;
  ${props => props.active && 'left: 5px;'}
  ${props => props.active === false && 'right: 5px;'}
  top: 50%;
  transform: translateY(-50%);
`;
