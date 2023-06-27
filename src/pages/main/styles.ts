import styled from 'styled-components';

interface FileProps {
  fileName: string;
}

export const BackgroundContainer = styled.div<FileProps>`
  width: 100vw;
  height: 400px;
  background-image: url(${p => p.fileName});
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 9%;
`;

export const Container = styled.div`
  max-width: 1124px;
  margin: 0 auto;
`;

export const ApresentationContent = styled.div`
  display: flex;
  justify-content: space-between;
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
  padding: 50px 0;
`;

export const SkillContent = styled.div`
  margin-top: 39px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px 68px;
  padding: 0 30px;
`;

export const HrDivisor = styled.div`
  display: grid;
  place-items: center;

  hr {
    width: 800px;
    border-width: 0.5px;
  }
`;

export const WorkSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const WorkImageDiv = styled.div`
  position: relative;
  width: 380px;
  height: 380px;
  border: 4px solid var(--secundColor);
  border-radius: 70px 5px 70px 5px;
  margin-top: 37px;
  margin-left: 37px;

  img {
    width: 400px;
    height: 400px;
    border-radius: 60px 5px 60px 5px;
    object-fit: cover;
    object-position: center;
    position: absolute;
    left: -37px;
    top: -37px;
    transition: 0.5s;

    :hover {
      transform: translateY(6px) translateX(6px);
    }
  }
`;

export const WorkContent = styled.div`
  h2 {
    color: var(--secundColor);
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 10px;
  }

  p {
    color: var(--textColor);
    line-height: 25px;
  }
`;
