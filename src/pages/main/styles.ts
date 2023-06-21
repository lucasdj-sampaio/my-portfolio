import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  width: 100vw;
`;

export const BackgroundImageStyled = styled.img`
  width: 100%;
  max-height: 65vh;
`;

export const Container = styled.div`
  max-width: 1300px;
  min-height: 100vh;
  margin: 0 auto;
`;

export const ApresentationContent = styled.div`
  position: absolute;
  top: 0;
  margin-top: 10%;
  display: flex;
  justify-content: space-between;
  width: 1300px;
  padding: 0 20px;
  align-items: center;
`;

export const SocialMediaStyles = styled.div`
  display: grid;
  min-height: 130px;

  svg {
    color: var(--textColor);
    font-size: 24px;
    cursor: pointer;
  }
`;

export const ApresentationName = styled.div`
  text-align: end;
  color: var(--textColor);
  font-weight: 500;

  h1 {
    font-size: 40px;
    margin-bottom: 10px;
  }
`;

export const PageSection = styled.section`
  padding: 44px 0;
`;

export const SkillContent = styled.div`
  margin-top: 39px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px 68px;
  padding: 0 30px;
`;