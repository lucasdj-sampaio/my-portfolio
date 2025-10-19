import { StyledBar, StyledSpan } from './styles';

interface PropsBar {
  porcent: number;
  level: string;
}

export const SkillBar: React.FC<PropsBar> = ({ porcent, level }: PropsBar) => {
  return (
    <StyledBar porcente={porcent}>
      <div>
        <StyledSpan>{level}</StyledSpan>
      </div>
    </StyledBar>
  );
};
