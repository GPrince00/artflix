/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    left: 5px;
  }
  .slick-next {
    right: 5px;
  }
`;

function SamplePrevArrow(props) {
  const { className, style, onClick, categoryColor } = props;
  return (
    <FaAngleLeft
      className={className}
      style={{
        ...style,
        color: categoryColor,
        borderRadius: "50%",
        backgroundColor: "#f8f8f8",
      }}
      onClick={onClick}
    >
    </FaAngleLeft>
  );
}

function SampleNextArrow(props) {
  const { className, onClick, style, categoryColor } = props;
  return (
    <FaAngleRight
      onClick={onClick}
      style={{
        ...style,
        color: categoryColor,
        borderRadius: "50%",
        backgroundColor: "#f8f8f8"
      }}
      className={className}
    >
    </FaAngleRight>
  );
  
}

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

const Slider = ({ children, categoryColor}) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
    }}
    prevArrow={<SamplePrevArrow categoryColor={categoryColor}/>}
    nextArrow={<SampleNextArrow categoryColor={categoryColor}/>}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider; 