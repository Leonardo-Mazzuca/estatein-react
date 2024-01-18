import styled from "styled-components";
import ContainerItem from "../../GlobalComponents/Container/Container";
import './index.css';
import SwiperComponent from "../../../util/SwiperComponent";
import { useState } from "react";

const PhotoCard = styled.img`
  width: 100%;
  border-radius: 12px;
  height: 500px;
  object-fit:cover;
`;

const photos = [
  {
    id: 1,
    src: "/imgs/PropertiesImages/SerenitySeasideVilla/house-1.png",
  },
  {
    id: 2,
    src: "/imgs/Properties/propertie-1.png",
  },
  {
    id: 3,
    src: "/imgs/PropertiesImages/SerenitySeasideVilla/pool-1.png",
  },
  {
    id: 4,
    src: "/imgs/PropertiesImages/SerenitySeasideVilla/pool-2.png",
  },
  {
    id: 5,
    src: "/imgs/PropertiesImages/SerenitySeasideVilla/interior-1.png",
  },
  {
    id: 6,
    src: "/imgs/PropertiesImages/SerenitySeasideVilla/interior-2.png",
  },
  {
    id: 7,
    src: "/imgs/PropertiesImages/SerenitySeasideVilla/kitchen-1.png",
  },
  {
    id: 7,
    src: "/imgs/PropertiesImages/SerenitySeasideVilla/interior-3.png",
  },
  {
    id: 8,
    src: "/imgs/PropertiesImages/SerenitySeasideVilla/interior-4.png",
  },
];

const PhotosPrevContainer = styled.div`
  border-radius: 12px;
  border: 1px solid var(--Grey-15);
  background: var(--Grey-08);
  display: flex;
  align-items: flex-start;
  gap: 1em;
  width: 97%;
  overflow: hidden;
  padding: 20px;
`;

const MiniPhoto = styled.img`


  width: 163px;
  height:130px;
  object-fit:cover;
  border-radius: 12px;
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  transition: opacity 0.5s ease;
  flex : 1 0 0;

`;

const PhotoContainer = () => {
  const [activeIndex, setActiveIndex] = useState(0);


  return (

    <ContainerItem setPadding={"0"}>
      <div className="swiper-images d-flex align-items-center flex-column w-100">
        <PhotosPrevContainer>
          {photos.map((photo, index) => (
            <MiniPhoto
              key={photo.id}
              src={photo.src}
              alt={`Mini ${index + 1}`}
              active={activeIndex === index}
            />
          ))}
        </PhotosPrevContainer>

        <SwiperComponent
          setSlidesPerView={2}
          arrayItem={photos.map((photo) => (
            <PhotoCard key={photo.id} alt="Images of the house" src={photo.src} />
          ))}
          numberTextDisplay="d-none"
          customScroll={true}
          activeIndexProp={(index) => setActiveIndex(index)} 
        />
      </div>
    </ContainerItem>
  );
};

export default PhotoContainer;
