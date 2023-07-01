import { ServiceCardProp } from 'shared/types/ServiceCardProp';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { StyledCard, StyledCardContent, StyledImage } from './styles';

export const ServicesCard: React.FC<ServiceCardProp> = ({
  Image,
  Title,
  Description,
  TopSpacement,
  SeeMore,
}: ServiceCardProp) => {
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
