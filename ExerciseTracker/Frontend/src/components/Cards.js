import React from "react";

import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../ExercisesList.css";
import { useSelector } from "react-redux";
import ChestImage from "../images/chest.jpg";

export default function Cards({ path }) {
  const navigate = useNavigate();
  const typesOfExercises = useSelector(
    (state) => state.typesOfExercises.typesOfExercises
  );

  const handlePathChange = (e) => {
    e.preventDefault();

    navigate(`/exercises/${e.target.value}`);
    /* path && navigate(`/exercises/${e.target.value}`) */
  };

  const cardInfo = typesOfExercises.map((item, index) => {
    return {
      title: item.type,
      imgSrc: ChestImage,
      value: item.type,
    };
  });

  const renderCard = (card, index) => {
    return (
      <Card className="card mb-3" key={index}>
        <Card.Img src={card.imgSrc} alt={`image for ${card.value} workout`} />
        <Card.Body className="card-body">
          <Card.Title id="top">{card.title}</Card.Title>
          <Button
            type="submit"
            value={`${card.value}`}
            onClick={handlePathChange}
          >
            Read more
          </Button>
        </Card.Body>
      </Card>
    );
  };

  /* async function fetchExerciseType(){
        try {
            const response = await fetch("http://localhost:5000/exercises")
            return await response.json()
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchExerciseType().then(data => {
            data && setType(data)
        })
    }, []) */

  return (
    <div>
      <Container id="cards-list">
        {cardInfo.map(renderCard)}
        {/* <Button type="submit" onClick={handlePathChange}>Read emore</Button> */}
      </Container>
    </div>
  );
}
