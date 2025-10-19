import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IAboutDataType } from 'shared/interfaces/aboutDataType';
import { changeCurrentSlideId } from 'store/slices/aboutme';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperStyles } from './styles';

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
