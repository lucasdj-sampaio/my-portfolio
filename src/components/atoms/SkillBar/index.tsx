import { StyledBar, StyledSpan } from './styles';

interface PropsBar {
  porcent: number;
  spanText: string;
}

export const SkillBar: React.FC<PropsBar> = ({
  porcent,
  spanText,
}: PropsBar) => {
  return (
    <StyledBar porcente={porcent}>
      <div>
        <StyledSpan>{spanText}</StyledSpan>
      </div>
    </StyledBar>
  );
};
