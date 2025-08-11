import { AiOutlineArrowRight } from 'react-icons/ai';
import { SeeMoreStyled } from './styles';

interface SeeProps {
  link: string;
  disabled?: boolean;
  en?: boolean;
}

export const SeeMoreComponent: React.FC<SeeProps> = ({
  link,
  disabled = true,
  en = true,
}: SeeProps) => {
  const ableHref = {
    href: link,
  };

  return (
    <SeeMoreStyled
      disable={disabled}
      {...(disabled && ableHref)}
      target="_blank"
      rel="noreferrer"
    >
      {en ? 'See more' : 'Ver mais'} <AiOutlineArrowRight />
    </SeeMoreStyled>
  );
};
