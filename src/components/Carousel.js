import React from "react";
import { Carousel } from "react-bootstrap";

const MovieCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="https://4kwallpapers.com/images/walls/thumbs_2t/11464.jpg" alt="Movie 1" style={{ maxHeight: '700px', objectFit: 'cover' }} />


        <Carousel.Caption style={{color: "Yellow"}}>
          <h2>SUZUME</h2>
          <p><strong>Exciting description of the movie.</strong></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*aCTfBStTDq4akVqY8fJNsA.jpeg" alt="Movie 2" style={{ maxHeight: '700px', objectFit: 'cover' }} />

        <Carousel.Caption style={{color: "Yellow"}}>
          <h2>YOUR NAME</h2>
          <p> <strong>Another thrilling movie description.</strong></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MovieCarousel;
