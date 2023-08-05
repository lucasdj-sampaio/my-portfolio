import DeviceSize from 'shared/DeviceSize';
import styled from 'styled-components';

interface FileProps {
  fileName: string;
}

export const BackgroundContainer = styled.div<FileProps>`
  width: 100vw;
  background-image: url(${p => p.fileName});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 9% 0 3% 0;
`;

export const Container = styled.div`
  max-width: 1124px;
  margin: 0 auto;

  @media ${DeviceSize.LaptopS} {
    margin: 20px;
  }
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

  @media ${DeviceSize.Tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media ${DeviceSize.TabletS} {
    grid-template-columns: 1fr;
    row-gap: 25px;
  }
`;

export const HrDivisor = styled.div`
  display: grid;
  place-items: center;

  hr {
    width: 800px;
    border-width: 0.5px;
  }

  @media ${DeviceSize.TabletS} {
    hr {
      width: 100%;
    }
  }
`;

export const WorkSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media ${DeviceSize.LaptopS} {
    grid-template-columns: max-content 1fr;
    column-gap: 30px;
  }

  @media ${DeviceSize.Tablet} {
    grid-template-columns: 1fr;
    row-gap: 50px;
    justify-items: center;
  }
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

  @media ${DeviceSize.LaptopS} {
    width: 350px;
    height: 350px;

    img {
      width: 370px;
      height: 370px;
    }
  }

  @media ${DeviceSize.TabletS} {
    width: 250px;
    height: 250px;

    img {
      width: 270px;
      height: 270px;
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

  @media ${DeviceSize.Tablet} {
    h2,
    p {
      width: 100%;
      text-align: center;
    }
  }
`;

export const ServicesDivision = styled.div`
  background-color: var(--servicesBackground);
  position: relative;
  padding: 25px 0 80px 0;
`;

export const ButtonSlideGroup = styled.div`
  display: flex;
  position: absolute;
  max-width: 1124px;
  width: 1124px;
  top: 41%;
  padding: 0 2px;

  div {
    background: rgba(255, 255, 255, 0.38);
    border-radius: 50%;
    align-items: center;
    display: flex;
    z-index: 1;
    transition: 0.5s;
    height: 42px;
    width: 42px;

    :hover {
      background: transparent;
    }
  }

  svg {
    color: var(--textColor);
    cursor: pointer;
    font-size: 42px;
    transition: 0.5s;

    :hover {
      color: var(--secundColor);
    }
  }

  @media ${DeviceSize.LaptopS} {
    width: 94.1vw;
    top: 37%;
  }

  @media ${DeviceSize.Tablet} {
    top: 40%;
    width: 93.1vw;
  }

  @media ${DeviceSize.TabletS} {
    width: 95.1vw;
    top: 36%;
  }
`;

export const RightButton = styled.div`
  position: absolute;
  right: 3px;
`;

export const ServiceSlide = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  margin-top: 30px;

  @media ${DeviceSize.Tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${DeviceSize.TabletS} {
    grid-template-columns: 300px;
    justify-content: center;
  }
`;

export const AboutMeSlide = styled.div`
  margin-top: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 90px;

  @media ${DeviceSize.LaptopS} {
    column-gap: 50px;
  }

  @media ${DeviceSize.Tablet} {
    flex-direction: column;
    row-gap: 30px;
  }
`;

export const AboutMeText = styled.div`
  border-radius: 20px;
  height: 562px;
  width: 430px;
  box-shadow: 3px 3px 2px 2px rgba(0, 0, 0, 0.4);
  border: 1px solid var(--secundColor);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px 25px 20px;

  h3 {
    text-align: center;
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 25px;
    color: var(--secundColor);
  }

  p {
    font-size: 16px;
    line-height: 21px;
    color: var(--textColor);
    font-weight: 100;
  }

  @media ${DeviceSize.LaptopS} {
    p {
      font-size: 13px;
      line-height: 17px;
    }
  }

  @media ${DeviceSize.Tablet} {
    height: 462px;

    h3 {
      font-size: 20px;
    }

    p {
      font-size: 12px;
      line-height: 15px;
    }
  }

  @media ${DeviceSize.Tablet} {
    height: max-content;
    width: 320px;

    p {
      margin-bottom: 8px;
      font-size: 14px;
      line-height: 17px;
    }
  }
`;
