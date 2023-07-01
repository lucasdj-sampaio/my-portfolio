import styled, { css } from 'styled-components';

interface DisabledSeeMore {
  disable?: boolean;
}

interface TopSpacementProp {
  TopSpacement?: boolean;
}

export const StyledCard = styled.div<TopSpacementProp>`
  background-color: var(--textColor);
  border-radius: 25px;
  overflow: hidden;
  transform: translateY(${p => (p.TopSpacement ? '50px' : '0px')});
  transition: 0.6s;

  ${({ TopSpacement }) => {
    if (TopSpacement) {
      return css`
        :hover {
          transform: translateY(0px);
        }
      `;
    }

    return '';
  }}
`;

export const StyledImage = styled.img`
  width: 100%;
`;

export const StyledCardContent = styled.div<DisabledSeeMore>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px 25px 20px;
  height: 200px;

  h3 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 15px;
    color: var(--secundColor);
  }

  a {
    display: inline-flex;
    align-items: center;
    column-gap: 5px;
    font-size: 13px;
    font-weight: 500;
    color: var(${p => (p.disable ? '--secundColor' : '--servicesBackground')});
    cursor: ${p => (p.disable ? 'pointer' : 'default')};
    outline: none;

    ${({ disable }) => {
      if (disable) {
        return css`
          :hover svg {
            transform: translateX(5px);
            transition: 0.5s;
          }
        `;
      }

      return '';
    }}
  }

  p {
    font-size: 14px;
  }
`;
