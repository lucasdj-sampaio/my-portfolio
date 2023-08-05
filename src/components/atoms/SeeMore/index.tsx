import { AiOutlineArrowRight } from 'react-icons/ai';
import { SeeMoreStyled } from './styles';

interface SeeProps {
  link: string;
  disabled?: boolean;
}

export const SeeMoreComponent: React.FC<SeeProps> = ({
  link,
  disabled,
}: SeeProps) => {
  return (
    <SeeMoreStyled
      disable={disabled}
      href={disabled && link}
      target="_blank"
      rel="noreferrer"
    >
      See more <AiOutlineArrowRight />
    </SeeMoreStyled>
  );
};

SeeMoreComponent.defaultProps = {
  disabled: true,
};
