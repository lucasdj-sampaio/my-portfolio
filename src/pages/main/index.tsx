import { NavigationBar } from 'components/NavigationBar';
import { Skill } from 'components/Skill';
import { SocialMediaIcon } from 'components/atoms/SocialMediaIconLink';
import { TitleRegion } from 'components/atoms/TitleRegion';
import { SkillProperty } from 'shared/types/SkillProperty';
import {
  ApresentationContent,
  ApresentationName,
  BackgroundContainer,
  Container,
  HrDivisor,
  PageSection,
  ServicesDivision,
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
import { ServicesCard } from 'components/ServicesCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { useEffect, useState } from 'react';
import { changeLanguage } from 'store/slices/services';

export const DeveloperPage: React.FC = () => {
  const dispatch = useDispatch();
  const servicesData = useSelector((state: RootState) => state.serviceSlice);

  const [toggleState, setToggled] = useState(true);
  const socialMedia = ['Git', 'Linkedin', 'Wpp'];
  const skills: SkillProperty[] = [
    { Title: 'C#', Porcent: 98, SpanText: 'Sr' },
    { Title: 'Selenium', Porcent: 95, SpanText: 'Sr' },
    { Title: 'JavaScript', Porcent: 92, SpanText: 'Sr' },
    { Title: 'React', Porcent: 89, SpanText: 'Sr' },
    { Title: 'TypeScript', Porcent: 88, SpanText: 'Sr' },
    { Title: 'Python', Porcent: 67, SpanText: 'Pl' },
  ];

  useEffect(() => {
    dispatch(changeLanguage({ toggleState: toggleState }));
  }, [toggleState]);

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
        <NavigationBar toggleState={toggleState} setToggled={setToggled} />

        <PageSection>
          <TitleRegion title={'SKILLS'} />

          <SkillContent>
            {skills.map((skill, i) => (
              <Skill
                key={`element_${i}_${skill.Title}`}
                Title={skill.Title as any}
                Porcent={skill.Porcent}
                SpanText={skill.SpanText}
              />
            ))}
          </SkillContent>
        </PageSection>

        <HrDivisor>
          <hr />
        </HrDivisor>

        <PageSection>
          <WorkSection>
            <WorkImageDiv>
              <img alt="Work Image" src={WorkImage} />
            </WorkImageDiv>

            <WorkContent>
              <TitleRegion lineOn={false} title="WORK" />
              <p>
                Eu dou dinheiro pra minha filha. Eu dou dinheiro pra ela viajar,
                então é... é... Já vivi muito sem dinheiro, já vivi muito com
                dinheiro. -Jornalista: Coloca esse dinheiro na poupança que a
                senhora ganha R$10 mil por mês. -Dilma: O que que é R$10 mil?
              </p>
            </WorkContent>
          </WorkSection>
        </PageSection>
      </Container>

      <ServicesDivision>
        <TitleRegion title="SERVICES" />

        {servicesData.services.map((data, i) => {
          return (
            <ServicesCard
              Image={''}
              Title={data.Title}
              Description={data.Description}
              SeeMore={{
                Private: data.SeeMore.Private,
                Link: data.SeeMore.Link,
              }}
              key={`serviceCard_${data}_${i}`}
            />
          );
        })}
      </ServicesDivision>
    </>
  );
};
