import styled from "styled-components";

export const StyledSlider = styled.div`
  .slick-prev:before,.slick-next:before {
    color: black;
  }
  .slick-slider {
    cursor: pointer;
  }
  .slick-list {
    margin-top: 15px;
    .slick-slide {
      opacity: 30%;
      width: 100%;
      img {
        width: 100%;
      }
    }
    .slick-current {
      opacity: 100%;
    }
  }
`
