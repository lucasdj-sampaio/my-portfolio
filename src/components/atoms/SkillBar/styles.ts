import styled from 'styled-components';

interface Props {
  porcente: number;
}

export const StyledBar = styled.div<Props>`
  border: 1px solid var(--textColor);
  border-radius: 30px;
  width: 100%;
  height: 20px;
  display: block;

  div {
    display: flex;
    background-color: var(--secundColor);
    width: ${Props => Props.porcente}%;
    height: 100%;
    padding-left: 10px;
    align-items: center;
    border-radius: 30px;
  }
`;

export const StyledSpan = styled.div`
  font-weight: bold;
  color: var(--background);
`;
