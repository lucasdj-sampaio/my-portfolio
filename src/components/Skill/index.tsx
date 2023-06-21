import { ReactElement } from "react";
import { SkillProperty } from "shared/types/SkillProperty";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaPython } from "react-icons/fa";
import { SiCsharp, SiTypescript, SiSelenium} from "react-icons/si";
import { SkillBar } from "components/atoms/SkillBar";
import { GroupSkillDiv } from "./styled";

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
      return < SiSelenium />;
  }
};

export const Skill: React.FC<SkillProperty> = ({Porcent, Title}: SkillProperty) => {
  const icon = getSkillIcon(Title);
  return (<GroupSkillDiv>
    {icon}

    <div>
      <h3>{Title}</h3>
      <SkillBar porcent={Porcent}/>
    </div>
  </GroupSkillDiv>
  );
}