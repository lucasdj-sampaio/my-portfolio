import styled, { css, keyframes } from 'styled-components';

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
  height: 215px;

  h3 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 15px;
    color: var(--secundColor);
  }

  p {
    font-size: 12px;
  }
`;
