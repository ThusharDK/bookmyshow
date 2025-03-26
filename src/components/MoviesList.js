import React from "react";
import MovieCard from "./MovieCard";
import { Container, Row, Col } from "react-bootstrap";

const movies = [
  { title: "Movie 1", genre: "Romance, Fantasy", releaseDate: "2022-11-11", rating: "4.8", image: "https://4kwallpapers.com/images/walls/thumbs_2t/11464.jpg" },
  { title: "Movie 2", genre: "Romance, Fantasy", releaseDate: "2025-08-26", rating: "4.9", image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*aCTfBStTDq4akVqY8fJNsA.jpeg" }
];

const MoviesList = () => {
  return (
    <Container>
      <h2 className="text-center my-4">Now Showing</h2>
      <Row>
        {movies.map((movie, index) => (
          <Col key={index} md={4}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MoviesList;
