import { IServiceCardProp } from 'shared/types/IServiceCardProp';
import { StyledCard, StyledCardContent, StyledImage } from './styles';
import { SeeMoreComponent } from 'components/atoms/SeeMore';

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
        <SeeMoreComponent link={SeeMore.Link} disabled={SeeMore.Private} />
      </StyledCardContent>
    </StyledCard>
  );
};
