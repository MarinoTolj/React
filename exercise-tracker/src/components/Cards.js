import React from 'react'
import ChestImage from "../images/chest.jpg"
import { Button, Card, Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import "../ExercisesList.css"
import {useSelector} from "react-redux"
import {useEffect} from "react"

export default function Cards({path}) {

    const navigate=useNavigate()
    const exercisesTypes=useSelector(state=>state.typesOfExercises.typesOfExercises)

    const handlePathChange=(e)=>{
        e.preventDefault()
        navigate(`/exercises/${e.target.value}`)
        path && navigate(`/exercises/${e.target.value}`)
    }

    const cardInfo=exercisesTypes.map((item) =>(
        {
            title:item.type,
            imgSrc:localStorage.getItem(item.type),
            value:item.type
        }
    ))

    const renderCard=(card, index)=>{
        return(
            <Card className="card mb-3" key={index}>
                <Card.Img src={card.imgSrc} alt={`image for ${card.value} workout`}/>
                <Card.Body className="card-body">
                    <Card.Title id="top" >{card.title}</Card.Title>
                    <Button type="submit" value={`${card.value}`} onClick={handlePathChange}>Read more</Button>
                </Card.Body>
            </Card>
        )
    }

    return (
        <div>
            <Container id="cards-list">
                {cardInfo.map(renderCard)}
            </Container>
            
        </div>
    )
}
