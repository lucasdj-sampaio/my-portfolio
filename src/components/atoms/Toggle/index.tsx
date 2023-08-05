import { CostumInput, CostumLabel, StrongText } from './styles';

interface Props {
  firstOption?: string;
  secondOption?: string;
  toggled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

export const Toggle: React.FC<Props> = ({
  firstOption,
  secondOption,
  toggled,
  onClick,
}: Props) => {
  return (
    <CostumLabel active={toggled}>
      <CostumInput type="checkbox" defaultChecked={toggled} onClick={onClick} />
      <span />
      <StrongText active={toggled}>
        {toggled ? firstOption : secondOption}
      </StrongText>
    </CostumLabel>
  );
};

Toggle.defaultProps = {
  firstOption: 'on',
  secondOption: 'off',
  toggled: true,
  onClick: () => {},
};
