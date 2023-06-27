import { NavigationBar } from 'components/NavigationBar';
import { SocialMediaIcon } from 'components/atoms/SocialMediaIconLink';
import {
  ApresentationContent,
  ApresentationName,
  BackgroundContainer,
  Container,
  HrDivisor,
  PageSection,
  SkillContent,
  SocialMediaStyles,
  WorkContent,
  WorkImageDiv,
  WorkSection,
} from './styles';
//@ts-ignore
import BackgroundImage from '../../images/background_profile.png';
//@ts-ignore
import WorkImage from '../../images/work_picture.jpg';
import { TitleRegion } from 'components/atoms/TitleRegion';
import { Skill } from 'components/Skill';

export const DeveloperPage: React.FC = () => {
  const socialMedia = ['Git', 'Linkedin', 'Wpp'];
  const skills = [{ title: 'C#', porcent: 98 }, { title: 'Selenium', porcent: 95 }, { title: 'JavaScript', porcent: 92 },
   { title: 'React', porcent: 89 }, { title: 'TypeScript', porcent: 88 }, { title: 'Python', porcent: 67 }]

  return (
    <>
      <BackgroundContainer fileName={BackgroundImage}>
        <Container>
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
              <h1>{`I'M LUCAS`}</h1>
              <h6>FULLSTACK DEVELOPER</h6>
            </ApresentationName>
          </ApresentationContent>
        </Container>
      </BackgroundContainer>

      <Container>
        <NavigationBar />

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

        <HrDivisor>
          <hr />
        </HrDivisor>

        <PageSection>
          <WorkSection>
            <WorkImageDiv>
              <img alt="Work Image" src={WorkImage}/>
            </WorkImageDiv>

            <WorkContent>
              <TitleRegion lineOn={false} title='WORK'/>
              <p>Eu dou dinheiro pra minha filha. Eu dou dinheiro pra ela viajar, então é... é... Já vivi muito sem dinheiro, já vivi muito com dinheiro. -Jornalista: Coloca esse dinheiro na poupança que a senhora ganha R$10 mil por mês. -Dilma: O que que é R$10 mil?</p>
            </WorkContent>
          </WorkSection>
        </PageSection>
      </Container>
    </>
  );
};
