import { NavigationBar } from 'components/NavigationBar';
import { SocialMediaIcon } from 'components/atoms/SocialMediaIconLink';
import {
  ApresentationContent,
  ApresentationName,
  BackgroundContainer,
  BackgroundImageStyled,
  Container,
  PageSection,
  SkillContent,
  SocialMediaStyles,
} from './styles';
//@ts-ignore
import BackgroundImage from '../../images/background_profile.png';
import { TitleRegion } from 'components/atoms/TitleRegion';
import { Skill } from 'components/Skill';

export const DeveloperPage: React.FC = () => {
  const socialMedia = ['Git', 'Linkedin', 'Wpp'];
  const skills = [{ title: 'C#', porcent: 98 }, { title: 'Selenium', porcent: 95 }, { title: 'JavaScript', porcent: 92 },
   { title: 'React', porcent: 89 }, { title: 'TypeScript', porcent: 88 }, { title: 'Python', porcent: 67 }]

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

        <PageSection>
          <TitleRegion title={'SKILLS'} lineOn={true}/>

          <SkillContent>
              {skills.map((skill, i) => (
                <Skill 
                  key={`element_${i}_${skill.title}`}
                  Title={skill.title as any} Porcent={skill.porcent}/>
              ))}
          </SkillContent>
        </PageSection>
      </Container>
    </>
  );
};
