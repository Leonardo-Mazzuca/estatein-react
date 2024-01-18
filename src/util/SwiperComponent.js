import { Swiper, SwiperSlide } from 'swiper/react';


import './swiper.css';
import CardTemplate from '../components/GlobalComponents/CardTemplate/Card';
import ScrollTemplate from '../components/GlobalComponents/ScrollTemplate/ScrollTemplate';
import { useCallback, useRef, useState } from 'react';
import SwiperButton from './SwiperButton';

import ContainerItem from '../components/GlobalComponents/Container/Container';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const SwiperComponent = ({
  arrayItem = [],
  components = {},
  setSlidesPerView,
  className,
  numberTextDisplay,
  customScroll,
  activeIndexProp

}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveIndexChange = (swiper) => {
    setActiveIndex(swiper.realIndex);

    if (activeIndexProp) {
      activeIndexProp(swiper.realIndex);
    }
  };


  const breakpoints = {
    300: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 2,
    },
    1300: {
      slidesPerView: setSlidesPerView ? setSlidesPerView : 3,
    },
  };

  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (


    <ContainerItem>
      <Swiper
        ref={sliderRef}
        className={className ? className : 'swiper w-100'}
        slidesPerView={setSlidesPerView ? setSlidesPerView : 3}
        spaceBetween={30}
        onSlideChange={handleActiveIndexChange }
        loop={true}
        breakpoints={breakpoints}
      >
    
         {arrayItem.map((item, index) => (
          item.cardConfig ? (
            <SwiperSlide className={'swiper-slide'} key={index}>
              <CardTemplate
                cardConfig={item.cardConfig}
                topContent={components.top ? components.top : ''}
                bottomContent={components.bottom ? components.bottom : ''}
                middleContent={components.middle ? components.middle : ''}
              />
            </SwiperSlide>
          ) : (

           <SwiperSlide>
              {item}
           </SwiperSlide>
           

          )

          
          
        ))}

      
            

        {customScroll ? (

        <div className='d-flex justify-content-between'>

        <SwiperButton slideCounter={activeIndex + 1} type={'left'} onClick = {handleNext} />
        <SwiperButton slideCounter={activeIndex + 1} type={'right'} onClick = {handlePrev} />
 
  
        </div>

        ) : (<ScrollTemplate
          numberCurrent={
            activeIndex + 1 < 10 ? '0' + (activeIndex + 1) : activeIndex + 1
          }
          numberText={
            arrayItem.length < 10 ? '0' + arrayItem.length : arrayItem.length
          }
          numberTextDisplay={numberTextDisplay}
          nextButton={<SwiperButton slideCounter={activeIndex + 1} type={'right'} onClick = {handleNext} />}

          backButton={<SwiperButton slideCounter={activeIndex + 1} type={'left'} onClick = {handlePrev} />}

        /> )}
    
      </Swiper>

    </ContainerItem>
  );
};

export default SwiperComponent;
    