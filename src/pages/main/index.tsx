import { NavigationBar } from 'components/NavigationBar';
import { SocialMediaIcon } from 'components/atoms/SocialMediaIconLink';
import {
  ApresentationContent,
  ApresentationName,
  BackgroundContainer,
  BackgroundImageStyled,
  Container,
  SocialMediaStyles,
} from './styles';
//@ts-ignore
import BackgroundImage from '../../images/background_profile.png';

export const DeveloperPage: React.FC = () => {
  const socialMedia = ['Git', 'Linkedin', 'Wpp'];

  return (
    <>
      <BackgroundContainer>
        <BackgroundImageStyled alt="backgroundImage" src={BackgroundImage} />
      </BackgroundContainer>

      <Container>
        <NavigationBar />

        <ApresentationContent>
          <SocialMediaStyles>
            {socialMedia.map((socialMedia, i) => (
              <SocialMediaIcon
                key={`element_${i}_${socialMedia}`}
                type={socialMedia as any}
              />
            ))}
          </SocialMediaStyles>

          <ApresentationName>
            <h1>{`I'AM LUCAS`}</h1>
            <h6>FULLSTACK DEVELOPER</h6>
          </ApresentationName>
        </ApresentationContent>
      </Container>
    </>
  );
};
