import styled from 'styled-components';

interface DisabledSeeMore {
  disable?: boolean;
}

export const StyledCard = styled.div`
  background-color: var(--textColor);
  border-radius: 25px;
  overflow: hidden;
`;

export const StyledCardContent = styled.div<DisabledSeeMore>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px 25px 20px;

  h3 {
    font-size: 20px;
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
  }

  p {
    font-size: 16px;
  }
`;
