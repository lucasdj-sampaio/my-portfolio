import { SkillBar } from 'components/atoms/SkillBar';
import { ReactElement } from 'react';
import { BsDatabaseFill } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiCsharp, SiSelenium, SiTypescript } from 'react-icons/si';
import { ISkillProperty } from 'shared/types/ISkillProperty';
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
    case 'Sql Server':
      return <BsDatabaseFill />;
    case 'Selenium':
      return <SiSelenium />;
  }
};

export const Skill: React.FC<ISkillProperty> = ({
  Porcent,
  Title,
  SpanText,
}: ISkillProperty) => {
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
