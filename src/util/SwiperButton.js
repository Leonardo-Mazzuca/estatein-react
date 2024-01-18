import styled from "styled-components";

import { useSwiper} from 'swiper/react';

const ArrowButton = styled.button`
    border: none;
    color: var(--Absolute-White);
    padding: .8em;
    width: 50px;
    border-radius: 100%;
    border: 1px solid var(--Grey-15);
    background: var(--Grey-10);
    font-weight: 500;
    cursor: pointer;

    @media(max-width: 432px) {
        flex-direction: row;
    }

    &:nth-child(1) {
        color: ${props => props.pointerevents === 'none' ? 'var(--Grey-60)' : 'var(--Absolute-White)'};
        pointer-events: ${props => props.pointerevents || "all"};
    }

    &:hover {
        background: var(--Purple-60);
    }

`;

const SwiperButton = ({type, slideCounter}) => {
    const swiper = useSwiper();
  
    return (
      <ArrowButton 
      pointerevents = {slideCounter > 1 ? 'all' : 'none'} 
      onClick={type === 'right' ? () => swiper.slideNext() : () => swiper.slidePrev()}>
             {type === 'right' ? <i className="bi bi-arrow-right"></i> : <i className="bi bi-arrow-left"></i>}
      </ArrowButton>
    );
}

export default SwiperButton;