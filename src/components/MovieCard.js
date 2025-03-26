import React from "react";
import { Card, Button } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={movie.image} 
      style={{ width: "100%", height: "250px", objectFit: "cover" }} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>Genre: {movie.genre}</Card.Text>
        <Card.Text>Release Date: {movie.releaseDate}</Card.Text>
        <Card.Text>Rating: {movie.rating}</Card.Text>
        <Button variant="primary">Book Now</Button>{""}
        <Button variant="secondary">Watch Trailer</Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
