import { IServiceCardProp } from 'shared/types/IServiceCardProp';
import { StyledCard, StyledCardContent, StyledImage } from './styles';
import { SeeMoreComponent } from 'components/atoms/SeeMore';

interface ServiceCardProps {
  service: IServiceCardProp;
  pageLanguage: boolean;
}

export const ServicesCard: React.FC<ServiceCardProps> = ({
  service,
  pageLanguage,
}: ServiceCardProps) => {
  return (
    <StyledCard TopSpacement={service.TopSpacement}>
      <StyledImage src={service.Image} alt="Service image" />

      <StyledCardContent>
        <div>
          <h3>{service.Title}</h3>
          <p>{service.Description}</p>
        </div>
        <SeeMoreComponent
          link={service.SeeMore.Link}
          disabled={service.SeeMore.Private}
          en={pageLanguage}
        />
      </StyledCardContent>
    </StyledCard>
  );
};
