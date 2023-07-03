import { IServiceCardProp } from 'shared/types/IServiceCardProp';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { StyledCard, StyledCardContent, StyledImage } from './styles';

export const ServicesCard: React.FC<IServiceCardProp> = ({
  Image,
  Title,
  Description,
  TopSpacement,
  SeeMore,
}: IServiceCardProp) => {
  return (
    <StyledCard TopSpacement={TopSpacement}>
      <StyledImage src={Image} alt="Service image" />

      <StyledCardContent disable={SeeMore.Private}>
        <div>
          <h3>{Title}</h3>
          <p>{Description}</p>
        </div>

        <a href={SeeMore.Link} target="_blank" rel="noreferrer">
          See more <AiOutlineArrowRight />
        </a>
      </StyledCardContent>
    </StyledCard>
  );
};
