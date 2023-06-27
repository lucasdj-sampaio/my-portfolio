import styled, { css } from 'styled-components';

interface LineProps {
  lineOn: boolean;
}

export const TitleContent = styled.div<LineProps>`
  text-align: ${p => (p.lineOn ? 'center' : 'left')};

  h2 {
    display: inline-block;
    font-size: 27px;
    color: var(--secundColor);
    position: relative;
    padding-bottom: 10px;

    ${({ lineOn }) => {
      if (lineOn) {
        return css`
          ::before {
            width: 150px;
            height: 1.2px;
            background-color: var(--textColor);
            content: '';
            bottom: 0;
            left: 50%;
            position: absolute;
            transform: translateX(-50%);
            border-radius: 10px;
          }
        `;
      }

      return '';
    }}
  }
`;
