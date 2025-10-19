import { AiOutlineArrowRight } from 'react-icons/ai';
import { RxLockClosed } from 'react-icons/rx';
import { SeeMoreStyled } from './styles';

interface SeeProps {
  link?: string;
  disabled?: boolean;
  en?: boolean;
}

export const SeeMoreComponent: React.FC<SeeProps> = ({
  link,
  disabled = false,
  en = true,
}: SeeProps) => {
  const text = en
    ? disabled
      ? 'Private project'
      : 'See more'
    : disabled
    ? 'Projeto privado'
    : 'Ver mais';

  return (
    <SeeMoreStyled
      as={!disabled && link ? 'a' : 'label'}
      disabled={disabled}
      {...(!disabled && link
        ? { href: link, target: '_blank', rel: 'noreferrer' }
        : {})}
    >
      {text} {disabled ? <RxLockClosed /> : <AiOutlineArrowRight />}
    </SeeMoreStyled>
  );
};
