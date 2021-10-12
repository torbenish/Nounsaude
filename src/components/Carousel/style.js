import styled from "styled-components";

export const CarouselStyle = styled.footer`
  .horizontal-snap {
    margin: 0 auto;
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
    height: calc(180px + 1rem);
    padding: 1rem;
    width: 480px;
    overflow-y: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
  }

  .horizontal-snap > a {
    scroll-snap-align: center;
  }

  .horizontal-snap img {
    width: 180px;
    max-width: none;
    object-fit: contain;
    border-radius: 1rem;
  }
`;
