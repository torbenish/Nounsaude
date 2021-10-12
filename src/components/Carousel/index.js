import Carousel from "react-grid-carousel";
import bemol from "../../assets/img/bemol.png";
import fisio from "../../assets/img/fisio.png";
import formula from "../../assets/img/formula.png";
import harmonia from "../../assets/img/harmonia.png";
import pacheco from "../../assets/img/pacheco.jpg";
import raia from "../../assets/img/raia.png";
import smartfit from "../../assets/img/smartfit.png";
import sp from "../../assets/img/sp.png";

const Gallery = () => {
  return (
    <Carousel
      cols={4}
      rows={1}
      gap={50}
      loop
      mobileBreakpoint
      responsiveLayout={[
        {
          breakpoint: 1200,
          cols: 3,
        },
        {
          breakpoint: 990,
          cols: 2,
        },
      ]}
    >
      <Carousel.Item>
        <img width="100%" src={bemol} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={fisio} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={formula} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={harmonia} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={pacheco} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={raia} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={smartfit} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={sp} />
      </Carousel.Item>
    </Carousel>
  );
};

export default Gallery;
