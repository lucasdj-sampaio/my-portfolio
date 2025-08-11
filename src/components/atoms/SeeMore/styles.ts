import DeviceSize from 'shared/DeviceSize';
import styled, { css } from 'styled-components';

interface DisabledSeeMore {
  disable?: boolean;
}

export const SeeMoreStyled = styled.a<DisabledSeeMore>`
  display: inline-flex;
  align-items: center;
  column-gap: 5px;
  font-size: 13px;
  font-weight: 500;
  color: var(${p => (p.disable ? '--secundColor' : '--servicesBackground')});
  cursor: ${p => (p.disable ? 'pointer' : 'default')};
  :focus {
    outline: none;
  }
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

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

  @media ${DeviceSize.TabletS} {
    font-size: 12px;
  }

  @media ${DeviceSize.LaptopS} {
    font-size: 10px;
  }
`;
