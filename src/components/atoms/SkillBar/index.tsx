import { StyledBar, StyledSpan } from "./styles";

interface PropsBar {
  porcent: number;
}

export const SkillBar: React.FC<PropsBar> = ({porcent}: PropsBar) => {
  return (<StyledBar porcente={porcent}>
    <div>
      <StyledSpan>{`${porcent}%`}</StyledSpan>
    </div>
  </StyledBar>)
}