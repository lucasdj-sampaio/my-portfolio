import DeviceSize from 'shared/types/deviceSize';
import styled, { css } from 'styled-components';

interface DisabledSeeMore {
  disabled?: boolean;
}

export const SeeMoreStyled = styled.a<DisabledSeeMore>`
  display: inline-flex;
  align-items: center;
  column-gap: 5px;
  font-size: 13px;
  font-weight: 500;
  color: var(${p => (p.disabled ? '--servicesBackground' : '--secundColor')});
  cursor: ${p => (p.disabled ? 'default' : 'pointer')};
  :focus {
    outline: none;
  }
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  ${({ disabled }) => {
    if (!disabled) {
      return css`
        cursor: pointer;

        :hover svg {
          transform: translateX(5px);
          transition: 0.5s;
        }
      `;
    } else {
      return css`
        cursor: not-allowed;
      `;
    }
  }}

  @media ${DeviceSize.TabletS} {
    font-size: 12px;
  }

  @media ${DeviceSize.LaptopS} {
    font-size: 10px;
  }
`;
