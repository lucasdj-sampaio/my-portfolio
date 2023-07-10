import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { IAboutDataType } from 'shared/types/IAboutDataType';
import { SwiperStyles } from './styles';

interface SwipeProp {
  data: IAboutDataType[];
}

export const SwipeCarousel: React.FC<SwipeProp> = ({ data }: SwipeProp) => {
  return (
    <SwiperStyles>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {data.map(currentData => {
          return (
            <SwiperSlide key={`carouselid_${currentData.Id}`}>
              <img src={currentData.Image} alt="Reference Image" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SwiperStyles>
  );
};
