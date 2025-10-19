import DeviceSize from 'shared/types/deviceSize';
import styled, { css } from 'styled-components';

interface CardProps {
  TopSpacement?: boolean;
  disabled?: boolean;
}

export const StyledCard = styled.div<CardProps>`
  position: relative;
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
  }}

  :hover {
    ${({ disabled }) => {
      if (!disabled) {
        return css`
          cursor: pointer;

          svg {
            transition: 0.5s;
            transform: translateX(5px);
          }
        `;
      } else {
        return css`
          cursor: not-allowed;
        `;
      }
    }}
  }

  img {
    width: 100%;
  }

  @media ${DeviceSize.Tablet} {
    transform: translateY(0px);
  }
`;

export const StyledCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px 25px 20px;
  height: 215px;

  div {
    height: 100%;
  }

  h3 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 15px;
    color: var(--secundColor);
    user-select: none;
  }

  p {
    font-size: 12px;
  }

  @media ${DeviceSize.Tablet} {
    padding: 10px 10px 15px 10px;

    h3 {
      font-size: 12px;
      margin-bottom: 13px;
    }

    p {
      font-size: 12px;
    }
  }

  @media ${DeviceSize.LaptopS} {
    p {
      font-size: 10.6px;
    }
  }

  @media ${DeviceSize.Mobile} {
    h3 {
      font-size: 14px;
    }

    p {
      font-size: 12px;
    }
  }
`;

export const StyledDarkCard = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;
