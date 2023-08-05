import DeviceSize from 'shared/DeviceSize';
import styled from 'styled-components';

export const SwiperStyles = styled.div`
  .swiper {
    width: 390px;
    height: 562px;
  }

  .swiper-slide {
    overflow: hidden;
    position: relative;
    border-radius: 18px;
    border: 1px solid var(--secundColor);

    img {
      object-position: center;
      object-fit: cover;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      position: absolute;
    }
  }

  @media ${DeviceSize.Tablet} {
    .swiper {
      width: 290px;
      height: 462px;
    }
  }
`;
