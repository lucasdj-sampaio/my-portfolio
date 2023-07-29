import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { IAboutDataType } from 'shared/types/IAboutDataType';
import { SwiperStyles } from './styles';
import { useDispatch } from 'react-redux';
import { changeCurrentSlideId } from 'store/slices/aboutme';
import { useEffect } from 'react';

interface SwipeProp {
  data: IAboutDataType[];
}

export const SwipeCarousel: React.FC<SwipeProp> = ({ data }: SwipeProp) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeCurrentSlideId({ id: 1 }));
  }, []);

  return (
    <SwiperStyles>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        onSlideChange={current =>
          dispatch(changeCurrentSlideId({ id: current.activeIndex + 1 }))
        }
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
