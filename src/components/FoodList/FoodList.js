import { useState } from "react";
import foodsData from '../../foods.json';
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';
import FoodBox from "../FoodBox/FoodBox";
import AddFood from '../AddFood/AddFood';
import SearchForm from '../SearchForm/SearchForm'

function FoodList() {
    const [foods, setFoods] = useState(foodsData)
    const [search, setSearch] = useState("")
    const [showForm, setShowForm] = useState(false)

    const deleteFood = (selectedFood) => {
        setFoods(foods.filter((food) => {
            return selectedFood !== food.name
         }))
    }
    
    const foodMap = foods
        .filter((food) => (food.name).toLowerCase().includes(search.toLowerCase()))
        .map((food, index) => {
            return <Col key={ index }><FoodBox food={ food } deleteFood={ deleteFood } /></Col>
    })
    
    return (    
        <Container>
            <Row className='my-3'>
                <Col>
                  <SearchForm
                    search={ search }
                    setSearch={ setSearch }
                />  
                </Col>
                <Col>
                    { showForm && <AddFood foods={ foods } setFoods={ setFoods } /> }
                    <Button variant="outline-info" onClick={() => setShowForm(!showForm)}>Show/Hide Form</Button>
                </Col>
            </Row>
            <Row>
                { foodMap }
                { foodMap.length === 0 && <Alert variant="warning" dismissible>Ops... There's no content to show.</Alert> }
            </Row>
        </Container>
    )
   
}

export default FoodList