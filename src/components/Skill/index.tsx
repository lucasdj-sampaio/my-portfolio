import { SkillBar } from 'components/atoms/SkillBar';
import { ReactElement } from 'react';
import { BsDatabaseFill } from 'react-icons/bs';
import { FaAws, FaNodeJs, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { PiBracketsCurly } from 'react-icons/pi';
import { SiCsharp, SiPython, SiTypescript } from 'react-icons/si';
import { ISkillProperty } from 'shared/interfaces/skillProperty';
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
    case 'SQL':
      return <BsDatabaseFill />;
    case 'No SQL':
      return <PiBracketsCurly />;
    case 'Python':
      return <SiPython />;
    case 'AWS':
      return <FaAws />;
    case 'Node':
      return <FaNodeJs />;
  }
};

export const Skill: React.FC<ISkillProperty> = ({
  Porcent,
  Title,
  Level,
}: ISkillProperty) => {
  const icon = getSkillIcon(Title);
  return (
    <GroupSkillDiv>
      {icon}

      <div>
        <h3>{Title}</h3>
        <SkillBar porcent={Porcent} level={Level} />
      </div>
    </GroupSkillDiv>
  );
};
