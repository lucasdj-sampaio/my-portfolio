import { NavigationBar } from 'components/NavigationBar';
import { Skill } from 'components/Skill';
import { SocialMediaIcon } from 'components/atoms/SocialMediaIconLink';
import { TitleRegion } from 'components/atoms/TitleRegion';
import {
  AboutMeSlide,
  AboutMeText,
  ApresentationContent,
  ApresentationName,
  BackgroundContainer,
  ButtonSlideGroup,
  Container,
  HrDivisor,
  PageSection,
  RightButton,
  ServiceSlide,
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
import { changeServiceLanguage } from 'store/slices/services';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { changeSectionLanguage } from 'store/slices/sections';
import { changePageTextLanguage } from 'store/slices/otherTextTranslate';
import { SwipeCarousel } from 'components/SwipeCarousel';
import { changeAboutLanguage } from 'store/slices/aboutme';
import { SeeMoreComponent } from 'components/atoms/SeeMore';
import DeviceSize, { Size } from 'shared/DeviceSize';
import { getCountByWinWidth } from 'Util/WindowSize';

export const DeveloperPage: React.FC = () => {
  const dispatch = useDispatch();

  const sectionsData = useSelector(
    (state: RootState) => state.sectionSlice.sections
  );
  const otherPageTextData = useSelector(
    (state: RootState) => state.pageTextSlice
  );
  const aboutmeData = useSelector((state: RootState) => state.aboutSlice);

  const [toggleState, setToggled] = useState<boolean>(true);
  const socialMedia = ['Git', 'Linkedin', 'Wpp'];

  const skillsData = useSelector((state: RootState) => state.skillSlice);
  const servicesData = useSelector((state: RootState) => state.serviceSlice);

  const [serviceSlide, setServiceSlideIndex] = useState<number>(0);
  const [countByWindow, setCountWindow] = useState<number>(
    getCountByWinWidth()
  );

  const servicesListRange = () =>
    servicesData.services.slice(serviceSlide, serviceSlide + countByWindow);

  function decriseSlideIndex() {
    setServiceSlideIndex(serviceSlide - 1);
  }

  function encriseSlideIndex() {
    setServiceSlideIndex(serviceSlide + 1);
  }

  function renderAboutComponentCaseHave(): React.ReactNode {
    var finding = aboutmeData.aboutData.find(
      a => a.Id === aboutmeData.currentId
    ).ComplementLink;

    return finding ? <SeeMoreComponent link={finding} /> : <></>;
  }

  useEffect(() => {
    const handleWindowResize = () => {
      setCountWindow(getCountByWinWidth());
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  useEffect(() => {
    dispatch(changeServiceLanguage({ toggleState: toggleState }));
    dispatch(changeSectionLanguage({ toggleState: toggleState }));
    dispatch(changePageTextLanguage({ toggleState: toggleState }));
    dispatch(changeAboutLanguage({ toggleState: toggleState }));
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
          <TitleRegion title={otherPageTextData.skillText} />

          <SkillContent>
            {skillsData.skills.map((skill, i) => (
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

        <PageSection id={`section_${sectionsData[0].toLowerCase()}`}>
          <WorkSection>
            <WorkImageDiv>
              <img alt="Work Image" src={WorkImage} />
            </WorkImageDiv>

            <WorkContent>
              <TitleRegion lineOn={false} title={sectionsData[0]} />
              <p>{otherPageTextData.careerText}</p>
            </WorkContent>
          </WorkSection>
        </PageSection>
      </Container>

      <ServicesDivision id={`section_${sectionsData[1].toLowerCase()}`}>
        <Container>
          <TitleRegion title={sectionsData[1]} />
          <ButtonSlideGroup>
            {serviceSlide !== 0 && (
              <div onClick={decriseSlideIndex}>
                <BiLeftArrowAlt />
              </div>
            )}

            {serviceSlide < servicesData.services.length - 3 && (
              <RightButton onClick={encriseSlideIndex}>
                <BiRightArrowAlt />
              </RightButton>
            )}
          </ButtonSlideGroup>
          <ServiceSlide>
            {servicesListRange().map((data, i) => {
              return (
                <ServicesCard
                  Image={data.Image}
                  Title={data.Title}
                  Description={data.Description}
                  SeeMore={{
                    Private: data.SeeMore.Private,
                    Link: data.SeeMore.Link,
                  }}
                  TopSpacement={i % 2 === 0 ? false : true}
                  key={`serviceCard_${data}_${i}`}
                />
              );
            })}
          </ServiceSlide>
        </Container>
      </ServicesDivision>

      <Container>
        <PageSection id={`section_${sectionsData[2].toLowerCase()}`}>
          <TitleRegion title={sectionsData[2]} />

          <AboutMeSlide>
            <SwipeCarousel data={aboutmeData.aboutData} />
            <AboutMeText>
              <div>
                <h3>
                  {
                    aboutmeData.aboutData.find(
                      a => a.Id === aboutmeData.currentId
                    ).Title
                  }
                </h3>
                <p>
                  {
                    aboutmeData.aboutData.find(
                      a => a.Id === aboutmeData.currentId
                    ).Text
                  }
                </p>
              </div>
              {renderAboutComponentCaseHave()}
            </AboutMeText>
          </AboutMeSlide>
        </PageSection>
      </Container>
    </>
  );
};
