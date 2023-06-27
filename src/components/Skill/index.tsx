import { SkillBar } from 'components/atoms/SkillBar';
import { ReactElement } from 'react';
import { FaPython, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiCsharp, SiSelenium, SiTypescript } from 'react-icons/si';
import { SkillProperty } from 'shared/types/SkillProperty';
import { GroupSkillDiv } from './styled';

const getSkillIcon = (Title: string): ReactElement => {
  switch (Title) {
    case 'JavaScript':
      return <IoLogoJavascript />;
    case 'React':
      return <FaReact />;
    case 'C#':
      return <SiCsharp />;
    case 'TypeScript':
      return <SiTypescript />;
    case 'Python':
      return <FaPython />;
    case 'Selenium':
      return <SiSelenium />;
  }
};

export const Skill: React.FC<SkillProperty> = ({
  Porcent,
  Title,
  SpanText,
}: SkillProperty) => {
  const icon = getSkillIcon(Title);
  return (
    <GroupSkillDiv>
      {icon}

      <div>
        <h3>{Title}</h3>
        <SkillBar porcent={Porcent} spanText={SpanText} />
      </div>
    </GroupSkillDiv>
  );
};
