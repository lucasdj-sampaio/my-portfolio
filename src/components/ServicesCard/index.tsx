import { SeeMoreComponent } from 'components/atoms/SeeMore';
import { useState } from 'react';
import { IServiceCardProp } from 'shared/types/IServiceCardProp';
import { StyledCard, StyledCardContent, StyledDarkCard } from './styles';

interface ServiceCardProps {
  service: IServiceCardProp;
  pageLanguage: boolean;
}

export const ServicesCard: React.FC<ServiceCardProps> = ({
  service,
  pageLanguage,
}: ServiceCardProps) => {
  const [darkCard, setDarkCard] = useState(false);

  return (
    <>
      <StyledCard
        TopSpacement={service.TopSpacement}
        disabled={service.SeeMore.Private}
        onClick={() =>
          !service.SeeMore.Private && window.open(service.SeeMore.Link)
        }
        onMouseEnter={() => setDarkCard(service.SeeMore.Private)}
        onMouseLeave={() => setDarkCard(false)}
      >
        <img src={service.Image} alt="Service image" draggable="false" />

        <StyledCardContent>
          <div>
            <h3>{service.Title}</h3>
            <p>{service.Description}</p>
          </div>

          <SeeMoreComponent
            disabled={service.SeeMore.Private}
            en={pageLanguage}
          />
        </StyledCardContent>

        {darkCard && <StyledDarkCard />}
      </StyledCard>
    </>
  );
};
